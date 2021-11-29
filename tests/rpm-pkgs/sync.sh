#!/bin/zsh
set -e

# force use of POSIX locale
export LC_ALL="C"

# full path to this script
SELF=$(realpath $0)

# resolve $group_dir
group_dir=$(dirname $SELF)
[[ rpm-pkgs = $(basename $group_dir) ]]

# resolve $TESTDIR
export TESTDIR=$(dirname $group_dir)
[[ tests = $(basename $TESTDIR) ]]

# resolve $top_dir
top_dir=$(dirname $TESTDIR)
[[ -r ${top_dir}/Makefile ]]

# initialize $WORKDIR
export WORKDIR=${top_dir}/workdir-for-sync
rm -rf $WORKDIR

rpm_pkgs=${WORKDIR}/rpm-pkgs

# escape every argument to prevent them being interpreted as shell commands
# as cmake executes ctest in a new shell
i=1
while test "$i" -le "$#"; do
    ARGS+=("'${(P)$((i++))}'")
done

# (re)configure the project, giving all args as CTEST_OPTS
CTEST_OPTS="${ARGS[*]}" make -C ${top_dir}

# query available TOOLS unless $TOOLS is set in caller's env
tool_list=$(make -s -C $rpm_pkgs list-available-tools)

setopt SH_WORD_SPLIT
typeset -a clean_list

# make sure that output-exp@tool files exist to trigger the tests
cd $group_dir
if test -z "$SYNC_EXISTING_ONLY"; then
    for test in *(/); do
        for tool in $tool_list; do
            exp_file="${test}/output-exp@${tool}"
            if test -e "$exp_file"; then
                continue;
            fi
            mkdir -p "$exp_file"
            clean_list+=("$exp_file")
        done
    done
fi

# reconfigure the project to make the above take an effect
CTEST_OPTS="${ARGS[*]}" make -C "${top_dir}" CMAKE_OPTS=-DPHASE_ENABLE_diff=OFF

# remove output-exp@tool files for tests that were not selected in the end
[[ -z "$clean_list" ]] || rmdir -v "${clean_list[@]}"

# run check without actually checking the diff
cd "$rpm_pkgs"
make check-only

# move actual output to the expected output
for test in *(/); do
    case "$test" in (CMakeFiles/*|Testing/*)
        continue
    esac
    for tool in $tool_list; do
        dir=${test}/${tool}
        src=${dir}/output
        test -r "$src" || continue
        dst=$(readlink "${dir}/output-exp")
        install -m0644 -v "$src"/scan{.log,-results.{err,js}} -Dt "$dst"
    done
done
