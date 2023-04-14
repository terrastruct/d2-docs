---
pagination_next: tour/layers
---

# Intro to Composition

:::info
This section's documentation is incomplete. We'll be adding more to this section soon.
:::

D2 has built-in mechanisms for you to compose multiple boards into one diagram.

For example, this is a composition of 2 boards, exported as an animated SVG:

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/animated.svg2')}}></div>

The way to define another board in a D2 diagram is to use 1 of 3 keywords. Each of these
declare boards with different inheritance rules.

| Keyword   | Inheritance                                       |
|-----------|---------------------------------------------------|
| `layers`    | Boards which do not inherit. They are a new base. |
| `scenarios` | Boards which inherit from the base layer.         |
| `steps`     | Boards which inherit from the previous step.      |

Each one serves different use cases. The example above is achieved by defining a Scenario
(the scenario of when we have to deploy a hotfix).

Thus far, all D2 diagrams we've encountered are single-board diagrams, the root board.

```d2
# Root board
x -> y
```

Composition in D2 is when you use one of those keywords to declare another board.

```d2
# Root board
x -> y
layers: {
  # Board named "numbers" that does not inherit anything from root
  numbers: {
    1 -> 2
  }
}
```

So now we have two boards: root and `numbers`. They cannot be visible at the same time of
course, so exports have to accommodate these more dynamic diagrams, such as the animated
SVG you see above.

Composition is one of D2's most powerful features, as you'll see from the use cases in this
section.

