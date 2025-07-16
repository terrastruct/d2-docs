---
title: Text to PowerPoint
description: Creating PowerPoint presentations from text with diagrams
slug: powerpoint
tags: [powerpoint, show-and-tell]
image: https://raw.githubusercontent.com/terrastruct/d2-docs/master/static/img/screenshots/wcc_pptx.png
hide_table_of_contents: false
---
import CodeBlock from '@theme/CodeBlock';
import Cult from '@site/static/bespoke-d2/cult.d2';

D2 is a diagramming language, and it's versatile unlike any other. For example, you can
create full PowerPoint presentations with just text.

It's not D2's primary function, but rather a natural byproduct of a powerful language. D2
built features for grid diagrams and animations, and users built [pixel
art](https://github.com/terrastruct/d2/issues/1218#issuecomment-1512628007). And now, with
Markdown and Powerpoint, D2 is the easiest way to programmatically create PowerPoint
presentations.

<!-- truncate -->

Let's look at a simple example first, and then a complex one at the end.

## Simple example

<img src={require('@site/static/img/screenshots/cult_pptx.png').default} alt="powerpoint screenshot" style={{width:'100%'}}/>

- Download: [cult.pptx](@site/static/img/generated/cult.pptx)
- Google Slides: [https://docs.google.com/presentation/d/1CnAPcvsh1B4J3nVppNDInm2oTquhCV58/view](https://docs.google.com/presentation/d/1CnAPcvsh1B4J3nVppNDInm2oTquhCV58/view)

To produce this:
- install D2
- make a `.d2` file named `input.d2`
- copy the below
- run `d2 input.d2 cult.pptx`.

<CodeBlock className="language-d2-incomplete">
    {Cult}
</CodeBlock>

## Complex example

The above is pure text. Let's look at an example with diagrams and images.

Be sure to go into Present mode to click on objects and navigate around.

<img src={require('@site/static/img/screenshots/wcc_pptx.png').default} alt="powerpoint screenshot" style={{width:'100%'}}/>

- Download: [wcc.pptx](@site/static/img/generated/wcc.pptx)
- Google Slides: [https://docs.google.com/presentation/d/18rRh4izu3k_43On8PXtVYdqRxmoQJd4y/view](https://docs.google.com/presentation/d/18rRh4izu3k_43On8PXtVYdqRxmoQJd4y/view)

The source code for this is a bit longer, and can be found [here](https://github.com/terrastruct/d2/blob/master/docs/examples/wcc/wcc.d2).

## Limitations

Note that the boxes aren't native PowerPoint boxes that you can resize, and the text isn't
text you can edit. It's very much a "view-only" output. This is a v1 that's just been
released. Perhaps this will change in the future and we can map things to its PowerPoint
equivalent, especially if there's enough demand and usage.
