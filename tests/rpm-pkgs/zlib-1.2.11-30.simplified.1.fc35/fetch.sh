#!/bin/sh
set -x
dnf download --source "$1" --repoid XXX \
    --repofrompath=XXX,https://download.copr.fedorainfracloud.org/results/@aufover/simplified-rpms/fedora-35-x86_64/
