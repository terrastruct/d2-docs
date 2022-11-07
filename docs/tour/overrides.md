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
