.POSIX:

.PHONY: all
all: fmt build

.PHONY: fmt
fmt:
	prefix "$@" ./ci/bin/fmt.sh
.PHONY: build
build:
	prefix "$@" yarn run prod
