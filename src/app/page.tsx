"use client";
import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductComponents/ProductContainer/productContainer.component";
import { get_products } from "@/utils/query";
import { productsStore } from "@/store/store";
import { useEffect, useCallback, useRef } from "react";
import "./../styles/main.scss";

export default function Home() {
  const { add_product, loading } = productsStore();
  const startRef = useRef(0);
  const limit = 22;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const currentStart = startRef.current;
      const data = await get_products(currentStart, limit);
      if (data && data.products && data.products.length > 0) {
        add_product(data.products);
        startRef.current += limit;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [add_product]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) return;

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;

        if (
          window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 100 &&
          !loading
        ) {
          fetchData();
        }
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData, loading]);

  return (
    <main className="flex">
      <Sidebar current_user={null} />
      <div className="main_container">
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
