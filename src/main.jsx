import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
);