import React from "react";

const CheckoutVenmo = () => {
  return (
    <div >
      <h2>Thank you for your Purchase</h2>
      <article className="cart-container">
      <p>Please look for an email confirmation </p>
      <p>and you will receive a Venmo request for payment. </p>

      {/* <h3>Venmo</h3> */}
      {/* <figure>
        <img alt="QR Code" src="../assets/venmo-pay-pam.png" />
        <figcaption>Take a picture of this code with your phone to access
          your Venmo app to complete the payment.
        </figcaption>
      </figure> */}
      </article>
    </div>
  );
};

export default CheckoutVenmo;
