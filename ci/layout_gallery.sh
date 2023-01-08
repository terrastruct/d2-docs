#!/bin/sh
set -eu
. "$(dirname "$0")/../ci/sub/lib.sh"
cd -- "$(dirname "$0")/.."

_tala() {
  sh_c D2_LAYOUT=tala hide d2 --theme="$theme" ./static/layout_gallery/"$ex".d2 ./static/layout_gallery/"$ex"-tala.svg2
  if [ "$ex" = "sample5" ] || [ "$ex" = "sample6" ]; then
    sh_c D2_LAYOUT=tala hide d2 --tala-seed=2 --theme="$theme" ./static/layout_gallery/"$ex".d2 ./static/layout_gallery/"$ex"-tala-2.svg2
  fi
}

_elk() {
  sh_c D2_LAYOUT=elk hide d2 --theme="$theme" ./static/layout_gallery/"$ex".d2 ./static/layout_gallery/"$ex"-elk.svg2
}

_dagre() {
  sh_c D2_LAYOUT=dagre hide d2 --theme="$theme" ./static/layout_gallery/"$ex".d2 ./static/layout_gallery/"$ex"-dagre.svg2
}

main() {
  job_parseflags "$@"
  theme_index=0

  # alternate between cool and warm
  themes=(0 100 1 102 4 104 5 105 6)
  for ex in ./static/layout_gallery/*.d2; do
    ex=${ex#./static/layout_gallery/}
    ex=${ex%.*}
    export JOBNAME=$ex
    if ! _runjob_filter; then
      continue
    fi

    theme=${themes[$theme_index]}
    bigheader "$ex"
    runjob _dagre &
    runjob _elk &
    runjob _tala &
    waitjobs
    let theme_index=${theme_index}+1
  done
}

main "$@"
