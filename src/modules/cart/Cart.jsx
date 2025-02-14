import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // Force UI to update when the cart is cleared
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    setCartUpdated(true);
    setTimeout(() => setCartUpdated(false), 100); // Small delay for UI update
  }, [totalItems]);

  if (isEmpty) return <h2 className="cart-header">Your cart is empty</h2>;

  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      <p className="cart-actions">
        <Link to="/">Continue Shopping</Link> 
        <span style={{ margin: "0 10px" }}>|</span>
        <Link 
          to="#" 
          onClick={(e) => {
            e.preventDefault();
            emptyCart(); 
          }} 
          className="clear-cart-link"
        >
          Clear Cart
        </Link>
      </p>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            {/* Thumbnail Image from Google Sheets */}
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="cart-item-thumbnail"
              onError={(e) => { 
                console.error("Image failed to load:", item.imageUrl);
                e.target.src = '/assets/fallback.webp';
              }} 
            />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-price"><strong>${item.price.toFixed(2)}</strong></p>
              <p className="cart-stock">In Stock</p>
              <div className="cart-item-actions">
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <span className="cart-quantity">{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Subtotal ({totalItems} items): <strong>${cartTotal.toFixed(2)}</strong></h3>
        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
