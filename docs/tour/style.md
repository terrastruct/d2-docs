# Styles

If you'd like to overwrite the style of a theme for a particular object, you may add styles to objects like so:

```d2
x: {
  style: {
    opacity: 0.6
    fill: orange
    stroke: "#53C0D8"
    stroke-width: 5
    shadow: true
  }
}

y: {
  style: {
    opacity: 0.6
    fill: red
    3d: true
  }
}
```

<img src={require('@site/static/img/screenshots/style_1.png').default} alt="styling example" width="500"/>

Here is the full list of styles you can configure. More coming soon, as well as classes so you can aggregate styles.

```d2
# Float between 0 and 1
opacity: 0.6

# CSS color or hex code
fill: orange

# CSS color or hex code
stroke: "#53C0D8"

# Integer betwen 1 and 15
stroke-width: 5

# Integer betwen 0 and 10
stroke-dash: 5

# Only applicable to shapes, except ovals
# Integer betwen 0 and 20
border-radius: 4

# CSS color or hex code
font-color: red

# Only applicable to shapes
# true or false
shadow: true

# Only applicable to shapes
# true or false
multiple: true

# Only applicable to squares
# true or false
3d: true

# Only applicable to edges
animated: false

# Only applicable to shapes
# Can be an external URL
link: https://google.com
# Or an internal board
link: Overview.Untitled Board 2
```
