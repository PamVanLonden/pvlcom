import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useCart} from "react-use-cart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { items, cartTotal, emptyCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);   
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstlast: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: "",
    paymentMethod: "venmo",
    venmoUsername: "",
  });

  const closeModal = () => {
    setIsOpen(false);
    navigate("/");  
};
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = (e) => {
    e.preventDefault(); 

    if (formData.paymentMethod === "venmo" && !formData.venmoUsername.trim()) {
      alert("Please enter your Venmo username.");
      return;
    }

    if (formData.paymentMethod === "zelle" && !formData.zelleUsername.trim()) {
      alert("Please enter your Zelle phone number or email adddress. ");
      return;
    }

    const orderDetails = items
      .map((item) => `${item.name} (x${item.quantity}) - ${item.price.toFixed(2)}`)
      .join(", ");

    const templateParams = Object.fromEntries(
      Object.entries({
        firstlast: formData.firstlast,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        comments: formData.comments,
        order: orderDetails,
        total: `${cartTotal.toFixed(2)}`,
        paymentMethod: formData.paymentMethod,
        venmoUsername: formData.venmoUsername
      }).filter(([_, value]) => value && value.trim() !== "")
    );

    emailjs
      .send(
        "service_ms7uxqh", // EmailJS Service ID
        "template_3r3br8v", // EmailJS Template ID
        templateParams,
        "Gi9WKk1EkoM7_PaVu" // EmailJS Public Key
      )
      .then((response) => {
        setIsOpen(true); // Show modal on success
        emptyCart();  // Clear the shopping cart
    })
      .catch((error) => {
        alert(`Your order was <strong>not</strong> sent. Please try again.`);
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="cart-container">
      <h2>Shipping & Payment Details</h2>
      <article >
      <p>Enter your details to receive a confirmation email.</p>

      <form onSubmit={handleSendEmail} className="checkout-form">
        <p className="form-group">
          <label htmlFor="firstlast">Full Name</label>
          <input type="text" id="firstlast" name="firstlast" value={formData.firstlast} onChange={handleChange} required />
        </p>

        <div className="form-row">
          <p className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </p>
          <p className="form-group">
            <label htmlFor="phone">Phone (optional)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </p>
        </div>

        <p className="form-group">
          <label htmlFor="addr">Address</label>
          <input type="text" id="addr" name="address" value={formData.address} onChange={handleChange} required />
        </p>

        <div className="form-row">
          <p className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
          </p>
          <p className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
          </p>
          <p className="form-group">
            <label htmlFor="zip">ZIP Code</label>
            <input type="number" id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
          </p>
        </div>

        <p className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea name="comments" value={formData.comments} onChange={handleChange} id="comments" />
        </p>

        <p className="form-group">
          <label htmlFor="pmt">Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} id="pmt" required>
            <option value="venmo">Venmo</option>
            <option value="zelle">Zelle</option>
          </select>
        </p>

        {formData.paymentMethod === "venmo" && (
          <p className="form-group">
            <label htmlFor="venmo">Venmo Username</label>
            <input type="text" name="venmoUsername" value={formData.venmoUsername} onChange={handleChange} id="venmo" required />
          </p>
        )}

        {formData.paymentMethod === "zelle" && (
          <p className="form-group">
            <label htmlFor="zelle">Zelle email address or phone number</label>
            <input type="text" name="zelleUsername" value={formData.zelleUsername} onChange={handleChange} id="zelle" required />
          </p>
        )}

        <label className="form-group button-container">
          <button type="submit">Send Order Confirmation</button>
        </label>
      </form>

      </article>

{/* Confirm via Modal */}
      {isOpen && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <h2>Order Confirmation</h2>
                  <p>Your order has successfully been sent to Pam. <br />
                    Please check your email to complete the order without fees. </p>
                  <label className="button-section">
                      <button className="close-modal-btn" onClick={closeModal}>Close and return to Gallery</button>
                  </label>
                </div>
            </div>
        )}

    </div>
  );
};

export default CheckoutForm;
