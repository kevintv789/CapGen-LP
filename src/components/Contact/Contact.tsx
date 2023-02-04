import React from "react";
import Lottie from "lottie-react";
import Robot from "../../assets/robot_lottie.json";

import "./Contact.css";
import ContactForm from "./Form/ContactForm";
import useScreenSize from "../../hooks/useScreenSize";

const Contact = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className="centered flex column">
      <div className="flex column">
        <p
          className={
            isMobile ? "semibold fs24 height30" : "semibold fs40 height10"
          }
        >
          Still have questions? Got feedback?
        </p>
        <p className="regular height10">Let us know how we can help.</p>
      </div>

      <div className={isMobile ? "flex centered column" : "flex space-evenly"}>
        <Lottie
          animationData={Robot}
          loop
          className={isMobile ? "" : "lottie-robot"}
        />
        <div className={isMobile ? "flex centered" : "contact-form-container"}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
