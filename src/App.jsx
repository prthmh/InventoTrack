import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Management/Inventory";
import Sales from "./pages/Management/Sales";
import Report from "./pages/Report/Report";
import NavBar from "./components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchInventory, fetchSales } from "./redux/actions";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <div className="app">
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 4000,
          style: {
            fontFamily: "inherit",
          },
        }}
      />
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
