const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "D2 Documentation",
  tagline: "D2 is a modern DSL that turns text to diagrams.",
  url: "https://d2lang.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/opengraph.png",
    metadata: [
      {
        name: "keywords",
        content:
          "diagrams, software architecture, text to diagram, graphviz alternative, mermaidjs alternative, plantuml alternative",
      },
    ],
    themeConfig: {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    },
    navbar: {
      logo: {
        alt: "D2",
        src: "img/logo.png",
        srcDark: "img/logo_dark.png",
        href: "https://d2lang.com/",
      },
      items: [
        {
          type: "doc",
          docId: "tour/intro",
          position: "left",
          label: "Tour",
        },
        {
          type: "doc",
          docId: "releases/intro",
          position: "left",
          label: "Releases",
        },
        {
          href: "https://play.d2lang.com",
          position: "left",
          label: "Playground",
        },
        {
          href: "https://github.com/terrastruct/d2",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Terrastruct, Inc.`,
    },
    algolia: {
      appId: "DWAXJIMTZU",
      apiKey: "5c73ff6e63896f9a247aecc8dcecb0ef",
      indexName: "d2lang",
    },
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html", "htm"],
        redirects: [
          {
            to: "/tour/intro",
            from: ["/", "/tour"],
          },
        ],
      },
    ],
    (ctx) => ({
      name: "wasm",
      configureWebpack: () => ({
        module: {
          rules: [
            {
              test: /\.wasm$/,
              type: "asset",
            },
            {
              test: new RegExp(`d2-vscode/syntaxes/.*\.json$`),
              type: "asset",
            },
            {
              test: new RegExp(`shiki/languages/.*\.json$`),
              type: "asset",
            },
            {
              test: /\.svg2$/,
              type: "asset/source",
            },
          ],
        },
      }),
    }),
  ],

  scripts: [
    { src: "https://d2lang.com/js/script.js", defer: true, "data-domain": "d2lang.com" },
  ],
};

module.exports = config;
