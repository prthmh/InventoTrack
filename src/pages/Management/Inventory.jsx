import { useSelector } from "react-redux";
import "./PageStyles.css";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

const Inventory = () => {
  const inventory = useSelector((state) => state.inventory);
  console.log("inventory", inventory);
  return (
    <div className="inventory_page">
      <div className="page_header">
        <h2>Inventory</h2>
        <div className="add_item">
          <span className="add_icon">
            <AiFillPlusCircle />
          </span>
          <span id="text" >Add Item</span>
        </div>
      </div>

      <ul className="inventory_items">
        {inventory.map((item) => (
          <li className="list_item items " key={item.key}>
            <h2>{item.name}</h2>
            <div>
              <b>Quantity: </b>
              {item.quantity}
            </div>
            <div>
              <b>Price: </b>
              {item.price}
            </div>
            <div>
              <b>Category: </b>
              {item.category}
            </div>
            <div className="action_btns">
              <div className="edit_btn" title="Edit item">
                <MdModeEdit />
              </div>
              <div className="delete_btn" title="Delete item">
                <MdDelete />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
