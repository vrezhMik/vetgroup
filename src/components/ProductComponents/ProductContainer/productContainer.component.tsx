"use client";
import style from "./productContainer.module.scss";

import { useCart, useCard, useCardView, productsStore } from "@/store/store";
import Product from "../Product/product.component";
import SearchBar from "@/components/Elements/SearchBar/searchBar.component";
import CartSVG from "@/components/Elements/Icons/CartSVG";
import { CardView, ProductType } from "@/utils/Types";
import { useEffect, useState } from "react";
import { get_search_fragments } from "@/utils/query";

export default function ProductContainer() {
  const { getItemCount, cartTotal } = useCart();
  const { setCardState } = useCard();
  const { setCardView } = useCardView();
  const {
    products,
    categorizedProducts,
    searchQuery,
    loading,
    selectedCategories,
  } = productsStore();

  const [initialLoad, setInitialLoad] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState<ProductType[]>([]);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setInitialLoad(false);
      setVisibleProducts(products);
      setHasInitialized(true);
    }
  }, [products]);

  const showCart = () => {
    setCardState(true);
    setCardView(CardView.List);
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflowY = initialLoad && loading ? "hidden" : "scroll";
  }, [loading, initialLoad]);
  useEffect(() => {
    if (!hasInitialized || loading) return;

    const query = searchQuery.trim();
    const words = query.split(/\s+/).filter(Boolean);

    // Unicode-aware normalization for Armenian (and other scripts)
    const normalize = (s: string) => s.toLocaleLowerCase("hy-AM");

    const sourceProducts =
      selectedCategories.length > 0
        ? categorizedProducts
            .filter((catObj) => selectedCategories.includes(catObj.cat))
            .flatMap((catObj) => catObj.cat_prods)
        : products;

    // 1. Real-time local match with Armenian-safe normalization
    if (query.length > 0) {
      const localMatches = sourceProducts.filter((product) => {
        const name = normalize(product.name);
        const description = normalize(product.description);

        return words.every((word) => {
          const w = normalize(word);
          return name.includes(w) || description.includes(w);
        });
      });

      setVisibleProducts(localMatches);
    }

    // 2. Debounced server-side search fallback
    const delayDebounce = setTimeout(async () => {
      if (query.length >= 1) {
        const data = await get_search_fragments(query);
        if (data?.products) {
          setVisibleProducts(data.products);
        }
      }

      if (query.length === 0 && hasInitialized) {
        setVisibleProducts(sourceProducts);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [
    searchQuery,
    products,
    categorizedProducts,
    selectedCategories,
    hasInitialized,
    loading,
  ]);

  const placeholderData: ProductType = {
    code: "0000",
    stock: 1000,
    name: "L. Ipsume",
    description: "Lorem Ipsum",
    pack_price: 1500,
    price: 1000,
    image: { url: "" },
    backendId: null,
    __typename: "Product",
    qty: 1,
    totalPrice: 1,
    category: { title: "" },
  };

  return (
    <div className={style.mainContainer}>
      <div className={`${style.mainContainerSearchBar} flex`}>
        <SearchBar />
        <div className={style.mainContainerSearchBarCart}>
          <button
            className={style.mainContainerSearchBarCartButton}
            onClick={showCart}
          >
            {getItemCount() > 0 && (
              <div className={style.mainContainerSearchBarCartButtonItems}>
                {cartTotal}
              </div>
            )}
            <CartSVG />
          </button>
        </div>
      </div>

      <div className={`${style.mainContainerProductContainer} flex`}>
        {visibleProducts.map((element, key) => (
          <Product
            key={element.code + key}
            data={element}
            placeholder={false}
          />
        ))}

        {initialLoad &&
          loading &&
          Array.from({ length: 10 }).map((_, index) => (
            <Product
              key={`placeholder-${index}`}
              data={placeholderData}
              placeholder={true}
            />
          ))}
      </div>
    </div>
  );
}
