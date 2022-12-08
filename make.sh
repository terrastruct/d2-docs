#!/bin/sh
set -eu
. "$(dirname "$0")/ci/sub/lib.sh"
PATH="$(cd -- "$(dirname "$0")" && pwd)/ci/sub/bin:$PATH"
cd "$(dirname "$0")"

if [ -n "${CI-}" ]; then
  go install golang.org/x/tools/cmd/goimports@v0.4.0
  npm install -g prettier@2.8.1
fi

_make "$@"
