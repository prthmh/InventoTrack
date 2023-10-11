import {
  ADD_INVENTORY,
  DELETE_INVENTORY,
  FETCH_INVENTORY,
  FETCH_SALES,
  INVENTORY_ACTION_FAILURE,
  SALES_ACTION_FALIURE,
} from "./actionTypes";

const API_URL = "https://inventory-management-api.pratmbr.repl.co";

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
    }
  } catch (error) {
    console.error("Error in adding item in inventory", error);
    dispatch({
      type: INVENTORY_ACTION_FAILURE,
      payload: "Error in adding item in inventory",
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
    }
  } catch (error) {
    console.error("Error in deleteing item in inventory", error);
    dispatch({
      type: INVENTORY_ACTION_FAILURE,
      payload: "Error in deleteing item in inventory",
    });
  }
};

// export const editItemInInventory = (itemId, updateData) => async(dispatch) => {
//     try{

//     } catch(error){

//     }
// }