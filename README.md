# D2 Documentation

This is language documentation for D2, a modern, open-source text-to-diagram DSL. The
source repository for that is here:
[https://github.com/terrastruct/d2](https://github.com/terrastruct/d2).

Deployed at [https://d2-lang.com](https://d2-lang.com).

## Reference

A more formal reference specification is in the works.

## Contributing

### Development

```sh
npm install
npm run dev
```

### Note

Renders are currently saved as `.svg2` because I don't know how to override Docusaurus's
SVG loader that uses SVGGo which is causing a bug during compression (removing a class).
