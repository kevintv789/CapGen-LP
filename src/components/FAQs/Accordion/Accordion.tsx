import React from "react";
import { IFAQ } from "../FAQs";
import { motion, AnimatePresence } from "framer-motion";
import ChevronDown from "../../../assets/down-arrow.png";

import "./Accordion.css";

type Props = {
  index: number;
  faq: IFAQ;
  isExpanded: number | boolean | undefined;
  setExpanded: (id: number | boolean | undefined) => void;
};

const variants = {
  open: { opacity: 1, height: "auto", paddingBottom: "3%" },
  collapsed: { opacity: 0, height: 0, paddingBottom: 0 },
};

const Accordion: React.FC<Props> = ({
  index,
  faq,
  isExpanded,
  setExpanded,
}) => {
  const isOpen = index === isExpanded;

  return (
    <div>
      <motion.div
        className="medium faq-header cursor"
        initial={undefined}
        onClick={() => setExpanded(isOpen ? false : index)}
      >
        {faq.question}

        <AnimatePresence>
          <motion.img
            src={ChevronDown}
            className="arrow"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        </AnimatePresence>
      </motion.div>

      <motion.div className="horizontal-line cursor" />

      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="regular"
            initial="collapsed"
            key="content"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {faq.answer}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
