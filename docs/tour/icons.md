---
sidebar_label: Icons & Images
---
# Icons

Icons and images are an essential part of production-ready diagrams.

```d2
my network: {
  icon: https://icons.terrastruct.com/infra/019-network.svg
}
```

<img src={require('@site/static/img/screenshots/icons-1.png').default} alt="icon example" width="200"/>

:::info
Icons on connections coming soon.
:::

:::info
Using the D2 CLI locally? You can specify local images like `icon: ./my_cat.png`.
:::

## Add `shape: image` for standalone icon shapes

```d2
server: {
  shape: image
  icon: https://icons.terrastruct.com/tech/022-server.svg
}

github: {
  shape: image
  icon: https://icons.terrastruct.com/dev/github.svg
}

server -> github
```

<img src={require('@site/static/img/screenshots/icons-3.png').default} alt="image shape example" width="400"/>

## Image dimensions

You can specify `width`s and `height`s.

```d2
direction: right

small jerry: "" {
  shape: image
  icon: https://static.wikia.nocookie.net/tomandjerry/images/4/46/JerryJumbo3-1-.jpg
  width: 200
  height: 200
}

med jerry: "" {
  shape: image
  icon: https://static.wikia.nocookie.net/tomandjerry/images/4/46/JerryJumbo3-1-.jpg
  width: 300
  height: 300
}

big jerry: "" {
  shape: image
  icon: https://static.wikia.nocookie.net/tomandjerry/images/4/46/JerryJumbo3-1-.jpg
  width: 500
  height: 400
}

big jerry -> med jerry -> small jerry
```

<img src={require('@site/static/img/screenshots/icons-size.png').default} alt="image size example"/>
