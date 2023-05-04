import { useContext, usedispatch } from "react";
import CartContext from "./ShoppingContext";
import shop from "./ShoppingContext";

export default function CartNew() {
  const state = useContext(CartContext);
  console.log(state);
  const { products } = state;
  const dispatch = usedispatch();

  const decreaseQuality = (id) => {
    dispatch({ type: "DECREASEQUALITY", payload: "id" });
  };

  const increaseQuality = (id) => {
    dispatch({ type: "INCREASEQUALITY", payload: "id" });
  };

  return (
    <div>
      {products.map((ele) => (
        <div key={ele.id}>
          <p>Title : {ele.title}</p>
          <p>Price : {ele.price}</p>
          <p>Description : {ele.description}</p>
          <button onClick={() => decreaseQuality(ele.id)}>-</button>
          <span>Quantity :{ele.quantity}</span>
          <span>
            <button onClick={() => increaseQuality(ele.id)}>+</button>
          </span>
          <img src={ele.img} />
        </div>
      ))}
    </div>
  );
}
