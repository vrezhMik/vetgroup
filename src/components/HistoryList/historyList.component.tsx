import style from "./historyList.module.scss";
import FileSVG from "../Icons/FileSVG";
const historyData = [
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
  },
  {
    orderID: "1234",
    date: "12/09/2024",
    total: "12000",
  },
];

function HistoryList() {
  return (
    <div className={`${style.history}`}>
      <div className={`${style.historyTitle}`}>
        <h1>Order History:</h1>
      </div>
      <div className={`${style.historyElements}`}>
        {historyData.map((element, key) => (
          <div key={key} className={`flex ${style.historyElementsElement}`}>
            <p>#{element.orderID}</p>
            <p>{element.date}</p>
            <p>{element.total} AMD</p>
            <button>
              <FileSVG />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
