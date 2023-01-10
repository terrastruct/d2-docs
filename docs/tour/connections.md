# Connections

Connections define relationships between shapes.

## Basics

Hyphens/arrows in between shapes define a connection.

```d2
Write Replica Canada <-> Write Replica Australia

Read Replica <- Master
Write Replica -> Master

Read Replica 1 -- Read Replica 2
```

If you reference an undeclared shape in a connection, it's created (as shown in the [hello
world](hello-world.md) example).

:::info
There are 4 valid ways to define a connection:

- `--`
- `->`
- `<-`
- `<->`

:::

### Connection labels

```d2
Read Replica 1 -- Read Replica 2: Kept in sync
```

### Connections must reference a shape's key, not its label.

```d2
be: Backend
fe: Frontend

# This would create new shapes
Backend -> Frontend

# This would define a connection over existing labels
be -> fe
```

## Example

```d2
Write Replica Canada <-> Write Replica Australia

Read Replica <- Master

x -- y

super long shape id here --\
  -> super long shape id even longer here
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-1.svg2')}}></div>

## Repeated connections

Repeated connections do not override existing connections. They declare new ones.

```d2
Database -> S3: backup
Database -> S3
Database -> S3: backup
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-2.svg2')}}></div>

## Connection chaining

For readability, it may look more natural to define multiple connection in a single line.

```d2
# The label applies to each connection in the chain.
High Mem Instance -> EC2 <- High CPU Instance: Hosted By
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-3.svg2')}}></div>

## Cycles are okay

```d2
Stage One -> Stage Two -> Stage Three -> Stage Four
Stage Four -> Stage One: repeat
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-4.svg2')}}></div>

## Arrowheads

To override the default arrowhead shape or give a label next to arrowheads, define a special shape on connections named `source-arrowhead` and/or `target-arrowhead`.

```d2
a: The best way to avoid responsibility is to say, "I've got responsibilities"
b: Whether weary or unweary, O man, do not rest
c: I still maintain the point that designing a monolithic kernel in 1991 is a

a -> b: To err is human, to moo bovine {
  source-arrowhead: 1
  target-arrowhead: * {
    shape: diamond
  }
}

b <-> c: "Reality is just a crutch for people who can't handle science fiction" {
  source-arrowhead.label: 1
  target-arrowhead: * {
    shape: diamond
    style.filled: true
  }
}

d: A black cat crossing your path signifies that the animal is going somewhere

d -> a -> c
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-5.svg2')}}></div>


:::info Arrowhead options
- `triangle` (default)
- `arrow` (like triangle but pointier)
- `diamond`
  - Can be further styled as `style.filled: true`.
- `circle`
  - Can be further styled as `style.filled: true`.
- `cf-one`, `cf-one-required` (cf stands for crows foot)
- `cf-many`, `cf-many-required`
:::

:::info
It's recommended the arrowhead labels be kept short. They do not go through
autolayout for optimal positioning like regular labels do, so long arrowhead labels are
more likely to collide with surrounding objects.
:::
