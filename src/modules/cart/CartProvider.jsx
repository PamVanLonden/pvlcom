import { CartProvider } from "react-use-cart";

const CartContext = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartContext;
