"use client";
import ImageComponent from "../Image/image.component";
import style from "./product.module.scss";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import Arrow from "../Icons/ArrowSVG";
import { ProductPropsInterface } from "@/utils/Interfaces";
import { useCart } from "@/store/store";
import { useCard } from "@/store/store";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Product({ data }: ProductPropsInterface) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { setCardState } = useCard();
  const [saledPrice, setSaledPrice] = useState(
    data.price - (data.price * data.sale) / 100
  );
  const increment = () => {
    if (quantity >= data.qty) return;
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  return (
    <section className={`${style.product} ${roboto.className} flex`}>
      <div className={style.productImage} onClick={() => setCardState(true)}>
        {data.sale > 0 && (
          <div className={style.productImageSale}>
            <span>-{data.sale}%</span>
          </div>
        )}
        <ImageComponent alt={data.name} url={data.image} />
      </div>
      <div className={`${style.productInfo} flex`}>
        <div className={`${style.productInfoPrice} flex`}>
          <p className={data.sale > 0 ? style.productInfoPriceSale : ""}>
            {saledPrice * quantity} AMD
          </p>
          {data.sale > 0 && (
            <span className={style.productOldPrice}>{data.price}AMD</span>
          )}
        </div>
        <div className={`${style.productInfoAvailability}`}>
          <span>On Demand</span>
        </div>
      </div>
      <div className={style.productTitle}>
        <h2>
          {data.name}
          <span> ({(data.weight * quantity) / 1000}kg)</span>
        </h2>
      </div>
      <div className={`flex ${style.productAction}`}>
        <div className={`${style.productActionInput} flex`}>
          <button
            onClick={decrement}
            className={`${style.productActionInputSubstract}`}
          >
            <Arrow />
          </button>
          <input
            type="number"
            name=""
            value={quantity}
            id=""
            onChange={handleChange}
          />
          <button
            onClick={increment}
            className={`${style.productActionInputAdd}`}
          >
            <Arrow />
          </button>
        </div>
        <div>
          <button
            className={`${style.productActionOrder}`}
            onClick={() => addItem(data)}
          >
            Order
          </button>
        </div>
      </div>
    </section>
  );
}
