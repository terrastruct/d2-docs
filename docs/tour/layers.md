# Layers

A "Layer" represents "a layer of abstraction". Each Layer starts off as a blank
board, since you're representing different objects at every level of abstraction.

Try clicking on the objects.

<embed src={require('@site/static/img/generated/tiktok.pdf').default} width="100%" height="800"
 type="application/pdf" />

```d2
explain: |md
  This is the top layer, highest level of abstraction.
| {
  near: top-center
}

Tik Tok's User Data: {
  link: layers.tiktok
}

layers: {
  tiktok: {
    explain: |md
      One layer deeper:

      Tik Tok's CEO explained that user data is stored in two places currently.
    | {
      near: top-center
    }
    Virginia data center <-> Hong Kong data center
    Virginia data center.link: layers.virginia
    Hong Kong data center.link: layers.hongkong
    layers: {
      virginia: {
        direction: right
        explain: |md
          Getting deeper into details:

          TikTok's CEO explains that Virginia data center has strict security measures.
        | {
          near: top-center
        }
        Oracle Databases: {
          shape: cylinder
          style.multiple: true
        }
        US residents -> Oracle Databases: access
        US residents: {
          shape: person
        }
        Third party auditors -> Oracle Databases: verify
      }
      hongkong: {
        direction: right
        explain: |md
          TikTok's CEO says data is actively being deleted and should be done by the end of the year.
        | {
          near: top-center
        }
        Legacy Databases: {
          shape: cylinder
          style.multiple: true
        }
      }
    }
  }
}
```
