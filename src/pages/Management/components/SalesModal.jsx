import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSalesItem } from "../../../redux/actions";
import toast from "react-hot-toast";

const initialState = {
  description: "",
  amount: "",
  quantity: "",
};

const SalesModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const [itemData, setItemData] = useState(initialState);

  const { description, amount, quantity } = itemData;

  const toStopPropagation = (e) => {
    e.stopPropagation();
  };

  const checkInInventory = (itemName) => {
    const isItemPresent = inventory.find(
      (item) => item.name.toLowerCase() === itemName.toLowerCase()
    );
    if (isItemPresent) {
      toast.success(
        `There are ${isItemPresent.quantity} ${isItemPresent.name} present in inventory.`
      );
    } else {
      toast.error("No such item in inventory.");
    }
  };

  const inputHandler = (e) =>
    setItemData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  const submitHandler = (e) => {
    e.preventDefault();
    if (description === "" || amount === "" || quantity === "") {
      toast.error("Some fields are empty.");
    } else {
      dispatch(addSalesItem(itemData));
      setItemData(initialState);
      setShowModal(false);
    }
  };

  return (
    <div className="sales_modal" onClick={toStopPropagation}>
      <h3>Add Sales</h3>
      <form className="modal_form" onSubmit={submitHandler}>
        <label className="form_label">Name</label>
        <input
          type="text"
          name="description"
          className="from_input"
          value={description}
          onChange={inputHandler}
        />

        <div className="check_inventory"
          onClick={() => {
            checkInInventory(description);
          }}
        >
          Check if item is in inventory
        </div>

        <label className="form_label">Quantity</label>
        <input
          type="number"
          name="quantity"
          className="from_input"
          value={quantity}
          onChange={inputHandler}
        />
        <label className="form_label">Amount</label>
        <input
          type="number"
          name="amount"
          className="from_input"
          value={amount}
          onChange={inputHandler}
        />
        <div className="modal_action_btns">
          <button type="submit" className="save_btn">
            Add
          </button>
          <button onClick={() => setShowModal(false)} className="cancel_btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalesModal;
