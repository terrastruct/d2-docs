# ELK

ELK is a mature, hierarchical layout, actively maintained by an academic research group at
[Christian Albrechts University in
Kiel](https://www.rtsys.informatik.uni-kiel.de/en/team).

## Reference

[https://www.eclipse.org/elk/reference.html](https://www.eclipse.org/elk/reference.html)

## Pros

- Clean, orthogonal routes.
- Highly customizable.
- Fast.
- Good at minimizing crossings.
- Natively supports container to container routing, handling these better than dagre.
- Undergoing active improvements with regular releases.

## Cons

- Strictly hierarchical, like dagre.
- Some routes have unnecessary bends.
- Minimal consideration for symmetry.

## Gallery

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample1-elk.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample2-elk.svg2')}}></div>
</div>

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample3-elk.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample4-elk.svg2')}}></div>
</div>

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample5-elk.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample6-elk.svg2')}}></div>
</div>
