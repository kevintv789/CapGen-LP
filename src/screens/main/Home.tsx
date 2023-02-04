import React from "react";
import "./Home.css";
import {
  Contact,
  FAQs,
  FloatingDevice,
  Header,
  InitialCTA,
  SecondaryCTA,
  TutorialContainer,
} from "../../components";

const Home = () => {
  return (
    <div className="pd15">
      <Header />

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

      <div className="colored-section">
        <FAQs />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
