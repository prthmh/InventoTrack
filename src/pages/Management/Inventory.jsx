import { useDispatch, useSelector } from "react-redux";
import "./PageStyles.css";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import InventoryModal from "./components/InventoryModal";
import { deleteItemInInventory } from "../../redux/actions";
import Loader from "../../components/Loader/Loader";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState();
  const [filterCategory, setFilterCategory] = useState("");

  const deleteHandler = (itemId) => {
    dispatch(deleteItemInInventory(itemId));
  };

  const editHandler = (item) => {
    setEditItem(item);
    setShowModal(true);
  };

  console.log("inventory", inventory);
  const categories = [...inventory].map(({ category }) => category);
  const uniqueCategories = new Set(categories);
  const categoriesAry = [...uniqueCategories];

  const getFilteredItems = (itemsAry) => {
    let resultAry = [];
    if (filterCategory !== "") {
      resultAry = [...inventory].filter(
        ({ category }) => category === filterCategory
      );
    }
    if (filterCategory === "" || filterCategory === "all") {
      resultAry = [...itemsAry];
    }
    return resultAry;
  };

  const filteredItems = getFilteredItems(inventory);

  return (
    <div className="inventory_page">
      <div className="page_header">
        <h2>Inventory</h2>
        <div className="add_item" onClick={() => setShowModal(true)}>
          <span className="add_icon">
            <AiFillPlusCircle />
          </span>
          <span id="text">Add Item</span>
        </div>
      </div>
      <div className="filters">
        <h3>Filter:</h3>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="all">All</option>
          {categoriesAry.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {inventory.length === 0 ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <ul className="inventory_items">
          {filteredItems.map((item) => (
            <li className="list_item" key={item._id}>
              <h2>{item.name}</h2>
              <div>
                <b>Quantity: </b>
                {item.quantity}
              </div>
              <div>
                <b>Price: </b>₹{item.price}
              </div>
              <div>
                <b>Category: </b>
                {item.category}
              </div>
              <div className="action_btns">
                <div
                  className="edit_btn"
                  title="Edit item"
                  onClick={() => editHandler(item)}
                >
                  <MdModeEdit />
                </div>
                <div
                  className="delete_btn"
                  title="Delete item"
                  onClick={() => deleteHandler(item._id)}
                >
                  <MdDelete />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {showModal && (
        <div
          className="modal"
          onClick={() => {
            setShowModal(false);
            setEditItem();
          }}
        >
          <InventoryModal
            setShowModal={setShowModal}
            editItem={editItem}
            setEditItem={setEditItem}
          />
        </div>
      )}
    </div>
  );
};

export default Inventory;
