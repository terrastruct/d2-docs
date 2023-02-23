---
sidebar_label: Icons & Images
---

# Icons

:::tip
We host a collection of icons commonly found in software architecture diagrams for free to
help you get started: [https://icons.terrastruct.com](https://icons.terrastruct.com).
:::

Icons and images are an essential part of production-ready diagrams.

You can use any URL as value.

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

Icon placement is automatic. Considerations vary depending on layout engine, but things
like coexistence with a label and whether it's a container generally affect where the icon
is placed to not obstruct. Notice how the following diagram has container icons in the
top-left and non-container icons in the center.

```d2
vpc: VPC 1 10.1.0.0./16 {
  icon: https://icons.terrastruct.com/aws%2F_Group%20Icons%2FVirtual-private-cloud-VPC_light-bg.svg
  style: {
    stroke: green
    font-color: green
    fill: white
  }
  az: Availability Zone A {
    style: {
      stroke: blue
      font-color: blue
      stroke-dash: 3
      fill: white
    }
    firewall: Firewall Subnet A {
      icon: https://icons.terrastruct.com/aws%2FNetworking%20&%20Content%20Delivery%2FAmazon-Route-53_Hosted-Zone_light-bg.svg
      style: {
        stroke: purple
        font-color: purple
        fill: "#e1d5e7"
      }
      ec2: EC2 Instance {
        icon: https://icons.terrastruct.com/aws%2FCompute%2F_Instance%2FAmazon-EC2_C4-Instance_light-bg.svg
      }
    }
  }
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/icon-placement.svg2')}}></div>

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
