# Overrides

If you redeclare a shape, the new declaration is merged with the previous declaration.

```d2
visual studio code text editor
visual studio code text editor: visual_studio_code_text_editor
# Remember that shape keys are case insensitive
visual studio CODE text editor: VisualStudioCodeTextEditor
visual studio code TEXT editor: Visual Studio Code Text Editor
visual STUDIO code text editor
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/overrides-1.svg2')}}></div>

The latest explicit setting of the label takes priority.

Here's a more complex example of overrides involving containers:

```d2
aws_s3: AWS S3 California {
  Monitoring -> California
}
aws_s3: "AWS S3 San Francisco, California" {
  California.San Francisco
}

# Equal to:
# aws_s3: "AWS S3 San Francisco, California" {
#   Monitoring -> California
#   California.San Francisco
# }
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/overrides-2.svg2')}}></div>

## Null

You may override with the value `null` to delete the shape/connection/attribute.

```d2
one
two

one: null
```

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-basic.svg2')}}></div>

When is this useful?
- [Import](/tour/imports) a diagram from a colleague and remove the things you don't want.
- [Multi-board compositions](/tour/composition) where you inherit all the objects from a
  board with some exceptions.
- Use [globs](/tour/globs) to define connections between a batch of objects except one in
  particular you want to leave out.

### Nulling a connection

```d2
one -> two

(one -> two)[0]: null
```

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-connection.svg2')}}></div>

### Nulling an attribute

```d2
one: {
  style: {
    fill: pink
    stroke: green
  }
}

one.style.stroke: null
```

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-attribute.svg2')}}></div>


### Implicit nulls

If you null a shape with connections, its connections are also nulled (since every
connection in D2 needs an endpoint).

```d2
one -> two

two: null
```

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-implicit-connection.svg2')}}></div>

If you null a shape with descendents, those descendants are also nulled.

```d2
one: {
  two: {
    three
  }
}

one.two: null
```

<div style={{width: 200}} className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/null-implicit-descendant.svg2')}}></div>
