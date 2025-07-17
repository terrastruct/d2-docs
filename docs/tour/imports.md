---
pagination_next: tour/imports-use-cases
---
import CodeBlock from '@theme/CodeBlock';
import ImportsTargeted from '@site/static/d2/imports-targeted.d2';
import People from '@site/static/d2/people.d2';

# Syntax

There are two ways to import. These two examples both have the same result:

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-normal.svg2')}}></div>

> Result of running both types of imports below

In the next section, we'll see examples of common import use cases.

## Two types of imports

### 1. Regular import

- `x.d2`
```d2-incomplete
x: {
  shape: circle
}
```
- `y.d2`
```d2-incomplete
a: @x.d2
a -> b
```

This is the equivalent of giving the entire file of `x` as a map that `a` sets as its
value.

### 2. Spread import

- `x.d2`
```d2-incomplete
x: {
  shape: circle
}
```
- `y.d2`
```d2-incomplete
a: {
  ...@x.d2
}
a -> b
```

This tells D2 to take the contents of the file `x` and insert it into the map.

:::info
Spread imports only work within maps. Something like `a: ...@x.d2` is an invalid usage.
:::

## Omit the extension

Above, we wrote the full file name for clarity, but the correct usage is to just specify
the file name without the suffix. If you run D2's autoformatter, it'll change

```d2-incomplete
x: @x.d2
```

into

```d2-incomplete
x: @x
```

:::info
D2 will not open files that don't have `.d2` extension, which means an import like
`@x.txt` won't work.
:::

## Partial imports

You don't have to import the full file.

For example, if you have a file that defines all the people in your organization, and you
just want to show some relations between managers, you can import a specific object.


`donut-flowchart.d2`
<CodeBlock className="language-d2-incomplete">
    {ImportsTargeted}
</CodeBlock>

`people.d2`
<CodeBlock className="language-d2-incomplete">
    {People}
</CodeBlock>

:::info
Since `.` is used for targeting, if you want to import from a file with `.` in its name,
use string quotes.

`@"schema-v0.1.2"`
:::

### Render of donut-flowchart.d2

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-targeted.svg2')}}></div>

## Relative imports

Relative imports are relative to the file, not the executing path.

Consider that your working directory is `/Users/You/dev`. Your D2 files:

- `/Users/you/dev/d2-stuff/x.d2`
```d2-incomplete
y: @../y.d2
```

The above import will search directory `/Users/you/dev/` for `y.d2`, not `/Users/You`.

:::info
Unnecessary relative imports are removed by autoformat.

`@./x` will be autoformatted to `@x`.
:::

## Absolute imports

You can also use absolute paths for imports.

```d2-incomplete
# Unix/Linux/Mac
x: @/absolute/path/to/file

# Windows - must use quotes due to backslashes and colons
x: @"C:\absolute\path\to\file"
```
