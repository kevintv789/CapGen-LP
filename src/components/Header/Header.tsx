import React from "react";
import { Link, useLocation } from "react-router-dom";
import appIcon from "../../assets/appIcon_1024.png";
import useScreenSize from "../../hooks/useScreenSize";

import "./Header.css";

const Header = () => {
  const { isMobile } = useScreenSize();
  const location = useLocation();

  const scrollTo = (id: string) => {
    var element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className={isMobile ? "text-align-center" : "headerContainer"}>
      <Link to="/">
        <span className={isMobile ? "" : "headerTitle"}>
          <img src={appIcon} alt="CapGen App Icon" className="icon" />
          <p
            className={
              isMobile ? "semibold height5" : "semibold boldedTitle fs18"
            }
          >
            CapGen: AI-Powered
          </p>
          <p className={isMobile ? "regular" : "regular fs18"}>
            Caption Generator
          </p>
        </span>
      </Link>

      {location.pathname === "/" && !isMobile && (
        <span className="headerTitle middlePurple">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("faqs");
            }}
            className="navLinks semibold fs18"
          >
            FAQ
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="navLinks semibold fs18"
          >
            Contact
          </a>
        </span>
      )}
    </div>
  );
};

export default Header;
