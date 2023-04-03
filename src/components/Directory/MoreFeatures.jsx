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
    description: "Customize your text using Markdown",
    icon: "/features/markdown.svg",
    href: "/tour/text/#standalone-text-is-markdown",
  },
  {
    title: "Images and Icons",
    description: "Import any image or icon online into your diagram",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "SQL Tables",
    description:
      "Diagram entity-relationship diagrams (ERDs) by using the sql_table shape",
    icon: "/features/tables.svg",
    href: "/tour/sql-tables/",
  },
  {
    title: "Classes",
    description: "UML Class diagrams are fully supported",
    icon: "/features/classes.svg",
    href: "/tour/classes",
  },
  {
    title: "Sequence diagrams",
    description: "Sequence diagrams are created by setting shape: sequence_diagram",
    icon: "/features/sequence_diagram.svg",
    href: "/tour/sequence-diagrams",
  },
  {
    title: "Themes",
    description: "D2 comes with many themes that make your diagram look professional",
    icon: "/features/theme.svg",
    href: "/tour/themes",
  },
  {
    title: "Extensions",
    description: "Explore official and community developed plugins and extensions",
    icon: "/features/extension.svg",
    href: "/tour/extensions",
  },
  {
    title: "Exports",
    description: "On the CLI, you may export .d2 into SVG, PNG, PDF.  More coming soon!",
    icon: "/features/exports.svg",
    href: "/tour/exports",
  },
  {
    title: "Cheat sheet",
    description: "Download our handy one-pager D2 syntax cheat sheet",
    icon: "/features/cheat-sheet.svg",
    href: "/tour/cheat-sheet",
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
