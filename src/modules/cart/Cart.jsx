import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

// Icons
import { IoLogoVenmo } from "react-icons/io5";
import { SiCashapp, SiZelle } from "react-icons/si";

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

  const [cartUpdated, setCartUpdated] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    setCartUpdated(true);
    setTimeout(() => setCartUpdated(false), 100);
  }, [totalItems]);

  if (isEmpty) return <h2>Your cart is empty</h2>;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <article>
        <nav className="cart-actions">
          <Link to="/">Continue Shopping</Link>
          <Link to="#" className="clear-cart-link" onClick={(e) => {
            e.preventDefault();
            emptyCart();
          }}> Clear Cart </Link>
        </nav>

        <table className="cart-items">
          {items.map((item) => (
            <tr key={item.id} className="cart-item">
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
                <div className="cart-item-actions">
                  <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </td>
            </tr>
          ))}
        </table>
        
        <div className="cart-summary">
          <h3>Subtotal ({totalItems} items): ${cartTotal.toFixed(2)}</h3>
          <p><strong>I'm happy with my order...</strong></p>
          {/* <p>Send payment using:</p> */}
          <br /><br />
          <nav id="purchaseLinks">
            {/* <Link to="venmo" className="purchaseLink"><i><IoLogoVenmo /></i>Venmo</Link>
            <Link to="zelle" className="purchaseLink"><i><SiZelle /></i>Zelle</Link> */}
            <Link to="checkout-form" className="purchaseLink">Next &rarr; Shipping & Payment Details</Link>
          </nav>
        
        </div>
      </article>
    </div>
  );
};

export default Cart;
