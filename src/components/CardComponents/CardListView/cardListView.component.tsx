"use client";

import { useEffect, useState } from "react";
import { useCart, useCard, useCardView, HistoryCardState } from "@/store/store";
import TrashSVG from "../../Elements/Icons/TrashSVG";
import style from "./cardListView.module.scss";
import { CardView, ProductType } from "@/utils/Types";
import { getCookie } from "@/utils/cookies";
import { add_order } from "@/utils/query";
import { Item } from "@/classes/ItemClass";
import Cookies from "js-cookie";
import { useCurrentUser } from "@/store/store";
export default function CardListView() {
  const { cartItems, removeItem, cartTotal, addItem, cleanCart } = useCart();
  const { setCardState } = useCard();
  const { cardViewState } = useCardView();
  const { currentHistoryItem } = HistoryCardState();
  const [messageCard, setMessageCard] = useState(false);
  const [message, setMessage] = useState("");

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
    // const res = await add_order(cartItems, user || "");
    // setMessageCard(true);
    // if (res.Status === "Success") {
    //   cleanCart();
    //   setMessage("Պատվերը ուղարկված է");
    // } else {
    //   setMessage("Տեխնիկական խնդիր");
    // }
    //   setTimeout(() => {
    //     setMessageCard(false);
    //     setCardState(false);
    //   }, 1500);
    // };
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
            <span>Անվանում</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Քանակ</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Գին</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Ընդհանուր</span>
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
                <span>{formatPrice(item.price)} Դրամ</span>
              </div>
              <div className={`${style.cardListDataRowElement} flex`}>
                <span>{formatPrice(item.price * item.qty)} Դրամ</span>
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
            Ընդհանուր: <span>{formatPrice(cartTotal)} Դրամ</span>
          </h1>
          {isClient && jwt ? (
            <button onClick={save_request}>Ուղարկել Պատվերը</button>
          ) : (
            isClient && <button onClick={toLoginPage}>Login</button>
          )}
        </div>
      )}
      {messageCard && <div className={style.message}>{message}</div>}
    </>
  );
}
