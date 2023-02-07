{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "mpfr-4.1.0-8.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/mpfr-4.1.0-8.fc35/divine/output",
        "time-created": "2023-01-26 16:33:58",
        "time-finished": "2023-01-26 16:39:52",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/mpfr-4.1.0-8.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/mpfr-4.1.0-8.fc35/mpfr-4.1.0-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "mpfr-4.1.0/src/dump.c",
                    "line": 101,
                    "column": 11,
                    "event": "warning",
                    "message": "implicit declaration of function '__gmp_fprintf' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          gmp_fprintf (stream, \"E%Zd\", MPFR_ZEXP (x));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/gmp-x86_64.h",
                    "line": 538,
                    "column": 21,
                    "event": "note",
                    "message": "expanded from macro 'gmp_fprintf'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define gmp_fprintf __gmp_fprintf",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   #ifndef MPFR_USE_MINI_GMP",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->           gmp_fprintf (stream, \"E%Zd\", MPFR_ZEXP (x));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   #else /* mini-gmp has no gmp_fprintf */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|             fprintf (stream, \"E\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "mpfr-4.1.0/src/vasprintf.c",
                    "line": 1926,
                    "column": 3,
                    "event": "warning",
                    "message": "result of comparison of constant 9223372036854775807 with expression of type 'int' is always false",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  INCR_TOTAL (np->ip_trailing_digits);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "mpfr-4.1.0/src/vasprintf.c",
                    "line": 1916,
                    "column": 28,
                    "event": "note",
                    "message": "expanded from macro 'INCR_TOTAL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (MPFR_UNLIKELY ((v) > MPFR_INTMAX_MAX))          \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ~~~~~~~~~~~~~~~~~~~^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "mpfr-4.1.0/src/mpfr-impl.h",
                    "line": 1485,
                    "column": 48,
                    "event": "note",
                    "message": "expanded from macro 'MPFR_UNLIKELY'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define MPFR_UNLIKELY(x) (__builtin_expect(!!(x), 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1924|     INCR_TOTAL (np->prefix_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1925|     INCR_TOTAL (np->ip_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1926|->   INCR_TOTAL (np->ip_trailing_digits);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1927|     MPFR_ASSERTD (np->ip_size + np->ip_trailing_digits >= 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1928|     if (np->thousands_sep)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
