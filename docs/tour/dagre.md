# Dagre

Dagre is D2's default layout engine.



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
- Large hierarchies tend to produce messy squiggly-line edge routes.
- Layout algorithm is strictly hierarchical, even if underlying diagram is not
  hierarchical.

## Reference

[https://github.com/dagrejs/dagre](https://github.com/dagrejs/dagre)

## Gallery

<div style={{display: "inline-flex", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample1-dagre.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample2-dagre.svg2')}}></div>
</div>

<div style={{display: "inline-flex", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample3-dagre.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample4-dagre.svg2')}}></div>
</div>

<div style={{display: "inline-flex", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample5-dagre.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample6-dagre.svg2')}}></div>
</div>
