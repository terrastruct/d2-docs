---
pagination_next: tour/themes
---

# Layouts

D2 supports using a variety of different layout engines. The choice of layout engines can
significantly influence your overall diagram. Each layout also has varying degrees of
support for certain keywords. Though we try our best to keep things consistent, ultimately
we have the most control over our custom-built layout engine and are limited by what the
other layout engines support.

## Layout engines

- [dagre](dagre) (default): A fast, directed graph
  layout engine that produces layered/hierarchical layouts. Based on Graphviz's DOT
  algorithm.
- [ELK](elk): Also a directed graph layout engine. More mature
  than dagre, better maintained (part-time academic research team working on it), with
  recent releases.
- [TALA](tala): New layout engine designed specifically for software architecture diagrams.

You can choose whichever layout engine you like and works best for the diagram you're
making. Each one has its tradeoffs, visit the individual pages to learn more.

To see available layouts on your machine, you can run `d2 layout`. Each layout engine can
also have specific configurable flags, which you can find by running `d2 layout [engine]`,
e.g. `d2 layout dagre`.

To specify the layout used, you can either set the flag `--layout=dagre` or set it as an
environment variable, `$D2_LAYOUT=dagre`.

## Direction

Set `direction` to one of the following to influence an explicit direction your diagram
flows towards.

:::info Options
- `up`
- `down`
- `right`
- `left`
:::

```d2
direction: right
x -> y -> z: hello
```

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/direction-right.svg2')}}></div>

```d2
direction: up
x -> y -> z: hello
```

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/direction-up.svg2')}}></div>

### Directions per container (TALA only)

:::info
Directions can only be set at a global level for all the layout engines except TALA. This
is a limitation of their algorithms, which are hierarchical and only work in one
direction. We are investigating ways to hack it to work.
:::

```d2
direction: down
a -> b -> c

b: {
  direction: right
  1 -> 2 -> 3
}

a: {
  direction: left
  foo -> bar
}
```

<img src={require('@site/static/img/screenshots/tala-direction.png').default} alt="directions in TALA" />
