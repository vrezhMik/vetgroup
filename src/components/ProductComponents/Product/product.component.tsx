"use client";
import style from "./product.module.scss";
import { useState } from "react";
import { useCart } from "@/store/store";
import { ProductPropsInterface } from "@/utils/Interfaces";
import { Item } from "@/classes/ItemClass";

import ImageComponent from "@/components/Elements/Image/image.component";
import ArrowSVG from "@/components/Elements/Icons/ArrowSVG";

export default function Product({ data, placeholder }: ProductPropsInterface) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const [currentProduct, setCurrentProduct] = useState(new Item(data, 1));

  const increment = (product: Item) => {
    product.setQty(quantity + 1);
    setQuantity(product.getQty());
    setCurrentProduct(product);
  };

  const decrement = (product: Item) => {
    if (quantity <= 1) return;
    product.setQty(quantity - 1);
    setQuantity(product.getQty());
    setCurrentProduct(product);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(value);
      currentProduct.setQty(value);
    }
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
      <div className={style.productImage}>
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
        </div>
      </div>

      <div className={style.productTitle}>
        <h2>
          {currentProduct.getTitle()}
          <br />
          <span>{currentProduct.getDescription()}</span>
        </h2>
      </div>

      <div className={`flex ${style.productAction}`}>
        <div className={`${style.productActionInput} flex`}>
          <button
            onClick={() => decrement(currentProduct)}
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
            onClick={() => increment(currentProduct)}
            className={`${style.productActionInputAdd}`}
          >
            <ArrowSVG />
          </button>
        </div>
        <div>
          <button
            className={`${style.productActionOrder}`}
            onClick={orderItem}
            disabled={placeholder}
          >
            Order
          </button>
        </div>
      </div>
    </section>
  );
}
