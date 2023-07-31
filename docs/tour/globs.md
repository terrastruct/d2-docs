# Globs

:::caution Alpha
Globs are an alpha feature in 0.6.0. It is likely to change in behavior in followup minor
releases. In particular, the current plan is for globs to be lazy evaluated, so that it
can be used to set defaults, as opposed to the current implementation where it is
evaluated as it appears.
:::

:::note Etymology
> The glob command, short for global, originates in the earliest versions of Bell Labs' Unix... to expand wildcard characters in unquoted arguments ...

[https://en.wikipedia.org/wiki/Glob_(programming)](https://en.wikipedia.org/wiki/Glob_(programming))
:::

Globs are a powerful language feature to make global changes in one line.

```d2
iphone 10
iphone 11 mini
iphone 11 pro
iphone 12 mini

*.height: 300
*.width: 140
*mini.height: 200
*pro.height: 400
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-intro.svg2')}}></div>

## Globs are case insensitive

```d2
diddy kong
Donkey Kong

*kong.style.fill: brown
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-casing.svg2')}}></div>

## Globs can appear multiple times

```d2
teacher
thriller
thrifter

t*h*r.shape: person
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-multiple.svg2')}}></div>

```d2
a: {
  b
  c
}

a.*.c -> c
```

## Glob connections

You can use globs to create connections.

```d2
vars: {
  d2-config: {
    layout-engine: elk
  }
}

Spiderman 1
Spiderman 2
Spiderman 3

* -> *: 👉
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-connections.svg2')}}></div>

:::info
Notice how self-connections were omitted. While not entirely consistent with what you may
expect from globs, we feel it is more pragmatic for this to be the behavior.
:::

You can also use globs to target modifying existing connections.

```d2
lady 1
lady 2

barbie

lady 1 -> barbie: hi barbie
lady 2 -> barbie: hi barbie

(lady* -> barbie)[*].style.stroke: pink
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-indexed-connections.svg2')}}></div>

## Scoped globs

Notice that in the below example, globs only apply to the scope they are specified in.

```d2
foods: {
  pizzas: {
    cheese
    sausage
    pineapple
    *.shape: circle
  }
  humans: {
   john
   james
   *.shape: person
  }
  humans.* -> pizzas.pineapple: eats
}
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-scope.svg2')}}></div>

## Recursive globs

`**` means target recursively.

```d2
a: {
  b: {
    c
  }
}

**.style.border-radius: 7
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-recursive.svg2')}}></div>

```d2
zone-A: {
  machine A
  machine B: {
    submachine A
    submachine B
  }
}

zone-A.** -> load balancer
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-recursive-2.svg2')}}></div>


:::info
Notice how `machine B` was not captured. Similar to the exception with `* -> *` omitting
self-connections, recursive globs in connections also make an exception for practical
diagramming: it only applies to non-container (AKA leaf) shapes.
:::

## Filters

Use `&` to filter what globs target.

```d2
bravo team.shape: person
charlie team.shape: person
command center.shape: cloud
hq.shape: rectangle

*: {
  &shape: person
  style.multiple: true
}
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-filter.svg2')}}></div>

If the filtered attribute has an array value, the filter will match if it matches any
element of the array.

```d2
the-little-cannon: {
  class: [server; deployed]
}
dino: {
  class: [internal; deployed]
}
catapult: {
  class: [server]
}

*: {
  &class: server
  style.multiple: true
}
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-filter-2.svg2')}}></div>

:::info
We are working on adding more filters.
:::

## Nested globs

You can nest globs, combining the features above.

```d2
conversation 1: {
  shape: sequence_diagram
  alice -> bob: hi
  bob -> alice: hi
}

conversation 2: {
  shape: sequence_diagram
  alice -> bob: hello again
  alice -> bob: hello?
  bob -> alice: hello
}

# Recursively target all shapes...
**: {
  # ... that are sequence diagrams
  &shape: sequence_diagram
  # Then recursively set all shapes in them to person
  **: { shape: person }
}
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-nested.svg2')}}></div>
