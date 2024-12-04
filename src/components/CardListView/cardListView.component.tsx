import { useCart } from "@/store/store";
import TrashSVG from "../Icons/TrashSVG";
import style from "./cardListView.module.scss";
export default function CardListView() {
  const { cartItems, removeItem, cartTotal } = useCart();

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
              <span>{item.getTitle()}</span>
            </div>

            <div className={`${style.cardListDataRowElement}`}>
              <span>{(item.getWeight() / 1000) * item.getQty()} kg</span>
            </div>
            {item.hasSale() ? (
              <div className={`${style.cardListDataRowElement}`}>
                <span>{item.getSalePrice()} AMD</span>
              </div>
            ) : (
              <div className={`${style.cardListDataRowElement}`}>
                <span>{item.getPrice()} AMD</span>
              </div>
            )}
            <div className={`${style.cardListDataRowElement} flex`}>
              <span>{item.getTotalPrice()} AMD</span>
              <button onClick={() => removeItem(item.getId())}>
                <TrashSVG />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={`${style.cardListCheckout} flex`}>
        <h1>
          Total: <span>{cartTotal}amd</span>
        </h1>
        <button>Request</button>
      </div>
    </div>
  );
}
