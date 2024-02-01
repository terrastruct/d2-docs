---
pagination_next: tour/shapes
---
import CodeBlock from '@theme/CodeBlock';
import HelloWorld from '@site/static/d2/hello-world.d2';

# Hello World

<CodeBlock className="language-d2">
    {HelloWorld}
</CodeBlock>

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/hello-world.svg2')}}></div>

This declares a connection between two shapes, `x` and `y`, with the label, `hello world`.
