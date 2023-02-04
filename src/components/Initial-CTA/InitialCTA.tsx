import React from "react";
import { ReactSVG } from "react-svg";
import AppleBtn from "../../assets/AppleDownloadBtn.svg";
import "./InitialCTA.css";

const InitialCTA = () => {
  return (
    <div className="initial-cta-container">
      <div className="fs60">
        <div className="semibold">
          Write <span className="darkSalmon">less</span>,
        </div>
        <div className="semibold">
          captivate <span className="middlePurple">more</span>.
        </div>
      </div>

      <div className="initial-cta-subtitle">
        Elevate your social media game with{" "}
        <span className="medium">CapGen</span> - the AI-powered caption
        generator that saves you time and amps up your content!
      </div>

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

export default InitialCTA;
