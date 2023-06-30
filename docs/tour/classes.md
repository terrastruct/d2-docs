# Classes

Classes let you aggregate attributes and reuse them.

```d2
direction: right
classes: {
  load balancer: {
    label: load\nbalancer
    width: 100
    height: 200
    style: {
      stroke-width: 0
      fill: "#44C7B1"
      shadow: true
      border-radius: 5
    }
  }
  unhealthy: {
    style: {
      fill: "#FE7070"
      stroke: "#F69E03"
    }
  }
}

web traffic -> web lb
web lb.class: load balancer

web lb -> api1
web lb -> api2
web lb -> api3

api2.class: unhealthy

api1 -> cache lb
api3 -> cache lb

cache lb.class: load balancer
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/style-classes-1.svg2')}}></div>

## Connection classes

As a reminder of D2 syntax, you can apply classes to connections both at the initial
declaration as well as afterwards.

On initial declaration:

```d2
a -> b: {class: something}
```

Targeting:

```d2
a -> b
# ...
(a -> b)[0].class: something
```

## Overriding classes

If your object defines an attribute that the class also has defined, the object's
attribute overrides the class attribute.

```d2
classes: {
  unhealthy: {
    style.fill: red
  }
}
x.class: unhealthy
x.style.fill: orange
```

<div style={{width: 100, margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/style-classes-2.svg2')}}></div>

## Multiple classes

You may use arrays for the value as well to apply multiple classes.

```d2
classes: {
  d2: {
    label: ""
    icon: https://play.d2lang.com/assets/icons/d2-logo.svg
  }
  sphere: {
    shape: circle
    style.stroke-width: 0
  }
}

logo.class: [d2; sphere]
```

<div style={{width: 200, margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/multiple-classes.svg2')}}></div>

### Order matters

When multiple classes are given, they are applied left-to-right.

```d2
classes: {
  uno: {
    label: 1
  }
  dos: {
    label: 2
  }
}

x.class: [uno; dos]
y.class: [dos; uno]
```

<div style={{width: 200, margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/ordered-classes.svg2')}}></div>

## Advanced: Using classes as tags

If you want to post-process D2 diagrams, you can also use classes to arbitrarily tag
objects. Any `class` you apply is written into the SVG element as a `class` attribute. So
for example, you can then apply custom CSS like `.stuff { ... }` (or use Javascript for
  onclick handlers and such) on a web page that D2 SVG is embedded in.
