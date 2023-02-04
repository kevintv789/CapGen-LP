import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="flex space-between footer-container">
      <span className="medium">© 2023 Hung Vu. All rights reserved.</span>

      <div>
        <Link to="/terms-conditions" className="medium footer-link">
          Terms & Conditions
        </Link>
        <Link to="/privacy-policy" className="medium footer-link">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
