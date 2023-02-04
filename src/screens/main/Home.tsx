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

const Home = () => {
  return (
    <div>
      <div className="flex-horizontal-between">
        <InitialCTA />
        <FloatingDevice />
      </div>

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
