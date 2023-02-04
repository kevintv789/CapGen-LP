import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import Accordion from "./Accordion/Accordion";
import "./FAQs.css";

export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}

const faqList: IFAQ[] = [
  {
    id: 0,
    question: "What is this app?",
    answer:
      "This app is an AI-powered caption generator that helps you create professional-quality captions in seconds.",
  },
  {
    id: 1,
    question: "How does it work?",
    answer:
      "The app prompts you to write a caption, then offers an endless combination of ways your captions can be customized by " +
      "allowing you to pick from a range of options.",
  },
  {
    id: 2,
    question: "What makes it different from other caption apps?",
    answer:
      "This app uses AI technology to generate captions, making it easier and faster for you to create captions, compared to manual typing or copy-pasting. " +
      "It also offers a wider range of customization options, such as tones, emojis, hashtags and lengths.",
  },
  {
    id: 3,
    question: "Is it free to use?",
    answer: "The app is completely free to use forever!",
  },
  {
    id: 4,
    question: "Is it safe to use?",
    answer:
      "Yes, the app is safe to use. We take privacy and security seriously, and do our due diligence to ensure that your data is protected.",
  },
  {
    id: 5,
    question: "Is it available on both iOS and Android?",
    answer: "As of now, CapGen is only available for the iOS platform.",
  },
  {
    id: 6,
    question: "What if I encounter a problem while using the app?",
    answer:
      "If you encounter any issues while using the app, you can contact us for assistance. We will be happy to help you resolve any problems you may have.",
  },
];

const FAQs = () => {
  const { isMobile } = useScreenSize();

  const [expanded, setExpanded] = useState<number | boolean | undefined>(
    undefined
  );

  return (
    <div className="centered flex column">
      <p className={isMobile ? 'semibold fs24 height10' : "semibold fs40 height10"}>Frequently asked questions</p>
      <p className="regular height10">Ask us anything, we’re here to help!</p>

      <div className="faq-container">
        {faqList.map((f) => {
          return (
            <Accordion
              key={f.id}
              faq={f}
              setExpanded={setExpanded}
              isExpanded={expanded}
              index={f.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
