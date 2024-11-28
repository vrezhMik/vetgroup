import Sidebar from "@/components/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductContainer/productContainer.component";
export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <ProductContainer />
    </main>
  );
}
