import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductComponents/ProductContainer/productContainer.component";
import Card from "@/components/CardComponents/Card/card.component";
export default function Home() {
  return (
    <main className="flex relative" style={{ height: "100vh" }}>
      <Sidebar />
      <ProductContainer />
    </main>
  );
}
