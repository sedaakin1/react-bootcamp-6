import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import CartProvider from "./components/context/CartProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);