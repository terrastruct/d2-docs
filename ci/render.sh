cd $(git rev-parse --show-toplevel)

for f in ./static/d2/*.d2
do
 echo "Processing $f"
 filename=$(basename -- "$f")
 filename="${filename%.*}"
 d2 --dark-theme=200 -l dagre --pad 0 $f ./static/img/generated/${filename}.svg2
done

d2 --theme=300 --dark-theme=200 -l elk --pad 0 ./static/bespoke-d2/terminal-theme.d2 ./static/img/generated/terminal-theme.svg2
d2 --animate-interval=1400 -l elk --pad 0 ./static/bespoke-d2/animated.d2 ./static/img/generated/animated.svg2
d2 --animate-interval=1400 --pad 0 ./static/bespoke-d2/chicken.d2 ./static/img/generated/chicken.svg2
d2 --pad 50 ./static/bespoke-d2/tiktok.d2 ./static/img/generated/tiktok.pdf
d2 --pad 0 ./static/bespoke-d2/cat.d2 ./static/img/generated/cat.pdf
d2 --pad 50 ./static/bespoke-d2/lotr.d2 ./static/img/generated/lotr.pdf

d2 --animate-interval=1600 --pad 50 -l elk ./static/bespoke-d2/tax.d2 ./static/img/generated/tax.svg2
d2 --animate-interval=1600 --pad 0 -l elk ./static/bespoke-d2/pizza.d2 ./static/img/generated/pizza.svg2
d2 --animate-interval=1600 --pad 0 -l elk ./static/bespoke-d2/johnwick.d2 ./static/img/generated/johnwick.svg2

d2 --theme=4 --pad 50 -l elk ./static/bespoke-d2/origami.d2 ./static/img/generated/origami.svg2
