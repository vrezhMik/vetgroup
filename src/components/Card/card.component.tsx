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
          <div className={`${style.cardTable}`}>
            <div className={`${style.cardTableRow} flex row`}>
              <div className={` ${style.cardTableTitle}`}>
                <span>Name</span>
              </div>
              <div className={` ${style.cardTableTitle}`}>
                <span>Price</span>
              </div>
              <div className={` ${style.cardTableTitle}`}>
                <span>Qty</span>
              </div>
              <div className={` ${style.cardTableTitle}`}>
                <span>Total</span>
              </div>
            </div>
            <div className={`${style.cardTableData}`}>
              {cartItems.map((item, key) => (
                <div className={`row flex ${style.cardTableDataRow}`} key={key}>
                  <div className={`${style.cardTableDataRowElement}`}>
                    <span>{item.getTitle()}</span>
                  </div>
                  {item.hasSale() ? (
                    <div className={`${style.cardTableDataRowElement}`}>
                      <span>{item.getSalePrice()}</span>
                    </div>
                  ) : (
                    <div className={`${style.cardTableDataRowElement}`}>
                      <span>{item.getPrice()}</span>
                    </div>
                  )}

                  <div className={`${style.cardTableDataRowElement}`}>
                    <span>{item.getQty()}</span>
                  </div>
                  <div className={`${style.cardTableDataRowElement}`}>
                    <span>{item.getTotalPrice()}</span>
                  </div>
                  <div className={`${style.cardTableDataRowElement}`}>
                    <button>
                      <TrashSVG />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
