import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useCart } from "react-use-cart";

const CheckoutForm = () => {
  const { items, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstlast: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: "",
  });

  const [isSent, setIsSent] = useState(false);

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
    };

    emailjs
      .send(
        "service_ms7uxqh",  // ✅ EmailJS Service ID
        "template_3r3br8v",  // ✅ EmailJS Template ID
        templateParams,
        "your_public_key"    // Replace this with your actual EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="cart-container"> {/* Matches the Cart page */}
      <h2>Complete Your Order</h2>
      <p>Enter your details to receive a confirmation email.</p>

      <form onSubmit={handleSendEmail} className="checkout-form">
        
        {/* Full Width - Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="firstlast" value={formData.firstlast} onChange={handleChange} required />
        </div>

        {/* Two Columns - Email & Phone */}
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

        {/* Full Width - Address */}
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        {/* Three Columns - City, State, ZIP */}
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

        {/* Full Width - Comments */}
        <div className="form-group">
          <label>Comments</label>
          <textarea name="comments" value={formData.comments} onChange={handleChange} />
        </div>

        {/* Two Columns - Order & Total */}
        <div className="form-row">
          <div className="form-group">
            <label>Order</label>
            <textarea name="order" value={items.map(item => `${item.name} (x${item.quantity}) - $${item.price.toFixed(2)}`).join("\n")} readOnly />
          </div>
          <div className="form-group">
            <label>Total</label>
            <input type="text" name="total" value={`$${cartTotal.toFixed(2)}`} readOnly />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group button-container">
          <button type="submit">Send Order Confirmation</button>
        </div>
      </form>

      {isSent && <p>Email confirmation sent successfully!</p>}
    </div>
  );
};

export default CheckoutForm;
