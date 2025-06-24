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
import { add_strapi_order } from "@/utils/query";
export default function CardListView() {
  const { cartItems, removeItem, cartTotal, addItem, cleanCart } = useCart();
  const { setCardState } = useCard();
  const { cardViewState } = useCardView();
  const { currentHistoryItem } = HistoryCardState();
  const [messageCard, setMessageCard] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    if (isLoading) return;
    setIsLoading(true);

    try {
      const id = getCookie("user");
      const user = getCookie("code");

      let strapiRes = { status: false };
      let secondRes: { Status?: string } = {};

      if (id) {
        strapiRes = await add_strapi_order(cartItems, cartTotal, id);
      }

      if (user) {
        secondRes = await add_order(cartItems, user);
      }

      setMessageCard(true);
      if (strapiRes.status && secondRes.Status == "Success") {
        cleanCart();
        setMessage("Պատվերը ուղարկված է");
      } else {
        setMessage("Տեխնիկական խնդիր");
      }
    } catch (error) {
      console.error("❌ Order submission failed:", error);
      setMessage("Տեխնիկական խնդիր");
      setMessageCard(true);
    } finally {
      setTimeout(() => {
        setMessageCard(false);
        setCardState(false);
        setIsLoading(false);
      }, 1500);
    }
  };

  const formatPrice = (value: number): string => {
    if (isNaN(value)) return "0";

    const fixed = value.toFixed(2); // ensures "xxxx.xx"
    const [intPart, decimal] = fixed.split(".");

    let formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    // Only add decimal part if it's not "00"
    if (decimal !== "00") {
      formatted += "," + decimal;
    }

    return formatted;
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
                <span>
                  {item.description}({item.code})
                </span>
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
            <button onClick={save_request} className={(isLoading || visibleItems.length <= 0)?style.disabled:""} disabled={isLoading || visibleItems.length <= 0}>
              {isLoading ? "Ուղարկում է..." : "Ուղարկել Պատվերը"}
            </button>
          ) : (
            isClient && <button onClick={toLoginPage}>Login</button>
          )}
        </div>
      )}
      {messageCard && <div className={style.message}>{message}</div>}
    </>
  );
}
