import { useEffect } from "react";
import { useCart } from "@/store/store";
import { useCard } from "@/store/store";
import TrashSVG from "../../Elements/Icons/TrashSVG";
import style from "./cardListView.module.scss";
import { CardView } from "@/utils/Types";
import { useCardView } from "@/store/store";
import { getCookie } from "@/utils/cookies";
import { add_order } from "@/utils/query";
import { Item } from "@/classes/ItemClass";

export default function CardListView() {
  const { cartItems, removeItem, cartTotal, addItem, cleanCart } = useCart();
  const { setCardState } = useCard();
  const { cardViewState } = useCardView();

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);

        const restoredCart = parsedCart.map((item: any) => new Item(item));

        restoredCart.forEach((item: Item) => addItem(item));
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, [addItem]);

  const save_request = async () => {
    const user = getCookie("user");
    add_order(cartItems, user ? parseInt(user) : -1, cartTotal);
    cleanCart();
    setCardState(false);
  };

  return (
    <div className={`${style.cardList}`}>
      <div className={`${style.cardListRow} flex row`}>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Name</span>
        </div>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Qty</span>
        </div>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Price</span>
        </div>
        <div className={` ${style.cardListRowTitle}`}>
          <span>Total</span>
        </div>
      </div>
      <div className={`${style.cardListData}`}>
        {cartItems?.map((item, key) => (
          <div className={`row flex ${style.cardListDataRow}`} key={key}>
            <div className={`${style.cardListDataRowElement}`}>
              <span>{item.name}</span>
            </div>
            <div className={`${style.cardListDataRowElement}`}>{item.qty}</div>
            <div className={`${style.cardListDataRowElement}`}>
              <span>{item.price} AMD</span>
            </div>
            <div className={`${style.cardListDataRowElement} flex`}>
              <span>{item.price * item.qty} AMD</span>
              {cardViewState !== CardView.History && (
                <button onClick={() => removeItem(item.getId())}>
                  <TrashSVG />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {cardViewState !== CardView.History && (
        <div className={`${style.cardListCheckout} flex`}>
          <h1>
            Total: <span>{cartTotal} AMD</span>
          </h1>
          <button onClick={save_request}>Request</button>
        </div>
      )}
    </div>
  );
}
