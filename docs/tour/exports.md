# Exports

On the CLI, you may export `.d2` into
- SVG
- PNG
- PDF

:::info
Powerpoint exports coming soon!
:::

## SVG

```shell
d2 in.d2 out.svg
```

SVG is the default export format on the CLI. If you don't specify an output, the export
file will be the input name as an SVG file.

For example, `d2 in.d2` will produce a file named `in.svg`.

The resulting SVG has CSS injected into it. This, along with the use of HTML
`<foreignObject>`s used to make Markdown work, means that the SVG is meant to be viewed in
a web context. For example, opening it up in your browser, embedding it onto a webpage. It
will not look right without a web context, like in Inkscape or Adobe Illustrator.

## PNG

```shell
d2 in.d2 out.png
```

PNG exports work by [Playwright](https://github.com/microsoft/playwright) spinning up a
headless browser, putting the SVG onto it, and taking a screenshot. The first invocation
of Playwright will download its dependencies, if they don't already exist on the machine.

:::info
If you get a message like `err: failed to launch Chromium`, you can try installing
Playwright dependencies outside of D2 on your machine. For example:

```
npm install -g @playwright
npx playwright install --with-deps chromium
```

See [#744](https://github.com/terrastruct/d2/issues/744#issuecomment-1446641870) for more.
:::

## PDF

```shell
d2 in.d2 out.pdf
```

PDF exports are the result of taking PNG exports and placing them on PDF pages, along with
headers and fonts. As such, dependencies needed for PNG exports are also needed for PDF
exports.

PDF is _more_ interactive than PNG, but _less_ interactive than SVG.

For example, `animate` keyword won't show up in PDF exports like they would in SVG.

But `link`s can still be clickable in PDFs.

<img src={require('@site/static/img/screenshots/linked_pdf.png').default} alt="linked PDF example in D2" width="500"/>
