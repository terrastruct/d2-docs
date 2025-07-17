import CodeBlock from '@theme/CodeBlock';
import Shapes1 from '@site/static/d2/shapes-1.d2';
import Shapes2 from '@site/static/d2/shapes-2.d2';

# Shapes

## Basics

You can declare shapes like so:

<CodeBlock className="language-d2">
    {Shapes1}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/shapes-1.svg2')}}></div>

You can also use semicolons to define multiple shapes on the same line:

```d2
SQLite; Cassandra
```

By default, a shape's label is the same as the shape's key. But if you want it to be different, assign a new label like so:

```d2
pg: PostgreSQL
```

By default, a shape's type is `rectangle`. To specify otherwise, provide the field `shape`:

```d2
Cloud: my cloud
Cloud.shape: cloud
```

## Example

<CodeBlock className="language-d2">
    {Shapes2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/shapes-2.svg2')}}></div>

:::info
Keys are case-insensitive, so `postgresql` and `postgreSQL` will reference the same shape.
:::

:::info Shape catalog

<div className="embedSVG overflow" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/shapes-3.svg2')}}></div>

There are other values that `shape` can take, but they're special types that are covered
in the next section.
:::

## 1:1 Ratio shapes

Some shapes maintain a 1:1 aspect ratio, meaning their width and height are always equal.

- `circle`
- `square`

For these shapes, if you have a long label that make the shape wider, D2 will also make
the shape taller to maintain the 1:1 ratio.

If you manually set `width` and `height` on a 1:1 ratio shape, both dimensions will be set
to the larger of the two values to maintain the aspect ratio.
