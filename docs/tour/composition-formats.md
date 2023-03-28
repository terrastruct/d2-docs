# Export formats

Since a diagram composed of multiple boards can't be represented as a single image, the
export options are different.

Currently the options are:
- PDF
  - PDF can be multiple pages, so this medium is suitable for multi-board diagrams.
    Each board is simply another page, and objects can be linked to those pages.
- Animated SVG
  - This is useful for small compositions. It's great for a small number of Steps or
    flipping between some Scenarios, but if the composition has too many boards, the
    viewer may get confused or wait until a loop.
  - On the CLI, passing `--animate-interval=1200` sets the resulting SVG to be an
    animation that stays on each board for 1200ms.

## Coming soon

- Interactive SVG
- Animated GIF
- Maybe animated PNG (APNG)
- Maybe HTML
