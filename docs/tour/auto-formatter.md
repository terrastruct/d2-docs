# Autoformat

You almost never have to think about style decisions like indentation, newlines,
number of hyphens, or spacing. D2's auto-formatter will format your D2 file for you on
compile, keeping all your declarations consistent and readable, effortlessly.

The auto-formatter runs on every compilation.

If your file is

```d2
aws_s3:    AWS S3 California{
  Monitoring ---------->California
}
```

When you compile, it becomes

```d2
aws_s3: AWS S3 California {
  Monitoring -> California
}
```
