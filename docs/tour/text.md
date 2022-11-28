---
sidebar_label: Text & Code
pagination_next: tour/icons
---
# Text

## Standalone text is markdown

```d2
explanation: |md
  # I can do headers
  - lists
  - lists

  And other normal markdown stuff
|
```

<img src={require('@site/static/img/screenshots/text-1.png').default} alt="markdown example" width="200"/>

## Latex

```d2
plankton -> formula: will steal
formula: {
  equation: |latex
    \\lim_{h \\rightarrow 0 } \\frac{f(x+h)-f(x)}{h}
  |
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/text-2.svg2')}}></div>

A few things to note about Latex blocks:

- You must escape `\`, as these are escape characters. Note the usage of `\\` in the above
  example.
- Latex blocks do not respect `font-size` styling. Instead, you must style these inside
  the Latex script itself with commands:
  - `\tiny{ }`
  - `\small{ }`
  - `\normal{ }`
  - `\large{ }`
  - `\huge{ }`
- Under the hood, this is using [MathJax](https://www.mathjax.org/). It is not full Latex,
  which includes a document layout engine. D2's Latex blocks are meant to display
  mathematical notation, but not support the format of existing Latex documents.

:::info
Currently cannot be applied to labels, which is why the above example nests an object.
This is coming soon.
:::

## How do I position text?

:::info
This keyword is currently only on Terrastruct and has not been ported yet to local
renders. In progress.
:::

Usually, longform text adds detail to a particular area of the diagram. You can specify
what you want it to be near, with the `near` keyword:

```d2
aws: {
  load_balancer -> api
  api -> db
}
gcloud: {
  auth -> db
}

gcloud -> aws

explanation: |md
  # Why do we use AWS?
  - It has more uptime than GCloud
  - We have free credits
| {
  near: aws
}
```

Notice how the text is positioned near the `aws` node and not the `gcloud` node.

<img src={require('@site/static/img/screenshots/text-2.png').default} alt="text near example" width="400"/>

## Code

Change `md` to a programming language for code blocks

```d2
aws: {
  load_balancer -> api
  api -> db
}
gcloud: {
  auth -> db
}

gcloud -> aws

explanation: |go
  awsSession := From(c.Request.Context())
  client := s3.New(awsSession)

  ctx, cancelFn := context.WithTimeout(c.Request.Context(), AWS_TIMEOUT)
  defer cancelFn()
| {
  near: aws
}
```

<img src={require('@site/static/img/screenshots/text-3.png').default} alt="code block example" width="600"/>

