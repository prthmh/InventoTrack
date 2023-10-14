import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="typewriter">InventoTrack</div>
      </header>
      <h3>
        Welcome to InventoTrack - Your All-in-One Inventory Management Solution!
      </h3>
      <div className="info">
        InventoTrack is your reliable partner in managing your inventory
        efficiently, tracking sales, and generating insightful reports to
        empower your business decisions. With our user-friendly app, you can
        effortlessly keep tabs on your product inventory and sales transactions.
        Take control of your business like never before, and make informed
        choices that drive growth and success.
      </div>
      <div className="links">
        <Link
          to="/inventory"
          className="link_element"
          style={{ backgroundColor: "var(--bg1)" }}
        >
          Go to Inventory
        </Link>
        <Link
          to="/sales"
          className="link_element"
          style={{ backgroundColor: "var(--bg2)" }}
        >
          Go to Sales
        </Link>
        <Link
          to="/report"
          className="link_element"
          style={{ backgroundColor: "var(--report_color1)" }}
        >
          Generate Report
        </Link>
      </div>
    </div>
  );
};

export default Home;
