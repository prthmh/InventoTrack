import toast from "react-hot-toast";
import {
  ADD_INVENTORY,
  ADD_SALES,
  DELETE_INVENTORY,
  EDIT_INVENTORY,
  FETCH_INVENTORY,
  FETCH_SALES,
  INVENTORY_ACTION_FAILURE,
  SALES_ACTION_FALIURE,
} from "./actionTypes";

const API_URL =
  "https://243e0fe1-21ee-40ce-becf-c3cbba85de7c-00-2wcd6c7vu5ikj.asia-b.replit.dev";

export const fetchInventory = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/items`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_INVENTORY, payload: data.inventory });
    }
  } catch (error) {
    console.error("Error in fetching inventory", error);
    dispatch({
      type: INVENTORY_ACTION_FAILURE,
      payload: "Error in fetching inventory.",
    });
  }
};

export const fetchSales = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/sales`);
    if (response.status === 200) {
      const data = await response.json();
      dispatch({ type: FETCH_SALES, payload: data.sales });
    }
  } catch (error) {
    console.error("Error in fetching sales.", error);
    dispatch({
      type: SALES_ACTION_FALIURE,
      payload: "Error in fetching sales.",
    });
  }
};

export const addItemInInventory = (newItem) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    if (response.status === 201) {
      const data = await response.json();
      dispatch({ type: ADD_INVENTORY, payload: data.newItem });
      toast.success("Item added successfully");
    }
  } catch (error) {
    console.error("Error in adding item in inventory", error);
    dispatch({
      type: INVENTORY_ACTION_FAILURE,
      payload: "Error in adding item in inventory",
    });
  }
};

export const addSalesItem = (newItem) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/sales`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    if (response.status === 201) {
      const data = await response.json();
      dispatch({ type: ADD_SALES, payload: data.newSale });
      toast.success("Sale added successfully");
    }
  } catch (error) {
    console.error("Error in adding item in sales", error);
    dispatch({
      type: SALES_ACTION_FALIURE,
      payload: "Error in adding item in sales",
    });
  }
};

export const deleteItemInInventory = (itemId) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      dispatch({ type: DELETE_INVENTORY, payload: itemId });
      toast.success("Item deleted successfully");
    }
  } catch (error) {
    console.error("Error in deleteing item in inventory", error);
    dispatch({
      type: INVENTORY_ACTION_FAILURE,
      payload: "Error in deleteing item in inventory",
    });
  }
};

export const editItemInInventory = (itemId, updateData) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}/api/items/${itemId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (response.status === 200) {
      const data = await response.json();
      dispatch({
        type: EDIT_INVENTORY,
        payload: { itemId: data.updatedItem._id, item: data.updatedItem },
      });
      toast.success("Item edited successfully.");
    }
  } catch (error) {
    console.error("Error in updating item in inventory", error);
    dispatch({
      type: INVENTORY_ACTION_FAILURE,
      payload: "Error in updating item in inventory",
    });
  }
};
