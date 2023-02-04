import React, { useEffect } from "react";
import PrivacyPolicyContent from "../../data/PrivacyPolicyContent";
import parse from "html-react-parser";
import useScreenSize from "../../hooks/useScreenSize";

const PrivacyPolicy = () => {
  const { isMobile } = useScreenSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={isMobile ? "" : "content"}>
      {parse(PrivacyPolicyContent)}
    </div>
  );
};

export default PrivacyPolicy;
