import ReactDOM from "react-dom/client";
import App from "./App";

import ThemeProvider from "./context/ThemeProvider";
import CartProvider from "./components/context/CartProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);