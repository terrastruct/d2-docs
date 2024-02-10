import CodeBlock from '@theme/CodeBlock';
import ImportsTemplate from '@site/static/d2/imports-template.d2';
import ImportsWrapperTemplate from '@site/static/d2/imports-wrapper-template.d2';

# Template

You make diagrams for external consulting clients. In order to appear professional, all
diagrams must be contained within a template that your designer has created that is
on-brand.

- `diagram.d2`
<CodeBlock className="language-d2-incomplete">
    {ImportsTemplate}
</CodeBlock>

- `wrapper-template.d2`
<CodeBlock className="language-d2-incomplete">
    {ImportsWrapperTemplate}
</CodeBlock>

:::info
This use case will be made much more powerful when D2 finishes glob (`*`) support.
:::

## Render of `diagram.d2`

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-template.svg2')}}></div>
