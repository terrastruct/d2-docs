---
pagination_next: tour/model-view
---

# Overview

The following are examples of some popular use cases for imports. Fundamentally, D2
imports behave just like dependencies in other programming languages, so it is flexible
for doing much more than the ones shown here.

## Patterns

- [Model-view](/tour/model-view/)
- [Modular classes](/tour/modular-classes/)
- [Nested composition](/tour/nested-composition/)

## Principles

Alongside the patterns that imports can be used for, splitting your diagram into multiple
files can also fulfill useful principles for organizations:

- **Compliance**. Some core piece of architecture needs to follow a spec exactly, and that
  file should not change while others around it can.
- **Domain-driven design**. Diagramming a large architecture? Get different domain experts to
  diagram their parts, and put them together in one diagram.
- **Code reviews**. While text-based diagramming makes reviewing changes possible, we've
  all been in situations where the diff shown makes the review appear more complex than it
  is. When your diagram is more modular, it's easier for everyone to know what's changed.
  Maybe the changes to `style.d2` don't need as much scrutiny as the `security.d2` file
  changes.
- **Reusability**. Your organization can define one `color-classes.d2`, and that can be
  imported and used across all diagrams for a consistent diagram style.
- **Don't repeat yourself**. When multiple files import an object, you only have to make
  changes to that one object to update it everywhere else.

## More Examples

Some more creative, practical examples of using imports that mix and match the above
patterns and principles.

- [Version visualization](/tour/version-visualization/)
- [Template](/tour/imported-template/)
