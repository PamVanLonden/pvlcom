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

    // Generate order details dynamically
    const orderDetails = items
      .map((item) => `${item.name} (x${item.quantity}) - $${item.price.toFixed(2)}`)
      .join(", ");

    const templateParams = {
      firstlast: formData.firstlast,
      email: formData.email,
      phone: formData.phone || "Not provided",
      address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.zip}`,
      comments: formData.comments,
      order: orderDetails,
      total: `$${cartTotal.toFixed(2)}`,
    };

    // Send email to customer & owner
    emailjs
      .send("service_ms7uxqh", "template_3r3br8v", templateParams, "your_user_id")
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="cart-container">
      <h2>Complete Your Order</h2>
      <p>Enter your details to receive a confirmation email.</p>

      <form onSubmit={handleSendEmail}>
        <label>Name:</label>
        <input type="text" name="firstlast" value={formData.firstlast} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone (optional):</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />

        <label>ZIP Code:</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />

        <label>Comments:</label>
        <textarea name="comments" value={formData.comments} onChange={handleChange} />

        <button type="submit">Send Order Confirmation</button>
      </form>

      {isSent && <p>Email confirmation sent successfully!</p>}
    </div>
  );
};

export default CheckoutForm;
