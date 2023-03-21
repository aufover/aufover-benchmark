{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "make-4.3-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/make-4.3-6.fc35/valgrind/output",
        "time-created": "2022-11-23 13:33:14",
        "time-finished": "2022-11-23 13:38:22",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/make-4.3-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/make-4.3-6.fc35/make-4.3-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
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
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "make-4.3/lib/error.h",
                    "line": 52,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'error' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52 | extern void error (int __status, int __errnum, const char *__format, ...)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/output.c",
                    "line": 590,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590 | error (const floc *flocp, size_t len, const char *fmt, ...)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/output.c",
                    "line": 590,
                    "column": 1,
                    "event": "note",
                    "message": "'error' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/output.c",
                    "line": 590,
                    "column": 1,
                    "event": "note",
                    "message": "code may be misoptimized unless '-fno-strict-aliasing' is used",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|      If STATUS is nonzero, terminate the program with 'exit (STATUS)'.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|-> extern void error (int __status, int __errnum, const char *__format, ...)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|        _GL_ATTRIBUTE_FORMAT ((_GL_ATTRIBUTE_SPEC_PRINTF, 3, 4));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|   ",
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
                    "file_name": "make-4.3/src/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/main.c",
                    "line": 1938,
                    "column": 13,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1938 |       p[-1] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/main.c",
                    "line": 1935,
                    "column": 15,
                    "event": "note",
                    "message": "destination object of size [0, 9223372036854775807] allocated by 'quote_for_env'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1935 |           p = quote_for_env (p, eval_strings->list[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/makeint.h",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/main.c",
                    "line": 17,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/lib/alloca.h",
                    "line": 46,
                    "column": 18,
                    "event": "note",
                    "message": "at offset -1 into destination object of size [0, 9223372036854775807] allocated by 'alloca'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | #  define alloca __builtin_alloca",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1936|             *(p++) = ' ';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1937|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1938|->       p[-1] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1939|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1940|         define_variable_cname (\"-*-eval-flags-*-\", value, o_automatic, 0);",
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
                    "file_name": "make-4.3/src/read.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'eval'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/read.c",
                    "line": 1193,
                    "column": 28,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193 |                 *(--semip) = ';';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~~~~~~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "make-4.3/src/read.c",
                    "line": 1012,
                    "column": 19,
                    "event": "note",
                    "message": "destination object of size [0, 9223372036854775807] allocated by 'find_map_unquote'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1012 |         cmdleft = find_map_unquote (line, MAP_SEMI|MAP_COMMENT|MAP_VARIABLE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1191|                 {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1192|                   size_t l = p2 - variable_buffer;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193|->                 *(--semip) = ';';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1194|                   collapse_continuations (semip);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1195|                   variable_buffer_output (p2 + strlen (p2),",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
