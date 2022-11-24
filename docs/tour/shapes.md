# Shapes

## Basics

You can declare shapes like so:

```d2
imAShape
im_a_shape
im a shape
i'm a shape
# notice that one-hyphen is not a connection
# whereas, `a--shape` would be a connection
a-shape
```

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

```d2
pg: PostgreSQL
Cloud: my cloud
Cloud.shape: cloud
SQLite; Cassandra
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/shapes-2.svg2')}}></div>

:::info
Keys are case-insensitive, so `postgresql` and `postgreSQL` will reference the same shape.
:::

:::info
The full catalog of shapes types:
- `rectangle`
- `square`
- `page`
- `parallelogram`
- `document`
- `cylinder`
- `queue`
- `package`
- `step`
- `callout`
- `stored_data`
- `person`
- `diamond`
- `oval`
- `circle`
- `hexagon`
- `cloud`

Special shape types (more on these next):
- `text`
- `code`
- `class`
- `sql_table`
- `image`
:::
