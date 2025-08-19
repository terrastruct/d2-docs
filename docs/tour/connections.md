import CodeBlock from '@theme/CodeBlock';
import Connections1 from '@site/static/d2/connections-1.d2';
import Connections2 from '@site/static/d2/connections-2.d2';
import Connections3 from '@site/static/d2/connections-3.d2';
import Connections4 from '@site/static/d2/connections-4.d2';
import Connections5 from '@site/static/d2/connections-5.d2';
import ConnectionsReference from '@site/static/d2/connections-reference.d2';

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

<CodeBlock className="language-d2">
    {Connections1}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-1.svg2')}}></div>

## Repeated connections

Repeated connections do not override existing connections. They declare new ones.

<CodeBlock className="language-d2">
    {Connections2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-2.svg2')}}></div>

## Connection chaining

For readability, it may look more natural to define multiple connection in a single line.

<CodeBlock className="language-d2">
    {Connections3}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-3.svg2')}}></div>

## Cycles are okay

<CodeBlock className="language-d2">
    {Connections4}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-4.svg2')}}></div>

## Arrowheads

To override the default arrowhead shape or give a label next to arrowheads, define a special shape on connections named `source-arrowhead` and/or `target-arrowhead`.

<CodeBlock className="language-d2">
    {Connections5}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-5.svg2')}}></div>

:::info Arrowhead options
- `triangle` (default)
  - Can be further styled as `style.filled: false`.
- `arrow` (like triangle but pointier)
- `diamond`
  - Can be further styled as `style.filled: true`.
- `circle`
  - Can be further styled as `style.filled: true`.
- `box`
  - Can be further styled as `style.filled: true`.
- `cf-one`, `cf-one-required` (cf stands for crows foot)
- `cf-many`, `cf-many-required`
- `cross`
:::

:::info
It's recommended the arrowhead labels be kept short. They do not go through
autolayout for optimal positioning like regular labels do, so long arrowhead labels are
more likely to collide with surrounding objects.
:::

:::caution
If the connection does not have an endpoint, arrowheads won't do anything.

For example, the following will do nothing, because there is no source arrowhead.

```d2
x -> y: {
  source-arrowhead.shape: diamond
}
```
:::

## Referencing connections

You can reference a connection by specifying the original ID followed by its index.

<CodeBlock className="language-d2">
    {ConnectionsReference}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/connections-reference.svg2')}}></div>
