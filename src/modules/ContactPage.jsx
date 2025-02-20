import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";


// Method:
// https://mydevpa.ge/blog/how-to-send-emails-in-react-app-using-emailjs
// dashboard.emailjs.com to set up account and design response template

function ContactPage() {
    // Set names for values
    const [formData, setFormData] = useState({
      firstlast: "",
      email: "",
      comments: "",
      referrer: "",
      visit: "",
      subscribe: ""
    })
  
    // Define the attribute for the target.
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }

    // Define credentials
    const handleSubmit = (e) => {
      e.preventDefault()
      emailjs
      .sendForm(
        "service_50guucf",
        "template_bumggtl",
        e.target,
        "RfXyLTcIAEQczcB0z"
      )
      .then(
        (result) => {
          alert("Your contact message was sent to Pam.")
        },
        (error) => {
          alert("An error occurred. Please try again.")
        }
      )

    // Update values
    setFormData({
      firstlast: "",
      email: "",
      comments: "",
      referrer: "",
      visit: "",
      subscribe: ""
    })
  }
 
    return (
      <>
      <form onSubmit={handleSubmit}>
        <fieldset >
             <legend>Tell us about yourself</legend>

              <label for="firstlast" class="required">First and Last Name</label>
                <input 
                  type="text" 
                  name="firstlast" id="firstlast" 
                  size="30" 
                  maxLength="100" 
                  required 
                  placeholder="First and last name" 
                  autofocus
                  tabindex="1"
                  value={formData.firstlast}
                  onChange={handleChange}
                  />
               

    
             <label for="email" class="required">Email</label>
                    <input type="email" 
                      name="email" id="email" 
                      size="30" maxLength="100" 
                      required 
                      pattern="[^ @]+@[^ @]+\.[a-z]+"
                      placeholder="name@host.com"
                      value={formData.email}
                      onChange={handleChange}
                       />
                
             <p><label for="comments" class="required">What else would you like to tell me?</label>
                <textarea 
                  name="comments" id="comments" minLength="3" maxLength="250" 
                  required placeholder="Write between 3 and 250 characters or less."
                  value={formData.comments}
                  onChange={handleChange}
                   ></textarea>
              </p>
          </fieldset>

          <fieldset>
              <legend>Provide some feedback</legend>

              <label for="how">How did you hear about us?</label>
                  <select name="referrer" id="how" tabindex="2" 
                  value={formData.referrer}
                  onChange={handleChange}
                  >
                    <option value="Instagram">Instagram</option>
                    <option value="a friend">Friend</option>
                    <option value="an advertisement">Advertisement</option>
                    <option value="Discord">Discord</option>
                    <option value="Other" selected>Other</option>
                  </select>

              <p>Would you visit again?
                  <label for="yes">
                    <input type="radio" name="visit" id="yes"
                    value="will"
                    checked={formData.visit === "will"}
                    onChange={handleChange}
                    />
                      Yes, I will.</label>
                  <label for="no">
                    <input type="radio" name="visit" id="no" 
                    value="won't"
                    checked={formData.visit === "won't"}
                    onChange={handleChange}
                    />
                    No, probably not.</label>
                  <label for="maybe">
                    <input type="radio" name="visit" id="maybe" 
                    value="might"
                    checked={formData.visit === "might"}
                    onChange={handleChange}
                    />
                    Maybe</label>
              </p>
          

              <p>What kinds of subscriptions do you prefer?
                <label for="monthly" title="News about such and such.">
                  <input type="checkbox" name="subscribe" id="monthly"  
                  value="monthly news" 
                  checked={formData.monthly}
                  onChange={handleChange}
                  />
                  Send me the monthly newsletter.</label>

                <label for="coupons">
                  <input type="checkbox" name="subscribe" id="coupons"  
                  value="weekly coupons"
                  checked={formData.coupons}
                  onChange={handleChange}
                   />
                  Send me weekly coupons</label>

                <label for="alerts">
                  <input type="checkbox" name="subscribe" id="alerts"  
                  value="daily alerts"
                  checked={formData.alerts}
                  onChange={handleChange} />
                  Send me daily alerts</label>
                
                <label for="none">
                  <input type="checkbox" name="subscribe" id="none"  
                  value="no subscriptions"  
                  checked={formData.none}
                  onChange={handleChange} />
                  No subscriptions, please.</label>
              </p>

              <label htmlFor="submit"> </label> 
              <button type="submit" id="submit">Send</button>
              <p>Please note: Confirmation may be delayed by a few seconds.</p>
          </fieldset>

      </form>
   </>
   );
};
export default ContactPage;
