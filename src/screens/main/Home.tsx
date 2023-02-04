import React from "react";
import "./Home.css";
import {
  Contact,
  FAQs,
  FloatingDevice,
  InitialCTA,
  SecondaryCTA,
  TutorialContainer,
} from "../../components";

import useScreenSize from "../../hooks/useScreenSize";

const Home = () => {
  const { isTablet, isMobile, isDesktopOrLaptop } = useScreenSize();

  return (
    <div>
      {(isDesktopOrLaptop || isTablet) && (
        <div className="flex-horizontal-between">
          <InitialCTA />
          <FloatingDevice />
        </div>
      )}

      {isMobile && (
        <div>
          <InitialCTA />
          <FloatingDevice />
        </div>
      )}

      <div className="colored-section">
        <TutorialContainer />
      </div>

      <div>
        <SecondaryCTA />
      </div>

      <div className="colored-section" id="faqs">
        <FAQs />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
