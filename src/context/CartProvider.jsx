import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const fullName = "Seda Akın";

  function addToCart(productItem) {
    setCartItems((prevState) => [productItem, ...prevState]);
  }


  return (
     <CartContext.Provider
      value={{
        fullName,
        addToCart,
        cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;