"use client";
import style from "./card.module.scss";
import { useCard, useCardView } from "@/store/store";
import { CardView } from "@/utils/Types";
import CardProductView from "../CardProductView/cardProductView.component";
import CardListView from "../CardListView/cardListView.component";

export default function Card() {
  const { cardState, setCardState, setCurrentItem } = useCard();
  const { cardViewState } = useCardView();

  return (
    <div
      className={style.cardContainer}
      style={{ display: cardState ? "flex" : "none" }}
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
        {cardViewState === CardView.Product ? (
          <CardProductView />
        ) : (
          <CardListView />
        )}
      </div>
    </div>
  );
}
