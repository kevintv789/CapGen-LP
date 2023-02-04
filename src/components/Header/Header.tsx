import React from "react";
import appIcon from "../../assets/appIcon_1024.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <a href="#">
        <span className="headerTitle">
          <img src={appIcon} alt="CapGen App Icon" className="icon" />
          <p className="semibold boldedTitle fs18">CapGen: AI-Powered</p>
          <p className="regular fs18">Caption Generator</p>
        </span>
      </a>

      <span className="headerTitle middlePurple">
        <a href="#" className="navLinks semibold fs18">FAQ</a>
        <a href="#" className="navLinks semibold fs18">Contact</a>
      </span>
    </div>
  );
};

export default Header;
