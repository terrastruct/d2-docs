---
sidebar_label: What is D2
pagination_next: tour/experience
---

# D2 Tour

```d2
direction: right
x -> y -> z: onwards!
```

**D2** is a diagram scripting language that turns text to diagrams. It stands for
**Declarative Diagramming**. Declarative, as in, you describe what you want diagrammed, it
generates the image.

For example, download the CLI, create a file named `input.d2`, copy paste the following,
run this command, and you get the image below.

```sh
d2 --theme=300 --dark-theme=200 -l elk --pad 0 ./input.d2
```

<div style={{width: "100%"}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/terminal-theme.svg2')}}></div>

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

## Using the CLI watch mode

<img className="screenCap" width="100%" src={require('@site/static/img/screenshots/cli.gif').default}
alt="D2 CLI"/>

You can finish this tour in about 5-10 minutes, and at the end, there's a cheat sheet you
can download and refer to. If you want just the bare essentials, <a
href="/tour/hello-world">Getting Started</a> takes
~2 mins.

:::info
The source code for D2 is hosted here:
[https://github.com/terrastruct/d2](https://github.com/terrastruct/d2).

The source code for these docs are here:
[https://github.com/terrastruct/d2-docs](https://github.com/terrastruct/d2-docs).
:::
