{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gzip-1.10-5.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/valgrind/output",
        "time-created": "2022-11-23 15:11:00",
        "time-finished": "2022-11-23 15:16:44",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/gzip-1.10-5.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fdutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 382,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382 |       if (ts && update_timespec (&st, &ts))",
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
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 382,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec * *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 133,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
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
                    "message": "  380|             && (fd < 0 ? stat (file, &st) : fstat (fd, &st)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|       }",
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
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 595,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595 |       if (ts && update_timespec (&st, &ts))",
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
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 595,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec * *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gzip-1.10/lib/utimens.c",
                    "line": 133,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
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
                    "message": "  593|         if (adjustment_needed != 3 && lstat (file, &st))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  594|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|       }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
