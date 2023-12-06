# SQL Tables

## Basics

You can easily diagram entity-relationship diagrams (ERDs) in D2 by using the `sql_table` shape. Here's a minimal example:

```d2
my_table: {
  shape: sql_table
  # This is defined using the shorthand syntax for labels discussed in the containers section.
  # But here it's for the type of a constraint.
  # The id field becomes a map that looks like {type: int; constraint: primary_key}
  id: int {constraint: primary_key}
  last_updated: timestamp with time zone
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-1.svg2')}}></div>

Each key of a SQL Table shape defines a row. The primary value (the thing after the colon)
of each row defines its type.

The constraint value of each row defines its SQL constraint. D2 will recognize and
shorten:

| constraint  | short |
| ----------- | ----- |
| primary_key | PK    |
| foreign_key | FK    |
| unique      | UNQ   |

But you can set any constraint you'd like. It just won't be shortened if unrecognized.

:::info
You can also specify multiple constraints with an array.

```d2
x: int { constraint: [primary_key; unique] }
```
:::

## Foreign Keys

Here's an example of how you'd define a foreign key connection between two tables:

```d2
objects: {
  shape: sql_table
  id: int {constraint: primary_key}
  disk: int {constraint: foreign_key}

  json: jsonb  {constraint: unique}
  last_updated: timestamp with time zone
}

disks: {
  shape: sql_table
  id: int {constraint: primary_key}
}

objects.disk -> disks.id
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-2.svg2')}}></div>

:::info
When rendered with the [TALA layout engine](/tour/tala) or [ELK layout engine](/tour/elk),
connections point to the exact row.
:::

## Example

Like all other shapes, you can nest `sql_tables` into containers and define edges
to them from other shapes. Here's an example:

```d2
cloud: {
  disks: {
    shape: sql_table
    id: int {constraint: primary_key}
  }
  blocks: {
    shape: sql_table
    id: int {constraint: primary_key}
    disk: int {constraint: foreign_key}
    blob: blob
  }
  blocks.disk -> disks.id

  AWS S3 Vancouver -> disks
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-3.svg2')}}></div>
