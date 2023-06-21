# Comments

D2 has line comments and block comments.

## Line comments

Line comments begin with a hash.

They can be added as their own line

```d2
# Comments start with a hash character and continue until the next newline or EOF.
x -> y
```

Or at the end of a line

```d2
x -> y # I am at the end
```

## Block comments

Block comments begin and end with three double quotes:

```d2
x -> y

"""
This is a
block comment
"""

y -> z
```
