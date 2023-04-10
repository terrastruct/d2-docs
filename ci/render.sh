#!/bin/sh
set -eu
. "$(dirname "$0")/../ci/sub/lib.sh"
cd -- "$(dirname "$0")/.."

_normal() {
  sh_c d2 --dark-theme=200 -l dagre -c --pad 0 ./static/d2/${ex}.d2 ./static/img/generated/${ex}.svg2
}

_bespoke() {
  sh_c d2 --theme=300 --dark-theme=200 -l elk -c --pad 0 ./static/bespoke-d2/terminal-theme.d2 ./static/img/generated/terminal-theme.svg2
  sh_c d2 --animate-interval=1400 -l elk -c --pad 0 ./static/bespoke-d2/animated.d2 ./static/img/generated/animated.svg2
  sh_c d2 --animate-interval=1400 -c --pad 0 ./static/bespoke-d2/chicken.d2 ./static/img/generated/chicken.svg2
  sh_c d2 --pad 50 ./static/bespoke-d2/tiktok.d2 ./static/img/generated/tiktok.pdf
  sh_c d2 --pad 0 ./static/bespoke-d2/cat.d2 ./static/img/generated/cat.pdf
  sh_c d2 --pad 50 ./static/bespoke-d2/lotr.d2 ./static/img/generated/lotr.pdf

  sh_c d2 --animate-interval=1600 -c --pad 50 -l elk ./static/bespoke-d2/tax.d2 ./static/img/generated/tax.svg2
  sh_c d2 --animate-interval=1600 -c --pad 0 -l elk ./static/bespoke-d2/pizza.d2 ./static/img/generated/pizza.svg2
  sh_c d2 --animate-interval=1600 -c --pad 0 -l elk ./static/bespoke-d2/johnwick.d2 ./static/img/generated/johnwick.svg2

  sh_c d2 --animate-interval=400 -c --pad 0 ./static/bespoke-d2/grid-row-dominant.d2 ./static/img/generated/grid-row-dominant.svg2
  sh_c d2 --animate-interval=400 -c --pad 0 ./static/bespoke-d2/grid-column-dominant.d2 ./static/img/generated/grid-column-dominant.svg2
}

main() {
  job_parseflags "$@"

  for ex in ./static/d2/*.d2; do
    ex=${ex#./static/d2/}
    ex=${ex%.d2}
    export JOBNAME=$ex
    if ! _runjob_filter; then
      continue
    fi

    bigheader "$ex"
    runjob _normal &
  done
  export JOBNAME='bespoke'
  if  _runjob_filter; then
    runjob _bespoke &
  fi
  waitjobs
}

main "$@"
