import ReactDOM from "react-dom/client";
import App from "./App";

import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);