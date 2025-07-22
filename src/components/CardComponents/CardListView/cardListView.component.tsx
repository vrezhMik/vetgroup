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
import { updateProductStock } from "@/utils/query";
import ArrowSVG from "@/components/Elements/Icons/ArrowSVG";
import ImageComponent from "@/components/Elements/Image/image.component";
export default function CardListView() {
  const {
    cartItems,
    removeItem,
    cartTotal,
    addItem,
    updateQty,
    updateCart,
    cleanCart,
  } = useCart();
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
      const user = getCookie("code");
      const id = getCookie("user");
      if (!user) throw new Error("User not found");

      const result1C = await add_order(cartItems, user);

      const itemsToRemove =
        (result1C.ItemsToProvide as { ItemCode: string; Quantity: number }[]) ||
        [];

      const notFull = itemsToRemove.length !== 0;

      const updatedCartItems = cartItems
        .map((item) => {
          const missing = itemsToRemove.find(
            (p) => p.ItemCode === item.backendId
          );
          const newQty = missing ? item.qty - missing.Quantity : item.qty;
          if (newQty <= 0) {
            updateProductStock(item.code, newQty);
            return null;
          }
          return new Item(item, newQty);
        })
        .filter((item): item is Item => item !== null);

      updateCart(updatedCartItems);

      const freshTotal = useCart.getState().cartTotal;
      if (updatedCartItems.length === 0) {
        setMessageCard(true);
      }

      if (id) {
        const updateResults = await Promise.all(
          updatedCartItems.map((item) =>
            updateProductStock(item.code, item.qty)
          )
        );
        const allUpdated = updateResults.every((res) => res === true);
        if (allUpdated) {
          if (freshTotal > 0) {
            await add_strapi_order(updatedCartItems, freshTotal, id);
          }
          setMessageCard(true);
          cleanCart();

          if (notFull) {
            setMessage("Ցավում ենք, որոշ ապրանքներն այս պահին հասանելի չեն։");
          } else {
            setMessage("Պատվերը հաջողությամբ ուղարկվեց։");
          }
        } else {
          setMessageCard(true);
          setMessage("Չհաջողվեց թարմացնել պահեստի տվյալները։");
        }
      }
    } catch {
      setMessageCard(true);
      setMessage("Տեխնիկական խնդիր։");
    } finally {
      setTimeout(() => {
        setMessageCard(false);
        setCardState(false);
        setIsLoading(false);
      }, 1500);
      setTimeout(() => {
        window.location.reload();
      }, 500);
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
  const isHistory = cardViewState === CardView.History;
  return (
    <>
      <div className={style.cardList}>
        <div className={`${style.cardListRow} flex row`}>
          {!isHistory && (
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
          {!isHistory && (
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
                {!isHistory && (
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
                  {!isHistory ? (
                    <div className={style.qtyControls}>
                      <button
                        onClick={() => {
                          updateQty(item.code, Math.max(1, item.qty - 1));
                        }}
                        disabled={isHistory}
                      >
                        <ArrowSVG />
                      </button>
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          updateQty(item.code, Number(e.target.value))
                        }
                        disabled={isHistory}
                        min={1}
                      />
                      <button
                        onClick={() => {
                          updateQty(item.code, item.qty + 1);
                        }}
                        disabled={isHistory}
                      >
                        <ArrowSVG />
                      </button>
                    </div>
                  ) : (
                    <span>{item.qty}</span>
                  )}
                </div>

                {!isHistory && (
                  <div className={style.cardListDataRowElement}>
                    <span>{formatPrice(item.price)} Դրամ</span>
                  </div>
                )}
                <div className={`${style.cardListDataRowElement} flex`}>
                  <span>{formatPrice(item.price * item.qty)} Դրամ</span>
                  {!isHistory && (
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
      {!isHistory && (
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
