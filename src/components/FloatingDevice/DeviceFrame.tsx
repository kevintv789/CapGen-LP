import React from "react";
import LaunchView from ".././assets/launchView.gif";
import { motion } from "framer-motion";

import "./FloatingDevice.css";
import "./DeviceFrame.css";

type Props = {
  contentSrc?: string;
  videoSrc?: string;
};

const DeviceFrame: React.FC<Props> = ({ contentSrc, videoSrc }) => {
  return (
    <motion.div
      className="device-frame-container"
      animate={{ top: [0, 10, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      <div className="outer-box">
        <div className="inner-box">
          {contentSrc && (
            <img src={contentSrc} className="frame-content" alt="device" />
          )}

          {videoSrc && (
            <video className="video" autoPlay muted loop>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceFrame;
