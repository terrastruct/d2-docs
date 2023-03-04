cd $(git rev-parse --show-toplevel)

d2 --dark-theme=200 -l elk --pad 20 ./static/blog/dark_mode/main.d2 ./static/blog/dark_mode/main.svg2

d2 -l elk --pad 20 ./static/blog/dark_mode/perma.d2 ./static/blog/dark_mode/permalight.png
d2 --theme=200 -l elk --pad 20 ./static/blog/dark_mode/perma.d2 ./static/blog/dark_mode/permadark.png
