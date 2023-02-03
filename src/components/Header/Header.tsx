import React from "react";
import appIcon from "../../assets/appIcon_1024.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <span className="headerTitle">
        <img src={appIcon} alt="CapGen App Icon" className="icon" />
        <p className="semibold boldedTitle fs18">CapGen: AI-Powered</p>
        <p className="regular fs18">Caption Generator</p>
      </span>
    </div>
  );
};

export default Header;
