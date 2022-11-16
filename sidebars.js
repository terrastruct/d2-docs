const sidebars = {
  tourSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "tour/intro" },
      collapsed: true,
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
      collapsed: true,
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
      label: "More Objects",
      collapsed: true,
      link: { type: "doc", id: "tour/text" },
      items: ["tour/text", "tour/icons", "tour/sql-tables", "tour/classes"],
    },
    {
      type: "category",
      label: "Customization",
      collapsed: true,
      link: { type: "doc", id: "tour/layouts" },
      items: ["tour/layouts", "tour/themes", "tour/style"],
    },
    {
      type: "category",
      label: "In Depth",
      collapsed: true,
      link: { type: "doc", id: "tour/strings" },
      items: ["tour/strings", "tour/comments", "tour/overrides", "tour/auto-formatter"],
    },
    {
      type: "category",
      label: "Extensions",
      collapsed: true,
      link: { type: "doc", id: "tour/extensions" },
      items: ["tour/vscode", "tour/vim"],
    },
    "tour/cheat-sheet",
    "tour/troubleshoot",
    "tour/future",
  ],
};

module.exports = sidebars;
