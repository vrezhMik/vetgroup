"use client";

import style from "./productContainer.module.scss";
import Product from "../Product/product.component";
import SearchBar from "../SearchBar/searchBar.component";
import CartSVG from "../Icons/CartSVG";
import { useCart } from "@/store/store";
const products = [
  {
    id: "01",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    id: "02",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    id: "03",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 0,
  },
  {
    id: "04",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    id: "05",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    id: "06",
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
];

export default function ProductContainer() {
  const { getItemCount } = useCart();
  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.mainContainerSearchBar} flex`}>
        <SearchBar />
        <div className={`${style.mainContainerSearchBarCart}`}>
          <button className={`${style.mainContainerSearchBarCartButton}`}>
            <div className={`${style.mainContainerSearchBarCartButtonItems}`}>
              {getItemCount()}
            </div>
            <CartSVG />
          </button>
        </div>
      </div>
      <div className={`${style.mainContainerProductContainer} flex`}>
        {products.map((element, key) => (
          <Product key={key} data={element} />
        ))}
      </div>
    </div>
  );
}
