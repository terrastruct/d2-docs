---
pagination_next: tour/elk
---

# Dagre

**[🔗 Gallery](/examples/dagre)**

Dagre is D2's default layout engine.

## Reference

[https://github.com/dagrejs/dagre](https://github.com/dagrejs/dagre)

## Pros

- Very fast.
- Battle tested (thanks to MermaidJS, which exclusively uses Dagre for its flowcharts).
- Generally good results.
- Theory behind algorithms are the papers that power Graphviz.
- Renders hierarchical layouts well.

## Cons

- Unmaintained. Development stopped in 2018.
- Makes some inexplicable edge routing decisions occasionally
  ([https://github.com/dagrejs/dagre/issues/256](https://github.com/dagrejs/dagre/issues/256)).
- Layout algorithm is strictly hierarchical, even if underlying diagram is not
  hierarchical.
- Container child to another container (or another container child) is not natively
  supported by dagre. D2 has added a shim to make it work, but there's some core algorithm
  considerations that are missed due to the shim.
- Multi-segment edge routes are curved, instead of orthogonal. Can result in unaesthetic
  squiggly lines.
