#!/bin/sh
set -eu
if [ ! -e "$(dirname "$0")/ci/sub/.git" -o \
  ! -e "$(dirname "$0")/src/d2-vscode/.git" ]; then
  set -x
  git submodule update --init
  set +x
fi
. "$(dirname "$0")/ci/sub/lib.sh"
PATH="$(cd -- "$(dirname "$0")" && pwd)/ci/sub/bin:$PATH"
cd "$(dirname "$0")"

_make "$@"
