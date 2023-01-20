# Styles

If you'd like to customize the style of a shape, the following reserved keywords can be
set under the `style` field.

Below is a catalog of all valid styles, applied individually to this baseline diagram.

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-base.svg2')}}></div>

:::note
The following SVGs are rendered with `direction: right`, but omitted from the shown scripts for
brevity.
:::


## Style keywords
- [opacity](#opacity)
- [stroke](#stroke)
- [fill](#fill) (shape only)
- [stroke-width](#stroke-width)
- [stroke-dash](#stroke-dash)
- [border-radius](#border-radius) (shape only)
- [shadow](#shadow) (shape only)
- [3D](#3d) (rectangle/square only)
- [multiple](#multiple) (shape only)
- [font-size](#font-size)
- [font-color](#font-color)
- [animated](#animated) (connection only)
- [bold, italic, underline](#bold-italic-underline)

## Opacity

Float between `0` and `1`.

```d2
x -> y: hi {
  style: {
    opacity: 0.4
  }
}
x.style.opacity: 0
y.style.opacity: 0.7
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-opacity.svg2')}}></div>

## Stroke

CSS color name or hex code.

```d2
x -> y: hi {
  style: {
    stroke: deepskyblue
  }
}
# We need quotes for hex otherwise it gets interpreted as comment
x.style.stroke: "#f4a261"
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-stroke.svg2')}}></div>

## Fill

CSS color name or hex code.

```d2
x -> y: hi
x.style.fill: "#f4a261"
y.style.fill: honeydew
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-fill.svg2')}}></div>

## Stroke Width

Integer between `1` and `15`.

```d2
x -> y: hi {
  style: {
    stroke-width: 8
  }
}
x.style.stroke-width: 1
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-stroke-width.svg2')}}></div>

## Stroke Dash

Integer between `0` and `10`.

```d2
x -> y: hi {
  style: {
    stroke-dash: 3
  }
}
x.style.stroke-dash: 5
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-stroke-dash.svg2')}}></div>

## Border Radius

Integer between `0` and `20`.

```d2
x -> y: hi
x.style.border-radius: 3
y.style.border-radius: 8
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-border-radius.svg2')}}></div>

## Shadow

`true` or `false`.

```d2
x -> y: hi
x.style.shadow: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-shadow.svg2')}}></div>

## 3D

`true` or `false`.

```d2
x -> y: hi
x.style.3d: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-3d.svg2')}}></div>

## Multiple

`true` or `false`.

```d2
x -> y: hi
x.style.multiple: true
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-multiple.svg2')}}></div>

## Font Size

Integer between `8` and `100`.

```d2
x -> y: hi {
  style: {
    font-size: 28
  }
}
x.style.font-size: 8
y.style.font-size: 55
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-font-size.svg2')}}></div>

## Font Color

CSS color name or hex code.

```d2
x -> y: hi {
  style: {
    font-color: red
  }
}
x.style.font-color: "#f4a261"
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-font-color.svg2')}}></div>

## Animated

`true` or `false`.

```d2
x -> y: hi {
  style.animated: true
}
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-animated.svg2')}}></div>

## Bold, italic, underline

`true` or `false`.

```d2
x -> y: hi {
  style: {
    bold: true
  }
}
x.style.underline: true
y.style.italic: true
# By default, shape labels are bold. Bold has precedence over italic, so unbold to see
# italic style
y.style.bold: false
```

<div style={{width: "400px", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/styles-text-decoration.svg2')}}></div>
