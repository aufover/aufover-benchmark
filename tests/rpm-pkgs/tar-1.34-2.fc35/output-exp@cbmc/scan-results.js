{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "tar-1.34-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/tar-1.34-2.fc35/cbmc/output",
        "time-created": "2023-01-28 08:49:49",
        "time-finished": "2023-01-28 19:09:34",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/tar-1.34-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/tar-1.34-2.fc35/tar-1.34-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fdutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 399,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399 |       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 399,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec **'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 136,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|             && (fd < 0 ? stat (file, &st) : fstat (fd, &st)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 612,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612 |       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 612,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec **'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 136,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tar-1.34/gnu/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
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
                    "message": "  610|         if (adjustment_needed != 3 && lstat (file, &st))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|       }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
