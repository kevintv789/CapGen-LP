import React, { useEffect } from "react";
import TermsContent from "../../data/TermsContent";
import parse from "html-react-parser";
import useScreenSize from "../../hooks/useScreenSize";

const Terms = () => {
  const { isMobile } = useScreenSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className={isMobile ? "" : "content"}>{parse(TermsContent)}</div>;
};

export default Terms;
