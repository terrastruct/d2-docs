# Modular classes

This pattern mirrors web development, separating HTML and CSS.

## `classes.d2`
```d2
classes: {
  base: {
    style: {
      border-radius: 4
      shadow: true
    }
  }
  error: {
    style.fill: red
    style.stroke: red
  }
  med: {
    width: 200
    height: 200
    style.font-size: 24
  }
  large: {
    width: 300
    height: 300
    style.font-size: 28
  }
  xlarge: {
    width: 400
    height: 400
    style.font-size: 32
  }
  person: {
    shape: person
    style.stroke-dash: 3
  }
}
```

## `main.d2`
```d2
...@classes.d2
user.class: person
error.class: [base; error]
modal.class: [base; med]

user -> app.signup: click
app.signup -> error: invalid fields
app.signup -> modal: continue registration
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-classes-main.svg2')}}></div>
