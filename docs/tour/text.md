---
sidebar_label: Text & Code
pagination_next: tour/icons
---
import CodeBlock from '@theme/CodeBlock';
import Markdown from '@site/static/d2/markdown.d2';
import MarkdownLabel from '@site/static/d2/markdown-label.d2';
import Text2 from '@site/static/d2/text-2.d2';
import Code2 from '@site/static/d2/code-2.d2';
import NonMarkdownText from '@site/static/d2/non-markdown-text.d2';
import Latex from '@site/static/d2/latex.d2';

# Text

## Standalone text is Markdown

<CodeBlock className="language-d2">
    {Markdown}
</CodeBlock>

<div style={{width: 300, margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/markdown.svg2')}}></div>

## Markdown label

If you want to set a Markdown label on a shape, you must explicitly declare the shape.

<CodeBlock className="language-d2">
    {MarkdownLabel}
</CodeBlock>

<div style={{width: 300, margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/markdown-label.svg2')}}></div>

## Most languages are supported

D2 most likely supports any language you want to use, including non-Latin ones like
Chinese, Japanese, Korean, even emojis!

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/unicode.svg2')}}></div>

## LaTeX

You can use `latex` or `tex` to specify a LaTeX language block.

<CodeBlock className="language-d2">
    {Text2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/text-2.svg2')}}></div>

A few things to note about LaTeX blocks:

- LaTeX blocks do not respect `font-size` styling. Instead, you must style these inside
  the Latex script itself with commands:
  - `\tiny{ }`
  - `\small{ }`
  - `\normal{ }`
  - `\large{ }`
  - `\huge{ }`
- Under the hood, this is using [MathJax](https://www.mathjax.org/). It is not full LaTeX
  (full LaTeX includes a document layout engine). D2's LaTeX blocks are meant to display
  mathematical notation, but not support the format of existing LaTeX documents. See
  [here](https://docs.mathjax.org/en/latest/input/tex/macros/index.html) for a list of all
  supported commands.

:::caution
D2 runs on the latest version of MathJax, which has a lot of nice things but unfortunately
does not have linebreaks. You can kind of get around this with the `displaylines` command.
See below.
:::

## Code

Change `md` to a programming language for code blocks

<CodeBlock className="language-d2">
    {Code2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/code-2.svg2')}}></div>

## Advanced: Non-Markdown text

In some cases, you may want non-Markdown text. Maybe you just don't like Markdown, or the
GitHub-styling of Markdown that D2 uses, or you want to quickly change a shape to text.
Just set `shape: text`.

<CodeBlock className="language-d2">
    {NonMarkdownText}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/non-markdown-text.svg2')}}></div>

## Advanced: Block strings

What if you're writing Typescript where the pipe symbol `|` is commonly used? Just add
another pipe, `||`.

```d2
my_code: ||ts
  declare function getSmallPet(): Fish | Bird;
||
```

Actually, Typescript uses `||` too, so that won't work. Let's keep going.

```d2
my_code: |||ts
  declare function getSmallPet(): Fish | Bird;
  const works = (a > 1) || (b < 2)
|||
```

There's probably some language or scenario where the triple pipe is used too. D2 actually
allows you to use any special symbols (not alphanumeric, space, or `_`) after the first pipe:

```d2
# Much cleaner!
my_code: |`ts
  declare function getSmallPet(): Fish | Bird;
  const works = (a > 1) || (b < 2)
`|
```

## Advanced: LaTeX plugins

D2 includes the following LaTeX plugins:

<CodeBlock className="language-d2">
    {Latex}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/latex.svg2')}}></div>
