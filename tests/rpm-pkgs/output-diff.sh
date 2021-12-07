#!/bin/bash
set -x
set -e

diff -up \
    <(csgrep --invert-match --checker COMPILER "$1/scan-results.err") \
    <(csgrep --invert-match --checker COMPILER "$2/scan-results.err")

test -z "$(csdiff -c \
    <(csgrep --invert-match --checker COMPILER "$1/scan-results.js") \
    <(csgrep --invert-match --checker COMPILER "$2/scan-results.js") \
    2>&1)"

test -z "$(csdiff -c -x \
    <(csgrep --invert-match --checker COMPILER "$1/scan-results.js") \
    <(csgrep --invert-match --checker COMPILER "$2/scan-results.js") \
    2>&1)"
