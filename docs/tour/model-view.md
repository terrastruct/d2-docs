---
pagination_next: tour/modular-classes
---

# Model-view

A popular pattern defines your models once, and then reuses it across a number of
different views.

## `models.d2`
```d2
postgres: {
  shape: cylinder
  icon: https://icons.terrastruct.com/dev%2Fpostgresql.svg
}
it: IT Guy {
  shape: person
  style: {
    fill: maroon
  }
}
vpn: {
  style: {
    shadow: true
  }
  tooltip: IP is 192.2.2.1
}
```

## `access-view.d2`
```d2
...@models.d2
it -> vpn -> postgres
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-mv-access-view.svg2')}}></div>

## `ssh-view.d2`
```d2
...@models.d2
it -> postgres: ssh, bypassing VPN
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-mv-ssh-view.svg2')}}></div>
