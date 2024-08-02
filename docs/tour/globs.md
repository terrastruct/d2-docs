import CodeBlock from '@theme/CodeBlock';
import GlobsIntro from '@site/static/d2/globs-intro.d2';
import GlobsLazy from '@site/static/d2/globs-lazy.d2';
import GlobsCasing from '@site/static/d2/globs-casing.d2';
import GlobsMultiple from '@site/static/d2/globs-multiple.d2';
import GlobsConnections from '@site/static/d2/globs-connections.d2';
import GlobsIndexedConnections from '@site/static/d2/globs-indexed-connections.d2';
import GlobsScope from '@site/static/d2/globs-scope.d2';
import GlobsRecursive from '@site/static/d2/globs-recursive.d2';
import GlobsRecursive2 from '@site/static/d2/globs-recursive-2.d2';
import GlobsFilter from '@site/static/d2/globs-filter.d2';
import GlobsFilter2 from '@site/static/d2/globs-filter-2.d2';
import GlobsFilterGlobValue from '@site/static/d2/globs-filter-glob-value.d2';
import GlobsInverseFilter from '@site/static/d2/globs-inverse-filter.d2';
import GlobsNested from '@site/static/d2/globs-nested.d2';

# Globs

:::note Etymology
> The glob command, short for global, originates in the earliest versions of Bell Labs' Unix... to expand wildcard characters in unquoted arguments ...

[https://en.wikipedia.org/wiki/Glob_(programming)](https://en.wikipedia.org/wiki/Glob_(programming))
:::

Globs are a powerful language feature to make global changes in one line.

<CodeBlock className="language-d2">
    {GlobsIntro}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-intro.svg2')}}></div>

## Globs apply backwards and forwards

In the following example, the instructions are as follows:
1. Create a shape `a`.
2. Apply a glob rule. This immediately applies to existing shapes, i.e., `a`.
3. Create a shape `b`. Existing glob rules are re-evaluated, and applied if they meet the
   criteria. This does, so it applies to `b`.
4. Same with `c`.

<CodeBlock className="language-d2">
    {GlobsLazy}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-lazy.svg2')}}></div>

## Globs are case insensitive

<CodeBlock className="language-d2">
    {GlobsCasing}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-casing.svg2')}}></div>

## Globs can appear multiple times

<CodeBlock className="language-d2">
    {GlobsMultiple}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-multiple.svg2')}}></div>

## Glob connections

You can use globs to create connections.

<CodeBlock className="language-d2">
    {GlobsConnections}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-connections.svg2')}}></div>

:::info
Notice how self-connections were omitted. While not entirely consistent with what you may
expect from globs, we feel it is more pragmatic for this to be the behavior.
:::

You can also use globs to target modifying existing connections.

<CodeBlock className="language-d2">
    {GlobsIndexedConnections}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-indexed-connections.svg2')}}></div>

## Scoped globs

Notice that in the below example, globs only apply to the scope they are specified in.

<CodeBlock className="language-d2">
    {GlobsScope}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-scope.svg2')}}></div>

## Recursive globs

`**` means target recursively.

<CodeBlock className="language-d2">
    {GlobsRecursive}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-recursive.svg2')}}></div>

<CodeBlock className="language-d2">
    {GlobsRecursive2}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-recursive-2.svg2')}}></div>


:::info
Notice how `machine B` was not captured. Similar to the exception with `* -> *` omitting
self-connections, recursive globs in connections also make an exception for practical
diagramming: it only applies to non-container (AKA leaf) shapes.
:::

## Filters

Use `&` to filter what globs target.

<CodeBlock className="language-d2">
    {GlobsFilter}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-filter.svg2')}}></div>

### Filters on array values

If the filtered attribute has an array value, the filter will match if it matches any
element of the array.

<CodeBlock className="language-d2">
    {GlobsFilter2}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-filter-2.svg2')}}></div>

### Globs as filter values

Globs can also appear in the value of a filter. `*` by itself as a value for a filter
means the key must be specified.

<CodeBlock className="language-d2">
    {GlobsFilterGlobValue}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-filter-glob-value.svg2')}}></div>

## Inverse filters

Use `!&` to inverse-filter what globs target.

<CodeBlock className="language-d2">
    {GlobsInverseFilter}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-inverse-filter.svg2')}}></div>

## Nested globs

You can nest globs, combining the features above.

<CodeBlock className="language-d2">
    {GlobsNested}
</CodeBlock>

<div style={{width: 600}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/globs-nested.svg2')}}></div>

## Global globs

Triple globs apply globally to the whole diagram. The difference between a double glob and
a triple glob is that a triple glob will apply to nested `layers` (see the section on
[composition](/tour/composition) for more on `layers`), as well as persist across imports.

```d2
***.style.fill: yellow
**.shape: circle
*.style.multiple: true

x: {
  y
}

layers: {
  next: {
    a
  }
}
```

<embed src={require('@site/static/img/generated/triple-glob.pdf').default} width="100%" height="800"
 type="application/pdf" />

:::info Imports
If you import a file, the globs declared inside it are usually not carried over. Triple
globs are the exception -- since they are global, importing a file with triple glob will
carry that glob as well.
:::
