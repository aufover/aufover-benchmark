#!/bin/sh
set -x
rpm -qp "${1}.src.rpm" || koji download-build -a src "$1"
