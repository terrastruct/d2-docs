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

## Complex example source code

This is the text for the image at the top.

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
}

# Classes are introduced later
flow1.class: white square
flow2.class: white square
flow3.class: white square
flow4.class: white square
flow5.class: white square
flow6.class: white square
flow7.class: white square
flow8.class: white square
flow9.class: white square

DAGGER ENGINE: {
  width: 800
  style: {
    fill: beige
    stroke: darkcyan
    font-color: blue
    stroke-width: 8
  }
}

ANY DOCKER COMPATIBLE RUNTIME: {
  width: 800
  style: {
    fill: lightcyan
    stroke: darkcyan
    font-color: black
    stroke-width: 8
  }
  icon: https://icons.terrastruct.com/dev%2Fdocker.svg
}

ANY CI: {
  style: {
    fill: gold
    stroke: maroon
    font-color: maroon
    stroke-width: 8
  }
}

WINDOWS.style: {
  font-color: white
  fill: darkcyan
  stroke: black
}
LINUX.style: {
  font-color: white
  fill: darkcyan
  stroke: black
}
MACOS.style: {
  font-color: white
  fill: darkcyan
  stroke: black
}
KUBERNETES.style: {
  font-color: white
  fill: darkcyan
  stroke: black
}
```
