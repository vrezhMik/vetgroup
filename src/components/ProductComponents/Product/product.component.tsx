"use client";
import style from "./product.module.scss";
import { useState } from "react";
import { useCart, useCard, useCardView } from "@/store/store";
import { ProductPropsInterface } from "@/utils/Interfaces";
import { CardView } from "@/utils/Types";
import { Item } from "@/classes/ItemClass";

import ImageComponent from "@/components/Elements/Image/image.component";
import ArrowSVG from "@/components/Elements/Icons/ArrowSVG";

export default function Product({ data, placeholder }: ProductPropsInterface) {
  const [quantity, setQuantity] = useState(1);
  const { setCardState, setCurrentItem } = useCard();
  const { addItem } = useCart();
  const { setCardView } = useCardView();
  const [currentProduct, setCurrentProduct] = useState(new Item(data));

  const increment = () => {
    const updatedProduct = new Item(currentProduct);
    updatedProduct.setQty(quantity + 1);
    setQuantity(updatedProduct.getQty());
    setCurrentProduct(updatedProduct);
  };

  const decrement = () => {
    if (quantity <= 1) return;
    const updatedProduct = new Item(currentProduct);
    updatedProduct.setQty(quantity - 1);
    setQuantity(updatedProduct.getQty());
    setCurrentProduct(updatedProduct);
  };

  const handleChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
      currentProduct.setQty(value);
    }
  };

  const handleClick = (state: boolean, data: Item): void => {
    setCardState(true);
    setCurrentItem(currentProduct);
    setCardView(CardView.Product);
  };

  const orderItem = (): void => {
    currentProduct.setTotal();
    addItem(currentProduct);
  };

  return (
    <section
      className={`${style.product} flex ${
        placeholder ? style.placeholder : ""
      }`}
    >
      <div
        className={style.productImage}
        // onClick={() => {
        //   handleClick(true, currentProduct);
        // }}
      >
        {/* {currentProduct.hasSale() && (
          <div className={style.productImageSale}>
            <span>-{currentProduct.getSalePercentage()}%</span>
          </div>
        )} */}
        <ImageComponent
          alt={currentProduct.getTitle() || ""}
          url={"/placeholder.webp"}
        />
      </div>

      <div className={`${style.productInfo} flex`}>
        <div className={`${style.productInfoPrice} flex`}>
          <p className={style.productInfoPriceSale}>
            {currentProduct.formatPrice(currentProduct.getPrice() * quantity)}{" "}
            AMD
          </p>
          {/* <span className={style.productOldPrice}>
            {currentProduct.getPrice()}AMD
          </span> */}
        </div>
        {/* <div className={`${style.productInfoAvailability}`}>
          <span>On Demand</span>
        </div> */}
      </div>

      <div className={style.productTitle}>
        <h2>
          {currentProduct.getTitle()}
          <br />
          <span>
            {/* ({(currentProduct.getWeight() * currentProduct.getQty()) / 1000} kg)
             */}
            {currentProduct.getDescription()}
          </span>
        </h2>
      </div>

      <div className={`flex ${style.productAction}`}>
        <div className={`${style.productActionInput} flex`}>
          <button
            onClick={decrement}
            className={`${style.productActionInputSubstract}`}
          >
            <ArrowSVG />
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
            <ArrowSVG />
          </button>
        </div>
        <div>
          <button className={`${style.productActionOrder}`} onClick={orderItem}>
            Order
          </button>
        </div>
      </div>
    </section>
  );
}
