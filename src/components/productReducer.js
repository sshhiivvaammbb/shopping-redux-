const productReducer = (state, action) => {
  if (action.type === "INCREASEQUALITY") {
    let updatedCart = state.item.map((ele) => {
      if (ele.id === action.payload) {
        return { ...state, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    return { ...state, ele: updatedCart };
  }

  if (action.type === "DECREASEQUALITY") {
    let updatedCart = state.item.map((ele) => {
      if (ele.id === action.payload) {
        return { ...state, quantity: ele.quantity - 1 };
      }
      return ele;
    });
    return { ...state, ele: updatedCart };
  }

  return state;
};
export default productReducer;
