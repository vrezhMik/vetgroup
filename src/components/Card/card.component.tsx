"use client";
import style from "./card.module.scss";
import { useCard } from "@/store/store";
import ImageComponent from "../Image/image.component";

import { Item } from "@/classes/ItemClass";
export default function Card() {
  const { cardState, setCardState, currentItem, setCurrentItem } = useCard();
  const CARD_ITEM = new Item(currentItem);
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
              setCurrentItem(null);
            }}
          >
            X
          </button>
        </div>
        <div className={`row flex ${style.cardContent}`}>
          <div className={`${style.cardImage}`}>
            <ImageComponent alt={"image"} url={CARD_ITEM.getImage() || "/"} />
          </div>
          <div className={`${style.cardInfo}`}>
            <div className={`${style.cardInfoTitle}`}>
              {CARD_ITEM.getTitle()}
              <span>{CARD_ITEM.getWeight()}</span>
            </div>
            <div className={`${style.cardInfoPrice}`}>
              {CARD_ITEM.getPrice()}
            </div>
            <div className={`${style.cardInfoDescription}`}>
              {CARD_ITEM.getDescription()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
