"use client";

import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductComponents/ProductContainer/productContainer.component";
import { get_products } from "@/utils/query";
import { productsStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { add_product } = productsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get_products();
        add_product(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [add_product]);

  return (
    <main className="flex">
      <Sidebar current_user={null} />
      <ProductContainer />
    </main>
  );
}
