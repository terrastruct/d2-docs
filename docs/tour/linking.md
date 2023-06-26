# Linking between boards

We've introduced `link` before as a way to jump to external resources. They can also be
used to create interactivity to jump to other boards. We'll call these "internal links".

Example of internal link:

```d2
how does the cat go?: {
  link: layers.cat
}

layers: {
  cat: {
    meoowww
  }
}
```

<embed src={require('@site/static/img/generated/cat.pdf').default} width="100%" height="800"
 type="application/pdf" />

:::info
If your board name has a `.`, use quotes to target that board.
For example:

```d2
a.link: layers."2012.06"

layers: {
  "2012.06": {
    hello
  }
}
```
:::

## Parent reference

The underscore `_` is used to refer to the parent scope, but when used in `link` values,
they refer not to parent containers, but to parent boards.

```d2
The shire

journey: {
  link: layers.rivendell
}

layers: {
  rivendell: {
    elves: {
      elrond -> frodo: gives advice
    }

    take me home sam.link: _
    go deeper: {
      link: layers.moria
    }
    layers: {
      moria: {
        dwarves

        take me home sam.link: _._
      }
    }
  }
}
```

<embed src={require('@site/static/img/generated/lotr.pdf').default} width="100%" height="800"
 type="application/pdf" />

## Backlinks

Notice how the navigation bar at the top is clickable. You can easily return to the root
or any ancestor page by clicking on the text.
