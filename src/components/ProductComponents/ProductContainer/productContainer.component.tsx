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
  const { getItemCount } = useCart();
  const { cardState, setCardState } = useCard();
  const { cardViewState, setCardView } = useCardView();
  const { products, searchQuery } = productsStore();

  useEffect(
    () => () => {
      const body = document.getElementsByTagName("body")[0];
      const overflowStatus = cardState ? "scroll" : "hidden";
      body.style.overflow = overflowStatus;
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
              <div
                className={`${style.mainContainerSearchBarCartButtonItems}`}
              ></div>
            )}
            <CartSVG />
          </button>
        </div>
      </div>
      <div className={`${style.mainContainerProductContainer} flex`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((element, key) => (
            <Product key={key} data={element} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
