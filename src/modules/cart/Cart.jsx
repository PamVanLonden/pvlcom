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
      <article id="shoppingcart">
        <nav className="cart-actions">
          <Link to="/">Continue Shopping</Link>
          <Link to="#" className="clear-cart-link" onClick={(e) => {
            e.preventDefault();
            emptyCart();
          }}> Clear Cart </Link>
        </nav>

        <section className="cart-items">
          {items.map((item) => (
            <figure key={item.id}>
                <figcaption>{item.name}</figcaption>
                <img src={item.imageSrc}  
                    alt={item.name} 
                    onError={(e) => { 
                      console.error("Image failed to load:", item.imageSrc);
                      e.target.src = '/assets/fallback.webp';
                    }} 
                  />
              
              <dl>
                <dt>${item.price.toFixed(2)} </dt>
                <dd><button onClick={() => removeItem(item.id)}>Remove</button></dd>
              </dl>
              </figure>
          ))}
        </section>
        
        <div className="cart-summary">
          <h4>Subtotal ({totalItems} items): ${cartTotal.toFixed(2)}</h4>
          {/* <p>I'm happy with my order...</p> */}
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
