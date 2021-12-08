{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211203.134551",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "diffutils-3.8-1.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/diffutils-3.8-1.fc35/symbiotic/output",
        "time-created": "2021-12-07 23:40:21",
        "time-finished": "2021-12-08 00:32:56",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/diffutils-3.8-1.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/diffutils-3.8-1.fc35/diffutils-3.8-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211207.132556.gc0a64a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-vasprintf.c",
                    "line": 54,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-vasprintf.c",
                    "line": 54,
                    "event": "note",
                    "message": "call stack: function test_vasprintf ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-vasprintf.c",
                    "line": 100,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-vasprintf.c",
                    "line": 40,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: vasprintf: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|         char *result;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|         int retval = my_asprintf (&result, \"%d\", 12345);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|->       ASSERT (retval == 5);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|         ASSERT (result != NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|         ASSERT (strcmp (result, \"12345\") == 0);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-xvasprintf.c",
                    "line": 57,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-xvasprintf.c",
                    "line": 57,
                    "event": "note",
                    "message": "call stack: function test_xvasprintf ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-xvasprintf.c",
                    "line": 131,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/xvasprintf.c",
                    "line": 102,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: vasprintf: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|         result = my_xasprintf (\"%d\", 12345);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|->       ASSERT (result != NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|         ASSERT (strcmp (result, \"12345\") == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|         free (result);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/./xstrtol.c",
                    "line": 127,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/lib/./xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "call stack: function xstrtoul (=0, =0, =0, =0, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/./test-xstrtol.c",
                    "line": 51,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/./xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: address: 0:94156244951760",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/./xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->   if (**p != '\\0')",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|         int base = 1024;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "note",
                    "message": "call stack: function last_component (=0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/stripslash.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function strip_trailing_slashes (=0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-dirname.c",
                    "line": 145,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: address: 0:0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/symbiotic/lib/posix/strdup.c",
                    "line": 11,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x1] (i8: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     bool last_was_slash = false;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|->   while (ISSLASH (*base))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       base++;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/xstrtol.c",
                    "line": 127,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "call stack: function xstrtol (=0, =0, =0, =0, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-xstrtol.c",
                    "line": 51,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/xstrtol.c",
                    "line": 100,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: strtol: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->   if (**p != '\\0')",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|         int base = 1024;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 775,
                    "column": 8,
                    "event": "warning[-Wbool-operation]",
                    "message": "bitwise negation of a boolean expression; did you mean logical negation?",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     & ~ (ignore_blank_lines | ignore_case | strip_trailing_cr",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|     files_can_be_treated_as_binary =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|       (brief & binary",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|->      & ~ (ignore_blank_lines | ignore_case | strip_trailing_cr",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|             | (ignore_regexp_list.regexps || ignore_white_space)));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|   ",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
