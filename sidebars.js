const sidebars = {
  tourSidebar: [
    {
      type: "category",
      label: "Introduction",
      link: { type: "doc", id: "tour/intro" },
      items: [
        "tour/intro",
        "tour/experience",
        "tour/design",
        "tour/community",
        "tour/faq",
        "tour/future",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      link: { type: "doc", id: "tour/install" },
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
      label: "Special Objects",
      link: { type: "doc", id: "tour/text" },
      items: [
        "tour/text",
        "tour/icons",
        "tour/sql-tables",
        "tour/classes",
        "tour/sequence-diagrams",
      ],
    },
    {
      type: "category",
      label: "Customization",
      link: { type: "doc", id: "tour/layouts" },
      items: ["tour/layouts", "tour/themes", "tour/style", "tour/sketch"],
    },
    {
      type: "category",
      label: "In Depth",
      link: { type: "doc", id: "tour/strings" },
      items: ["tour/strings", "tour/comments", "tour/overrides", "tour/auto-formatter"],
    },
    {
      type: "category",
      label: "Extensions",
      link: { type: "doc", id: "tour/extensions" },
      items: ["tour/vscode", "tour/vim", "tour/obsidian", "tour/slack"],
    },
    "tour/cheat-sheet",
    "tour/troubleshoot",
  ],
  releasesSidebar: [
    {
      type: "category",
      label: "Releases",
      link: { type: "doc", id: "releases/intro" },
      items: [
        "releases/intro",
        "releases/0.1.3",
        "releases/0.1.2",
        "releases/0.1.1",
        "releases/0.1.0",
        "releases/0.0.13",
      ],
    },
  ],
};

module.exports = sidebars;
