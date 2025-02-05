import CodeBlock from '@theme/CodeBlock';
import Tooltip from '@site/static/d2/tooltip.d2';
import Links from '@site/static/d2/links.d2';

# Interactive

## Tooltips

Tooltips are text that appear on hover. They serve two purposes:
1. Add secondary context.
    - You want to add a description to an object. It's not so important that everyone
      needs it, but those who want extra information can access it.
2. Tidy.
    - Your diagram is getting messy. Instead of adding more text, you can tuck some into
      tooltips.

<CodeBlock className="language-d2">
    {Tooltip}
</CodeBlock>

Try it out, hover over `x` and `y`. Notice that they have an icon indicating that they
have a tooltip.

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tooltip.svg2')}}></div>

When you export to a static format like PNG, D2 will
1. Change all the icons to be numbered.
2. Add an appendix, where each line corresponds to the number.

<img align="center" width="500" src={require('@site/static/img/screenshots/tooltip.png').default} alt="d2 tooltip" />

:::caution
Tooltips are implemented with HTML
[title](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title) tags,
which have basic support for text formatting. Markdown won't be rendered as expected in
tooltips.
:::

## Links

Links are like tooltips, except you click to go to an external link.

:::info
When the link contains the `#` character as part of a URI fragment, e.g.,
`https://example.com/page#fragment`, remember that the fragment will be
treated as a comment if unquoted and unescaped.
:::

<CodeBlock className="language-d2">
    {Links}
</CodeBlock>

Try clicking on each.

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/links.svg2')}}></div>

:::info
If you are using the Terrastruct app, you can link to other boards through their path.
```d2
x.link: Overview.My Service.Stuff
```
:::

