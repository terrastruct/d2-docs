cd $(git rev-parse --show-toplevel)

for f in ./static/d2/*.d2
do
 echo "Processing $f"
 filename=$(basename -- "$f")
 filename="${filename%.*}"
 D2_LAYOUT=dagre d2 $f ./static/img/generated/${filename}.svg2
done
