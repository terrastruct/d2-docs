# Nested composition

Imports make large compositions much more manageable.

Large diagrams like the ones that take you from high-level overview to low-level details
becomes possible to cleanly construct.

Rendering `overview.d2` gives us a nested diagram while each file is kept flat and
readable.

### `overview.d2`
```d2
serviceA -> serviceB
serviceB.link: layers.serviceB
layers: {
  serviceB: @serviceB.d2
}
```

### `serviceB.d2`
```d2
aws vault: {
  key
  token
}
stripe: {
  customer id
}
aws vault.key -> data
aws vault.token -> data
stripe.customer id -> data
data.link: layers.data
layers: {
  data: @data.d2
}
```

### `data.d2`
```d2
users: {
  shape: sql_table
  id: int
  token: string
  customer_id: string
}

# Continue nesting as needed!
# layers: {
#   ...
# }
```
