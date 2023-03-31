import React from "react";

import Features from "@site/src/components/Features/Features";

const featureHighlights = [
  {
    title: "Responsive dark mode",
    description: "Adjusting diagram theme colors from light to dark mode",
  },
  {
    title: "Sketch mode",
    description: "One of our most popular features - make your diagrams look hand drawn!",
  },
  {
    title: "Animations",
    description: "Bring your diagram presentation to life with animations",
  },
  {
    title: "Latex",
    description: "D2 now supports Latex, which runs on the latest version of MathJax",
  },
];

const FeatureHighlights = () => {
  return <Features features={featureHighlights} />;
};

export default FeatureHighlights;
