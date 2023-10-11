import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const gettActiveStyles = ({ isActive }) => ({
    borderBottom: isActive && "3px solid var(--dark_color)",
  });
  return (
    <div className="nav_bar">
      <NavLink to="/" className="nav_element" style={gettActiveStyles}>
        <h2>InventoTrack</h2>
      </NavLink>
      <div className="operation_pages">
        <NavLink
          to="/inventory"
          className="nav_element"
          style={gettActiveStyles}
        >
          Inventory
        </NavLink>
        <NavLink to="/sales" className="nav_element" style={gettActiveStyles}>
          Sales
        </NavLink>
        <NavLink to="/report" className="nav_element" style={gettActiveStyles}>
          Report
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
