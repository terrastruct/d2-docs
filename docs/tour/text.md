---
sidebar_label: Text & Code
pagination_next: tour/icons
---
# Text

```d2
explanation: |md
  # I can do headers
  - lists
  - lists

  And other normal markdown stuff
|
```

<img src={require('@site/static/img/screenshots/text-1.png').default} alt="markdown example" width="200"/>

## How do I position text?

Usually, longform text adds detail to a particular area of the diagram. You can specify what you want it to be near, with the `near` keyword:

```d2
aws: {
  load_balancer -> api
  api -> db
}
gcloud: {
  auth -> db
}

gcloud -> aws

explanation: |md
  # Why do we use AWS?
  - It has more uptime than GCloud
  - We have free credits
| {
  near: aws
}
```

Notice how the text is positioned near the `aws` node and not the `gcloud` node.

<img src={require('@site/static/img/screenshots/text-2.png').default} alt="text near example" width="400"/>

# Code

Change `md` to a programming language for code blocks

```d2
aws: {
  load_balancer -> api
  api -> db
}
gcloud: {
  auth -> db
}

gcloud -> aws

explanation: |go
  awsSession := From(c.Request.Context())
  client := s3.New(awsSession)

  ctx, cancelFn := context.WithTimeout(c.Request.Context(), AWS_TIMEOUT)
  defer cancelFn()
| {
  near: aws
}
```

<img src={require('@site/static/img/screenshots/text-3.png').default} alt="code block example" width="600"/>

