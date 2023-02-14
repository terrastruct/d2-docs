# Troubleshooting

* [It won't compile a specific label or value](#it-wont-compile-a-specific-label-or-value)
* [The text is rendered too wide/long](#the-text-is-rendered-too-widelong)
* [Connections look cluttered](#connections-look-cluttered)
* [I can't use reserved keywords](#i-cant-use-reserved-keywords)
* [My diagram is breaking with HTML in Markdown](#my-diagram-is-breaking-with-html-in-markdown)
* [Markdown SVGs won't render in certain SVG viewers](#markdown-svgs-wont-render-in-certain-svg-viewers)
* [Non-ASCII text breaks stuff](#non-ascii-text-breaks-stuff)

## It won't compile a specific label or value

It probably has some reserved characters, wrap it around `'` or `"`.

```d2
"x(int y)": "[]int"
'$dollarbills$'
```

## The text is rendered too wide/long

Add newlines.

```d2
x: When you go out to buy,\ndon't show your silver.
```

## Connections look cluttered

If you have a highly connected diagram with many connections on shapes with short labels,
you will get better results by manually settings widths and heights on them. By default,
D2 adds a minimal amount of padding to shapes past the label dimensions. When a shape has
many connections, increasing dimensions will give it more surface area for the connections
to route aesthetically to.

## I can't use reserved keywords

We're working on a better system here to escape reserved keywords, but for now you can
relabel:

```d2
x: {
  width_: width
}
```

## My diagram is breaking with HTML in Markdown

Your HTML must be semantic to be parsed in SVG XML correctly, e.g. use `<br/>` instead of `<br>`.

## Markdown SVGs won't render in certain SVG viewers

D2's Markdown support is added via xhtml foreign objects, which means the SVG viewer must
have HTML rendering capabilities. The vast majority of SVG viewing is, but if you intend
to use a pure SVG editor on D2 diagrams that don't have such capabilities (e.g. Adobe
Illustrator), it won't render correctly there.

## Non-ASCII text breaks stuff

D2 works with any language, but sometimes non-ASCII characters look like reserved characters when they're not.

```d2
hello世界：مرحبا بالعال
```

The character `：` is not the same as the ASCII `:`, and so it won't register as a label. For foreign language diagrams, please take care to use the ASCII versions of special characters like `:`, `;`, `.`, among others.
