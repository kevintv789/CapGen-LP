import React from "react";
import DeviceFrame from "./DeviceFrame";
import Launchview from "../../assets/launchView.gif";
import DemoVid from "../../assets/demo-video.mp4";

import "../Initial-CTA/InitialCTA.css";
import "./FloatingDevice.css";

const FloatingDevice = () => {
  return (
    <div className="initial-cta-container floating-device-container">
      <div className="device-static">
        <DeviceFrame contentSrc={Launchview} />
      </div>

      <div className="device-demo">
        <DeviceFrame  videoSrc={DemoVid} />
      </div>
    </div>
  );
};

export default FloatingDevice;
