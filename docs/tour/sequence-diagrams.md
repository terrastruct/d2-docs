import CodeBlock from '@theme/CodeBlock';
import WebPImage from '@site/src/components/WebPImage';
import SequenceDiagrams1 from '@site/static/d2/sequence-diagrams-1.d2';
import SequenceDiagrams2 from '@site/static/d2/sequence-diagrams-2.d2';
import SequenceDiagrams3 from '@site/static/d2/sequence-diagrams-3.d2';
import SequenceDiagrams4 from '@site/static/d2/sequence-diagrams-4.d2';
import SequenceDiagramsScope from '@site/static/d2/sequence-diagrams-scope.d2';
import SequenceDiagramsGroup from '@site/static/d2/sequence-diagrams-group.d2';
import SequenceDiagramsNote from '@site/static/d2/sequence-diagrams-note.d2';
import SequenceDiagramsSelf from '@site/static/d2/sequence-diagrams-self.d2';
import SequenceDiagramsLifeline from '@site/static/d2/sequence-diagrams-lifeline.d2';

# Sequence Diagrams

Sequence diagrams are created by setting `shape: sequence_diagram` on an object.

<CodeBlock className="language-d2">
    {SequenceDiagrams1}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-1.svg2')}}></div>

## Rules

Unlike other tools, there is no special syntax to learn for sequence diagrams. The rules
are also almost exactly the same as everywhere else in D2, with two notable differences.

### Scoping

Children of sequence diagrams share the same scope throughout the sequence diagram.

For example:

<CodeBlock className="language-d2">
    {SequenceDiagramsScope}
</CodeBlock>

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

<CodeBlock className="language-d2">
    {SequenceDiagrams2}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-2.svg2')}}></div>

### Spans

Spans convey a beginning and end to an interaction within a sequence diagram.

:::info
A span in D2 is also known elsewhere as a "lifespan", "activation box", and "activation bar".
:::

You can specify a span by connecting a nested object on an actor.

<CodeBlock className="language-d2">
    {SequenceDiagrams3}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-3.svg2')}}></div>

### Groups

Groups help you label a subset of the sequence diagram.

:::info
A group in D2 is also known elsewhere as a "fragment", "edge group", and "frame".
:::

We saw an example of this in an earlier example when explaining scoping rules. More
formally, a group is a container within a `sequence_diagram` shape which is not connected
to anything but has connections or objects inside.

<CodeBlock className="language-d2">
    {SequenceDiagramsGroup}
</CodeBlock>

:::caution
Due to the unique scoping rules in sequence diagrams, when you are within a group, the
objects you reference in connections must exist at the top-level. Notice in the above
example that `alice` and `bob` are explicitly declared before group declarations.
:::

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-group.svg2')}}></div>

### Notes

Notes are declared by defining a nested object on an actor with no connections going to
it.

<CodeBlock className="language-d2">
    {SequenceDiagramsNote}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-note.svg2')}}></div>

### Self-messages

Self-referential messages can be declared from an actor to the themselves.

<CodeBlock className="language-d2">
    {SequenceDiagramsSelf}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-self.svg2')}}></div>

### Customization

You can style shapes and connections like any other. Here we make some messages dashed and
set the shape on an actor.

<CodeBlock className="language-d2">
    {SequenceDiagrams4}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-4.svg2')}}></div>

Lifeline edges (those lines going from top-down) inherit the actor's `stroke` and
`stroke-dash` styles.

<CodeBlock className="language-d2">
    {SequenceDiagramsLifeline}
</CodeBlock>

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/sequence-diagrams-lifeline.svg2')}}></div>

## Glossary

<WebPImage src={require('@site/static/img/screenshots/sequence_glossary.png').default}
alt="sequence diagram glossary"/>
