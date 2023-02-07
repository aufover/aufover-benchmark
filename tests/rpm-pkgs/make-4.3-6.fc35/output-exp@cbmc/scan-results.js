{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "make-4.3-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/make-4.3-6.fc35/cbmc/output",
        "time-created": "2023-01-26 10:37:15",
        "time-finished": "2023-01-26 10:42:43",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/make-4.3-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/make-4.3-6.fc35/make-4.3-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "make-4.3/src/makeint.h",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/read.c",
                    "line": 17,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/read.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'eval_makefile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/lib/alloca.h",
                    "line": 46,
                    "column": 18,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of '__builtin_alloca' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | #  define alloca __builtin_alloca",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/read.c",
                    "line": 443,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'alloca'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443 |   alloca (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #   include_next <alloca.h>",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   #  endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|-> #  define alloca __builtin_alloca",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   # elif defined _AIX",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   #  define alloca __alloca",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
