import React from "react";
import { ReactSVG } from "react-svg";
import AppleBtn from "../../assets/AppleDownloadBtn.svg";

import "./SecondaryCTA.css";

const SecondaryCTA = () => {
  return (
    <div className="centered flex column">
      <p className="semibold fs40 height10">Ready to boost your social media prowess? 💪</p>
      <p className="regular height10">Transform your captions with AI-powered magic, download now!</p>

      <a href="#" className="initial-cta-apple-btn">
        <ReactSVG
          src={AppleBtn}
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 200px; height: 100px");
          }}
        />
      </a>
    </div>
  );
};

export default SecondaryCTA;
