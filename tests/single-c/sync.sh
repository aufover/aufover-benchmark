#!/bin/zsh
set -e

# full path to this script
SELF=$(realpath $0)

# resolve $group_dir
group_dir=$(dirname $SELF)
[[ single-c = $(basename $group_dir) ]]

# resolve $TESTDIR
export TESTDIR=$(dirname $group_dir)
[[ tests = $(basename $TESTDIR) ]]

# resolve $top_dir
top_dir=$(dirname $TESTDIR)
[[ -r ${top_dir}/Makefile ]]

# initialize $WORKDIR
export WORKDIR=${top_dir}/workdir-for-sync
rm -rf $WORKDIR

# (re)configure the project, giving all args as CTEST_OPTS
CTEST_OPTS="$*" make -C ${top_dir}

# query enabled TOOLS unless $TOOLS is set in caller's env
tool_list=$(make -s -C $WORKDIR list-enabled-tools/fast)

# make sure that output-exp@tool files exist to trigger the tests
(cd $group_dir
    setopt SH_WORD_SPLIT
    for test in */*(/); do
        for tool in $tool_list; do
            touch "${test}/output-exp@${tool}"
        done
    done
)

# reconfigure the project to make the above take an effect
CTEST_OPTS="$*" make -C ${top_dir}

(cd ${WORKDIR}/single-c
    # run check without actually checking the diff
    make check-without-diff

    # move actual output to the expected output
    setopt SH_WORD_SPLIT
    for test in */*(/); do
        case "$test" in (CMakeFiles/*|Testing/*)
            continue
        esac
        for tool in $tool_list; do
            dir=${test}/${tool}
            src=${dir}/output-uni.txt
            test -r "$src" || continue
            dst=$(readlink "${dir}/output-exp.txt")
            mv -v "$src" "$dst"
        done
    done
)