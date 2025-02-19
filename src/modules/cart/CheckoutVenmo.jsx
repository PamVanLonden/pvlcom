import React from "react";

const CheckoutVenmo = () => {
  return (
    <div className="cart-container">
      <h2>Checkout using Venmo</h2>
      <figure>
        <img alt="QR Code" src="../assets/venmo-pay-pam.png" />
        <figcaption>Take a picture of this code with your phone to access
          your Venmo app to complete the payment.
        </figcaption>
      </figure>

      <button>Send Confirmation of order to Pam.</button>
      <p>Or, should customers send the order as an email to me,
        then I send them a venmo request via my phone app. 
      </p>

      <p>* TERESITA:
        Can the QR Code be generated so it includes the following data?</p>
        <br />https://www.npmjs.com/package/react-qr-code
        <br />
        https://dev.to/onlyoneerin/creating-dynamic-qr-codes-using-reactjs-a-step-by-step-tutorial-341a
      <br />https://discussions.apple.com/thread/253472813?sortBy=rank
      <br />https://developers.google.com/pay/api/web/overview
        <ul >
        <li>My email address/account for the app</li>
        <li>the total amount</li>
        <li>the title of each purchase</li>
      </ul>
      <p>And can an email be sent directly to me and the customer
        that shows the checkout page, as soon as the customerclick the Confirmation button?
         This would be instead of the customer
        saving a PNG file of the page.  
      </p>
      
    </div>
  );
};

export default CheckoutVenmo;
