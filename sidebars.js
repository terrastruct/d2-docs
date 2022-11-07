const sidebars = {
  tourSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "tour/intro" },
      collapsed: false,
      items: [
        "tour/intro",
        "tour/experience",
        "tour/design",
        "tour/community",
        "tour/faq",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      link: { type: "doc", id: "tour/install" },
      collapsed: false,
      items: [
        "tour/install",
        "tour/hello-world",
        "tour/shapes",
        "tour/connections",
        "tour/containers",
      ],
    },

    {
      type: "category",
      label: "More objects",
      collapsed: false,
      link: { type: "doc", id: "tour/text" },
      items: ["tour/text", "tour/icons", "tour/sql-tables", "tour/classes"],
    },
    {
      type: "category",
      label: "Customization",
      collapsed: false,
      link: { type: "doc", id: "tour/themes" },
      items: ["tour/themes", "tour/style"],
    },
    {
      type: "category",
      label: "In Depth",
      collapsed: false,
      link: { type: "doc", id: "tour/strings" },
      items: ["tour/strings", "tour/comments", "tour/overrides", "tour/auto-formatter"],
    },
    {
      type: "category",
      label: "Extensions",
      collapsed: false,
      link: { type: "doc", id: "tour/extensions" },
      items: ["tour/vscode", "tour/vim"],
    },
    "tour/cheat-sheet",
    "tour/troubleshoot",
    "tour/future",
    "tour/changelog",
  ],
};

module.exports = sidebars;
