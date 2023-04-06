import React from "react";

import Features from "@site/src/components/Features/Features";

import Sketch from "@site/static/features/sketch.svg2";
import Animations from "@site/static/features/animations.svg2";
import Latex from "@site/static/features/latex.svg2";

const featureHighlights = [
  {
    title: "Adaptive dark mode",
    description:
      "Diagrams adjust color schemes to fit user preferences automatically, anywhere on the web.",
    img: Sketch,
  },
  {
    title: "Sketch mode",
    description: "Our take on a beautiful, hand-drawn aesthetic",
    img: Sketch,
    href: "/tour/sketch",
  },
  {
    title: "Animations",
    description: "D2 is the only language that can produce animated diagrams from text",
    img: Animations,
    href: "/tour/composition/",
  },
  {
    title: "LaTeX",
    description: "Perfect for academic use and research papers",
    img: Latex,
    href: "/tour/text/#latex",
  },
  {
    title: "Any language",
    description:
      "Make diagrams in English, Chinese, French, or even emojis, D2 supports almost all languages.",
    img: Sketch,
    href: "/tour/text/#latex",
  },
  {
    title: "Code snippets",
    description:
      "Made for software diagrams. Syntax highlighted code right in the diagram.",
    img: Sketch,
    href: "/tour/text/#latex",
  },
  {
    title: "Markdown",
    description: "Include longform explanations with Markdown.",
    img: Sketch,
    href: "/tour/text/#latex",
  },
  {
    title: "Tables",
    description: "Show structured data like SQL tables.",
    img: Sketch,
    href: "/tour/text/#latex",
  },
];

const FeatureHighlights = () => {
  return <Features features={featureHighlights} />;
};

export default FeatureHighlights;
