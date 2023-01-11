# Dagre

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

## Gallery

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample1-dagre.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample2-dagre.svg2')}}></div>
</div>

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample3-dagre.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample4-dagre.svg2')}}></div>
</div>

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample5-dagre.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample6-dagre.svg2')}}></div>
</div>
