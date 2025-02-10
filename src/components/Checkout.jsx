import React from "react";

const Checkout = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <p>Send payment using:</p>
      <ul>
        <li>Venmo: @your-venmo-username</li>
        <li>Zelle: your-email@example.com</li>
        <li>Cash App: $yourcashtag</li>
      </ul>
      <p>Please upload a screenshot of the payment or enter the confirmation code.</p>
      <input type="file" />
      <button>Submit</button>
    </div>
  );
};

export default Checkout;
