{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libfastjson-0.99.9-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libfastjson-0.99.9-2.fc35/cbmc/output",
        "time-created": "2023-01-26 08:35:00",
        "time-finished": "2023-01-26 08:41:52",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libfastjson-0.99.9-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libfastjson-0.99.9-2.fc35/libfastjson-0.99.9-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'parse_flags'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 24,
                    "column": 29,
                    "event": "warning[-Wsizeof-array-div]",
                    "message": "expression does not compute the number of elements in this array; element type is 'struct <anonymous>', not 'struct <anonymous> *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24 | #define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 34,
                    "column": 40,
                    "event": "note",
                    "message": "in expansion of macro 'NELEM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34 |                 for (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 24,
                    "column": 38,
                    "event": "note",
                    "message": "add parentheses around '&format_args[0]' to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24 | #define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 34,
                    "column": 40,
                    "event": "note",
                    "message": "in expansion of macro 'NELEM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34 |                 for (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                        ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 17,
                    "column": 3,
                    "event": "note",
                    "message": "array 'format_args' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | } format_args[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   #ifndef NELEM",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|-> #define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
