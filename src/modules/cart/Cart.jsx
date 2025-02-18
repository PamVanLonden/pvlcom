import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import html2canvas from "html2canvas/dist/html2canvas";

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

  const handleDownloadOrder = async () => {
    const orderElement = document.createElement("div");
    orderElement.style.padding = "20px";
    orderElement.style.background = "white";
    orderElement.style.width = "300px";
    orderElement.innerHTML = `
      <h3>Order Summary</h3>
      <p>Total Items: ${totalItems}</p>
      <p>Total Amount: $${cartTotal.toFixed(2)}</p>
      <ul>
        ${items.map(item => `<li>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</li>`).join('')}
      </ul>
      <h4>Thank you for your purchase!</h4>
    `;
    document.body.appendChild(orderElement);
    
    const canvas = await html2canvas(orderElement);
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "order.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.body.removeChild(orderElement);
  };

  if (isEmpty) return <h2>Your cart is empty</h2>;

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

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
        <h2>Checkout</h2>
        <p>Send payment using:</p>
        
        <button onClick={() => setSelectedPayment("paypal")}><IoLogoVenmo /> Pay with PayPal / Venmo</button>
        <button><SiZelle /> Pay with Zelle</button>
      </div>

      {selectedPayment === "paypal" && (
        <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: cartTotal.toFixed(2) } }],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              });
            }}
          />
        </PayPalScriptProvider>
      )}

      <button onClick={handleDownloadOrder} style={{ marginTop: "10px" }}>
        Download Order as PNG
      </button>
    </div>
  );
};

export default Cart;
