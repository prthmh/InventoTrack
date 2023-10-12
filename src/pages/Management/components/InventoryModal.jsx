import { useState } from "react";
import "./ModalStyles.css";
import { useDispatch } from "react-redux";
import { addItemInInventory } from "../../../redux/actions";

const initialState = {
  name: "",
  quantity: "",
  price: "",
  category: "",
};

const InventoryModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState(initialState);
  const { name, quantity, price, category } = itemData;
  const toStopPropagation = (e) => {
    e.stopPropagation();
  };

  const inputHandler = (e) =>
    setItemData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItemInInventory(itemData));
    setItemData(initialState);
    setShowModal(false);
  };

  console.log(itemData);
  return (
    <div className="inventory_modal" onClick={toStopPropagation}>
      <h3>Add Inventory</h3>
      <form className="modal_form" onSubmit={submitHandler}>
        <label className="form_label">Name</label>
        <input
          type="text"
          className="from_input"
          name="name"
          value={name}
          onChange={inputHandler}
        />
        <label className="form_label">Quantity</label>
        <input
          type="text"
          className="from_input"
          name="quantity"
          value={quantity}
          onChange={inputHandler}
        />
        <label className="form_label">Price</label>
        <input
          type="number"
          className="from_input"
          name="price"
          value={price}
          onChange={inputHandler}
        />
        <label className="form_label">Category</label>
        <input
          type="text"
          className="from_input"
          name="category"
          value={category}
          onChange={inputHandler}
        />
        <div className="modal_action_btns">
          <button type="submit">Add</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default InventoryModal;
