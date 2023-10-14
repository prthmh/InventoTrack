import { useSelector } from "react-redux";
import "./Report.css";

const SalesReport = () => {
  const sales = useSelector((state) => state.sales);
  return (
    <div className="item_report" style={{backgroundColor: "var(--report_color1)"}} >
      <table className="report_table">
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Revenue</th>
        </tr>
        {sales.map((sale) => (
          <tr key={sale._id}>
            <td>{sale.description}</td>
            <td>{sale.quantity}</td>
            <td>{sale.quantity * sale.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SalesReport;
