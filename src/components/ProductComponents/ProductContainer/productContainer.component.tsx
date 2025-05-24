"use client";
import style from "./productContainer.module.scss";

import { useCart, useCard, useCardView, productsStore } from "@/store/store";
import Product from "../Product/product.component";
import SearchBar from "@/components/Elements/SearchBar/searchBar.component";
import CartSVG from "@/components/Elements/Icons/CartSVG";
import { CardView } from "@/utils/Types";
import { useEffect, useState } from "react";
import { get_search_fragments } from "@/utils/query";
import { ProductType } from "@/utils/Types";

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
    const body = document.getElementsByTagName("body")[0];
    body.style.overflowY = initialLoad && loading ? "hidden" : "scroll";
  }, [loading, initialLoad]);

  useEffect(() => {
    if (!hasInitialized || loading) return;

    const query = searchQuery.trim().toLowerCase();
    const lowerQueryWords = query.split(/\s+/).filter(Boolean);

    if (query.length > 1) return;

    let sourceProducts: ProductType[] = [];

    if (selectedCategories.length > 0) {
      sourceProducts = categorizedProducts
        .filter((catObj) => selectedCategories.includes(catObj.cat))
        .flatMap((catObj) => catObj.cat_prods);
    } else {
      sourceProducts = products;
    }

    const matches = sourceProducts.filter((product) => {
      const name = product.name.toLowerCase();
      const description = product.description.toLowerCase();

      return lowerQueryWords.every(
        (word) => name.includes(word) || description.includes(word)
      );
    });

    setVisibleProducts(matches);
  }, [
    products,
    categorizedProducts,
    searchQuery,
    selectedCategories,
    hasInitialized,
    loading,
  ]);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      const query = searchQuery.trim();

      if (query.length > 1) {
        const data = await get_search_fragments(query);
        if (data?.products) {
          setVisibleProducts(data.products);
        }
      }

      if (query.length === 0 && hasInitialized) {
        setVisibleProducts(
          selectedCategories.length === 0
            ? products
            : categorizedProducts
                .filter((catObj) => selectedCategories.includes(catObj.cat))
                .flatMap((catObj) => catObj.cat_prods)
        );
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, hasInitialized]);

  const placeholderData: ProductType = {
    code: "0000",
    name: "L. Ipsume",
    description: "Lorem Ipsum",
    price: 1000,
    image: { url: "" },
    backendId: null,
    __typename: "Product",
    qty: 1,
    totalPrice: 1,
    category: {
      title: "",
    },
  };

  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.mainContainerSearchBar} flex`}>
        <SearchBar />
        <div className={`${style.mainContainerSearchBarCart}`}>
          <button
            className={`${style.mainContainerSearchBarCartButton}`}
            onClick={showCart}
          >
            {getItemCount() > 0 && (
              <div className={`${style.mainContainerSearchBarCartButtonItems}`}>
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
