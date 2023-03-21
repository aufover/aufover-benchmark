{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "mpfr-4.1.0-8.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/mpfr-4.1.0-8.fc35/symbiotic/output",
        "time-created": "2023-01-30 06:13:28",
        "time-finished": "2023-01-30 06:26:35",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/mpfr-4.1.0-8.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/mpfr-4.1.0-8.fc35/mpfr-4.1.0-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "mpfr-4.1.0/src/vasprintf.c",
                    "line": 1926,
                    "column": 3,
                    "event": "warning[-Wtautological-constant-out-of-range-compare]",
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
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "mpfr-4.1.0/tests/tset.c",
                    "line": 364,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "mpfr-4.1.0/tests/tgeneric.c",
                    "line": 208,
                    "column": 40,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'mp_limb_t' (aka 'unsigned long') to 'double' changes value from 18446744073709551615 to 18446744073709551616",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                (double) randlimb () / MPFR_LIMB_MAX;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ~ ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "mpfr-4.1.0/src/mpfr-impl.h",
                    "line": 1277,
                    "column": 28,
                    "event": "note",
                    "message": "expanded from macro 'MPFR_LIMB_MAX'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define MPFR_LIMB_MAX     ((mp_limb_t) -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|                    take a smaller precision. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|                 xprec *= (prec < 16 ? 256.0 : 1.0) *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|->                 (double) randlimb () / MPFR_LIMB_MAX;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|                 if (xprec < MPFR_PREC_MIN)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|                   xprec = MPFR_PREC_MIN;",
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
                    "file_name": "mpfr-4.1.0/tests/tsprintf.c",
                    "line": 1624,
                    "column": 27,
                    "event": "warning[-Wstring-plus-int]",
                    "message": "adding 'int' to a string does not append to the string",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        strcat (buf, \",0\" + (j % 3 != 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "mpfr-4.1.0/tests/tsprintf.c",
                    "line": 1624,
                    "column": 27,
                    "event": "note",
                    "message": "use array indexing to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        strcat (buf, \",0\" + (j % 3 != 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1622|         strcpy (buf, \"(4) 10^i=1\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1623|         for (j = i; j > 0; j--)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1624|->         strcat (buf, \",0\" + (j % 3 != 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1625|         strcat (buf, \" \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1626|         mpfr_set_str (x, v + sizeof (v) - 3 - i, 10, MPFR_RNDN);",
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
                    "file_name": "mpfr-4.1.0/tests/tsprintf.c",
                    "line": 1644,
                    "column": 27,
                    "event": "warning[-Wstring-plus-int]",
                    "message": "adding 'int' to a string does not append to the string",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        strcat (buf, \",0\" + (j % 3 != 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ~~~~~^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "mpfr-4.1.0/tests/tsprintf.c",
                    "line": 1644,
                    "column": 27,
                    "event": "note",
                    "message": "use array indexing to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        strcat (buf, \",0\" + (j % 3 != 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1642|         strcpy (buf, \"(5) 10^i=1\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1643|         for (j = i; j > 0; j--)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1644|->         strcat (buf, \",0\" + (j % 3 != 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1645|         strcat (buf, \" \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
