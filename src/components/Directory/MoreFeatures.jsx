import React from "react";

import Features from "@site/src/components/Features/Features";

const moreFeatures = [
  {
    title: "Containers",
    description: "Declaring a shape inside another shape",
    icon: "/features/containers.svg",
    href: "/tour/containers",
  },
  {
    title: "Languages",
    description: "Most languages are supported, including non-Latin and even emojis",
    icon: "/features/languages.svg",
    href: "/tour/text/#most-languages-are-supported",
  },
  {
    title: "Markdown",
    description: "Description on Markdown text",
    icon: "/features/markdown.svg",
    href: "/tour/text/#standalone-text-is-markdown",
  },
  {
    title: "Images and Icons",
    description: "Description on images and icons",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
];

const MoreFeatures = () => {
  return (
    <>
      <Features features={moreFeatures} />
      <div className="Seperator" />
    </>
  );
};

export default MoreFeatures;
