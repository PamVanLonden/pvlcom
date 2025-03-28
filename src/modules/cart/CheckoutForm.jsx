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
    venmoUsername: "",
  });

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

    const orderDetails = items
      .map((item) => `${item.name} (x${item.quantity}) - $${item.price.toFixed(2)}`)
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
        total: `$${cartTotal.toFixed(2)}`,
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
        console.log("Email sent successfully:", response.status, response.text);
        
        if (formData.paymentMethod === "venmo") {
          navigate("/cart/venmo");
        } else if (formData.paymentMethod === "zelle") {
          navigate("/cart/zelle");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div >
      <h2>Shipping & Payment Details</h2>
      <article className="cart-container">
      <p>Enter your details to receive a confirmation email.</p>

      <form onSubmit={handleSendEmail} className="checkout-form">
        <p className="form-group">
          <label>Full Name</label>
          <input type="text" name="firstlast" value={formData.firstlast} onChange={handleChange} required />
        </p>

        <div className="form-row">
          <p className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </p>
          <p className="form-group">
            <label>Phone (optional)</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </p>
        </div>

        <p className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </p>

        <div className="form-row">
          <p className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </p>
          <p className="form-group">
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </p>
          <p className="form-group">
            <label>ZIP Code</label>
            <input type="number" name="zip" value={formData.zip} onChange={handleChange} required />
          </p>
        </div>

        <p className="form-group">
          <label>Comments</label>
          <textarea name="comments" value={formData.comments} onChange={handleChange} />
        </p>

        <p className="form-group">
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="venmo">Venmo</option>
            <option value="zelle">Zelle</option>
          </select>
        </p>

        {formData.paymentMethod === "venmo" && (
          <p className="form-group">
            <label>Venmo Username</label>
            <input type="text" name="venmoUsername" value={formData.venmoUsername} onChange={handleChange} required />
          </p>
        )}

        <div className="form-group button-container">
          <button type="submit">Send Order Confirmation</button>
        </div>
      </form>

      </article>
    </div>
  );
};

export default CheckoutForm;
