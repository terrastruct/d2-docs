import CodeBlock from '@theme/CodeBlock';
import Tables1 from '@site/static/d2/tables-1.d2';
import Tables2 from '@site/static/d2/tables-2.d2';
import Tables3 from '@site/static/d2/tables-3.d2';

# SQL Tables

## Basics

You can easily diagram entity-relationship diagrams (ERDs) in D2 by using the `sql_table` shape. Here's a minimal example:

<CodeBlock className="language-d2">
    {Tables1}
</CodeBlock>

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

:::info Escaping reserved keywords
If you'd like to use a reserved keyword, wrap it in quotes.

```d2
my_table: {
  shape: sql_table
  "label": string
}
```
:::

## Foreign Keys

Here's an example of how you'd define a foreign key connection between two tables:

<CodeBlock className="language-d2">
    {Tables2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-2.svg2')}}></div>

:::info
When rendered with the [TALA layout engine](/tour/tala) or [ELK layout engine](/tour/elk),
connections point to the exact row.
:::

## Example

Like all other shapes, you can nest `sql_tables` into containers and define edges
to them from other shapes. Here's an example:

<CodeBlock className="language-d2">
    {Tables3}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tables-3.svg2')}}></div>
