"use client";
import style from "./card.module.scss";
import { useCard, useCardView, useCart } from "@/store/store";
import ImageComponent from "../Image/image.component";
import { CardView } from "@/utils/Types";
import TrashSVG from "../Icons/TrashSVG";

export default function Card() {
  const { cardState, setCardState, currentItem, setCurrentItem } = useCard();
  const { cardViewState, setCardView } = useCardView();
  const { cartItems } = useCart();
  const CARD_ITEM = currentItem;
  return (
    <div
      className={style.cardContainer}
      style={{ display: cardState ? "block" : "none" }}
    >
      <div className={`${style.card}`}>
        <div className={`row ${style.cardButton}`}>
          <button
            onClick={() => {
              setCardState(false);
              setCurrentItem(currentItem);
            }}
          >
            X
          </button>
        </div>
        {cardViewState === CardView.Product ? (
          <div className={`row flex ${style.cardContent}`}>
            <div className={`${style.cardContentImage}`}>
              <ImageComponent alt={"image"} url={CARD_ITEM.getImage() || "/"} />
            </div>
            <div className={`${style.cardContentInfo}`}>
              <div className={`${style.cardContentInfoTitle}`}>
                {CARD_ITEM.getTitle()}
                <span> {CARD_ITEM.getWeight() / 1000}kg</span>
              </div>
              <div className={`${style.cardContentInfoPrice}`}>
                <p>{CARD_ITEM.getPrice()} AMD</p>
              </div>
              <div className={`${style.cardContentInfoDescription}`}>
                {CARD_ITEM.getDescription()}
              </div>
            </div>
          </div>
        ) : (
          <table className={`row ${style.cardTable}`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, key) => (
                <tr key={key}>
                  <td>{item.getTitle()}</td>
                  {item.hasSale() ? (
                    <td>{item.getSalePrice()}</td>
                  ) : (
                    <td>{item.getPrice()}</td>
                  )}
                  <td>{item.getQty()}</td>
                  <td>{item.getTotalPrice()}</td>
                  <td>
                    <button>
                      <TrashSVG />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
