import React from "react";

import Features from "@site/src/components/Features/Features";

const featureHighlights = [
  // {
  //   title: "Responsive dark mode",
  //   description: "Adjusting diagram theme colors from light to dark mode",
  //   img: "",
  // },
  {
    title: "Sketch mode",
    description: "One of our most popular features - make your diagrams look hand drawn!",
    img: "/features/sketch.svg",
    href: "/tour/sketch",
  },
  {
    title: "Animations",
    description: "Bring your diagram presentation to life with animations",
    img: "/features/animation.svg",
    href: "/tour/composition/",
  },
  {
    title: "Latex",
    description: "D2 now supports Latex, which runs on the latest version of MathJax",
    img: "/features/latex.svg",
    href: "/tour/text/#latex",
  },
];

const FeatureHighlights = () => {
  return <Features features={featureHighlights} />;
};

export default FeatureHighlights;
