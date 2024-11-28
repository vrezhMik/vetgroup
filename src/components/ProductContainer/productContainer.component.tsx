import style from "./productContainer.module.scss";
import Product from "../Product/product.component";
const products = [
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
  },
];

export default function ProductContainer() {
  return (
    <div className={`${style.productContainer} flex`}>
      {products.map((element, key) => (
        <Product key={key} data={element} />
      ))}
    </div>
  );
}
