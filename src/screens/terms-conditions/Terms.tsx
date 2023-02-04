import React, { useEffect } from "react";
import TermsContent from "../../data/TermsContent";
import parse from "html-react-parser";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="content">{parse(TermsContent)}</div>;
};

export default Terms;
