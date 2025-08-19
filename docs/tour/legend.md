import CodeBlock from '@theme/CodeBlock';
import Legend from '@site/static/d2/legend.d2';
import LegendHidden from '@site/static/d2/legend-hidden.d2';

# Legend

Use a special variable, `d2-legend`, to declare a legend.

<CodeBlock className="language-d2">
    {Legend}
</CodeBlock>

<div style={{width: "100%"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/legend.svg2')}}></div>

## Hiding shapes

Since `a -> b` declares 3 things (1 connection and 2 shapes), 3 things will show up on the
legend. If you only intended to show the connection in the legend, you can set the opacity
of shapes to exclude them from the legend.

<CodeBlock className="language-d2">
    {LegendHidden}
</CodeBlock>

<div style={{width: "100%"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/legend-hidden.svg2')}}></div>

## Rename "legend"

You may rename "legend" by simply giving it a label. This is particularly useful for
non-English diagrams.

```d2
vars: {
  d2-legend: "凡例" {
    # Legend items...
  }
}
# Rest of diagram...
```
