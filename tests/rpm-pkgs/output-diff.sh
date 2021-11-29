#!/bin/bash
set -x
set -e
diff -up "$1/scan-results.err" "$2/scan-results.err"
test -z "$(csdiff -c "$1/scan-results.js" "$2/scan-results.js" 2>&1)"
