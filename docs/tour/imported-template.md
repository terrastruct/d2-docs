# Template

You make diagrams for external consulting clients. In order to appear professional, all
diagrams must be contained within a template that your designer has created that is
on-brand.

- `diagram.d2`
```d2
template: {
  ...@wrapper-template
  synergy: {
    our firm -> yours: value add
  }
  stakeholders: {
    george.shape: person
    tim.shape: person
    tim.tooltip: is this web scale?
  }
}
```

- `wrapper-template.d2`
```d2
style: {
  fill: "#E3EDE6"
  fill-pattern: dots
  stroke: "#820758"
  stroke-width: 3
  border-radius: 2
  shadow: true
}
label: ""
```

:::info
This use case will be made much more powerful when D2 finishes glob (`*`) support.
:::

## Render of `diagram.d2`

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-template.svg2')}}></div>
