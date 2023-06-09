# Grid Diagrams

Grid diagrams let you display objects in a structured grid.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid.svg2')}}></div>

:::info
Source code for this is at the bottom of the page.
:::

Two keywords do all the magic:
- `grid-rows`
- `grid-columns`


Setting just `grid-rows`:

```d2
grid-rows: 3
Executive
Legislative
Judicial
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-2.svg2')}}></div>

Setting just `grid-columns`:

```d2
grid-columns: 3
Executive
Legislative
Judicial
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-3.svg2')}}></div>

Setting both `grid-rows` and `grid-columns`:

```d2
grid-rows: 2
grid-columns: 2
Executive
Legislative
Judicial
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-4.svg2')}}></div>

## Width and height

To create specific constructions, use `width` and/or `height`.

```d2
grid-rows: 2
Executive
Legislative
Judicial
The American Government.width: 400
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-dimensions.svg2')}}></div>

Notice how objects are evenly distributed within each row.

## Cells expand to fill

When you define only one of row or column, objects will expand.

```d2
grid-rows: 3
Executive
Legislative
Judicial
The American Government.width: 400
Voters
Non-voters
```

Notice how `Voters` and `Non-voters` fill the space.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-fill.svg2')}}></div>

## Dominant direction

When you apply both row and column, the first appearance is the dominant direction. The
dominant direction is the order in which cells are filled.

For example:

```d2
grid-rows: 4
grid-columns: 2
# bunch of shapes
```

Since `grid-rows` is defined first, objects will fill rows before moving onto columns.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-row-dominant.svg2')}}></div>

But if it were reversed:

```d2
grid-columns: 2
grid-rows: 4
# bunch of shapes
```

It would do the opposite.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-column-dominant.svg2')}}></div>

:::info
These animations are also pure D2, so you can animate grid diagrams being built-up. Use
the `animate-interval` flag with this
[code](https://github.com/terrastruct/d2-docs/blob/f5c762223ce192338d9d7865df3ca8533d683cdc/static/bespoke-d2/grid-row-dominant.d2#L1).
More on this later, in the [composition](/tour/composition) section.
:::

## Gap size

You can control the gap size of the grid with 3 keywords:
- `vertical-gap`
- `horizontal-gap`
- `grid-gap`

Setting `grid-gap` is equivalent to setting both `vertical-gap` and `horizontal-gap`.

`vertical-gap` and `horizontal-gap` can override `grid-gap`.

`grid-gap: 0` in particular can create some interesting constructions:

### Like this map of Japan

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/japan.svg2')}}></div>

> [D2 source](https://github.com/terrastruct/d2/blob/master/docs/examples/japan-grid/japan.d2)

### Or a table of data

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/table.svg2')}}></div>

```d2
# Specified so that objects are written in row-dominant order
grid-rows: 2
grid-columns: 4
grid-gap: 0

classes: {
  header: {
    style.underline: true
  }
}

Element.class: header
Atomic Number.class: header
Atomic Mass.class: header
Melting Point.class: header

Hydrogen
1
"1.008"
"-259.16"

Carbon
6
"12.011"
3500

Oxygen
8
"15.999"
"-218.79"
```

## Connections

Connections for objects within grids are coming soon, but you can connect the grids
themselves like regular objects in D2.

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-connected.svg2')}}></div>

> Source code [here](https://github.com/terrastruct/d2-docs/blob/eda2d8739ce21c656e7608be48cb9067df36eb53/static/d2/grid-connected.d2).

## Nesting

Currently you can nest grid diagrams within grid diagrams. Nesting other types is coming
soon.

```d2
grid-gap: 0
grid-columns: 1
header
body: "" {
  grid-gap: 0
  grid-columns: 2
  content
  sidebar
}
footer
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/grid-nested-grid.svg2')}}></div>

## Source code

This is the text for the image at the top of this page.

```d2
grid-rows: 5
style.fill: black

classes: {
  white square: {
    label: ""
    width: 120
    style: {
      fill: white
      stroke: cornflowerblue
      stroke-width: 10
    }
  }
  block: {
    style: {
      text-transform: uppercase
      font-color: white
      fill: darkcyan
      stroke: black
    }
  }
}

flow1.class: white square
flow2.class: white square
flow3.class: white square
flow4.class: white square
flow5.class: white square
flow6.class: white square
flow7.class: white square
flow8.class: white square
flow9.class: white square

dagger engine: {
  width: 800
  class: block
  style: {
    fill: beige
    stroke: darkcyan
    font-color: blue
    stroke-width: 8
  }
}

any docker compatible runtime: {
  width: 800
  class: block
  style: {
    fill: lightcyan
    stroke: darkcyan
    font-color: black
    stroke-width: 8
  }
  icon: https://icons.terrastruct.com/dev%2Fdocker.svg
}

any ci: {
  class: block
  style: {
    fill: gold
    stroke: maroon
    font-color: maroon
    stroke-width: 8
  }
}
windows.class: block
linux.class: block
macos.class: block
kubernetes.class: block
```
