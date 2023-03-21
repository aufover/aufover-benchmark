{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gnutls-3.7.2-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/valgrind/output",
        "time-created": "2022-11-25 01:44:30",
        "time-finished": "2022-11-25 01:56:56",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/gnutls-3.7.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"certtool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 2751,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2751 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 2930,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2930 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2749|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2750|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2751|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2752|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2753|   #else",
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
                    "file_name": "gnutls-3.7.2/src/certtool-common.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'safe_open_rw'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/certtool-common.c",
                    "line": 92,
                    "column": 7,
                    "event": "warning[-Wsuggest-attribute=malloc]",
                    "message": "function might be candidate for attribute 'malloc'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 | FILE *safe_open_rw(const char *file, int privkey_op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   }",
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
                    "message": "   92|-> FILE *safe_open_rw(const char *file, int privkey_op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   \tmode_t omask = 0;",
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
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"cli-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 2073,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2073 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 2314,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2314 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2071|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2072|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2073|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2074|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2075|   #else",
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
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"cli-debug-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 345,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 503,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|   #else",
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
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"danetool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 962,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 1141,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1141 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  960|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  963|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/danetool.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'cert_callback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/danetool.c",
                    "line": 619,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619 |                 write(priv->fd, t.data, t.size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|-> \t\twrite(priv->fd, t.data, t.size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|   \t\tgnutls_free(t.data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|   \t}",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 46,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | #define ARG_BY_NUM_FMT        (ao_strs_strtable+286)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 317,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'ARG_BY_NUM_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317 |         printf(ARG_BY_NUM_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #define ARG_BREAK_STR         (ao_strs_strtable+280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   #define ARG_BREAK_STR_LEN     5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|-> #define ARG_BY_NUM_FMT        (ao_strs_strtable+286)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   #define ARG_BY_NUM_FMT_LEN    9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   #define BOOL_ATR_FMT          (ao_strs_strtable+957)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 48,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48 | #define BOOL_ATR_FMT          (ao_strs_strtable+957)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 347,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'BOOL_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347 |         fprintf(fp, BOOL_ATR_FMT, ovp->pzName,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   #define ARG_BY_NUM_FMT        (ao_strs_strtable+286)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   #define ARG_BY_NUM_FMT_LEN    9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|-> #define BOOL_ATR_FMT          (ao_strs_strtable+957)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   #define BOOL_ATR_FMT_LEN      31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   #define CHK_MAX_COUNT         (ao_strs_strtable+1508)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 50,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50 | #define CHK_MAX_COUNT         (ao_strs_strtable+1508)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 521,
                    "column": 24,
                    "event": "note",
                    "message": "in expansion of macro 'CHK_MAX_COUNT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521 |                 printf(CHK_MAX_COUNT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   #define BOOL_ATR_FMT          (ao_strs_strtable+957)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   #define BOOL_ATR_FMT_LEN      31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|-> #define CHK_MAX_COUNT         (ao_strs_strtable+1508)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   #define CHK_MAX_COUNT_LEN     190",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   #define CHK_MIN_COUNT         (ao_strs_strtable+1699)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_action'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 56,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56 | #define ECHO_N_EXIT           (ao_strs_strtable+1872)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 499,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'ECHO_N_EXIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499 |         printf(ECHO_N_EXIT, opts->pzPROGNAME, VER_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|   #define CHK_ONE_REQUIRED      (ao_strs_strtable+1791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   #define CHK_ONE_REQUIRED_LEN  80",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|-> #define ECHO_N_EXIT           (ao_strs_strtable+1872)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   #define ECHO_N_EXIT_LEN       50",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   #define EMPTY_ARG             (ao_strs_strtable+296)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 64,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64 | #define END_PRE_FMT           (ao_strs_strtable+989)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 353,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'END_PRE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353 |     printf(END_PRE_FMT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   #define END_OPT_SEL_STR       (ao_strs_strtable+299)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   #define END_OPT_SEL_STR_LEN   12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|-> #define END_PRE_FMT           (ao_strs_strtable+989)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   #define END_PRE_FMT_LEN       36",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   #define END_SET_TEXT          (ao_strs_strtable+312)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 68,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68 | #define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 337,
                    "column": 25,
                    "event": "note",
                    "message": "in expansion of macro 'END_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337 |             fprintf(fp, END_XML_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   #define END_SET_TEXT          (ao_strs_strtable+312)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   #define END_SET_TEXT_LEN      3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|-> #define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   #define END_XML_FMT_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   #define ENUM_ERR_LINE         (ao_strs_strtable+323)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 4,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'enum_err'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 70,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | #define ENUM_ERR_LINE         (ao_strs_strtable+323)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 87,
                    "column": 38,
                    "event": "note",
                    "message": "in expansion of macro 'ENUM_ERR_LINE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87 |             fprintf(option_usage_fp, ENUM_ERR_LINE, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                      ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   #define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   #define END_XML_FMT_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|-> #define ENUM_ERR_LINE         (ao_strs_strtable+323)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   #define ENUM_ERR_LINE_LEN     5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   #define ENUM_ERR_WIDTH        (ao_strs_strtable+329)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 72,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 | #define ENUM_ERR_WIDTH        (ao_strs_strtable+329)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 110,
                    "column": 31,
                    "event": "note",
                    "message": "in expansion of macro 'ENUM_ERR_WIDTH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110 |         if (snprintf(fmt, 16, ENUM_ERR_WIDTH, (int)max_len) >= 16)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   #define ENUM_ERR_LINE         (ao_strs_strtable+323)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   #define ENUM_ERR_LINE_LEN     5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|-> #define ENUM_ERR_WIDTH        (ao_strs_strtable+329)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   #define ENUM_ERR_WIDTH_LEN    6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   #define EXPORT_ARG_FMT        (ao_strs_strtable+336)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 74,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74 | #define EXPORT_ARG_FMT        (ao_strs_strtable+336)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 320,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'EXPORT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320 |         printf(EXPORT_ARG_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   #define ENUM_ERR_WIDTH        (ao_strs_strtable+329)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   #define ENUM_ERR_WIDTH_LEN    6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|-> #define EXPORT_ARG_FMT        (ao_strs_strtable+336)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   #define EXPORT_ARG_FMT_LEN    17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   #define FALSE_STR             (ao_strs_strtable+354)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_wrapup'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 78,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78 | #define FINISH_LOOP           (ao_strs_strtable+2039)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 403,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'FINISH_LOOP'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403 |     printf(FINISH_LOOP, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   #define FALSE_STR             (ao_strs_strtable+354)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   #define FALSE_STR_LEN         5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|-> #define FINISH_LOOP           (ao_strs_strtable+2039)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   #define FINISH_LOOP_LEN       378",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   #define FLAG_OPT_MARK         (ao_strs_strtable+360)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'optionEnumerationVal'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 88,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88 | #define INVALID_FMT           (ao_strs_strtable+375)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 283,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'INVALID_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283 |             printf(INVALID_FMT, ix);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   #define INIT_OPT_STR          (ao_strs_strtable+2669)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   #define INIT_OPT_STR_LEN      116",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|-> #define INVALID_FMT           (ao_strs_strtable+375)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|   #define INVALID_FMT_LEN       10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   #define INVALID_STR           (ao_strs_strtable+386)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'optionParseShell'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 102,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 | #define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 114,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114 |         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   #define LOOP_STR              (ao_strs_strtable+2786)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   #define LOOP_STR_LEN          206",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|-> #define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   #define LOPT_ARG_FMT_LEN      778",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   #define LVL3_CMD              (ao_strs_strtable+425)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104 | #define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 505,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505 |         printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   #define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   #define LOPT_ARG_FMT_LEN      778",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|-> #define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   #define LVL3_CMD_LEN          15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   #define MK_STR_OCT_FMT        (ao_strs_strtable+441)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'optionQuoteString'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 106,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 | #define MK_STR_OCT_FMT        (ao_strs_strtable+441)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 175,
                    "column": 33,
                    "event": "note",
                    "message": "in expansion of macro 'MK_STR_OCT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175 |             out += sprintf(out, MK_STR_OCT_FMT, ch);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   #define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   #define LVL3_CMD_LEN          15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|-> #define MK_STR_OCT_FMT        (ao_strs_strtable+441)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   #define MK_STR_OCT_FMT_LEN    5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   #define MORE_STR              (ao_strs_strtable+447)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 110,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110 | #define MULTI_ARG_FMT         (ao_strs_strtable+3772)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 524,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524 |             printf(MULTI_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   #define MORE_STR              (ao_strs_strtable+447)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   #define MORE_STR_LEN          4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|-> #define MULTI_ARG_FMT         (ao_strs_strtable+3772)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|   #define MULTI_ARG_FMT_LEN     123",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   #define MULTI_DEF_FMT         (ao_strs_strtable+3896)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 114,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114 | #define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 420,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'NESTED_OPT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420 |     fprintf(fp, NESTED_OPT_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   #define MULTI_DEF_FMT         (ao_strs_strtable+3896)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   #define MULTI_DEF_FMT_LEN     157",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|-> #define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   #define NESTED_OPT_FMT_LEN    17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   #define NLSTR_FMT             (ao_strs_strtable+470)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 116,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116 | #define NLSTR_FMT             (ao_strs_strtable+470)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 131,
                    "column": 34,
                    "event": "note",
                    "message": "in expansion of macro 'NLSTR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 |         fprintf(option_usage_fp, NLSTR_FMT, *paz_names);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   #define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   #define NESTED_OPT_FMT_LEN    17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|-> #define NLSTR_FMT             (ao_strs_strtable+470)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   #define NLSTR_FMT_LEN         3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   #define NLSTR_SPACE_FMT       (ao_strs_strtable+474)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 118,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118 | #define NLSTR_SPACE_FMT       (ao_strs_strtable+474)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 124,
                    "column": 42,
                    "event": "note",
                    "message": "in expansion of macro 'NLSTR_SPACE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124 |                 fprintf(option_usage_fp, NLSTR_SPACE_FMT, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   #define NLSTR_FMT             (ao_strs_strtable+470)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   #define NLSTR_FMT_LEN         3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|-> #define NLSTR_SPACE_FMT       (ao_strs_strtable+474)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   #define NLSTR_SPACE_FMT_LEN   5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   #define NONE_STR              (ao_strs_strtable+110)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 128,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | #define NO_MULTI_ARG_FMT      (ao_strs_strtable+4111)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 555,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'NO_MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555 |         printf(NO_MULTI_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   #define NO_LOAD_WARN          (ao_strs_strtable+1026)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   #define NO_LOAD_WARN_LEN      46",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|-> #define NO_MULTI_ARG_FMT      (ao_strs_strtable+4111)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   #define NO_MULTI_ARG_FMT_LEN  140",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   #define NO_SAVE_OPTS          (ao_strs_strtable+1073)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 132,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132 | #define NO_SGL_ARG_FMT        (ao_strs_strtable+4252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 552,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'NO_SGL_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  552 |         printf(NO_SGL_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   #define NO_SAVE_OPTS          (ao_strs_strtable+1073)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   #define NO_SAVE_OPTS_LEN      46",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|-> #define NO_SGL_ARG_FMT        (ao_strs_strtable+4252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   #define NO_SGL_ARG_FMT_LEN    316",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   #define NO_SUPPRESS_LOAD      (ao_strs_strtable+1120)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'prt_value'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 136,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136 | #define NULL_ATR_FMT          (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 302,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'NULL_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302 |         fprintf(fp, NULL_ATR_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   #define NO_SUPPRESS_LOAD      (ao_strs_strtable+1120)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   #define NO_SUPPRESS_LOAD_LEN  65",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|-> #define NULL_ATR_FMT          (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   #define NULL_ATR_FMT_LEN      6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   #define NUMB_ATR_FMT          (ao_strs_strtable+1186)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 138,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138 | #define NUMB_ATR_FMT          (ao_strs_strtable+1186)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 343,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'NUMB_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343 |         fprintf(fp, NUMB_ATR_FMT, ovp->pzName, ovp->v.longVal);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|   #define NULL_ATR_FMT          (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   #define NULL_ATR_FMT_LEN      6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|-> #define NUMB_ATR_FMT          (ao_strs_strtable+1186)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   #define NUMB_ATR_FMT_LEN      34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   #define OK_NEED_OPT_ARG       (ao_strs_strtable+505)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'prt_val_list'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 146,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146 | #define OPEN_CLOSE_FMT        (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 416,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'OPEN_CLOSE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416 |         fprintf(fp, OPEN_CLOSE_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|   #define ONLY_OPTS_LOOP        (ao_strs_strtable+4569)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|   #define ONLY_OPTS_LOOP_LEN    102",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|-> #define OPEN_CLOSE_FMT        (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   #define OPEN_CLOSE_FMT_LEN    6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|   #define OPEN_XML_FMT          (ao_strs_strtable+525)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'prt_string'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 148,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148 | #define OPEN_XML_FMT          (ao_strs_strtable+525)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 365,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'OPEN_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365 |     fprintf(fp, OPEN_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|   #define OPEN_CLOSE_FMT        (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   #define OPEN_CLOSE_FMT_LEN    6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|-> #define OPEN_XML_FMT          (ao_strs_strtable+525)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   #define OPEN_XML_FMT_LEN      4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   #define OPTION_STR            (ao_strs_strtable+530)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 152,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152 | #define OPT_ARG_FMT           (ao_strs_strtable+4672)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 133,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'OPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 |         printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   #define OPTION_STR            (ao_strs_strtable+530)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|   #define OPTION_STR_LEN        6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|-> #define OPT_ARG_FMT           (ao_strs_strtable+4672)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   #define OPT_ARG_FMT_LEN       1153",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   #define OPT_END_FMT           (ao_strs_strtable+537)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 154,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | #define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 272,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'OPT_END_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272 |     printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #define OPT_ARG_FMT           (ao_strs_strtable+4672)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   #define OPT_ARG_FMT_LEN       1153",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|-> #define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   #define OPT_END_FMT_LEN       14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|   #define OPT_VAL_FMT           (ao_strs_strtable+552)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_enumeration'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 156,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156 | #define OPT_VAL_FMT           (ao_strs_strtable+552)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 261,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'OPT_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261 |     printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   #define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   #define OPT_END_FMT_LEN       14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|-> #define OPT_VAL_FMT           (ao_strs_strtable+552)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   #define OPT_VAL_FMT_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|   #define OR_STR                (ao_strs_strtable+559)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/pgusage.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'mk_pager_cmd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 162,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162 | #define PAGE_USAGE_FMT        (ao_strs_strtable+569)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/pgusage.c",
                    "line": 90,
                    "column": 29,
                    "event": "note",
                    "message": "in expansion of macro 'PAGE_USAGE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90 |         snprintf(res, bfsz, PAGE_USAGE_FMT, pager, fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|   #define PAGER_NAME            (ao_strs_strtable+563)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|   #define PAGER_NAME_LEN        5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|-> #define PAGE_USAGE_FMT        (ao_strs_strtable+569)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   #define PAGE_USAGE_FMT_LEN    22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|   #define PAGE_USAGE_TEXT       (ao_strs_strtable+5826)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 164,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164 | #define PAGE_USAGE_TEXT       (ao_strs_strtable+5826)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 502,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'PAGE_USAGE_TEXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502 |         printf(PAGE_USAGE_TEXT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   #define PAGE_USAGE_FMT        (ao_strs_strtable+569)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   #define PAGE_USAGE_FMT_LEN    22",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|-> #define PAGE_USAGE_TEXT       (ao_strs_strtable+5826)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|   #define PAGE_USAGE_TEXT_LEN   73",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   #define PLUS_STR              (ao_strs_strtable+592)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 168,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168 | #define PREAMBLE_FMT          (ao_strs_strtable+5900)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 350,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'PREAMBLE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350 |         printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   #define PLUS_STR              (ao_strs_strtable+592)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   #define PLUS_STR_LEN          3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|-> #define PREAMBLE_FMT          (ao_strs_strtable+5900)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   #define PREAMBLE_FMT_LEN      105",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   #define PUTS_FMT              (ao_strs_strtable+596)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_one_paragraph'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 170,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170 | #define PUTS_FMT              (ao_strs_strtable+596)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 386,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'PUTS_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386 |         fprintf(fp, PUTS_FMT, t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   #define PREAMBLE_FMT          (ao_strs_strtable+5900)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   #define PREAMBLE_FMT_LEN      105",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|-> #define PUTS_FMT              (ao_strs_strtable+596)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   #define PUTS_FMT_LEN          15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   #define QUOT_APOS             (ao_strs_strtable+612)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 174,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174 | #define QUOT_ARG_FMT          (ao_strs_strtable+615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 267,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'QUOT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267 |     printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   #define QUOT_APOS             (ao_strs_strtable+612)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|   #define QUOT_APOS_LEN         2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|-> #define QUOT_ARG_FMT          (ao_strs_strtable+615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|   #define QUOT_ARG_FMT_LEN      4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|   #define SET_MULTI_ARG         (ao_strs_strtable+6006)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 176,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176 | #define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 531,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'SET_MULTI_ARG'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531 |             printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|   #define QUOT_ARG_FMT          (ao_strs_strtable+615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|   #define QUOT_ARG_FMT_LEN      4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|-> #define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   #define SET_MULTI_ARG_LEN     89",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   #define SET_NO_TEXT_FMT       (ao_strs_strtable+1221)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'opt_set'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 180,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180 | #define SET_OFF_FMT           (ao_strs_strtable+620)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 189,
                    "column": 29,
                    "event": "note",
                    "message": "in expansion of macro 'SET_OFF_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189 |             fprintf(stderr, SET_OFF_FMT, pOD->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   #define SET_NO_TEXT_FMT       (ao_strs_strtable+1221)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|   #define SET_NO_TEXT_FMT_LEN   30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|-> #define SET_OFF_FMT           (ao_strs_strtable+620)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   #define SET_OFF_FMT_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|   #define SET_TEXT_FMT          (ao_strs_strtable+627)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_var_text'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 182,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182 | #define SET_TEXT_FMT          (ao_strs_strtable+627)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 197,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'SET_TEXT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 |     printf(SET_TEXT_FMT, prog, var);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|   #define SET_OFF_FMT           (ao_strs_strtable+620)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   #define SET_OFF_FMT_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|-> #define SET_TEXT_FMT          (ao_strs_strtable+627)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|   #define SET_TEXT_FMT_LEN      12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|   #define SGL_ARG_FMT           (ao_strs_strtable+6096)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 184,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184 | #define SGL_ARG_FMT           (ao_strs_strtable+6096)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 518,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'SGL_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |             printf(SGL_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|   #define SET_TEXT_FMT          (ao_strs_strtable+627)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|   #define SET_TEXT_FMT_LEN      12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|-> #define SGL_ARG_FMT           (ao_strs_strtable+6096)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|   #define SGL_ARG_FMT_LEN       258",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|   #define SGL_DEF_FMT           (ao_strs_strtable+6355)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 190,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 | #define SHELL_MAGIC           (ao_strs_strtable+640)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 348,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'SHELL_MAGIC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348 |             printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|   #define SGL_NO_DEF_FMT        (ao_strs_strtable+6424)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   #define SGL_NO_DEF_FMT_LEN    61",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|-> #define SHELL_MAGIC           (ao_strs_strtable+640)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|   #define SHELL_MAGIC_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   #define SHOW_PROG_ENV         (ao_strs_strtable+647)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 192,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192 | #define SHOW_PROG_ENV         (ao_strs_strtable+647)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 162,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'SHOW_PROG_ENV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162 |         printf(SHOW_PROG_ENV, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   #define SHELL_MAGIC           (ao_strs_strtable+640)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|   #define SHELL_MAGIC_LEN       6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|-> #define SHOW_PROG_ENV         (ao_strs_strtable+647)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   #define SHOW_PROG_ENV_LEN     19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|   #define SHOW_VAL_FMT          (ao_strs_strtable+667)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 194,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 | #define SHOW_VAL_FMT          (ao_strs_strtable+667)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 299,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'SHOW_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299 |         printf(SHOW_VAL_FMT, (unsigned long)val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   #define SHOW_PROG_ENV         (ao_strs_strtable+647)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   #define SHOW_PROG_ENV_LEN     19",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|-> #define SHOW_VAL_FMT          (ao_strs_strtable+667)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|   #define SHOW_VAL_FMT_LEN      17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   #define START_MARK            (ao_strs_strtable+6486)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_usage'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 200,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200 | #define TIME_FMT              (ao_strs_strtable+692)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 340,
                    "column": 47,
                    "event": "note",
                    "message": "in expansion of macro 'TIME_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340 |             strftime(tm_nm_buf, AO_NAME_SIZE, TIME_FMT, ptm );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   #define STDOUT                (ao_strs_strtable+685)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|   #define STDOUT_LEN            6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|-> #define TIME_FMT              (ao_strs_strtable+692)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   #define TIME_FMT_LEN          21",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|   #define TMPDIR                (ao_strs_strtable+714)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/pgusage.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'open_tmp_usage'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 204,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204 | #define TMP_FILE_FMT          (ao_strs_strtable+721)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/pgusage.c",
                    "line": 49,
                    "column": 28,
                    "event": "note",
                    "message": "in expansion of macro 'TMP_FILE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49 |         snprintf(bf, bfsz, TMP_FILE_FMT, tmpdir, my_pid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|   #define TMPDIR                (ao_strs_strtable+714)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|   #define TMPDIR_LEN            6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|-> #define TMP_FILE_FMT          (ao_strs_strtable+721)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|   #define TMP_FILE_FMT_LEN      16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|   #define TMP_USAGE_FMT         (ao_strs_strtable+721)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 212,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212 | #define TYPE_ATR_FMT          (ao_strs_strtable+743)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 317,
                    "column": 25,
                    "event": "note",
                    "message": "in expansion of macro 'TYPE_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317 |             fprintf(fp, TYPE_ATR_FMT, ovp->pzName, typ);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   #define TWO_SPACES_STR        (ao_strs_strtable+273)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|   #define TWO_SPACES_STR_LEN    2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|-> #define TYPE_ATR_FMT          (ao_strs_strtable+743)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   #define TYPE_ATR_FMT_LEN      12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|   #define UNK_OPT_FMT           (ao_strs_strtable+6569)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/nested.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_special_char'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 218,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218 | #define XML_HEX_BYTE_FMT      (ao_strs_strtable+764)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/nested.c",
                    "line": 895,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'XML_HEX_BYTE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895 |     fprintf(fp, XML_HEX_BYTE_FMT, (ch & 0xFF));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|   #define VER_STR               (ao_strs_strtable+756)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   #define VER_STR_LEN           7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|-> #define XML_HEX_BYTE_FMT      (ao_strs_strtable+764)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|   #define XML_HEX_BYTE_FMT_LEN  7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|   #define YES_NEED_OPT_ARG      (ao_strs_strtable+772)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'prt_entry'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 224,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224 | #define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 220,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   #define ao_default_use        (ao_strs_strtable+804)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|   #define ao_default_use_LEN    11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|-> #define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|   #define ao_name_use_fmt_LEN   12",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|   #define apostrophe            (ao_strs_strtable+816)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 244,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244 | #define zEquivMode            (ao_strs_strtable+1252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 387,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'zEquivMode'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387 |             printf(zEquivMode, pOpts->pzPROGNAME, pOD->pz_NAME, p->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   #define zCfgProg              (ao_strs_strtable+27)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   #define zCfgProg_LEN          9",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|-> #define zEquivMode            (ao_strs_strtable+1252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   #define zEquivMode_LEN        44",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   #define zFiveSpaces           (ao_strs_strtable+263)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_usage_details'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 248,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248 | #define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 301,
                    "column": 35,
                    "event": "note",
                    "message": "in expansion of macro 'zFmtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301 |             sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   #define zFiveSpaces           (ao_strs_strtable+263)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|   #define zFiveSpaces_LEN       5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|-> #define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|   #define zFmtFmt_LEN           11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   #define zFmtProg              (ao_strs_strtable+49)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'open_sv_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 250,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250 | #define zFmtProg              (ao_strs_strtable+49)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 585,
                    "column": 25,
                    "event": "note",
                    "message": "in expansion of macro 'zFmtProg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585 |             fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|   #define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|   #define zFmtFmt_LEN           11",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|-> #define zFmtProg              (ao_strs_strtable+49)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   #define zFmtProg_LEN          14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|   #define zFullOptFmt           (ao_strs_strtable+1297)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 252,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252 | #define zFullOptFmt           (ao_strs_strtable+1297)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 455,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'zFullOptFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455 |             printf(zFullOptFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   #define zFmtProg              (ao_strs_strtable+49)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   #define zFmtProg_LEN          14",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> #define zFullOptFmt           (ao_strs_strtable+1297)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   #define zFullOptFmt_LEN       34",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   #define zGnuBreak             (ao_strs_strtable+64)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_stacked_arg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 270,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270 | #define zOptCookieCt          (ao_strs_strtable+1332)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 314,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'zOptCookieCt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314 |     printf(zOptCookieCt, pOpts->pzPROGNAME, pOD->pz_NAME, ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|   #define zNone                 (ao_strs_strtable+110)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|   #define zNone_LEN             4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|-> #define zOptCookieCt          (ao_strs_strtable+1332)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|   #define zOptCookieCt_LEN      38",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   #define zOptCtFmt             (ao_strs_strtable+1371)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'optionPutShell'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 272,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272 | #define zOptCtFmt             (ao_strs_strtable+1371)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 359,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'zOptCtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359 |     printf(zOptCtFmt, pOpts->curOptIdx-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|   #define zOptCookieCt          (ao_strs_strtable+1332)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|   #define zOptCookieCt_LEN      38",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|-> #define zOptCtFmt             (ao_strs_strtable+1371)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|   #define zOptCtFmt_LEN         30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   #define zOptDisabl            (ao_strs_strtable+1402)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 274,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274 | #define zOptDisabl            (ao_strs_strtable+1402)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 424,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'zOptDisabl'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424 |             printf(zOptDisabl, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   #define zOptCtFmt             (ao_strs_strtable+1371)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|   #define zOptCtFmt_LEN         30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|-> #define zOptDisabl            (ao_strs_strtable+1402)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   #define zOptDisabl_LEN        32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|   #define zOptNumFmt            (ao_strs_strtable+1435)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_membership'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 276,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276 | #define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 281,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281 |     printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   #define zOptDisabl            (ao_strs_strtable+1402)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   #define zOptDisabl_LEN        32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|-> #define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|   #define zOptNumFmt_LEN        41",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|   #define zOptionCase           (ao_strs_strtable+1477)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_flag'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 282,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282 | #define zOptionFlag           (ao_strs_strtable+907)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 581,
                    "column": 16,
                    "event": "note",
                    "message": "in expansion of macro 'zOptionFlag'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581 |         printf(zOptionFlag, od->optValue);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|   #define zOptionEndSelect      (ao_strs_strtable+890)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|   #define zOptionEndSelect_LEN  16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|-> #define zOptionFlag           (ao_strs_strtable+907)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|   #define zOptionFlag_LEN       15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|   #define zOptionFullName       (ao_strs_strtable+923)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 284,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284 | #define zOptionFullName       (ao_strs_strtable+923)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 666,
                    "column": 12,
                    "event": "note",
                    "message": "in expansion of macro 'zOptionFullName'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666 |     printf(zOptionFullName, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|   #define zOptionFlag           (ao_strs_strtable+907)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|   #define zOptionFlag_LEN       15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|-> #define zOptionFullName       (ao_strs_strtable+923)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|   #define zOptionFullName_LEN   15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|   #define zOptionPartName       (ao_strs_strtable+939)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'emit_match_expr'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 286,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286 | #define zOptionPartName       (ao_strs_strtable+939)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 656,
                    "column": 20,
                    "event": "note",
                    "message": "in expansion of macro 'zOptionPartName'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656 |             printf(zOptionPartName, name_bf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|   #define zOptionFullName       (ao_strs_strtable+923)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|   #define zOptionFullName_LEN   15",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|-> #define zOptionPartName       (ao_strs_strtable+939)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|   #define zOptionPartName_LEN   17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|   #define zPresetFile           (ao_strs_strtable+115)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 288,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288 | #define zPresetFile           (ao_strs_strtable+115)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 604,
                    "column": 21,
                    "event": "note",
                    "message": "in expansion of macro 'zPresetFile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604 |         fprintf(fp, zPresetFile, time_str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|   #define zOptionPartName       (ao_strs_strtable+939)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|   #define zOptionPartName_LEN   17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|-> #define zPresetFile           (ao_strs_strtable+115)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|   #define zPresetFile_LEN       37",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|   #define zReqOptFmt            (ao_strs_strtable+153)",
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
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'opt_ambiguities'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 334,
                    "column": 32,
                    "event": "warning[-Wformat-contains-nul]",
                    "message": "embedded '\\0' in format",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334 | #define zambig_file           (ao_strs_strtable+4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 84,
                    "column": 29,
                    "event": "note",
                    "message": "in expansion of macro 'zambig_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 |             fprintf(stderr, zambig_file, hyph, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|   #define zTwoSpaces            (ao_strs_strtable+273)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  333|   #define zTwoSpaces_LEN        2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|-> #define zambig_file           (ao_strs_strtable+4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   #define zambig_file_LEN       7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   extern char const ao_strs_strtable[6714];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.h",
                    "line": 49,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'AO_gettext'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/autoopts/options.h",
                    "line": 91,
                    "column": 29,
                    "event": "warning[-Wbad-function-cast]",
                    "message": "cast from function call of type 'char *' to non-matching type 'long unsigned int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91 | #define VOIDP(_a)  ((void *)(uintptr_t)(_a))",
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
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 573,
                    "column": 27,
                    "event": "note",
                    "message": "in expansion of macro 'VOIDP'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  573 |             res = (char *)VOIDP(_(pz));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|    * the \"uintptr_t\" type.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|-> #define VOIDP(_a)  ((void *)(uintptr_t)(_a))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   /**",
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
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"ocsptool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 831,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 1132,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|   #else",
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
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"p11tool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 2213,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2213 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 2560,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2560 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2211|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2212|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2213|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2214|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2215|   #else",
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
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"psktool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 341,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 499,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   #else",
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
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"serv-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 1555,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1555 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 2023,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2023 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1553|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1554|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1555|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1556|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1557|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/serv.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'terminate'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/serv.c",
                    "line": 1133,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1133 |         write(STDERR_FILENO, buf, p - buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1131|   \t*p++ = '\\n';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1133|-> \twrite(STDERR_FILENO, buf, p - buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1134|   \t_exit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|   }",
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
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"srptool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 433,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 540,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   #else",
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
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"systemkey-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 375,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 506,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   #else",
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
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"tpmtool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 738,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 869,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  869 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  736|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  737|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  739|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/tests/utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/tests/utils.c",
                    "line": 96,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'vasprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |         vasprintf(&str, format, arg_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   #ifdef HAVE_VASPRINTF",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \tchar *str = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|-> \tvasprintf(&str, format, arg_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   \tif (str)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
