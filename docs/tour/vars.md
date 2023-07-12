# Variables & Substitutions

`vars` is a special keyword that lets you define variables. These variables can be
referenced with the substitution syntax: `${}`.

```d2
vars: {
  server-name: Cat
}

server1: ${server-name}-1
server2: ${server-name}-2

server1 <-> server2
```

<div style={{width: 400}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/vars-intro.svg2')}}></div>

## Variables can be nested

Use `.` to refer to nested variables.

```d2
vars: {
  primaryColors: {
    button: {
      active: "#4baae5"
      border: black
    }
  }
}

button: {
  width: 100
  height: 40
  style: {
    border-radius: 5
    fill: ${primaryColors.button.active}
    stroke: ${primaryColors.button.border}
  }
}
```

:::info
You cannot substitute to a map. E.g., above, you would not be able to set anything to
`${primaryColors.button}`. If you find yourself reaching for this functionality, you
likely want to use [classes](/tour/classes) instead.
:::

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/vars-nested.svg2')}}></div>

## Variables are scoped

They work just like variable scopes in programming. Substitutions can refer to variables
defined in a more outer scope, but not a more inner scope. If a variable appears in two
scopes, the one closer to the substitution is used.

```d2
vars: {
  region: Global
  font: mono
}

lb: ${region} load balancer
lb.style.font: ${font}

zone1: {
  vars: {
    region: us-east-1
  }
  server: ${region} API
  server.style.font: ${font}
}
```

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/vars-scoped.svg2')}}></div>

## Single quotes bypass substitutions

```d2
vars: {
  names: John and Joyce
}
a -> b: 'Send field ${names}'
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/vars-escaped.svg2')}}></div>
