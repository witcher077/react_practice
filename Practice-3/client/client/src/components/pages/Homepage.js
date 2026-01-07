import React from "react";
import HowItWorks from "../UI/HowItWorks/HowItWorks";
import IdeaBanner from "../UI/IdeaBanner/IdeaBanner";
import TopIdea from "../UI/Ideas/TopIdeas/TopIdea";

const Homepage = () => {
  return (
    <>
      <IdeaBanner />
      <HowItWorks />
      <TopIdea />
    </>
  );
};

export default Homepage;
