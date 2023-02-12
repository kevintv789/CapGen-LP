import Lottie from "lottie-react";
import React from "react";
import SpaceMan from "../../assets/space_man_empty.json";
import useScreenSize from "../../hooks/useScreenSize";
import "./Fallback.css";

const Fallback = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className="centered flex column">
      <Lottie
        animationData={SpaceMan}
        loop
        className={isMobile ? "lottie-m" : "lottie"}
      />
      <span className={isMobile ? "regular pd15" : "regular fs20 pd15"}>
        Houston, we have a problem.
      </span>
      <span className={isMobile ? "regular" : "regular fs20"}>
        The page you're looking for has gone solemn.
      </span>
    </div>
  );
};

export default Fallback;
