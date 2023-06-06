---
pagination_next: tour/imports-use-cases
---

# Imports

There are two ways to import. These two examples both have the same result.

<!-- <div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-normal.svg2')}}></div> -->

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
x: @x.d2
x -> y
```

### 2. Spread import

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
