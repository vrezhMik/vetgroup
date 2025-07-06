"use client";

import { useEffect, useState } from "react";
import {
  useCart,
  useCard,
  useCardView,
  HistoryCardState,
  useUserPageMenu,
} from "@/store/store";
import TrashSVG from "../../Elements/Icons/TrashSVG";
import style from "./cardListView.module.scss";
import { CardView, ProductType } from "@/utils/Types";
import { getCookie } from "@/utils/cookies";
import { add_order } from "@/utils/query";
import { Item } from "@/classes/ItemClass";
import Cookies from "js-cookie";
import { add_strapi_order } from "@/utils/query";
import { updateProductStock } from "@/utils/query";
import ArrowSVG from "@/components/Elements/Icons/ArrowSVG";
import ImageComponent from "@/components/Elements/Image/image.component";
export default function CardListView() {
  const { cartItems, removeItem, cartTotal, addItem, cleanCart, updateQty } =
    useCart();

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

  // const save_request = async () => {
  //   if (isLoading) return;
  //   setIsLoading(true);

  //   try {
  //     const id = getCookie("user");
  //     const user = getCookie("code");
  //     const updateResults = await Promise.all(
  //       cartItems.map((item) => updateProductStock(item.code, item.qty))
  //     );

  //     const allUpdated = updateResults.every((res) => res === true);
  //     let strapiRes = { status: false };
  //     let secondRes: { Status?: string } = {};
  //     if (id && allUpdated) {
  //       strapiRes = await add_strapi_order(cartItems, cartTotal, id);
  //     }

  //     if (user) {
  //       secondRes = await add_order(cartItems, user);
  //     }

  //     setMessageCard(true);
  //     if (strapiRes.status && secondRes.Status == "Success") {
  //       cleanCart();
  //       setMessage("Պատվերը ուղարկված է");
  //     } else {
  //       setMessage("Տեխնիկական խնդիր");
  //     }
  //   } catch (error) {
  //     console.error("❌ Order submission failed:", error);
  //     setMessage("Տեխնիկական խնդիր");
  //     setMessageCard(true);
  //   } finally {
  //     setTimeout(() => {
  //       setMessageCard(false);
  //       setCardState(false);
  //       setIsLoading(false);
  //     }, 1500);
  //   }
  // };
  const save_request = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const user = getCookie("code");
      const id = getCookie("user");

      setMessageCard(true);
      setMessage("Պատվերը ուղարկված է");
      cleanCart();

      void (async () => {
        try {
          if (user) {
            await add_order(cartItems, user);
          }

          if (id) {
            const updateResults = await Promise.all(
              cartItems.map((item) => updateProductStock(item.code, item.qty))
            );

            const allUpdated = updateResults.every((res) => res === true);
            if (allUpdated) {
              await add_strapi_order(cartItems, cartTotal, id);
            }
          }
        } catch (err) {
          console.warn("⚠️ Background sync failed:", err);
        }
      })();
    } catch (error) {
      console.error("❌ Unexpected error:", error);
      setMessageCard(true);
      setMessage("Տեխնիկական խնդիր");
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

    const fixed = value.toFixed(2);
    const [intPart, decimal] = fixed.split(".");

    let formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

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
          {cardViewState !== CardView.History && (
            <div className={style.cardListRowTitle}>
              <span>Նկար</span>
            </div>
          )}
          <div className={style.cardListRowTitle}>
            <span>Անվանում</span>
          </div>
          <div className={style.cardListRowTitle}>
            <span>Քանակ</span>
          </div>
          {cardViewState !== CardView.History && (
            <div className={style.cardListRowTitle}>
              <span>Գին</span>
            </div>
          )}
          <div className={style.cardListRowTitle}>
            <span>Ընդհանուր</span>
          </div>
        </div>

        <div className={style.cardListData}>
          {visibleItems?.map((item, key) => {
            const imageUrl = `https://vetgroup.am${item.image?.url}` || "";
            return (
              <div className={`row flex ${style.cardListDataRow}`} key={key}>
                {cardViewState !== CardView.History && (
                  <div className={style.cardListDataRowElement}>
                    <div className={style.cardListDataRowElementImage}>
                      <ImageComponent url={imageUrl} alt={item.description} />
                    </div>
                  </div>
                )}
                <div className={style.cardListDataRowElement}>
                  <span>{item.description}</span>
                </div>

                <div className={style.cardListDataRowElement}>
                  {cardViewState !== CardView.History ? (
                    <div className={style.qtyControls}>
                      <button
                        onClick={() => {
                          updateQty(item.code, Math.max(1, item.qty - 1));
                        }}
                        disabled={cardViewState === CardView.History}
                      >
                        <ArrowSVG />
                      </button>
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.code, Number(e.target.value))
                        }
                        disabled={cardViewState === CardView.History}
                        min={1}
                      />
                      <button
                        onClick={() => {
                          updateQty(item.code, item.qty + 1);
                        }}
                        disabled={cardViewState === CardView.History}
                      >
                        <ArrowSVG />
                      </button>
                    </div>
                  ) : (
                    <span>{item.qty}</span>
                  )}
                </div>

                {cardViewState !== CardView.History && (
                  <div className={style.cardListDataRowElement}>
                    <span>{formatPrice(item.price)} Դրամ</span>
                  </div>
                )}
                <div className={`${style.cardListDataRowElement} flex`}>
                  <span>{formatPrice(item.price * item.qty)} Դրամ</span>
                  {cardViewState !== CardView.History && (
                    <button onClick={() => removeItem((item as Item).getId())}>
                      <TrashSVG />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {cardViewState !== CardView.History && (
        <div className={`${style.cardListCheckout}`}>
          <h1>
            Ընդհանուր: <span>{formatPrice(cartTotal)} Դրամ</span>
          </h1>
          {isClient && jwt ? (
            <button
              onClick={save_request}
              className={
                isLoading || visibleItems.length <= 0 ? style.disabled : ""
              }
              disabled={isLoading || visibleItems.length <= 0}
            >
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
