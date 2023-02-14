# Interactive

## Tooltips

Tooltips are text that appear on hover. They serve two purposes:
1. Add secondary context.
    - You want to add a description to an object. It's not so important that everyone
      needs it, but those who want extra information can access it.
2. Tidy.
    - Your diagram is getting messy. Instead of adding more text, you can tuck some into
      tooltips.

```d2
x: { tooltip: Total abstinence is easier than perfect moderation }
y: { tooltip: Gee, I feel kind of LIGHT in the head now,\nknowing I can't make my satellite dish PAYMENTS! }
x -> y
```

Try it out, hover over `x` and `y`. Notice that they have an icon indicating that they
have a tooltip.

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/tooltip.svg2')}}></div>

When you export to a static format like PNG, D2 will
1. Change all the icons to be numbered.
2. Add an appendix, where each line corresponds to the number.

<img align="center" width="500" src={require('@site/static/img/screenshots/tooltip.png').default} alt="d2 tooltip" />

## Links

Links are like tooltips, except you click to go to an external link.

```d2
x: I'm a Mac {
  link: https://apple.com
}
y: And I'm a PC {
  link: https://microsoft.com
}
x -> y: gazoontite
```

Try clicking on each.

<div
className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/links.svg2')}}></div>

:::info
If you are using the Terrastruct app, you can link to other boards through their path.
```d2
x.link: Overview.My Service.Stuff
```
:::

