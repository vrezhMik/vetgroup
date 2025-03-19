import { useState, useEffect } from "react";
import style from "./historyList.module.scss";
import FileSVG from "../Icons/FileSVG";
import { useCart, useCard, useCardView } from "@/store/store";
import { CardView } from "@/utils/Types";
import { Item } from "@/classes/ItemClass";
import { get_user_orders } from "@/utils/query";
import { getCookie } from "@/utils/cookies";
import { OrderType } from "@/utils/Types";

function HistoryList() {
  const { setCardState } = useCard();
  const { setCardView } = useCardView();
  const { addItem } = useCart();

  const [orders, setOrders] = useState([]);

  // Fetch order history on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      const documentId = getCookie("document");
      if (!documentId) {
        console.warn("No documentId cookie found!");
        return;
      }

      try {
        const response = await get_user_orders("wvyj6eo74v91jg603ymdxbpu");

        if (!response) {
          console.warn("No orders found.");
          return;
        }
        setOrders(response.orders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const showCart = (data: []) => {
    data.forEach((el) => {
      const current = new Item(el);
      addItem(current);
    });

    setCardState(true);
    setCardView(CardView.History);
  };

  return (
    <div className={`${style.history}`}>
      <div className={`${style.historyTitle}`}>
        <h1>Order History:</h1>
      </div>
      <div className={`${style.historyElements}`}>
        {orders.length > 0 ? (
          orders.map((element: OrderType, key: number) => (
            <div key={key} className={`flex ${style.historyElementsElement}`}>
              <p>#{element.order_id}</p>
              <p>{element.created}</p>
              <p>{element.total} AMD</p>
              <button onClick={() => showCart(element.products_json)}>
                <FileSVG />
              </button>
            </div>
          ))
        ) : (
          <p>No order history available.</p>
        )}
      </div>
    </div>
  );
}

export default HistoryList;
