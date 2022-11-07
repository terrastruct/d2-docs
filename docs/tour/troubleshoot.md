# Troubleshooting

## It won't compile a specific label or value

It probably has some reserved characters, wrap it around `'` or `"`.

```d2
"x(int y)": "[]int"
```

## The text is rendered too wide/long

Add newlines.

```d2
x: When you go out to buy,\ndon't show your silver.
```

## Non-ASCII text breaks stuff

D2 works with any language, but sometimes non-ASCII characters look like reserved characters when they're not.

```d2
hello世界：مرحبا بالعال
```

The character `：` is not the same as the ASCII `:`, and so it won't register as a label. In the future we'll match non-ASCII equivalents, but for now, for foreign language diagrams, please take care to use the ASCII versions of special characters like `:`, `;`, `.`, among others.
