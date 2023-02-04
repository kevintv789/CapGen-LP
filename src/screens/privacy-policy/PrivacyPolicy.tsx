import React, { useEffect } from "react";
import PrivacyPolicyContent from "../../data/PrivacyPolicyContent";
import parse from "html-react-parser";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div className="content">{parse(PrivacyPolicyContent)}</div>;
};

export default PrivacyPolicy;
