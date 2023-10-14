import { useSelector } from "react-redux";
import "./Report.css";

const InventoryReport = () => {
  const inventory = useSelector((state) => state.inventory);
  return (
    <div className="item_report" style={{ backgroundColor: "var(--report_color2)" }}>
      <table className="report_table">
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Category</th>
        </tr>
        {inventory.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default InventoryReport;
