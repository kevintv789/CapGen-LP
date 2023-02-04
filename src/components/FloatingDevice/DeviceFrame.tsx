import React from "react";
import { motion } from "framer-motion";

import "./FloatingDevice.css";
import "./DeviceFrame.css";
import useScreenSize from "../../hooks/useScreenSize";

type Props = {
  contentSrc?: string;
  videoSrc?: string;
};

const DeviceFrame: React.FC<Props> = ({ contentSrc, videoSrc }) => {
  const { isMobile } = useScreenSize();

  return (
    <motion.div
      className={
        isMobile ? "device-frame-container-m" : "device-frame-container"
      }
      animate={{ top: isMobile ? [60, 50, 60] : [0, 10, 0] }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      <div className="outer-box">
        <div className={isMobile ? "inner-box-m" : "inner-box"}>
          {contentSrc && (
            <img
              src={contentSrc}
              className={isMobile ? "frame-content-m" : "frame-content"}
              alt="device"
            />
          )}

          {videoSrc && (
            <video
              className={isMobile ? "video-m" : "video"}
              autoPlay
              muted
              loop
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceFrame;
