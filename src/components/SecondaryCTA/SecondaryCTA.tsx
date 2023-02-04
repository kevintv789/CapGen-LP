import React from "react";
import { ReactSVG } from "react-svg";
import AppleBtn from "../../assets/AppleDownloadBtn.svg";
import useScreenSize from "../../hooks/useScreenSize";

const SecondaryCTA = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className="centered flex column">
      <span
        className={isMobile ? "semibold fs24 pdt30" : "semibold fs40 pdt30"}
      >
        Ready to boost your social media prowess? 💪
      </span>
      <p className={isMobile ? "regular lh24" : "regular height10 lh24"}>
        Transform your captions with AI-powered magic, download now!
      </p>

      <a href="#" className="secondary-cta-apple-btn">
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
