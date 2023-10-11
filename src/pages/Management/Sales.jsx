import { useSelector } from "react-redux";

const Sales = () => {
  const sales = useSelector((state) => state.sales);
  console.log("sales", sales);
  return (
    <div className="sales_page">
      <h2>Sales</h2>
      <ul className="sales_items">
        {sales.map((item) => (
          <li
            className="list_item items "
            key={item.key}
            style={{ backgroundColor: "#A7ABDD" }}
          >
            <div>{item.description}</div>
            <div>{item.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
