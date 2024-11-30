import style from "./productContainer.module.scss";
import Product from "../Product/product.component";
import SearchBar from "../SearchBar/searchBar.component";
import CartSVG from "../Icons/CartSVG";

const products = [
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 0,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
  {
    name: "Dog Food",
    weight: 800,
    price: 1200,
    image: "http://127.0.0.1:3000/dog.webp",
    qty: 100,
    sale: 10,
  },
];

export default function ProductContainer() {
  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.mainContainerSearchBar} flex`}>
        <SearchBar />
        <div className={`${style.mainContainerSearchBarCart}`}>
          <button>
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
