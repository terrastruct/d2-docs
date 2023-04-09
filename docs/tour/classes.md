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

:::info
Accepting an array of multiple `class` values is coming soon:
[https://github.com/terrastruct/d2/issues/1135](https://github.com/terrastruct/d2/issues/1135)
:::
