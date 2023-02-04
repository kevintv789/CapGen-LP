import React from "react";
import { Link } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import "./Footer.css";

const Footer = () => {
  const { isMobile } = useScreenSize();

  if (isMobile) {
    return (
      <div className="flex centered column footer-container">
        <Link to="/terms-conditions" className="medium footer-link-m">
          Terms & Conditions
        </Link>
        <Link to="/privacy-policy" className="medium footer-link-m">
          Privacy Policy
        </Link>

        <span className="medium footer-link-m lh24">© 2023 Hung Vu. All rights reserved.</span>
      </div>
    );
  }

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
