.POSIX:

.PHONY: all
all: fmt build
ifdef CI
all: assert-linear
endif

.PHONY: fmt
fmt:
	prefix "$@" ./ci/sub/fmt/make.sh
.PHONY: build
build:
	prefix "$@" npm run prod
.PHONY: assert-linear
assert-linear:
	prefix "$@" ./ci/sub/assert_linear.sh
