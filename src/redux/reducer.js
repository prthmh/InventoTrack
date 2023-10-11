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

const initialState = {
  inventory: [],
  sales: [],
  inventoryError: "",
  salesError: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY:
      return { ...state, inventory: action.payload };
    case ADD_INVENTORY:
      return { ...state, inventory: [...state.inventory, action.payload] };
    case DELETE_INVENTORY:
      return {
        ...state,
        inventory: state.inventory.filter(
          (item) => item._id !== action.payload
        ),
      };
    case EDIT_INVENTORY:
      return {
        ...state,
        inventory: state.inventory.map((item) =>
          item._id === action.payload.itemId ? action.payload.item : item
        ),
      };
    case INVENTORY_ACTION_FAILURE:
      return { ...state, inventoryError: action.payload };
    case FETCH_SALES:
      return { ...state, sales: action.payload };
    case ADD_SALES:
      return { ...state, sales: [...state.sales, action.payload] };
    case SALES_ACTION_FALIURE:
      return { ...state, salesError: action.payload };
    default:
      return state;
  }
};
