---
pagination_next: tour/imports-use-cases
---

# Imports

There are two ways to import. These two examples both have the same result.

<!-- <div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-normal.svg2')}}></div> -->

In the next section, we'll see examples of common import use cases.

## Regular import

- `x.d2`
```d2
x: {
  shape: circle
}
```
- `y.d2`
```
x: @x.d2
x -> y
```

## Spread import

- `x.d2`
```d2
x: {
  shape: circle
}
```
- `y.d2`
```
x: {
  ...@x.d2
}
x -> y
```
