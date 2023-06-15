# UML Classes

## Basics

D2 fully supports UML Class diagrams. Here's a minimal example:

```d2
MyClass: {
  shape: class

  field: "[]string"
  method(a uint64): (x, y int)
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-1.svg2')}}></div>

Each key of a `class` shape defines either a field or a method.

The value of a field key is its type.

Any key that contains `(` is a method, whose value is the return type.

A method key without a value has a return type of void.

## Visibilities

You can also use UML-style prefixes to indicate field/method visibility.

| visibility prefix | meaning   |
| ----------------- | --------- |
| none              | public    |
| +                 | public    |
| -                 | private   |
| #                 | protected |

See https://www.uml-diagrams.org/visibility.html

Here's an example with differing visibilities and more complex types:

```d2
D2 Parser: {
  shape: class

  # Default visibility is + so no need to specify.
  +reader: io.RuneReader
  readerPos: d2ast.Position

  # Private field.
  -lookahead: "[]rune"

  # Protected field.
  # We have to escape the # to prevent the line from being parsed as a comment.
  \#lookaheadPos: d2ast.Position

  +peek(): (r rune, eof bool)
  rewind()
  commit()

  \#peekn(n int): (s string, eof bool)
}

"github.com/terrastruct/d2parser.git" -> D2 Parser
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/classes-2.svg2')}}></div>
