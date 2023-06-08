# Design decisions

The following are design decisions that guide the development of D2. We've tried our best
to avoid the mistakes of the past and take inspiration from the most successful modern
programming and configuration languages.

Design decisions inherently mean tradeoffs, some of which you may disagree with. But, if
you're a programmer, D2 is built for you, and we believe you'll find the sum of these
decisions to be a language that makes you feels at home.

These will inevitably evolve as the language continues to evolve.

## Readability > prototyping speed

Both readability and prototyping speed are important, but when a decision is one or the
other, D2 usually favors readability.

Most of the time, it's not either/or. Good programming language features usually result in
higher vectors in both directions. D2's syntax is light and designed such that autofmt
always gets it right for you, consistent across projects.

Hopefully you'll find a good balance between ease of use, prototyping speed, and
readability, in that order. What D2 specifically avoids is terse, compact syntax that
inhibits all three.

For example, here's two ways to define a cylinder.

D2:

```d2
A: Christmas {shape: cylinder}
```

Mermaid:

```
A[(Christmas)]
```

D2's is a little less compact but a lot more readable.

## Warnings > errors

D2 will compile whenever possible. For example, say you apply a class that doesn't exist,
or add a style that has no effect on a particular shape. If the user error is one that D2
can ignore, it will compile successfully and, at most, warn. There's nothing more annoying
than commenting out some code while debugging, and getting a stop-the-world error message
that you have an unused variable.

## Good defaults

Default, zero-customization D2 should produce good diagrams. That requires being
opinionated on what a good default should be. For example, D2 ships with a default theme.
Instead of keeping things open-ended with monochrome shapes, pleasant colors are the
default.

## Optimized for desktops and servers

D2 has a robust CLI with a built-in watch mode, maintained `man` page, and allows reading
from stdin and writing to stdout. Images and fonts are by default embedded into the
diagram so that exported diagrams are standalone -- they'll look the same everywhere. D2
supports a wide variety of formats like PPT and GIF. It allows imports, such that you can
modularize your diagram into multiple files. There's a language API to programmatically
edit and write D2. All of these are antithetical to a web library for browser rendering.
D2 intends to ship and maintain a web library for that purpose, but it'll be trimmed down
from the full feature set and secondary in priority.
