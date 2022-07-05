import React from "react";

const Contact = () => {
  return (
    <>
        <h1>Contact Us</h1>
          

          <div class="grid grid--half-gutters">
            <div class="grid__item medium-up--one-half">
              <label for="ContactForm-name">Name</label>
              <input type="text" id="ContactForm-name" name="contact[Name]" value=""></input>
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="ContactForm-email">Email <span aria-hidden="true">*</span></label>
              <input
                type="email"
                id="ContactForm-email"
                name="contact[email]"
                autocorrect="off"
                autocapitalize="off"
                value=""
                aria-required="true"></input></div>
          </div>

          <label for="ContactForm-phone">Phone Number</label>
          <input type="tel" id="ContactForm-phone" name="contact[Phone Number]" pattern="[0-9\-]*" value=""></input>

          <label for="ContactForm-message">Message</label>
          <textarea rows="10" id="ContactForm-message" name="contact[Message]"></textarea>

          <input type="submit" class="btn" value="Send"></input>
          <p>Email: greenland.trading.hk@gmail.com</p>
          <p>Whatsapp: 9305-0667</p>
     </>
  );
};

export default Contact;
