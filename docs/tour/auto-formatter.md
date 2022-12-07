# Autoformat

You almost never have to think about style decisions like indentation, newlines,
number of hyphens, or spacing. D2's auto-formatter will format your D2 file for you on
compile, keeping all your declarations consistent and readable, effortlessly.

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

## Running formatter

If you're using the `d2` CLI, you can run the formatter on files with

```sh
d2 fmt file.d2
```

The formatter is meant to be integrated into plugins and extensions which automatically
call the formatter upon file writing. This functionality is dependent on the plugin.
