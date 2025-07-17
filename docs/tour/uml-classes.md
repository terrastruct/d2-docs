import CodeBlock from '@theme/CodeBlock';
import Classes1 from '@site/static/d2/classes-1.d2';
import Classes2 from '@site/static/d2/classes-2.d2';
import Classes3 from '@site/static/bespoke-d2/classes-3.d2';

# UML Classes

## Basics

D2 fully supports UML Class diagrams. Here's a minimal example:

<CodeBlock className="language-d2">
    {Classes1}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-1.svg2')}}></div>

Each key of a `class` shape defines either a field or a method.

The value of a field key is its type.

Any key that contains `(` is a method, whose value is the return type.

A method key without a value has a return type of void.

:::info Escaping reserved keywords
If you'd like to use a reserved keyword, wrap it in quotes.

```d2
my_class: {
  shape: class
  "label": string
}
```
:::

## Visibilities

You can also use UML-style prefixes to indicate field/method visibility.

| visibility prefix | meaning   |
| ----------------- | --------- |
| none              | public    |
| +                 | public    |
| -                 | private   |
| #                 | protected |

See https://www.uml-diagrams.org/visibility.html

Here's an example with differing visibilities and more complex types:

<CodeBlock className="language-d2">
    {Classes2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-2.svg2')}}></div>

## Full example

<CodeBlock className="language-d2" layout="elk">
    {Classes3}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-3.svg2')}}></div>
