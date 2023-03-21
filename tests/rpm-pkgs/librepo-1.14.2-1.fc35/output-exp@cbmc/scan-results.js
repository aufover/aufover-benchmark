{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "librepo-1.14.2-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/librepo-1.14.2-1.fc35/cbmc/output",
        "time-created": "2023-01-30 07:41:16",
        "time-finished": "2023-01-30 07:48:44",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/librepo-1.14.2-1.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/librepo-1.14.2-1.fc35/librepo-1.14.2-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "librepo-1.14.2/librepo/python/globalstate-py.h",
                    "line": 60,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'gil_logger_hack_begin' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | gil_logger_hack_begin(PyThreadState **state)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   static int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|-> gil_logger_hack_begin(PyThreadState **state)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|       int ret = GIL_HACK_DO_NOT_CLEAR;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/librepo/python/librepomodule.c",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/python/globalstate-py.h",
                    "line": 84,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'gil_logger_hack_end' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 | gil_logger_hack_end(int hack_begin_rc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   static gboolean",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|-> gil_logger_hack_end(int hack_begin_rc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|       int ret;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 22,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: dead object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   #include \"test_package_downloader.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   #include \"test_repoconf.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> #include \"test_repomd.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #include \"test_url_substitution.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   #include \"test_util.h\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 22,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: deallocated dynamic object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   #include \"test_package_downloader.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   #include \"test_repoconf.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> #include \"test_repomd.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #include \"test_url_substitution.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   #include \"test_util.h\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 22,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: invalid integer address in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: invalid integer address in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   #include \"test_package_downloader.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   #include \"test_repoconf.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> #include \"test_repomd.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #include \"test_url_substitution.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   #include \"test_util.h\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 22,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer NULL in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 2147221503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   #include \"test_package_downloader.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   #include \"test_repoconf.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> #include \"test_repomd.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #include \"test_url_substitution.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   #include \"test_util.h\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 22,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer invalid in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 33554432",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 33554432",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer invalid in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   #include \"test_package_downloader.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   #include \"test_repoconf.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> #include \"test_repomd.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #include \"test_url_substitution.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   #include \"test_util.h\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 22,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer outside object bounds in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 33554432",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 33554432",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer invalid in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   #include \"test_package_downloader.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   #include \"test_repoconf.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> #include \"test_repomd.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #include \"test_url_substitution.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   #include \"test_util.h\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘getopt’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "error",
                    "message": "in getopt: pointer_arithmetic: pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = 33554432",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = 33554432",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       const char *repos_dir;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|->     while ((c = getopt (argc, argv, \"vd\")) != -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|           switch (c) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|           case 'v':",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "CBMC_WARNING",
            "tool": "cbmc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘main’:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 85,
                    "event": "error",
                    "message": "pointer_arithmetic: pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 0
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[1l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].from = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[2l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[3l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[4l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[5l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[6l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].from = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[7l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].from = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[8l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[9l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].from = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[12l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].from = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].from = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].from = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:pointer:        stateswitches[15l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/metalink.c",
                    "line": 153,
                    "event": "note",
                    "message": "entry_point_function:153:integer:        stateswitches[15l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].from = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[0l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].to = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[0l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[1l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].to = 2u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[1l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[2l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].to = 3u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[2l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[3l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].to = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[3l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].from = 1u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[4l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].to = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[4l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[5l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].to = 5u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[5l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[6l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].to = 6u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[6l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].from = 4u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[7l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].to = 7u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[7l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[8l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].to = 9u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[8l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[9l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].to = 10u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[9l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[10l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].to = 11u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[10l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[11l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].to = 12u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[11l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[12l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].to = 13u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[12l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[13l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].to = 14u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[13l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[14l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].to = 15u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[14l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[15l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].to = 16u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[15l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].from = 8u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[16l].ename = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].to = 17u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[16l].docontent = 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].from = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].$pad1 = 0u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:pointer:        stateswitches$link1[17l].ename = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].to = 18u",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/librepo/repomd.c",
                    "line": 193,
                    "event": "note",
                    "message": "entry_point_function:193:integer:        stateswitches$link1[17l].docontent = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "from_entry_point_function:function-call:main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:integer:        argc = -1394999808",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 58,
                    "event": "note",
                    "message": "function_parameter_set_in:entry_point_function:58:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 60,
                    "event": "note",
                    "message": "main:60:integer:        c = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 61,
                    "event": "note",
                    "message": "main:61:integer:        verbose = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 62,
                    "event": "note",
                    "message": "main:62:integer:        downloading = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 63,
                    "event": "note",
                    "message": "main:63:integer:        number_failed = 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 64,
                    "event": "note",
                    "message": "main:64:struct:        s = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 65,
                    "event": "note",
                    "message": "main:65:pointer:        repos_dir = ((char *)NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "from_main:function-call:getopt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:integer:        argc = -1394999808",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        argv = argv'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "function_parameter_set_in:main:67:pointer:        optstring = ?",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer NULL in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: deallocated dynamic object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: dead object in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<builtin-library-getopt>",
                    "line": 22,
                    "event": "note",
                    "message": "pointer arithmetic: invalid integer address in argv[(signed long int)optind] + (signed long int)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 67,
                    "event": "note",
                    "message": "main:67:integer:        c = -1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "librepo-1.14.2/tests/test_main.c",
                    "line": 85,
                    "event": "note",
                    "message": "pointer arithmetic: pointer outside object bounds in argv + (signed long int)optind",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|->     repos_dir = argv[optind];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|       if (verbose) {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
