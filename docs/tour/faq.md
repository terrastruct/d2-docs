# Frequently asked questions

## How does this compare to Mermaid, Graphviz, PlantUML?

We've created a website with detailed comparisons:
[https://text-to-diagram.com](https://text-to-diagram.com). It is a community effort where
anyone can add examples or request changes or compare features. The maintainers of Mermaid
have contributed to it.

## Is this designed for small diagrams or complex ones?

Both. The syntax is kept minimal and unstructured to make small diagrams with as little
lines as possible. At the same time, the language includes IDE features like an
autoformatter, error messages, and comments to maintain large diagrams.

However, it is not designed for "big data". We do not test D2 on thousands of nodes.

## Does the D2 CLI collect telemetry?

No, D2 does not use an internet connection after installation, except to check for version
updates from GitHub periodically.

## Does D2 need a browser to run?

No, D2 can run entirely server-side.

## Can D2 run on a browser?

Yes, with WebAssembly. D2 runs on [https://play.d2lang.com](https://play.d2lang.com) this
way.We are working on including the build with the releases, as well as provide
instructions and examples so you can include it in your browser projects.

## Can I use D2 online?

[https://play.d2lang.com](https://play.d2lang.com)
