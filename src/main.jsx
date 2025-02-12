import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CartContext from "./modules/cart/CartProvider.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContext>
      <App />
    </CartContext>
  </StrictMode>
);
