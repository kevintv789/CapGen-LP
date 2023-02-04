import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex centered column">
      <p className="fs40 semibold tutorial-title">
        Craft professional-quality captions in seconds ⚡
      </p>
      <p className="fs18 regular">
        Make your captions yours with various combinations of tones, lengths,
        emojis and hashtags.
      </p>

      <div className="carousel-container">
        <Carousel onSliderChange={(index) => setActiveIndex(index)} />
      </div>

      <div className="centered column flex">
        <p className="carousel-title semibold">{tutorialCopy[activeIndex].title}</p>
        <p className="carousel-subtitle regular">{tutorialCopy[activeIndex].subTitle}</p>
      </div>
    </div>
  );
};

export default TutorialContainer;
