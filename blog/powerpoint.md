---
title: Text to PowerPoint
description: Creating PowerPoint presentations from text with diagrams
slug: powerpoint
tags: [powerpoint, show-and-tell]
image: https://raw.githubusercontent.com/terrastruct/d2-docs/master/static/img/screenshots/wcc_pptx.png
hide_table_of_contents: false
---

D2 is a diagramming language, and it's versatile unlike any other. For example, you can
create full PowerPoint presentations with just text.

It's not D2's primary function, but rather a natural byproduct of a powerful language. D2
built features for grid diagrams and animations, and users built [pixel
art](https://github.com/terrastruct/d2/issues/1218#issuecomment-1512628007). And now, with
Markdown and Powerpoint, D2 is the easiest way to programmatically create PowerPoint
presentations.

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

```d2
text: |md
  # Introduction

  ## How to start a cult

  This presentation educates the public on starting a cult

  This is an abridged presentation
|

layers: {
  1: {
    text: |md
      # What is a cult?
      - *Definition*: A group or movement with a shared devotion to a charismatic leader, an ideology, or a set of rituals and beliefs
      - *Characteristics*: Totalitarian control, manipulative practices, and exploitation of members
    |
  }
  2: {
    text: |md
      # Charismatic Leader

      ## Role

      Cult leaders have a strong, magnetic personality, and are typically seen as an authority figure

      ## Tips:

      - Cultivate a unique and compelling persona
      - Be convincing and persuasive
      - Establish yourself as an authority figure with exclusive knowledge or abilities
    |
  }
  3: {
    text: |md
      # Recruitment
      - *Importance*: New members are vital for the growth and sustainability of a cult
      - *Methods*: Targeting vulnerable individuals, offering solutions to personal problems, and using social pressure
    |
  }
  4: {
    text: |md
      # Control and manipulation

      ## Purpose
      To maintain power over members and ensure loyalty

      ## Techniques
      Information control, emotional manipulation, and behavior control

      ## Tips:

      - Limit members' access to outside information and discourage critical thinking
      - Use guilt, shame, and fear to manipulate members' emotions
      - Create strict rules and rituals to control behavior
    |
  }
  5: {
    text: |md
      # Enjoy your cult
    |
  }
}
```

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
