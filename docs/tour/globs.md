# Globs

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

:::info Order
Order matters in D2. When you add a glob statement, it will only match with what's already
been declared.

```d2
# These will be red
a
b
*.style.fill: red
# These will not be red
c
d
```
:::

## Globs are case insensitive

```d2
diddy kong
Donkey Kong

*kong.style.fill: brown
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-casing.svg2')}}></div>

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

# Connect everything in zone-A to the load balancer
zone-A.** -> load balancer
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-recursive-2.svg2')}}></div>

## Filters

Use `&` to filter what globs target.

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

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-filter.svg2')}}></div>
