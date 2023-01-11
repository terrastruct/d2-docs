# TALA

Proprietary layout engine developed by Terrastruct, designed specifically for software
architecture diagrams.

TALA is a separate install from D2, to keep a clean cut between 100% free and
open-source D2, and proprietary, closed-source TALA. You can download it here:
[https://github.com/terrastruct/tala](https://github.com/terrastruct/tala#installation).

## Reference

[https://terrastruct.com/tala/](https://terrastruct.com/tala/)

## Pros

- As a general orthogonal layout engine, TALA is not constrained to one type like
  hierarchies or trees or radial. For fundamentally non-hierarchical layouts, TALA can
  produce diagrams like a human would on a whiteboard.
- Considers and prefers symmetry.
- First-class consideration for containers.
- `direction` can be set per-container.
- `near` can be specified to be to another shape.
- `sql_table` connections point to exact row.
- Dynamic label positioning to avoid obstructions.

## Cons

- Not free.
- Much slower than the other layout engines, due to fundamental algorithm differences
  (many heuristic-searching iterations converging on final layout) and lack of constraint
  like hierarchy.
- Relatively new. ~1 year in production compared to the 10+ years that alternative layout
  engines have.
- More random than other layout engines. A small change to a label can cascade into an
  entirely different layout.

## Gallery

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample1-tala.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample2-tala.svg2')}}></div>
</div>

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample3-tala.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample4-tala.svg2')}}></div>
</div>

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample5-tala.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample6-tala.svg2')}}></div>
</div>

## Using a different seed

TALA's core algorithms use randomness in its initial placements and iterations. If you are
not satisfied with a layout, you can produce different ones by specifying the seed with
`--tala-seed` flag. For example, these are the same diagrams as the above, with
`--tala-seed=2`.

<div style={{display: "inline-flex", alignItems: "center", width: "100%"}}>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample5-tala-2.svg2')}}></div>
  <div style={{width: "50%"}}
  className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/layout_gallery/sample6-tala-2.svg2')}}></div>
</div>
