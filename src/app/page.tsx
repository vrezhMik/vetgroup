"use client";
import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductComponents/ProductContainer/productContainer.component";
import { get_products } from "@/utils/query";
import { productsStore } from "@/store/store";
import { useEffect, useState } from "react";

export default function Home() {
  const { add_product, loading } = productsStore();
  const [start, setStart] = useState(0);
  const limit = 28;

  const fetchData = async () => {
    try {
      const data = await get_products(start, limit);
      if (data && data.products && data.products.length > 0) {
        add_product(data.products);
        setStart((prev) => prev + limit);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading
      ) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <main className="flex">
      <Sidebar current_user={null} />
      <div style={{ minWidth: "90%", marginLeft: "10%" }}>
        <ProductContainer />
        {loading && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <span>Loading more products...</span>
          </div>
        )}
      </div>
    </main>
  );
}
