import React from "react";
import { ReactSVG } from "react-svg";
import AppleBtn from "../../assets/AppleDownloadBtn.svg";
import useScreenSize from "../../hooks/useScreenSize";
import "./InitialCTA.css";

const InitialCTA = () => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <div
      className={isMobile ? "initial-cta-container-m" : isTablet ? 'initial-cta-container-t' : "initial-cta-container"}
    >
      <div className={isMobile ? "fs40" : "fs60"}>
        <div className="semibold">
          Write <span className="darkSalmon">less</span>,
        </div>
        <div className="semibold">
          captivate <span className="middlePurple">more</span>.
        </div>
      </div>

      <div
        className={isMobile ? "initial-cta-subtitle-m" : "initial-cta-subtitle"}
      >
        Elevate your social media game with{" "}
        <span className="medium">CapGen</span> - the AI-powered caption
        generator that saves you time and amps up your content!
      </div>

      <a href="https://www.apple.com/app-store/" className="initial-cta-apple-btn">
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
