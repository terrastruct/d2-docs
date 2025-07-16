# TALA

**[🔗 Gallery](/examples/tala)**

Proprietary layout engine developed by Terrastruct, designed specifically for software
architecture diagrams.

TALA is a separate install from D2, to keep a clean cut between 100% free and
open-source D2, and proprietary, closed-source TALA. You can download it here:
[https://github.com/terrastruct/tala](https://github.com/terrastruct/tala#installation).

## Reference

[https://terrastruct.com/tala/](https://terrastruct.com/tala/)

For the most up-to-date information, please see the [official TALA
manual](https://github.com/terrastruct/TALA/blob/master/TALA_User_Manual.pdf).

## Pros

- As a general orthogonal layout engine, TALA is not constrained to one type like
  hierarchies or trees or radial. For fundamentally non-hierarchical layouts, TALA can
  produce diagrams like a human would on a whiteboard.
- `top` and `left` can be used to lock positions.
- Considers and prefers symmetry.
- First-class consideration for containers.
- `direction` can be set per-container.
- `near` can be specified to be to another shape.
- `sql_table` connections point to exact row.
- Dynamic label positioning to avoid obstructions.
- Connections for grid cells use TALA's routing engine instead of always straight lines.

## Cons

- Not free.
- Relatively new. ~2 years in production compared to the 10+ years that alternative layout
  engines have.
- More random than other layout engines. A small change to a label can cascade into an
  entirely different layout.
