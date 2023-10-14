import { useState } from "react";
import "./ReportPage.css";
import InventoryReport from "../../components/ItemReport/InventoryReport";
import SalesReport from "../../components/ItemReport/SalesReport";

const Report = () => {
  const [reportType, setReportType] = useState("");
  return (
    <div>
      <div className="report_dropdown">
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="">Select Report type</option>
          <option value="inventory report">Inventory Report</option>
          <option value="sales report">Sales Report</option>
        </select>
      </div>
      <div className="report">
        {reportType === "inventory report" && <InventoryReport />}
        {reportType === "sales report" && <SalesReport />}
        {reportType === "" && <h2>Select a Report Type</h2>}
      </div>
    </div>
  );
};

export default Report;
