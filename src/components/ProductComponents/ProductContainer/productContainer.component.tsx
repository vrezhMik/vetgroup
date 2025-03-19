"use client";
import style from "./productContainer.module.scss";

import { useEffect } from "react";
import { useCart, useCard, useCardView } from "@/store/store";

import Product from "../Product/product.component";
import SearchBar from "@/components/Elements/SearchBar/searchBar.component";
import CartSVG from "@/components/Elements/Icons/CartSVG";
import { CardView } from "@/utils/Types";
import { productsStore } from "@/store/store";

export default function ProductContainer() {
  const { getItemCount, cartTotal } = useCart();
  const { cardState, setCardState } = useCard();
  const { setCardView } = useCardView();
  const { products, searchQuery, loading } = productsStore();

  useEffect(
    () => () => {
      const body = document.getElementsByTagName("body")[0];
      const overflowStatus = cardState ? "scroll" : "hidden";
      body.style.overflowY = overflowStatus;
    },
    [cardState]
  );

  const showCart = () => {
    setCardState(true);
    setCardView(CardView.List);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const placeholderData = {
    code: "0000",
    name: "L. Ipsume",
    description: "Lorem Ipsum",
    price: 1000,
    image: "/",
    __typename: "Product",
    qty: 1,
    totalPrice: 1,
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
        {loading || products.length === 0
          ? Array.from({ length: 10 }).map((_, index) => (
              <Product
                key={`placeholder-${index}`}
                data={placeholderData}
                placeholder={true}
              />
            ))
          : filteredProducts.map((element, key) => (
              <Product
                key={element.code || key}
                data={element}
                placeholder={false}
              />
            ))}
      </div>
    </div>
  );
}
