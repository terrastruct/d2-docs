# Intro to Composition

D2 has built-in mechanisms for you to compose multiple boards into one diagram.

For example, this is a composition of 2 boards, exported as an animated SVG:

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/animated.svg2')}}></div>

The way to define another board in a D2 diagram is to use 1 of 3 keywords which specify
the inheritence:

| Keyword   | Inheritence                                       |
|-----------|---------------------------------------------------|
| `layers`    | Boards which do not inherit. They are a new base. |
| `scenarios` | Boards which inherit from the base layer.         |
| `steps`     | Boards which inherit from the previous step.      |

Each one serves different use cases. The example above is achieved by defining a scenario
(the scenario of when we have to deploy a hotfix).

Composition is one of D2's most powerful features, as you'll see from the use cases in this
section.
