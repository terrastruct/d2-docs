---
pagination_next: tour/hello-world
---
# Install

```sh
go install oss.terrastruct.com/d2
```

**TODO** Test your installation was successful by running `d2 version`.

```sh
echo 'x -> y' > input.d2
d2 -w input.d2 out.svg
```

It should have spun up a local web browser that will automatically refresh when you change
`input.d2`. Modify `input.d2` as you go through this tour to follow along.

You can also download precompiled binaries specific to your OS on the Github releases
page:
[https://github.com/terrastruct/d2/releases](https://github.com/terrastruct/d2/releases).

