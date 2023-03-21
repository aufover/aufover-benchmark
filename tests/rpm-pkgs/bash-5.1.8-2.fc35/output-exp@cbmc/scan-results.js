{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "bash-5.1.8-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/cbmc/output",
        "time-created": "2023-01-27 16:53:05",
        "time-finished": "2023-01-27 17:01:45",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/bash-5.1.8-2.fc35/bash-5.1.8-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "bash-5.1/lib/sh/random.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'genseed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/random.c",
                    "line": 93,
                    "column": 8,
                    "event": "warning[-Wpointer-to-int-cast]",
                    "message": "cast from pointer to integer of different size",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93 |   iv = (u_bits32_t)seedrand;            /* let the compiler truncate */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "bash-5.1/lib/sh/random.c",
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
                    "message": "   91|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|     gettimeofday (&tv, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|->   iv = (u_bits32_t)seedrand;\t\t/* let the compiler truncate */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|     iv = tv.tv_sec ^ tv.tv_usec ^ getpid () ^ getppid () ^ current_user.uid ^ iv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     return (iv);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
