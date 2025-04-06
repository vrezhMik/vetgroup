// "use client";
// import style from "./productContainer.module.scss";

// import { useCart, useCard, useCardView, productsStore } from "@/store/store";
// import Product from "../Product/product.component";
// import SearchBar from "@/components/Elements/SearchBar/searchBar.component";
// import CartSVG from "@/components/Elements/Icons/CartSVG";
// import { CardView } from "@/utils/Types";
// import { useEffect, useState } from "react";

// export default function ProductContainer() {
//   const { getItemCount, cartTotal } = useCart();
//   const { setCardState } = useCard();
//   const { setCardView } = useCardView();
//   const { products, searchQuery, loading } = productsStore();

//   const [initialLoad, setInitialLoad] = useState(true);

//   useEffect(() => {
//     if (products.length > 0) {
//       setInitialLoad(false);
//     }
//   }, [products]);

//   const showCart = () => {
//     setCardState(true);
//     setCardView(CardView.List);
//   };

//   useEffect(() => {
//     const body = document.getElementsByTagName("body")[0];
//     body.style.overflowY = initialLoad && loading ? "hidden" : "scroll";
//   }, [loading, initialLoad]);

//   const filteredProducts = products.filter((product) => {
//     const name = product.name.toLowerCase();
//     const description = product.description.toLowerCase();
//     const words = searchQuery.toLowerCase().split(/\s+/);

//     return words.every(
//       (word) => name.includes(word) || description.includes(word)
//     );
//   });

//   const placeholderData = {
//     code: "0000",
//     name: "L. Ipsume",
//     description: "Lorem Ipsum",
//     price: 1000,
//     image: "/",
//     __typename: "Product",
//     qty: 1,
//     totalPrice: 1,
//   };

//   return (
//     <div className={`${style.mainContainer}`}>
//       <div className={`${style.mainContainerSearchBar} flex`}>
//         <SearchBar />
//         <div className={`${style.mainContainerSearchBarCart}`}>
//           <button
//             className={`${style.mainContainerSearchBarCartButton}`}
//             onClick={showCart}
//           >
//             {getItemCount() > 0 && (
//               <div className={`${style.mainContainerSearchBarCartButtonItems}`}>
//                 {cartTotal}
//               </div>
//             )}
//             <CartSVG />
//           </button>
//         </div>
//       </div>
//       <div className={`${style.mainContainerProductContainer} flex`}>
//         {filteredProducts.map((element, key) => (
//           <Product
//             key={element.code + key}
//             data={element}
//             placeholder={false}
//           />
//         ))}
//         {initialLoad &&
//           loading &&
//           Array.from({ length: 10 }).map((_, index) => (
//             <Product
//               key={`placeholder-${index}`}
//               data={placeholderData}
//               placeholder={true}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

"use client";
import style from "./productContainer.module.scss";

import { useCart, useCard, useCardView, productsStore } from "@/store/store";
import Product from "../Product/product.component";
import SearchBar from "@/components/Elements/SearchBar/searchBar.component";
import CartSVG from "@/components/Elements/Icons/CartSVG";
import { CardView } from "@/utils/Types";
import { useEffect, useState } from "react";

// Type definition for Product
type ProductType = {
  code: string;
  name: string;
  description: string;
  price: number;
  image: string;
  __typename: string;
  qty: number;
  totalPrice: number;
};

export default function ProductContainer() {
  const { getItemCount, cartTotal } = useCart();
  const { setCardState } = useCard();
  const { setCardView } = useCardView();
  const { products, searchQuery, loading } = productsStore();

  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const [visibleProducts, setVisibleProducts] = useState<ProductType[]>([]);

  // Control scroll during initial loading
  useEffect(() => {
    if (products.length > 0) {
      setInitialLoad(false);
    }
  }, [products]);

  const showCart = () => {
    setCardState(true);
    setCardView(CardView.List);
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflowY = initialLoad && loading ? "hidden" : "scroll";
  }, [loading, initialLoad]);

  // Incremental search logic
  useEffect(() => {
    if (!searchQuery) {
      setVisibleProducts(products);
      return;
    }

    const lowerQueryWords = searchQuery.toLowerCase().split(/\s+/);
    let index = 0;
    const chunkSize = 50;
    let matches: ProductType[] = [];

    const processChunk = () => {
      const end = Math.min(index + chunkSize, products.length);
      const chunk = products.slice(index, end);

      const newMatches = chunk.filter((product) => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        return lowerQueryWords.every(
          (word) => name.includes(word) || description.includes(word)
        );
      });

      matches = [...matches, ...newMatches];
      setVisibleProducts([...matches]);

      index = end;
      if (index < products.length) {
        setTimeout(processChunk, 10);
      }
    };

    setVisibleProducts([]);
    processChunk();
  }, [searchQuery, products]);

  const placeholderData: ProductType = {
    code: "0000",
    name: "L. Ipsume",
    description: "Lorem Ipsum",
    price: 1000,
    image: "/",
    __typename: "Product",
    qty: 1,
    totalPrice: 1,
  };

  return (
    <div className={`${style.mainContainer}`}>
      <div className={`${style.mainContainerSearchBar} flex`}>
        <SearchBar />
        <div className={`${style.mainContainerSearchBarCart}`}>
          <button
            className={`${style.mainContainerSearchBarCartButton}`}
            onClick={showCart}
          >
            {getItemCount() > 0 && (
              <div className={`${style.mainContainerSearchBarCartButtonItems}`}>
                {cartTotal}
              </div>
            )}
            <CartSVG />
          </button>
        </div>
      </div>
      <div className={`${style.mainContainerProductContainer} flex`}>
        {visibleProducts.map((element, key) => (
          <Product
            key={element.code + key}
            data={element}
            placeholder={false}
          />
        ))}
        {initialLoad &&
          loading &&
          Array.from({ length: 10 }).map((_, index) => (
            <Product
              key={`placeholder-${index}`}
              data={placeholderData}
              placeholder={true}
            />
          ))}
      </div>
    </div>
  );
}
