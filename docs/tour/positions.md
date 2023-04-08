# Positions

In general, positioning is controlled entirely by the layout engine. It's one of the
primary benefits of text-to-diagram that you don't have to manually define all the
positions of objects.

However, there are occasions where you want to have some control over positions.
Currently, there are two ways to do that.

## Near

D2 allows you to position items on set points around your diagram.

:::info Possible values
`top-left`, `top-center`, `top-right`,

`center-left`, `center-right`,

`bottom-left`, `bottom-center`, `bottom-right`
:::

Let's explore some use cases:

### Giving your diagram a title

```d2
title: |md
  # A winning strategy
| { near: top-center }

poll the people -> results
results -> unfavorable -> poll the people
results -> favorable -> will of the people
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/near-constant.svg2')}}></div>

### Creating a legend

```d2
direction: right

x -> y: {
  style.stroke: green
}

y -> z: {
  style.stroke: red
}

legend: {
  # This is the TODO
  near: bottom-center
  color1: foo {
    shape: text
    style.font-color: green
  }

  color2: bar {
    shape: text
    style.font-color: red
  }
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/near-container.svg2')}}></div>
