import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShoppingContext from "./components/ShoppingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingContext>
      <App />
    </ShoppingContext>
  </React.StrictMode>
);
