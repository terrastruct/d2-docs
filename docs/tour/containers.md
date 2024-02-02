import CodeBlock from '@theme/CodeBlock';
import Containers1 from '@site/static/d2/containers-1.d2';
import Containers2 from '@site/static/d2/containers-2.d2';
import Containers3 from '@site/static/d2/containers-3.d2';
import ContainersUnderscore from '@site/static/d2/containers-underscore.d2';

# Containers

<CodeBlock className="language-d2">
    {Containers1}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-1.svg2')}}></div>

## Nested syntax

You can avoid repeating containers by creating nested maps.

<CodeBlock className="language-d2">
    {Containers2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-2.svg2')}}></div>

## Container labels

There are two ways define container labels.

### 1. Shorthand container labels

```d2-incomplete
gcloud: Google Cloud {
  ...
}
```

### 2. Reserved keyword `label`

```d2-incomplete
gcloud: {
  label: Google Cloud
  ...
}
```

## Example

<CodeBlock className="language-d2">
    {Containers3}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-3.svg2')}}></div>

## Reference parent

Sometimes you want to reference something outside of the container from within. The
underscore (`_`) refers to parent.

<CodeBlock className="language-d2">
    {ContainersUnderscore}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-underscore.svg2')}}></div>
