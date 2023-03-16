---
pagination_next: tour/style
---
# Themes

D2 comes with many themes that make your diagram look professional and ready to insert
into blogs and wikis.

<img width={700} src={require('@site/static/img/screenshots/themes/theme_overview.png').default} alt="D2 theme choices"/>
<img width={400} src={require('@site/static/img/screenshots/themes/theme_2.png').default} alt="mixed berry blue theme"/>
<img width={400} src={require('@site/static/img/screenshots/themes/theme_3.png').default} alt="vanilla nitro cola theme"/>

### They apply to special shapes like tables too

<img width={600} src={require('@site/static/img/screenshots/themes/theme_table_1.png').default} alt="table neutral theme"/>
<img width={600} src={require('@site/static/img/screenshots/themes/theme_table_2.png').default} alt="table mixed berry blue theme"/>
<img width={600} src={require('@site/static/img/screenshots/themes/theme_table_3.png').default} alt="table vanilla nitro cola theme"/>

## Setting theme on the CLI

To specify the theme used, you can set the flag `-t, --theme`.

```shell
d2 -t 101 input.d2
```

You can also use an environment variable.

```shell
D2_THEME=101 d2 input.d2
```

To see which themes are available, run

```shell
d2 themes
```

## Dark theme

Dark themes are not set by default, so your diagram will look the same regardless of
whether the user's system preferences are light or dark.

:::info
All diagrams in these docs have a dark theme. Try toggling your system preference between
light and dark and see how it changes.
:::

If you'd like your diagram to adapt and switch to a dark theme when the user's system
preference is dark, you can do so by specifying the following flag.

```shell
d2 --dark-theme 200 input.d2
```

Like regular themes, this can also be set with an environment variable.

```shell
D2_DARK_THEME=200 d2 input.d2
```

:::info
The themes are catalogued separately into light and dark, but there's nothing stopping you
from passing a dark theme ID to `theme` for your diagram to always be dark (or vice versa,
to give a surprise to dark mode users).
:::

An example of a dark theme (this one's an image not an SVG, so it won't change according
to your system preference).
<img width={600} src={require('@site/static/img/screenshots/themes/dark.png').default} alt="dark theme"/>

## Special themes

Certain, special themes do more than just color.

For example, when you apply the `Terminal` theme, the following attributes are set as
default:
- Caps lock on all labels
- No border radius
- Monospaced font
- `fill-pattern` set to `dots` for all containers
- Most outer container has `double-border` set to `true`

<div style={{width: "100%", margin: "0 auto"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/terminal-theme.svg2')}}></div>

Source code for the above diagram (rendered with ELK) is as follows. Notice that many of
the properties apparent in the diagram do not appear in the source, such as the casing of
the labels, because the special theme uses different defaults.

```d2
network: {
  cell tower: {
    satellites: {
      shape: stored_data
      style.multiple: true
    }

    transmitter

    satellites -> transmitter: send
    satellites -> transmitter: send
    satellites -> transmitter: send
  }

  online portal: {
    ui: {shape: hexagon}
  }

  data processor: {
    storage: {
      shape: cylinder
      style.multiple: true
    }
  }

  cell tower.transmitter -> data processor.storage: phone logs
}

user: {
  shape: person
  width: 130
}

user -> network.cell tower: make call
user -> network.online portal.ui: access {
  style.stroke-dash: 3
}

api server -> network.online portal.ui: display
api server -> logs: persist
logs: {shape: page; style.multiple: true}

network.data processor -> api server

```
