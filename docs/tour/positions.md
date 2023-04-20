# Positions

In general, positioning is controlled entirely by the layout engine. It's one of the
primary benefits of text-to-diagram that you don't have to manually define all the
positions of objects.

However, there are occasions where you want to have some control over positions.
Currently, there are two ways to do that.

## Near

D2 allows you to position items on set points around your diagram.

:::info Possible values
`top-left`, `top-center`, `top-right`,

`center-left`, `center-right`,

`bottom-left`, `bottom-center`, `bottom-right`
:::

Let's explore some use cases:

### Giving your diagram a title

```d2
title: |md
  # A winning strategy
| { near: top-center }

poll the people -> results
results -> unfavorable -> poll the people
results -> favorable -> will of the people
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/near-constant.svg2')}}></div>

### Creating a legend

```d2
direction: right

x -> y: {
  style.stroke: green
}

y -> z: {
  style.stroke: red
}

legend: {
  near: bottom-center
  color1: foo {
    shape: text
    style.font-color: green
  }

  color2: bar {
    shape: text
    style.font-color: red
  }
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/near-container.svg2')}}></div>

### Longform description or explanation

```d2
explanation: |md
  # LLMs
  The Large Language Model (LLM) is a powerful AI\
    system that learns from vast amounts of text data.\
  By analyzing patterns and structures in language,\
  it gains an understanding of grammar, facts,\
  and even some reasoning abilities. As users input text,\
  the LLM predicts the most likely next words or phrases\
  to create coherent responses. The model\
  continuously fine-tunes its output, considering both the\
  user's input and its own vast knowledge base.\
  This cutting-edge technology enables LLM to generate human-like text,\
  making it a valuable tool for various applications.
| {
  near: center-left
}

ML Platform -> Pre-trained models
ML Platform -> Model registry
ML Platform -> Compiler
ML Platform -> Validation
ML Platform -> Auditing

Model registry -> Server.Batch Predictor
Server.Online Model Server
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/near-explanation.svg2')}}></div>

## Near objects

:::info
Works in TALA only. We are working on shims to make this possible in other layout engines.
:::

You can also set `near` to the absolute ID of another shape to hint to the layout engine
that they should be in the vicinity of one another.

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

## Top and left

On the TALA engine, you can also directly set the `top` and `left` values for objects, and
the layout engine will only move other objects around it.

For more on this, see page 17 of the [TALA user
manual](https://github.com/terrastruct/TALA/blob/master/TALA_User_Manual.pdf).
