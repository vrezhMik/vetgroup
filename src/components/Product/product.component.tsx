"use client";
import ImageComponent from "../Image/image.component";
import style from "./product.module.scss";
import { Roboto } from "next/font/google";
import { useState } from "react";
import Arrow from "../Icons/Arrow";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
interface ProductPropsInterface {
  data: {
    name: string;
    weight: number;
    price: number;
    image: string;
    qty: number;
  };
}
export default function Product({ data }: ProductPropsInterface) {
  const [quantity, setQuantity] = useState(1);
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
    <div className={`${style.product} ${roboto.className} flex`}>
      <div className={style.productImage}>
        <ImageComponent alt={data.name} url={data.image} />
      </div>
      <div className={style.productTitle}>
        <h2>
          {data.name}
          <span> ({(data.weight * quantity) / 1000}kg)</span>
        </h2>
      </div>
      <div className={`${style.productInfo} flex`}>
        <div>
          {data.price * quantity}
          <span> AMD</span>
        </div>
        <div>On Demand</div>
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
          <button className={`${style.productActionOrder}`}>Order</button>
        </div>
      </div>
    </div>
  );
}
