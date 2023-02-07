{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sed-4.8-8.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/sed-4.8-8.fc35/symbiotic/output",
        "time-created": "2023-01-30 12:16:09",
        "time-finished": "2023-01-30 15:10:58",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/sed-4.8-8.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/sed-4.8-8.fc35/sed-4.8-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
                    "line": 43,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function clear_ungetc_buffer_preserving_position (=140657387615904)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
                    "line": 156,
                    "event": "note",
                    "message": "call stack: function rpl_fflush (=140657387615904)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: address: 0:140657387615904",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/fseeko.c",
                    "line": 52,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "call stack: function rpl_fseeko (=140010577701536, =0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fseek.c",
                    "line": 29,
                    "event": "note",
                    "message": "call stack: function rpl_fseek (=140010577701536, =0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fseek.c",
                    "line": 41,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "Additional Info: address: 0:140010577701552",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fseeko.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fseeko3.c",
                    "line": 32,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fopen: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "sed-4.8/gnulib-tests/test-regex.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-sameacls.c",
                    "line": 46,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-sameacls.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x0] (i8: 0)",
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
                    "file_name": "sed-4.8/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/fflush.c",
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
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/getfilecon.c",
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
                    "file_name": "sed-4.8/lib/obstack.c",
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
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 575,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      security_context_t old_fscreatecon;",
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
                    "message": "  573|         int input_fd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  574|         char *tmpdir, *p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575|->       security_context_t old_fscreatecon;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  576|         int reset_fscreatecon = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577|         memset (&old_fscreatecon, 0, sizeof (old_fscreatecon));",
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
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 596,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          security_context_t con;",
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
                    "message": "  594|         if (is_selinux_enabled () > 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|->           security_context_t con;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|             if (lgetfilecon (input->in_file_name, &con) != -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|               {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
