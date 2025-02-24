import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { items, cartTotal } = useCart();
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
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = (e) => {
    e.preventDefault(); 

    const orderDetails = items
      .map((item) => `${item.name} (x${item.quantity}) - $${item.price.toFixed(2)}`)
      .join(", ");

    const venmoLink = `https://venmo.com/u/Pamela-VanLonden?txn=pay&amount=${encodeURIComponent(cartTotal.toFixed(2))}&note=Order%20Payment`;

    const templateParams = {
      firstlast: formData.firstlast,
      email: formData.email,
      phone: formData.phone || "Not provided",
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      comments: formData.comments,
      order: orderDetails,
      total: `$${cartTotal.toFixed(2)}`,
      paymentMethod: formData.paymentMethod,
      venmoLink, 
    };

    emailjs
      .send(
        "service_knvroya", // EmailJS Service ID (Teresita's testing)
        "template_a1k8oej", // EmailJS Template ID (Teresita's testing)
        templateParams,
        "sEQDF6uWOSo_Ho_w2" // EmailJS Public Key (Teresita's testing)
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        
        // Redirect to CheckoutVenmo.jsx after successful email submission
        navigate("/cart/venmo", { state: { venmoLink } });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="cart-container">
      <h2>Complete Your Order</h2>
      <p>Enter your details to receive a confirmation email.</p>

      <form onSubmit={handleSendEmail} className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="firstlast" value={formData.firstlast} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone (optional)</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>ZIP Code</label>
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Comments</label>
          <textarea name="comments" value={formData.comments} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="venmo">Venmo</option>
          </select>
        </div>

        <div className="form-group button-container">
          <button type="submit">Send Order Confirmation</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
