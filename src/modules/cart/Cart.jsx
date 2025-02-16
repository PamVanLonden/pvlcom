import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

// Icons
import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp, SiZelle } from "react-icons/si";
// import { FaShoppingCart } from "react-icons/fa"; 


// Pass imageSrc from the ImageGallery
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

  if (isEmpty) return <h2>Your cart is empty</h2>;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {/* NAV */}
      <nav className="cart-actions">
        <Link to="/">Continue Shopping</Link> 
        <Link to="#" className="clear-cart-link"
          onClick={(e) => {
            e.preventDefault();
            emptyCart(); 
          }} > Clear Cart </Link>
      </nav>

      {/* ITEMS */}
      <table className="cart-items">
        {items.map((item) => (
          
          <tr key={item.id} className="cart-item">

          {/* CLEAN the image filename, or pass it from the imageGallery. */}
           <td> 
              <h3>{item.name}</h3>
              <img src={item.imageSrc}  
                  alt={item.name} 
                  className="cart-item-thumbnail"
                  onError={(e) => { 
                    console.error("Image failed to load:", item.imageSrc);
                    e.target.src = '/assets/fallback.webp';
                  }} 
                />
          </td>
          <td className="cart-item-details">
              
              <p className="cart-price">${item.price.toFixed(2)} </p>
              {/* <p className="cart-stock">In Stock</p> */}
              <div className="cart-item-actions">
                {/* <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button> */}
                {/* <span className="cart-quantity">{item.quantity}</span> */}
                {/* <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button> */}
                <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </td>
          </tr>
        ))}
      </table>

      <div className="cart-summary">
        <h3>Subtotal ({totalItems} items): ${cartTotal.toFixed(2)}</h3>
        <h2>Checkout</h2>
          <p>Send payment using:</p>
          
          <button><i className=""><IoLogoVenmo /></i>Venmo </button>
          <button><i className=""><SiZelle /></i>Zelle </button>
 
          {/* <p>Please upload a screenshot of the payment or enter the confirmation code.</p>
          <input type="file" />
          <button>Submit</button> */}
      </div>
    </div>
  );
};

export default Cart;
