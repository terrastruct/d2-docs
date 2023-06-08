# Version visualization

## History

Consider that you want to understand how the schema of a system has evolved over time. As
long as the diagram is modularized with imports, such a visualization is easy to whip up.

- `history.d2`
```d2
direction: right
Users 1: Users Table (v0.1) {
  ...@"users-v0.1"
}

Users 2: Users Table (current) {
  ...@"users-current"
}

Users 1 -> Users 2
```

- `users.d2` (latest version, 0.2)
```d2
users: {
  id: int {constraint: primary_key}
  email: int {constraint: foreign_key}
  name: string
  password: text
  created_at: timestamp
  last_updated: timestamp
}

emails: {
  id: int {constraint: [primary_key; unique]}
  local: string
  domain: string
  verified: boolean
}
users.email -> emails.id
```

Since you want how `users.d2` looked like at `v0.1`, you use `git` to get that version:

```sh
cp users.d2 users-current.d2
git checkout tags/v0.1 users.d2
mv users.d2 users-v0.1.d2
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/imports-vv-history.svg2')}}></div>

## Compare

Consider you're a manager at Apple who has two teams secretly working on the same product
for multiple years. After years of iterating in their silos, you form a committee to
compare the two results. The evaluation starts by comparing their design decisions in an
overarching diagram projected in a dark room behind a closed door.

- `compare.d2`
```d2
Team Alpha: {
  Quick facts: |md
    - 3 L6 engineers
  |
  Schema: {
    ...@alpha-schema
  }
  API: {
    ...@alpha-api
  }
  # etc etc
}

Team Charlie: {
  Quick facts: |md
    - 2 L5
    - 5 L4
    - 15 L3
  |
  Schema: {
    ...@charlie-schema
  }
  API: {
    ...@charlie-api
  }
  # etc etc
}
```

And then you checkout the corresponding diagrams from the different repositories.
```sh
gh repo clone apple/team-alpha
gh repo clone apple/team-charlie

cp apple/team-alpha/schema.d2 alpha-schema.d2
cp apple/team-charlie/schema.d2 charlie-schema.d2

cp apple/team-alpha/api.d2 alpha-api.d2
cp apple/team-charlie/api.d2 charlie-api.d2
```

The rendered diagram is left as an exercise to the reader.
