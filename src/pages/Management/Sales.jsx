import { useSelector } from "react-redux";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import SalesModal from "./components/SalesModal";
import Loader from "../../components/Loader/Loader";

const Sales = () => {
  const sales = useSelector((state) => state.sales);
  const [showModal, setShowModal] = useState(false);

  const getDate = (str) => {
    const date = new Date(str);
    const day = date.toLocaleString("en-IN", { day: "2-digit" });
    const month = date.toLocaleString("en-IN", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  console.log("sales", sales);
  return (
    <div className="sales_page">
      <div className="page_header">
        <h2>Sales</h2>
        <div className="add_item" onClick={() => setShowModal(true)}>
          <span className="add_icon">
            <AiFillPlusCircle />
          </span>
          <span id="text">Add Sale</span>
        </div>
      </div>
      {sales.length === 0 ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <ul className="sales_items">
          {sales.map((item) => (
            <li
              className="list_item"
              key={item._id}
              style={{ backgroundColor: "var(--bg2)" }}
            >
              <h2>{item.description}</h2>
              <div>
                <b>Quantity: </b>
                {item.quantity}
              </div>
              <div>
                <b>Amount: </b>₹{item.amount}
              </div>
              <div>
                <b>Revenue: </b>₹{item.amount * item.quantity}
              </div>
              <div>
                <b>Date: </b>{getDate(item?.createdAt)}
              </div>
            </li>
          ))}
        </ul>
      )}

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <SalesModal setShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
};

export default Sales;
