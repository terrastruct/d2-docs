# Dimensions

You can specify the `width` and `height` of most shapes.

:::info
These keywords cannot be set on containers, since containers resize to fit their children.
:::

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
