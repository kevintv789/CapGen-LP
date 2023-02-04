import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import Carousel from "./Carousel/Carousel";

import "./TutorialContainer.css";

const tutorialCopy = [
  {
    title: "Start with a spark ⚡",
    subTitle:
      "Write whatever comes to your mind and let the magic of AI happen!",
  },
  {
    title: "Make it your own 🔥",
    subTitle:
      "Customize each caption with your own flare with a variety of options.",
  },
  {
    title: "Get a taste of the final product 🤩",
    subTitle: "Easily copy, share and edit each caption to your liking!",
  },
  {
    title: "Customize to Perfection 💯",
    subTitle:
      "Fine-tune your captions to perfection with ease, then effortlessly share them on your favorite social media platforms.",
  },
];

const TutorialContainer = () => {
  const { isMobile } = useScreenSize();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex centered column">
      <span className={isMobile ? "fs24 semibold" : "fs40 semibold"}>
        Craft professional-quality captions in seconds ⚡
      </span>
      <p className={isMobile ? "regular lh24" : "fs18 regular lh24"}>
        Make your captions yours with various combinations of tones, lengths,
        emojis and hashtags.
      </p>

      <div className="carousel-container">
        <Carousel
          onSliderChange={(index) => setActiveIndex(index)}
          altText={`${tutorialCopy[activeIndex].title} - ${tutorialCopy[activeIndex].subTitle}`}
        />
      </div>

      <div className="centered column flex">
        <p
          className={
            isMobile ? "semibold carousel-title-m" : "carousel-title semibold"
          }
        >
          {tutorialCopy[activeIndex].title}
        </p>
        <p
          className={
            isMobile ? "regular lh24" : "carousel-subtitle regular lh24"
          }
        >
          {tutorialCopy[activeIndex].subTitle}
        </p>
      </div>
    </div>
  );
};

export default TutorialContainer;
