{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "coreutils-8.32-31.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/coreutils-8.32-31.fc35/symbiotic/output",
        "time-created": "2023-02-06 00:59:47",
        "time-finished": "2023-02-07 03:56:58",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/coreutils-8.32-31.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/coreutils-8.32-31.fc35/coreutils-8.32-31.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
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
                    "message": "   41|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|->     ASSERT (accept (-1, (struct sockaddr *) &addr, &addrlen) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (accept (-1, (struct sockaddr *) &addr, &addrlen) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|->       ASSERT (bind (-1, (const struct sockaddr *) &addr, sizeof (addr)) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|         ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|         ASSERT (bind (-1, (const struct sockaddr *) &addr, sizeof (addr)) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|->       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   main (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->   ASSERT (chdir (\"/\") == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     ASSERT (close (-1) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       ASSERT (close (-1) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|->       ASSERT (connect (-1, (const struct sockaddr *) &addr, sizeof (addr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|                 == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|         ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|         ASSERT (connect (-1, (const struct sockaddr *) &addr, sizeof (addr))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|                 == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|->       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dup.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dup.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dup.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: dup: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     ASSERT (dup (-1) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dup.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dup.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dup.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: dup: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       ASSERT (dup (-1) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: faccessat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->     ASSERT (faccessat (-1, \"foo\", F_OK, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-faccessat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-faccessat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: faccessat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       ASSERT (faccessat (-1, \"foo\", F_OK, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fchmodat.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fchmodat.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fchmodat.c",
                    "line": 39,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fchmodat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->     ASSERT (fchmodat (-1, \"foo\", 0600, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fchmodat.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fchmodat.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fchmodat.c",
                    "line": 39,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fchmodat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       ASSERT (fchmodat (-1, \"foo\", 0600, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fseeko3.c",
                    "line": 32,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fopen: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/fflush.c",
                    "line": 9,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x1] (i8: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|     const char *filename = argv[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     FILE *fp = fopen (filename, \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|->   ASSERT (fp != NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     if (do_initial_ftell)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->     ASSERT (fstat (-1, &statbuf) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       ASSERT (fstat (-1, &statbuf) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->     ASSERT (ftruncate (-1, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       ASSERT (ftruncate (-1, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     pwd1 = getcwd (NULL, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   ASSERT (pwd1 && *pwd1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     if (1 < argc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       printf (\"cwd=%s\\n\", pwd1);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     pwd1 = getcwd (NULL, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   ASSERT (pwd1 && *pwd1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     if (1 < argc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       printf (\"cwd=%s\\n\", pwd1);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ret = inet_pton (AF_INET, printable, &internal);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->     ASSERT (ret == 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       /* Verify that internal is filled in network byte order.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|       ASSERT (((unsigned char *) &internal)[0] == 0x81);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       ASSERT (ret == 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       /* Verify that internal is filled in network byte order.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|->     ASSERT (((unsigned char *) &internal)[0] == 0x81);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       ASSERT (((unsigned char *) &internal)[1] == 0x0D);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|       ASSERT (((unsigned char *) &internal)[2] == 0x73);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ino-map.c",
                    "line": 49,
                    "event": "error",
                    "message": "memory error: memory leak detected",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ino-map.c",
                    "line": 49,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ino-map.c",
                    "line": 49,
                    "event": "note",
                    "message": "Additional Info: address: 106:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ino-map.c",
                    "line": 49,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [106] of size 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ino-map.c",
                    "line": 49,
                    "event": "note",
                    "message": "Additional Info: MO95[16] allocated at ino_map_insert():  %30 = call noalias align 16 i8* @malloc(i64 16) #14, !dbg !102",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|     ino_map_free (ino_map);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|->   return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       int value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (ioctl (-1, FIONREAD, &value) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (ioctl (-1, FIONREAD, &value) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: iswblank: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|     (void) iswblank (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|     /* Check that the isw* functions map WEOF to 0.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   ASSERT (!iswblank (e));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (listen (-1, 1) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (listen (-1, 1) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|     /* Basic behavior tests.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|->   ASSERT (MEMRCHR (input, 'a', n) == input + n - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     ASSERT (MEMRCHR (input, 'a', 0) == NULL);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-once.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-once.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-once.c",
                    "line": 38,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pthread_once: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|     gl_once (a_once, a_init);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->   ASSERT (a == 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|     fd[0] = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     fd[1] = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|->   ASSERT (pipe (fd) >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     ASSERT (fd[0] >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     ASSERT (fd[1] >= 0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     fd[1] = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|     ASSERT (pipe (fd) >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|->   ASSERT (fd[0] >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     ASSERT (fd[1] >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|     ASSERT (fd[0] != fd[1]);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe2.c",
                    "line": 115,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe2.c",
                    "line": 115,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/pipe2.c",
                    "line": 58,
                    "column": 22,
                    "event": "note",
                    "message": "Non-deterministic values: pipe2: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|           fd[0] = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|           fd[1] = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->         ASSERT (pipe2 (fd, o_flags) >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|           ASSERT (fd[0] >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|           ASSERT (fd[1] >= 0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe2.c",
                    "line": 116,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-pipe2.c",
                    "line": 116,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/pipe2.c",
                    "line": 58,
                    "column": 22,
                    "event": "note",
                    "message": "Non-deterministic values: pipe2: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|           fd[1] = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|           ASSERT (pipe2 (fd, o_flags) >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|->         ASSERT (fd[0] >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|           ASSERT (fd[1] >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|           ASSERT (fd[0] != fd[1]);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-posixtm.c",
                    "line": 119,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-posixtm.c",
                    "line": 119,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-posixtm.c",
                    "line": 118,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: setenv: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|     /* The above test data requires Universal Time, e.g., TZ=\"UTC0\".  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|     err = setenv (\"TZ\", \"UTC0\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|->   ASSERT (err == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|     t_now = time (NULL);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-posixtm.c",
                    "line": 122,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-posixtm.c",
                    "line": 122,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-posixtm.c",
                    "line": 118,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: setenv: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|     t_now = time (NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|->   ASSERT (t_now != (time_t) -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|     tm = localtime (&t_now);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|     ASSERT (tm);",
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
                    "file_name": "coreutils-8.32/gnulib-tests/test-regex.c",
                    "line": 237,
                    "column": 9,
                    "event": "warning[-Wtautological-constant-compare]",
                    "message": "converting the result of '<<' to a boolean always evaluates to true",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (! REG_STARTEND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/regex.h",
                    "line": 340,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro 'REG_STARTEND'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define REG_STARTEND (1 << 2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|     /* REG_STARTEND was added to glibc on 2004-01-15.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|        Reject older versions.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|->   if (! REG_STARTEND)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|       result |= 64;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sameacls.c",
                    "line": 46,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sameacls.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/fflush.c",
                    "line": 9,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x1] (i8: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     const char *file2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|->   ASSERT (argc == 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|     file1 = argv[1];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     ASSERT (setsockopt (-1, SOL_SOCKET, SO_REUSEADDR, &value, sizeof (value))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|               == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       ASSERT (setsockopt (-1, SOL_SOCKET, SO_REUSEADDR, &value, sizeof (value))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|               == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|     /* Check error handling.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|->   ASSERT (sigprocmask (1729, &set, NULL) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|     ASSERT (errno == EINVAL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|     /* Check error handling.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     ASSERT (sigprocmask (1729, &set, NULL) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->   ASSERT (errno == EINVAL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|     /* Block SIGINT.  */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-uname.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-uname.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-uname.c",
                    "line": 43,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: uname: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     memset (&buf, '?', sizeof (buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->   ASSERT (uname (&buf) >= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     /* Verify that every field's value is NUL terminated.  */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     time_t start = time (NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   ASSERT (usleep (1000000) == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (start < time (NULL));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     time_t start = time (NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     ASSERT (usleep (1000000) == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->   ASSERT (start < time (NULL));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     ASSERT (usleep (0) == 0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-usleep.c",
                    "line": 37,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (start < time (NULL));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->   ASSERT (usleep (0) == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-vasprintf.c",
                    "line": 54,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-vasprintf.c",
                    "line": 54,
                    "event": "note",
                    "message": "call stack: function test_vasprintf ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-vasprintf.c",
                    "line": 100,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-vasprintf.c",
                    "line": 40,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: vasprintf: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|         char *result;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|         int retval = my_asprintf (&result, \"%d\", 12345);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|->       ASSERT (retval == 5);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|         ASSERT (result != NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|         ASSERT (strcmp (result, \"12345\") == 0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-xvasprintf.c",
                    "line": 57,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-xvasprintf.c",
                    "line": 57,
                    "event": "note",
                    "message": "call stack: function test_xvasprintf ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-xvasprintf.c",
                    "line": 131,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xvasprintf.c",
                    "line": 102,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: vasprintf: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|         result = my_xasprintf (\"%d\", 12345);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|->       ASSERT (result != NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|         ASSERT (strcmp (result, \"12345\") == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|         free (result);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/at-func.c",
                    "line": 70,
                    "column": 40,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "AT_FUNC_NAME (int fd, char const *file AT_FUNC_POST_FILE_PARAM_DECLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.c",
                    "line": 35,
                    "column": 41,
                    "event": "note",
                    "message": "expanded from macro 'AT_FUNC_POST_FILE_PARAM_DECLS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define AT_FUNC_POST_FILE_PARAM_DECLS , security_context_t *con",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|      fails, then give a diagnostic and exit nonzero.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   FUNC_RESULT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|-> AT_FUNC_NAME (int fd, char const *file AT_FUNC_POST_FILE_PARAM_DECLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|     VALIDATE_FLAG (flag);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "note",
                    "message": "call stack: function last_component ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/stripslash.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function strip_trailing_slashes ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/basename.c",
                    "line": 107,
                    "event": "note",
                    "message": "call stack: function perform_basename (=0, =0, =false)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/basename.c",
                    "line": 186,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/basename-lgpl.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/basename.c",
                    "line": 140,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getopt_long: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrndup.c",
                    "line": 32,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: strndup: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrndup.c",
                    "line": 32,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: strndup (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     bool saw_slash = false;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|->   while (ISSLASH (*base))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       base++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
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
                    "file_name": "coreutils-8.32/lib/dtotimespec.c",
                    "line": 34,
                    "column": 27,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'time_t' (aka 'long') to 'double' changes value from 9223372036854775807 to 9223372036854775808",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (! (sec < 1.0 + TYPE_MAXIMUM (time_t)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ~ ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/intprops.h",
                    "line": 58,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'TYPE_MAXIMUM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ((t) (! TYPE_SIGNED (t)                                               \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     if (! (TYPE_MINIMUM (time_t) < sec))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       return make_timespec (TYPE_MINIMUM (time_t), 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   else if (! (sec < 1.0 + TYPE_MAXIMUM (time_t)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       return make_timespec (TYPE_MAXIMUM (time_t), TIMESPEC_HZ - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 43,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function clear_ungetc_buffer_preserving_position (=140194432923520)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 156,
                    "event": "note",
                    "message": "call stack: function rpl_fflush (=140194432923520)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fclose.c",
                    "line": 73,
                    "event": "note",
                    "message": "call stack: function rpl_fclose (=140194432923520)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/close-stream.c",
                    "line": 60,
                    "event": "note",
                    "message": "call stack: function close_stream (=140194432923520)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/closeout.c",
                    "line": 119,
                    "event": "note",
                    "message": "call stack: function close_stdout ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/atexit.c",
                    "line": 13,
                    "event": "note",
                    "message": "call stack: function RunAtExit ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/timeout.c",
                    "line": 280,
                    "event": "note",
                    "message": "call stack: function usage (=125)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/timeout.c",
                    "line": 482,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: address: 0:140194432923520",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/timeout.c",
                    "line": 445,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getopt_long: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/close-stream.c",
                    "line": 58,
                    "column": 30,
                    "event": "note",
                    "message": "Non-deterministic values: __fpending: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/close-stream.c",
                    "line": 59,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: ferror_unlocked: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fclose.c",
                    "line": 65,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: fileno: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fclose.c",
                    "line": 72,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   clear_ungetc_buffer_preserving_position (FILE *fp)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->   if (fp->_flags & _IO_IN_BACKUP)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       /* _IO_free_backup_area is a bit complicated.  Simply call fseek.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|       fseeko (fp, 0, SEEK_CUR);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/freadahead.c",
                    "line": 38,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function freadahead (=140223803533984)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-freadahead.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: address: 0:140223803534024",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   #if defined _IO_EOF_SEEN || defined _IO_ftrylockfile || __GNU_LIBRARY__ == 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     /* GNU libc, BeOS, Haiku, Linux libc5 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->   if (fp->_IO_write_ptr > fp->_IO_write_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     return (fp->_IO_read_end - fp->_IO_read_ptr)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/freadptr.c",
                    "line": 37,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/freadptr.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function freadptr (=140365562620576, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-freadptr2.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function freadptrbufsize (=140365562620576)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-freadptr2.c",
                    "line": 50,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/freadptr.c",
                    "line": 37,
                    "event": "note",
                    "message": "Additional Info: address: 0:140365562620616",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/freadptr.c",
                    "line": 37,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   #if defined _IO_EOF_SEEN || defined _IO_ftrylockfile || __GNU_LIBRARY__ == 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     /* GNU libc, BeOS, Haiku, Linux libc5 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->   if (fp->_IO_write_ptr > fp->_IO_write_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     size = fp->_IO_read_end - fp->_IO_read_ptr;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/fseeko.c",
                    "line": 52,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "call stack: function rpl_fseeko (=139856088902304, =0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fseek.c",
                    "line": 29,
                    "event": "note",
                    "message": "call stack: function rpl_fseek (=139856088902304, =0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fseek.c",
                    "line": 41,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "Additional Info: address: 0:139856088902320",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   #if defined _IO_EOF_SEEN || defined _IO_ftrylockfile || __GNU_LIBRARY__ == 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     /* GNU libc, BeOS, Haiku, Linux libc5 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|->   if (fp->_IO_read_end == fp->_IO_read_ptr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|         && fp->_IO_write_ptr == fp->_IO_write_base",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|         && fp->_IO_save_base == NULL)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/fseterr.c",
                    "line": 37,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/fseterr.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function fseterr (=140212051097472)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fseterr.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fseterr.c",
                    "line": 37,
                    "event": "note",
                    "message": "Additional Info: address: 0:140212051097472",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/fseterr.c",
                    "line": 37,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-fseterr.c",
                    "line": 30,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: ferror: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   #if defined _IO_EOF_SEEN || defined _IO_ftrylockfile || __GNU_LIBRARY__ == 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     /* GNU libc, BeOS, Haiku, Linux libc5 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->   fp->_flags |= _IO_ERR_SEEN;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   #elif defined __sferror || defined __DragonFly__ || defined __ANDROID__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     /* FreeBSD, NetBSD, OpenBSD, DragonFly, Mac OS X, Cygwin, Minix 3, Android */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 36,
                    "column": 35,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   #undef lgetfilecon",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   #undef fgetfilecon",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|-> int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 37,
                    "column": 36,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   #undef fgetfilecon",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|-> int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 38,
                    "column": 26,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|-> int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   /* getfilecon, lgetfilecon, and fgetfilecon can all misbehave, be it",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 49,
                    "column": 26,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "map_to_failure (int ret, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   static int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|-> map_to_failure (int ret, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     if (ret == 0)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 69,
                    "column": 35,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "rpl_getfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|-> rpl_getfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|     int ret = getfilecon (file, con);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 76,
                    "column": 36,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "rpl_lgetfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|-> rpl_lgetfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|     int ret = lgetfilecon (file, con);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 83,
                    "column": 26,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "rpl_fgetfilecon (int fd, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> rpl_fgetfilecon (int fd, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|     int ret = fgetfilecon (fd, con);",
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
                    "file_name": "coreutils-8.32/lib/hash.c",
                    "line": 549,
                    "column": 11,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'unsigned long' to 'float' changes value from 18446744073709551615 to 18446744073709551616",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      if (SIZE_MAX <= new_candidate)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^~~~~~~~ ~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdint.h",
                    "line": 227,
                    "column": 22,
                    "event": "note",
                    "message": "expanded from macro 'SIZE_MAX'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SIZE_MAX              (18446744073709551615UL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  548|         float new_candidate = candidate / tuning->growth_threshold;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  549|->       if (SIZE_MAX <= new_candidate)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  551|         candidate = new_candidate;",
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
                    "file_name": "coreutils-8.32/lib/hash.c",
                    "line": 1079,
                    "column": 15,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'unsigned long' to 'float' changes value from 18446744073709551615 to 18446744073709551616",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (SIZE_MAX <= candidate)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^~~~~~~~ ~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdint.h",
                    "line": 227,
                    "column": 22,
                    "event": "note",
                    "message": "expanded from macro 'SIZE_MAX'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define SIZE_MAX              (18446744073709551615UL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1077|                   * tuning->growth_threshold));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1079|->           if (SIZE_MAX <= candidate)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|               return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/localcharset.c",
                    "line": 1070,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/localcharset.c",
                    "line": 1070,
                    "event": "note",
                    "message": "call stack: function locale_charset ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 233,
                    "event": "note",
                    "message": "call stack: function gettext_quote (=0, =8)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 362,
                    "event": "note",
                    "message": "call stack: function quotearg_buffer_restyled (=0, =256, =0, =18446744073709551615, =8, =1, =8, =0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 907,
                    "event": "note",
                    "message": "call stack: function quotearg_n_options (=0, =0, =18446744073709551615, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 1063,
                    "event": "note",
                    "message": "call stack: function quote_n_mem (=0, =0, =18446744073709551615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 1075,
                    "event": "note",
                    "message": "call stack: function quote_n (=0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/truncate.c",
                    "line": 298,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/localcharset.c",
                    "line": 1070,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/localcharset.c",
                    "line": 1070,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/truncate.c",
                    "line": 220,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getopt_long: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 269,
                    "column": 25,
                    "event": "note",
                    "message": "Non-deterministic values: __ctype_get_mb_cur_max: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 209,
                    "column": 29,
                    "event": "note",
                    "message": "Non-deterministic values: gettext: len 8 bytes, [0x59|7 times 0x0] (i64: 89)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 209,
                    "column": 29,
                    "event": "note",
                    "message": "Non-deterministic values: gettext (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/localcharset.c",
                    "line": 847,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: nl_langinfo: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/localcharset.c",
                    "line": 847,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: nl_langinfo (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1068|              the empty string as denoting \"the locale's character encoding\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1069|              thus GNU libiconv would call this function a second time.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1070|->         if (codeset[0] == '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1071|             codeset = \"ASCII\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1072|   # endif",
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
                    "file_name": "coreutils-8.32/lib/obstack.c",
                    "line": 351,
                    "column": 31,
                    "event": "warning[-Wincompatible-function-pointer-types]",
                    "message": "incompatible function pointer types initializing 'void (*)(void) __attribute__((noreturn))' with an expression of type 'void (void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute_noreturn__ void (*obstack_alloc_failed_handler) (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|      variable by default points to the internal function",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|      'print_and_abort'.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|-> __attribute_noreturn__ void (*obstack_alloc_failed_handler) (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|     = print_and_abort;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|   # endif /* !_OBSTACK_NO_ERROR_HANDLER */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "note",
                    "message": "call stack: function quotearg_buffer_restyled (=0, =256, =0, =18446744073709551615, =8, =1, =8, =0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 907,
                    "event": "note",
                    "message": "call stack: function quotearg_n_options (=0, =0, =18446744073709551615, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 1063,
                    "event": "note",
                    "message": "call stack: function quote_n_mem (=0, =0, =18446744073709551615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 1075,
                    "event": "note",
                    "message": "call stack: function quote_n (=0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/truncate.c",
                    "line": 298,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "note",
                    "message": "Additional Info: address: (ReadLSB w64 0 gettext):(ReadLSB w64 0 gettext_off)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "note",
                    "message": "Additional Info: example: 0:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "note",
                    "message": "Additional Info: segment range: [0, 18446744073709551615]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "note",
                    "message": "Additional Info: offset range: [0, 18446744073709551615]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 366,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/truncate.c",
                    "line": 220,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getopt_long: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 269,
                    "column": 25,
                    "event": "note",
                    "message": "Non-deterministic values: __ctype_get_mb_cur_max: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 209,
                    "column": 29,
                    "event": "note",
                    "message": "Non-deterministic values: gettext: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/quotearg.c",
                    "line": 209,
                    "column": 29,
                    "event": "note",
                    "message": "Non-deterministic values: gettext: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|             }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|           if (!elide_outer_quotes)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->           for (quote_string = left_quote; *quote_string; quote_string++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|               STORE (*quote_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           backslash_escapes = true;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 71,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 71,
                    "event": "note",
                    "message": "call stack: function desirable_utmp_entry (, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 109,
                    "event": "note",
                    "message": "call stack: function read_utmp (=0, =0, =0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/users.c",
                    "line": 90,
                    "event": "note",
                    "message": "call stack: function users (=0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/src/users.c",
                    "line": 141,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: address: 255:44",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [255] of size 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: MO244[1] allocated at desirable_utmp_entry():  %4 = alloca i1, align 1, !dbg !693",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/long-options.c",
                    "line": 115,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: getopt_long: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 108,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getutxent: len 8 bytes, [0xff|7 times 0x0] (i64: 255)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.c",
                    "line": 108,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getutxent (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   desirable_utmp_entry (STRUCT_UTMP const *u, int options)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|->   bool user_proc = IS_USER_PROCESS (u);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|     if ((options & READ_UTMP_USER_PROCESS) && !user_proc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       return false;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/chcon.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 34,
                    "column": 50,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int  getfileconat (int dir_fd, char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|      and return -1.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|      [*] with flags=0 here, with flags=AT_SYMLINK_NOFOLLOW for lgetfileconat  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|-> int  getfileconat (int dir_fd, char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   /* dir-fd-relative lgetfilecon.  This function is just like getfileconat,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/chcon.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 39,
                    "column": 50,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int lgetfileconat (int dir_fd, char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|      except when DIR_FD and FILE specify a symlink:  lgetfileconat operates on",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|      the symlink, while getfileconat operates on the referent of the symlink.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> int lgetfileconat (int dir_fd, char const *file, security_context_t *con);",
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
                    "message": "   41|   /* dir-fd-relative setfilecon.  Set the SELinux security context of",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/chcon.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 45,
                    "column": 50,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int  setfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|      interpreted as for fstatat[*].  Upon success, return 0.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|      Otherwise, return -1 and set errno.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|-> int  setfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   /* dir-fd-relative lsetfilecon.  This function is just like setfileconat,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/chcon.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 52,
                    "column": 50,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "int lsetfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|      except when DIR_FD and FILE specify a symlink:  lsetfileconat operates on",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|      the symlink, while setfileconat operates on the referent of the symlink.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|-> int lsetfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/xalloc-die.c",
                    "line": 40,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/xalloc-die.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function xalloc_die ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrndup.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function xstrndup (=2, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/basename.c",
                    "line": 57,
                    "event": "note",
                    "message": "call stack: function base_name (=0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-dirname.c",
                    "line": 142,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrndup.c",
                    "line": 32,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: strndup: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|        xalloc_die does not return, call abort.  Also, the abort is a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|        safety feature if exit_failure is 0 (which shouldn't happen).  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->   abort ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   }",
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
                    "file_name": "coreutils-8.32/lib/xnanosleep.c",
                    "line": 43,
                    "column": 13,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'time_t' (aka 'long') to 'double' changes value from 9223372036854775807 to 9223372036854775808",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (1.0 + TYPE_MAXIMUM (time_t) <= seconds)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ~ ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/intprops.h",
                    "line": 58,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'TYPE_MAXIMUM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ((t) (! TYPE_SIGNED (t)                                               \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   #if HAVE_PAUSE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->   if (1.0 + TYPE_MAXIMUM (time_t) <= seconds)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         do",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/xstrtol.c",
                    "line": 127,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "call stack: function xstrtoimax (=0, =0, =0, =0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-xstrtol.c",
                    "line": 51,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/xstrtol.c",
                    "line": 100,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: strtoimax: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->   if (**p != '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|         int base = 1024;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/install.c",
                    "line": 368,
                    "column": 8,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if ((matchpathcon (file, st.st_mode, &scontext) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 505,
                    "column": 18,
                    "event": "note",
                    "message": "'matchpathcon' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        __attribute__ ((deprecated(\"Use selabel_lookup instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|        return to allow default context.  Note the \"<<none>>\" check",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|        is only needed for libselinux < 1.20 (2005-01-04).  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|->   if ((matchpathcon (file, st.st_mode, &scontext) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|         || STREQ (scontext, \"<<none>>\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 132,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (matchpathcon (path, mode, &scon) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 505,
                    "column": 18,
                    "event": "note",
                    "message": "'matchpathcon' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        __attribute__ ((deprecated(\"Use selabel_lookup instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|->   if (matchpathcon (path, mode, &scon) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|         /* \"No such file or directory\" is a confusing error,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 222,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (matchpathcon (path, sb.st_mode, &scon) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 505,
                    "column": 18,
                    "event": "note",
                    "message": "'matchpathcon' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        __attribute__ ((deprecated(\"Use selabel_lookup instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|->   if (matchpathcon (path, sb.st_mode, &scon) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|         /* \"No such file or directory\" is a confusing error,",
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
                    "file_name": "coreutils-8.32/src/sort.c",
                    "line": 1561,
                    "column": 21,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'unsigned long' to 'double' changes value from 18446744073709551615 to 18446744073709551616",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (mem < UINTMAX_MAX)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ~ ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdint.h",
                    "line": 202,
                    "column": 24,
                    "event": "note",
                    "message": "expanded from macro 'UINTMAX_MAX'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define UINTMAX_MAX            (__UINT64_C(18446744073709551615))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdint.h",
                    "line": 107,
                    "column": 25,
                    "event": "note",
                    "message": "expanded from macro '__UINT64_C'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#  define __UINT64_C(c) c ## UL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<scratch space>",
                    "line": 16,
                    "column": 1,
                    "event": "note",
                    "message": "expanded from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "18446744073709551615UL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1559|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1560|             /* Use \"<\", not \"<=\", to avoid problems with rounding.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1561|->           if (mem < UINTMAX_MAX)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1562|               {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1563|                 n = mem;",
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
                    "file_name": "coreutils-8.32/src/uname.c",
                    "line": 303,
                    "column": 13,
                    "event": "warning[-Wincompatible-pointer-types-discards-qualifiers]",
                    "message": "initializing 'char *' with an expression of type 'const char [8]' discards qualifiers",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      char *element = unknown;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^         ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|     if (toprint & PRINT_PROCESSOR)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|->       char *element = unknown;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|   #if HAVE_SYSINFO && defined SI_ARCHITECTURE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|         {",
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
                    "file_name": "coreutils-8.32/src/uname.c",
                    "line": 353,
                    "column": 13,
                    "event": "warning[-Wincompatible-pointer-types-discards-qualifiers]",
                    "message": "initializing 'char *' with an expression of type 'const char [8]' discards qualifiers",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      char *element = unknown;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^         ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|     if (toprint & PRINT_HARDWARE_PLATFORM)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|->       char *element = unknown;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   #if HAVE_SYSINFO && defined SI_PLATFORM",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|         {",
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
                    "file_name": "coreutils-8.32/src/uptime.c",
                    "line": 75,
                    "column": 47,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'time_t' (aka 'long') to 'double' changes value from 9223372036854775807 to 9223372036854775808",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            uptime = (0 <= upsecs && upsecs < TYPE_MAXIMUM (time_t)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ~ ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "coreutils-8.32/lib/intprops.h",
                    "line": 58,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'TYPE_MAXIMUM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ((t) (! TYPE_SIGNED (t)                                               \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|             double upsecs = c_strtod (buf, &end_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|             if (buf != end_ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->             uptime = (0 <= upsecs && upsecs < TYPE_MAXIMUM (time_t)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|                         ? upsecs : -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|           }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
