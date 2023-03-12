# Sequence Diagrams

Sequence diagrams are created by setting `shape: sequence_diagram` on an object.

```d2
shape: sequence_diagram
alice -> bob: What does it mean\nto be well-adjusted?
bob -> alice: The ability to play bridge or\ngolf as if they were games.
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-1.svg2')}}></div>

## Rules

Unlike other tools, there is no special syntax to learn for sequence diagrams. The rules
are also almost exactly the same as everywhere else in D2, with two noteable differences.

### Scoping

Children of sequence diagrams share the same scope throughout the sequence diagram.

For example:

```d2
Office chatter: {
  shape: sequence_diagram
  alice: Alice
  bob: Bobby
  awkward small talk: {
    alice -> bob: uhm, hi
    bob -> alice: oh, hello
    icebreaker attempt: {
      alice -> bob: what did you have for lunch?
    }
    unfortunate outcome: {
      bob -> alice: that's personal
    }
  }
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-scope.svg2')}}></div>

Outside of a sequence diagram, there would be multiple instances of `alice` and `bob`,
since they have different container scopes. But when nested under `shape:
sequence_diagram`, they refer to the same `alice` and `bob`.

### Ordering

Elsewhere in D2, there is no notion of order. If you define a connection after another,
there is no guarantee is will visually appear after. However, in sequence diagrams, order
matters. The order in which you define everything is the order they will appear.

This includes actors. You don't have to explicitly define actors (except when they first
appear in a group), but if you want to define a specific order, you should.

```d2
shape: sequence_diagram
# Remember that semicolons allow multiple objects to be defined in one line
# Actors will appear from left-to-right as a, b, c, d...
a; b; c; d
# ... even if the connections are in a different order
c -> d
d -> a
b -> d
```

:::info
An actor in D2 is also known elsewhere as "participant".
:::

## Features

### Sequence diagrams are D2 objects

Like every other object in D2, they can be contained, connected, relabeled, re-styled, and
treated like any other object.

```d2
direction: right
Before and after becoming friends: {
  2007: Office chatter in 2007 {
    shape: sequence_diagram
    alice: Alice
    bob: Bobby
    awkward small talk: {
      alice -> bob: uhm, hi
      bob -> alice: oh, hello
      icebreaker attempt: {
        alice -> bob: what did you have for lunch?
      }
      unfortunate outcome: {
        bob -> alice: that's personal
      }
    }
  }

  2012: Office chatter in 2012 {
    shape: sequence_diagram
    alice: Alice
    bob: Bobby
    alice -> bob: Want to play with ChatGPT?
    bob -> alice: Yes!
    bob -> alice.play: Write a play...
    alice.play -> bob.play: about 2 friends...
    bob.play -> alice.play: who find love...
    alice.play -> bob.play: in a sequence diagram
  }

  2007 -> 2012: Five\nyears\nlater
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-2.svg2')}}></div>

### Spans

Spans convey a beginning and end to an interaction within a sequence diagram.

:::info
A span in D2 is also known elsewhere as a "lifespan", "activation box", and "activation bar".
:::

You can specify a span by connecting a nested object on an actor.

```d2
shape: sequence_diagram
alice.t1 -> bob
alice.t2 -> bob.a
alice.t2.a -> bob.a
alice.t2.a <- bob.a
alice.t2 <- bob.a
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-3.svg2')}}></div>

### Groups

Groups help you label a subset of the sequence diagram.

:::info
A group in D2 is also known elsewhere as a "fragment", "edge group", and "frame".
:::

We saw an example of this in an earlier example when explaining scoping rules. More
formally, a group is a container within a `sequence_diagram` shape which is not connected
to anything but has connections or objects inside.

```d2
shape: sequence_diagram
# Predefine actors
alice; bob
shower thoughts: {
  alice -> bob: A physicist is an atom's way of knowing about atoms.
  alice -> bob: Today is the first day of the rest of your life.
}
life advice: {
  bob -> alice: If all else fails, lower your standards.
}
```

:::caution
Due to the unique scoping rules in sequence diagrams, when you are within a group, the
objects you reference in connections must exist at the top-level. Notice in the above
example that `alice` and `bob` are explicitly declared before group declarations.
:::

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-group.svg2')}}></div>

### Notes

Notes are declared by defining a nested object on an actor with no connections going to
it.

```d2
shape: sequence_diagram
alice -> bob
bob."In the eyes of my dog, I'm a man."
# Notes can go into groups, too
important insight: {
  bob."Cold hands, no gloves."
}
bob -> alice: Chocolate chip.
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-note.svg2')}}></div>

### Self-messages

Self-referential messages can be declared from an actor to the themselves.

```d2
shape: sequence_diagram
son -> father: Can I borrow your car?
friend -> father: Never lend your car to anyone to whom you have given birth.
father -> father: internal debate ensues
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-self.svg2')}}></div>

### Customization

You can style shapes and connections like any other. Here we make some messages dashed and
set the shape on an actor.

```d2
shape: sequence_diagram
scorer: { shape: person }
scorer.t -> itemResponse.t: getItem()
scorer.t <- itemResponse.t: item {
    style.stroke-dash: 5
}

scorer.t -> item.t1: getRubric()
scorer.t <- item.t1: rubric {
    style.stroke-dash: 5
}

scorer.t -> essayRubric.t: applyTo(essayResp)
itemResponse -> essayRubric.t.c
essayRubric.t.c -> concept.t: match(essayResponse)
scorer <- essayRubric.t: score {
    style.stroke-dash: 5
}

scorer.t -> itemOutcome.t1: new
scorer.t -> item.t2: getNormalMinimum()
scorer.t -> item.t3: getNormalMaximum()

scorer.t -> itemOutcome.t2: setScore(score)
scorer.t -> itemOutcome.t3: setFeedback(missingConcepts)

```
<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-4.svg2')}}></div>

## Glossary

<img src={require('@site/static/img/screenshots/sequence_glossary.png').default}
alt="sequence diagram glossary"/>
