"use client";
import style from "./card.module.scss";
import { useCard } from "@/store/store";
import ImageComponent from "../Image/image.component";

export default function Card() {
  const { cardState, setCardState } = useCard();
  return (
    <div
      className={style.cardContainer}
      style={{ display: cardState ? "block" : "none" }}
    >
      <div className={`${style.card}`}>
        <div className={`row ${style.cardButton}`}>
          <button onClick={() => setCardState(false)}>X</button>
        </div>
        <div className={`row flex ${style.cardContent}`}>
          <div className={`${style.cardImage}`}>
            <ImageComponent
              alt={"image"}
              url={"http://127.0.0.1:3000/dog.webp"}
            />
          </div>
          <div className={`${style.cardInfo}`}>
            <div>Title</div>
            <div>Price</div>
            <div>Description</div>
          </div>
        </div>
      </div>
    </div>
  );
}
