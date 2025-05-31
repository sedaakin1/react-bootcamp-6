import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import CartProvider from "./context/CartProvider";
import ThemeProvider from "./context/ThemeProvider";
import { Provider } from "react-redux";
import store from "./redux/store";


import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </Provider>
);