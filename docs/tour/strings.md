---
pagination_next: tour/comments
---
# Strings

## Unquoted strings

You may have noticed by now that the examples thus far have not used any quotes. It's our
goal for D2 to be easy to use and quotes tend to get in the way of that.

Quotes add friction in several ways. First, you have to close opened quotes. Second, you
have to remember whether to use single or double quotes. Lastly, they add syntactical
noise.

That means for the most part, don't worry about quotes!

Leading and trailing whitespace is trimmed.

```d2
   Office Bulb   :     Philips
            Switch   ->   Office Bulb
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/strings-1.svg2')}}></div>

Unquoted strings may not contain certain characters that are used elsewhere in the
language. The syntax highlighting will make it clear if you're using a forbidden symbol.

## Quoted strings

If you need to use such symbols, you can use single or double quoted strings:

```d2
'$$$' -> "###"
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/strings-2.svg2')}}></div>

:::info
You would use double quotes if your text contains single quotes, and vice-versa. If it includes both, use double quotes and simply `\` escape as you would in other languages.
:::

## Block strings

Double and single quoted strings work well when defining simple labels, but what if you
want to write a more detailed explanation or include a list? That's where block strings
come in.

Block strings begin on | and end on | with an optional language tag after the |.
The default langauge embedded without any explicit tag is Markdown.

There is no special character in a block string and they can span multiple lines. Block
strings can only be used as values. They are not valid in keys.

Block strings are indented with two spaces. The leading indent is appropriately stripped.

```d2
ok: |
  1. Apples
    - Granny Smith
    - Fuji
  2. Trucks
    - Ford F150
    - RAM 1500
    - Toyota Tacoma
|
```

<img src={require('@site/static/img/screenshots/strings-3.png').default} alt="strings render" width="300"/>

## Code blocks

You can use block strings to define code snippets.

```d2
pkg_io: |go
  package io

  type Writer interface {
    Write(p []byte) (n int, err error)
  }

  type Reader interface {
    Read(p []byte) (n int, err error)
  }
|
```

<img src={require('@site/static/img/screenshots/strings-4.png').default} alt="strings render" width="600"/>

## Autoformat

If your block string's indent is not sufficient, the autoformatter will correct it.

```d2
parent: {
example_code: |go
  package fs

  type FS interface {
    Open(name string) (File, error)
  }

  type File interface {
    Stat() (FileInfo, error)
    Read([]byte) (int, error)
    Close() error
  }

  var (
    ErrInvalid    = errInvalid()    // "invalid argument"
    ErrPermission = errPermission() // "permission denied"
    ErrExist      = errExist()      // "file already exists"
    ErrNotExist   = errNotExist()   // "file does not exist"
    ErrClosed     = errClosed()     // "file already closed"
  )
|
}
```

Will become:

```d2
parent: {
  example_code: |go
    package fs

    type FS interface {
      Open(name string) (File, error)
    }

    type File interface {
      Stat() (FileInfo, error)
      Read([]byte) (int, error)
      Close() error
    }

    var (
      ErrInvalid    = errInvalid()    // "invalid argument"
      ErrPermission = errPermission() // "permission denied"
      ErrExist      = errExist()      // "file already exists"
      ErrNotExist   = errNotExist()   // "file does not exist"
      ErrClosed     = errClosed()     // "file already closed"
    )
  |
}
```

Autoformat will check if there are any non empty lines with insufficient indent. If so, all
lines will be prepended with the correct amount of indent (while respecting existing
common indent). This way you don't have to fuss with your editor to get the indent right.
Just paste any code on the first column after starting a block string and autoformat will
correct it for you.

You can use tabs to indent block strings after indenting to the base block string indent
with two spaces. Any tabs in the base block string indent will be automatically converted
to two spaces.

