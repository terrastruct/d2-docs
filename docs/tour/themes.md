---
pagination_next: tour/style
---
# Themes

D2 comes with many themes that make your diagram look professional and ready to insert
into blogs and wikis.

<img width={700} src={require('@site/static/img/screenshots/themes/theme_1.png').default} alt="neutral theme"/>
<img width={400} src={require('@site/static/img/screenshots/themes/theme_2.png').default} alt="mixed berry blue theme"/>
<img width={400} src={require('@site/static/img/screenshots/themes/theme_3.png').default} alt="vanilla nitro cola theme"/>

### They apply to special shapes like tables too

<img width={600} src={require('@site/static/img/screenshots/themes/theme_table_1.png').default} alt="table neutral theme"/>
<img width={600} src={require('@site/static/img/screenshots/themes/theme_table_2.png').default} alt="table mixed berry blue theme"/>
<img width={600} src={require('@site/static/img/screenshots/themes/theme_table_3.png').default} alt="table vanilla nitro cola theme"/>

# Setting theme on the CLI

To specify the theme used, you can set the flag `-t, --theme`.

```shell
d2 -t 101 input.d2 out.svg
```

You can also use an environment variable.

```shell
D2_THEME=101 d2 input.d2 out.svg
```
