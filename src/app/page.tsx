import Sidebar from "@/components/Sidebar/sidebar.component";
import ProductContainer from "@/components/ProductContainer/productContainer.component";
import Card from "@/components/Card/card.component";
export default function Home() {
  return (
    <main className="flex relative">
      <Sidebar />
      <ProductContainer />
      <Card />
    </main>
  );
}
