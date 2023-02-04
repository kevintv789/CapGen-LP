import React from "react";
import Lottie from "lottie-react";
import Robot from "../../assets/robot_lottie.json";

import "./Contact.css";
import ContactForm from "./Form/ContactForm";

const Contact = () => {
  return (
    <div className="centered flex column">
      <div className="flex column">
        <p className="semibold fs40 height10">
          Still have questions? Got feedback?
        </p>
        <p className="regular height10">Let us know how we can help.</p>
      </div>

      <div className="flex space-evenly">
        <Lottie animationData={Robot} loop className="lottie-robot" />
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
