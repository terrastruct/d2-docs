import CodeBlock from '@theme/CodeBlock';
import Overrides1 from '@site/static/d2/overrides-1.d2';
import Overrides2 from '@site/static/d2/overrides-2.d2';
import NullBasic from '@site/static/d2/null-basic.d2';
import NullConnection from '@site/static/d2/null-connection.d2';
import NullAttribute from '@site/static/d2/null-attribute.d2';
import NullImplicitConnection from '@site/static/d2/null-implicit-connection.d2';
import NullImplicitDescendant from '@site/static/d2/null-implicit-descendant.d2';

# Overrides

If you redeclare a shape, the new declaration is merged with the previous declaration.

<CodeBlock className="language-d2">
    {Overrides1}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/overrides-1.svg2')}}></div>

The latest explicit setting of the label takes priority.

Here's a more complex example of overrides involving containers:

<CodeBlock className="language-d2">
    {Overrides2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/overrides-2.svg2')}}></div>

## Null

You may override with the value `null` to delete the shape/connection/attribute.

<CodeBlock className="language-d2">
    {NullBasic}
</CodeBlock>

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-basic.svg2')}}></div>

When is this useful?
- [Import](/tour/imports/) a diagram from a colleague and remove the things you don't want.
- [Multi-board compositions](/tour/composition/) where you inherit all the objects from a
  board with some exceptions.
- Use [globs](/tour/globs/) to define connections between a batch of objects except one in
  particular you want to leave out.

### Nulling a connection

<CodeBlock className="language-d2">
    {NullConnection}
</CodeBlock>

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-connection.svg2')}}></div>

### Nulling an attribute

<CodeBlock className="language-d2">
    {NullAttribute}
</CodeBlock>

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-attribute.svg2')}}></div>


### Implicit nulls

If you null a shape with connections, its connections are also nulled (since every
connection in D2 needs an endpoint).

<CodeBlock className="language-d2">
    {NullImplicitConnection}
</CodeBlock>

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-implicit-connection.svg2')}}></div>

If you null a shape with descendents, those descendants are also nulled.

<CodeBlock className="language-d2">
    {NullImplicitDescendant}
</CodeBlock>

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-implicit-descendant.svg2')}}></div>
