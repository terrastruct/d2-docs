---
pagination_next: tour/imports-use-cases
---

# Syntax

There are two ways to import. These two examples both have the same result:

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-normal.svg2')}}></div>

> Result of running both types of imports below

In the next section, we'll see examples of common import use cases.

## Two types of imports

### 1. Regular import

- `x.d2`
```d2
x: {
  shape: circle
}
```
- `y.d2`
```
a: @x.d2
a -> b
```

This is the equivalent of giving the entire file of `x` as a map that `a` sets as its
value.

### 2. Spread import

- `x.d2`
```d2
x: {
  shape: circle
}
```
- `y.d2`
```
a: {
  ...@x.d2
}
a -> b
```

This tells D2 to take the contents of the file `x` and insert it into the map.

:::info
Spread imports only work within maps. Something like `a: ...@x.d2` is an invalid usage.
:::

## Omit the extension

Above, we wrote the full file name for clarity, but the correct usage is to just specify
the file name without the suffix. If you run D2's autoformatter, it'll change

```d2
x: @x.d2
```

into

```d2
x: @x
```

The reason for that is to allow the following feature.

## Targeted imports

You don't have to import the full file.

For example, if you have a file that defines all the people in your organization, and you
just want to show some relations between managers, you can import a specific object.

`donut-flowchart.d2`
```d2
...@people.management
joe -> donuts: loves
jan -> donuts: brings
```

`people.d2`
```d2
management: {
  joe: {
    shape: person
    label: Joe Donutlover
  }
  jan: {
    shape: person
    label: Jan Donutbaker
  }
}
# Notice how these do not appear in the rendered diagram
employees: {
  toby: {
    shape: person
    label: Toby Simonton
  }
}
```

### Render of donut-flowchart.d2

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-targeted.svg2')}}></div>
