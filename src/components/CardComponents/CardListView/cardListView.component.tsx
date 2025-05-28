"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/store/store";
import { useCard } from "@/store/store";
import { useCardView } from "@/store/store";
import { HistoryCardState } from "@/store/store";
import TrashSVG from "../../Elements/Icons/TrashSVG";
import style from "./cardListView.module.scss";
import { CardView, ProductType } from "@/utils/Types";
import { getCookie } from "@/utils/cookies";
import { add_order } from "@/utils/query";
import { Item } from "@/classes/ItemClass";
import Cookies from "js-cookie";

export default function CardListView() {
  const { cartItems, removeItem, cartTotal, addItem, cleanCart } = useCart();
  const { setCardState } = useCard();
  const { cardViewState } = useCardView();
  const { currentHistoryItem } = HistoryCardState();

  const [jwt, setJwt] = useState<string | undefined>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setJwt(Cookies.get("jwt"));

    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        const restoredCart = parsedCart.map(
          (item: ProductType) => new Item(item, item.qty)
        );
        restoredCart.forEach((item: Item) => addItem(item));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, [addItem]);

  const toLoginPage = () => {
    window.location.href = "/login";
  };

  const save_request = async () => {
    const user = getCookie("code");
    await add_order(cartItems, user || "", cartTotal);
    cleanCart();
    setCardState(false);
  };

  const formatPrice = (value: number): string => {
    if (isNaN(value)) return "0,00";
    return value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const visibleItems =
    cardViewState === CardView.History ? currentHistoryItem : cartItems;

  return (
    <>
      <div className={style.cardList}>
        <div className={`${style.cardListRow} flex row`}>
          <div className={style.cardListRowTitle}>
            <span>Name</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Qty</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Price</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Total</span>
          </div>
        </div>

        <div className={style.cardListData}>
          {visibleItems?.map((item, key) => (
            <div className={`row flex ${style.cardListDataRow}`} key={key}>
              <div className={style.cardListDataRowElement}>
                <span>{item.name}</span>
              </div>
              <div className={style.cardListDataRowElement}>{item.qty}</div>
              <div className={style.cardListDataRowElement}>
                <span>{formatPrice(item.price)} AMD</span>
              </div>
              <div className={`${style.cardListDataRowElement} flex`}>
                <span>{formatPrice(item.price * item.qty)} AMD</span>
                {cardViewState !== CardView.History && (
                  <button onClick={() => removeItem((item as Item).getId())}>
                    <TrashSVG />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {cardViewState !== CardView.History && (
        <div className={`${style.cardListCheckout} flex`}>
          <h1>
            Total: <span>{formatPrice(cartTotal)} AMD</span>
          </h1>
          {isClient && jwt ? (
            <button onClick={save_request}>Request</button>
          ) : (
            isClient && <button onClick={toLoginPage}>Login</button>
          )}
        </div>
      )}
    </>
  );
}
