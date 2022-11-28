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

# Add `shape: image` for standalone icon shapes

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

You can specify `width`s and `height`s of image shapes.

:::info
These keywords are only applicable `shape: image` shapes.
:::

