"use client";
import ImageComponent from "../Image/image.component";
import style from "./product.module.scss";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import Arrow from "../Icons/ArrowSVG";
import { ProductPropsInterface } from "@/utils/Interfaces";
import { useCart } from "@/store/store";
import { useCard } from "@/store/store";
import { CartItemType } from "@/utils/Types";
import { Item } from "@/classes/ItemClass";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Product({ data }: ProductPropsInterface) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const { setCardState, setCurrentItem } = useCard();

  const increment = () => {
    currentProduct.setQty(quantity + 1);
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= 1) return;
    currentProduct.setQty(quantity - 1);
    setQuantity(quantity - 1);
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  const handleClick = (state: boolean, data: CartItemType): void => {
    setCardState(true);
    setCurrentItem(currentProduct);
  };

  const currentProduct = new Item(data);
  return (
    <section className={`${style.product} ${roboto.className} flex`}>
      <div
        className={style.productImage}
        onClick={() => {
          handleClick(true, data);
        }}
      >
        {currentProduct.hasSale() && (
          <div className={style.productImageSale}>
            <span>-{currentProduct.getSalePercentage()}%</span>
          </div>
        )}
        <ImageComponent
          alt={currentProduct.getTitle() || ""}
          url={data.image || "/"}
        />
      </div>

      <div className={`${style.productInfo} flex`}>
        <div className={`${style.productInfoPrice} flex`}>
          <p
            className={
              currentProduct.hasSale() ? style.productInfoPriceSale : ""
            }
          >
            {currentProduct.getQty() *
              (currentProduct.hasSale()
                ? currentProduct.getSalePrice()
                : currentProduct.getPrice())}{" "}
            AMD
          </p>
          {currentProduct.hasSale() && (
            <span className={style.productOldPrice}>
              {currentProduct.getPrice()}AMD
            </span>
          )}
        </div>
        <div className={`${style.productInfoAvailability}`}>
          <span>On Demand</span>
        </div>
      </div>

      <div className={style.productTitle}>
        <h2>
          {currentProduct.getTitle()}
          <span>
            {" "}
            ({(currentProduct.getWeight() * currentProduct.getQty()) / 1000} kg)
          </span>
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
            value={currentProduct.getQty()}
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
