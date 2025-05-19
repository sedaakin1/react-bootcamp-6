import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const fullName = "Seda Akın";

  return (
    <CartContext.Provider value={fullName}>{children}</CartContext.Provider>
  );
};

export default CartProvider;