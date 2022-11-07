# Containers

```d2
server
# Declares a shape inside of another shape
server.process

# Can declare the container and child in same line
im a parent.im a child

# Since connections can also declare keys, this works too
apartment.Bedroom.Bathroom -> office.Spare Room.Bathroom: Portal
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-1.svg2')}}></div>

## Nested syntax

You can avoid repeating containers by creating nested maps.

```d2
clouds: {
  aws: {
    load_balancer -> api
    api -> db
  }
  gcloud: {
    auth -> db
  }

  gcloud -> aws
}
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-2.svg2')}}></div>

## Container labels

There are two ways define container labels.

### 1. Shorthand container labels

```d2
gcloud: Google Cloud {
  ...
}
```

### 2. Reserved keyword `label`

```d2
gcloud: {
  label: Google Cloud
  ...
}
```

## Example

```d2
clouds: {
  aws: AWS {
    load_balancer -> api
    api -> db
  }
  gcloud: Google Cloud {
    auth -> db
  }

  gcloud -> aws
}

users -> clouds.aws.load_balancer
users -> clouds.gcloud.auth

ci.deploys -> clouds
```

<div className="embedSVG" dangerouslySetInnerHTML={{__html: require('@site/static/img/generated/containers-3.svg2')}}></div>
