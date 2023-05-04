import { createContext, useReducer } from "react";
import reducerfn from "./productReducer";
import { initialState } from "./products";

export const CartContext = createContext(null);

const ShoppingContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducerfn, initialState);
  const value = {
    state,
    dispatch,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default ShoppingContext;
