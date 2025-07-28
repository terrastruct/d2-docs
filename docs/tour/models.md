import CodeBlock from '@theme/CodeBlock';
import Suspend from '@site/static/d2/suspend.d2';
import Suspend2 from '@site/static/d2/suspend-2.d2';
import Suspend3 from '@site/static/d2/suspend-3.d2';
import Suspend4 from '@site/static/d2/suspend-4.d2';

# Models

Let's say you want to define all models and relationships between models once, then
display them in different ways.

First, let's define the models and relationships.

<CodeBlock className="language-d2-incomplete">
    {Suspend}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/suspend.svg2')}}></div>

We will use this as the example for multiple views of the same model. How do we treat
these as models and not just ordinary shapes and connections? We use the following
keywords:

1. `suspend`: This marks the shape or connection for deletion
2. `unsuspend`: This restores the shape or connection

Since models are meant to be invisible until used, we define models at the top of our
diagram and `suspend` all of them with the following globs.

```d2
**: suspend
(** -> **)[*]: suspend
```

We then use globs to selectively `unsuspend` the models we want to show. Let's take a look
at some use cases.

:::info
If you haven't yet, please familiarize yourself with [globs](globs.md).
:::

## Show only top-level

<CodeBlock className="language-d2-incomplete">
    {Suspend2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/suspend-2.svg2')}}></div>

## Show only connection to X

<CodeBlock className="language-d2-incomplete">
    {Suspend3}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/suspend-3.svg2')}}></div>

## Show only likes

<CodeBlock className="language-d2-incomplete">
    {Suspend4}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/suspend-4.svg2')}}></div>

## Utilizing imports

As you may have noticed, each of these examples repeated the initial models. You can
further apply the "one model" principle by defining models once in their own file and
importing them. See the [import model-view pattern](/tour/model-view/) for more.
