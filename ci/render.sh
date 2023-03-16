cd $(git rev-parse --show-toplevel)

for f in ./static/d2/*.d2
do
 echo "Processing $f"
 filename=$(basename -- "$f")
 filename="${filename%.*}"
 d2 --dark-theme=200 -l dagre --pad 0 $f ./static/img/generated/${filename}.svg2
done

d2 --theme=300 --dark-theme=200 -l elk --pad 0 ./static/bespoke-d2/terminal-theme.d2 ./static/img/generated/terminal-theme.svg2
