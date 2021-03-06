{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211203.134551",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "cov04.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "findutils-4.8.0-4.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/findutils-4.8.0-4.fc35/symbiotic/output",
        "time-created": "2021-12-03 19:42:33",
        "time-finished": "2021-12-03 22:36:04",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/findutils-4.8.0-4.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/findutils-4.8.0-4.fc35/findutils-4.8.0-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211202.081848.gd264244.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 43,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function clear_ungetc_buffer_preserving_position (=140528833447104)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 156,
                    "event": "note",
                    "message": "call stack: function rpl_fflush (=140528833447104)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 68,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: address: 0:140528833447104",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 61,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: setlocale: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c:61:7 (offset): note: Non-deterministic values: setlocale: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 67,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: wcrtomb: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   clear_ungetc_buffer_preserving_position (FILE *fp)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->   if (fp->_flags & _IO_IN_BACKUP)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       /* _IO_free_backup_area is a bit complicated.  Simply call fseek.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|       fseeko (fp, 0, SEEK_CUR);",
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
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/freadahead.c",
                    "line": 38,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function freadahead (=140187031517376)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/closein.c",
                    "line": 87,
                    "event": "note",
                    "message": "call stack: function close_stdin ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/atexit.c",
                    "line": 13,
                    "event": "note",
                    "message": "call stack: function RunAtExit ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-yesno.c",
                    "line": 61,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: address: 0:140187031517416",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 39,
                    "column": 26,
                    "event": "note",
                    "message": "Non-deterministic values: getline: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/puts.c",
                    "line": 3,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet_int: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   #if defined _IO_EOF_SEEN || defined _IO_ftrylockfile || __GNU_LIBRARY__ == 1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     /* GNU libc, BeOS, Haiku, Linux libc5 */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->   if (fp->_IO_write_ptr > fp->_IO_write_base)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       return 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     return (fp->_IO_read_end - fp->_IO_read_ptr)",
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
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fseeko.c",
                    "line": 52,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "call stack: function rpl_fseeko (=140340701837504, =0, =1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fseek.c",
                    "line": 29,
                    "event": "note",
                    "message": "call stack: function rpl_fseek (=140340701837504, =0, =1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fseek.c",
                    "line": 41,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "Additional Info: address: 0:140340701837520",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   #if defined _IO_EOF_SEEN || defined _IO_ftrylockfile || __GNU_LIBRARY__ == 1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     /* GNU libc, BeOS, Haiku, Linux libc5 */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|->   if (fp->_IO_read_end == fp->_IO_read_ptr",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|         && fp->_IO_write_ptr == fp->_IO_write_base",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|         && fp->_IO_save_base == NULL)",
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
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xalloc-die.c",
                    "line": 40,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xalloc-die.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function xalloc_die ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrndup.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function xstrndup (=2, =1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/basename.c",
                    "line": 57,
                    "event": "note",
                    "message": "call stack: function base_name (=0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dirname.c",
                    "line": 142,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrndup.c",
                    "line": 32,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: strndup: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|        xalloc_die does not return, call abort.  Also, the abort is a",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|        safety feature if exit_failure is 0 (which shouldn't happen).  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->   abort ();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   }",
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
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "call stack: function xstrtol (=0, =0, =0, =0, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-xstrtol.c",
                    "line": 51,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/xstrtol.c",
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
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function yesno ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-yesno.c",
                    "line": 60,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "Additional Info: address: 0:(Add w64 18446744073709551615",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "Additional Info: (ReadLSB w64 0 getline))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "Additional Info: example: 0:0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "Additional Info: segment range: [0, 0]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "Additional Info: offset range: [0, 9223372036854775806]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 47,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/yesno.c",
                    "line": 39,
                    "column": 26,
                    "event": "note",
                    "message": "Non-deterministic values: getline: len 8 bytes, [0x1|7 times 0x0] (i64: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         /* Remove EOL if present as that's not part of the matched response,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|            and not matched by $ for example.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|->       if (response[response_len - 1] == '\\n')",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|           response[response_len - 1] = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|         yes = (0 < rpmatch (response));",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|->     ASSERT (accept (-1, (struct sockaddr *) &addr, &addrlen) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (accept (-1, (struct sockaddr *) &addr, &addrlen) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|->       ASSERT (bind (-1, (const struct sockaddr *) &addr, sizeof (addr)) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|         ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|         ASSERT (bind (-1, (const struct sockaddr *) &addr, sizeof (addr)) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|->       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-c-strstr.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-c-strstr.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       const char input[] = \"foo\";",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       const char *result = c_strstr (input, \"\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     ASSERT (result == input);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-chdir.c",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   main (void)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->   ASSERT (chdir (\"/\") == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     return 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     ASSERT (close (-1) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       ASSERT (close (-1) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|         errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|->       ASSERT (connect (-1, (const struct sockaddr *) &addr, sizeof (addr))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|                 == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|         ASSERT (errno == EBADF);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|         ASSERT (connect (-1, (const struct sockaddr *) &addr, sizeof (addr))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|                 == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|->       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dup.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dup.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dup.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: dup: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     ASSERT (dup (-1) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dup.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dup.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-dup.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: dup: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       ASSERT (dup (-1) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: faccessat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->     ASSERT (faccessat (-1, \"foo\", F_OK, 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-faccessat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-faccessat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: faccessat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       ASSERT (faccessat (-1, \"foo\", F_OK, 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fseeko3.c",
                    "line": 32,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fopen: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|     const char *filename = argv[2];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     FILE *fp = fopen (filename, \"r\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|->   ASSERT (fp != NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     if (do_initial_ftell)",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
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
                    "message": "   36|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->     ASSERT (fstat (-1, &statbuf) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       ASSERT (fstat (-1, &statbuf) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstatat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|->     ASSERT (fstatat (-1, \"foo\", &statbuf, 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstatat.c",
                    "line": 83,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstatat.c",
                    "line": 83,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstatat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       ASSERT (fstatat (-1, \"foo\", &statbuf, 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->     ASSERT (ftruncate (-1, 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       ASSERT (ftruncate (-1, 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)\n/builddir/build/BUILD/findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c:43:10 (offset): note: Non-deterministic values: getcwd: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     pwd1 = getcwd (NULL, 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   ASSERT (pwd1 && *pwd1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     if (1 < argc)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       printf (\"cwd=%s\\n\", pwd1);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     pwd1 = getcwd (NULL, 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   ASSERT (pwd1 && *pwd1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     if (1 < argc)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       printf (\"cwd=%s\\n\", pwd1);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 55,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 55,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 49,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: getgroups: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|         return 77;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|->   ASSERT (0 <= result);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|     ASSERT (result + 1 < SIZE_MAX / sizeof *groups);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|     groups = malloc ((result + 1) * sizeof *groups);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 56,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 56,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 49,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: getgroups: len 4 bytes, [3 times 0xff|0x7f] (i32: 2147483647)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|     ASSERT (0 <= result);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|->   ASSERT (result + 1 < SIZE_MAX / sizeof *groups);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|     groups = malloc ((result + 1) * sizeof *groups);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|     ASSERT (groups);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 70,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 70,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 49,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: getgroups: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-getgroups.c",
                    "line": 70,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: getgroups: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|         ASSERT (errno == EINVAL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|->   ASSERT (getgroups (result, groups) == result);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|     ASSERT (getgroups (result + 1, groups) == result);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|     ASSERT (groups[result] == -1);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ret = inet_pton (AF_INET, printable, &internal);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->     ASSERT (ret == 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       /* Verify that internal is filled in network byte order.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|       ASSERT (((unsigned char *) &internal)[0] == 0x81);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       ASSERT (ret == 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       /* Verify that internal is filled in network byte order.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|->     ASSERT (((unsigned char *) &internal)[0] == 0x81);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       ASSERT (((unsigned char *) &internal)[1] == 0x0D);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|       ASSERT (((unsigned char *) &internal)[2] == 0x73);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|       int value;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (ioctl (-1, FIONREAD, &value) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (ioctl (-1, FIONREAD, &value) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: iswblank: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|     (void) iswblank (0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|     /* Check that the isw* functions map WEOF to 0.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   ASSERT (!iswblank (e));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     return 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->     ASSERT (listen (-1, 1) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       ASSERT (listen (-1, 1) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.h",
                    "line": 32,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.h",
                    "line": 32,
                    "event": "note",
                    "message": "call stack: function test_lstat_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 50,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: lstat: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|     /* Test for common directories.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   ASSERT (func (\".\", &st1) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     ASSERT (func (\"./\", &st2) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   #if !(defined _WIN32 && !defined __CYGWIN__ && !_GL_WINDOWS_STAT_INODES)",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.h",
                    "line": 33,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.h",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function test_lstat_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 50,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: lstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 50,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: lstat: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|     /* Test for common directories.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     ASSERT (func (\".\", &st1) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|->   ASSERT (func (\"./\", &st2) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   #if !(defined _WIN32 && !defined __CYGWIN__ && !_GL_WINDOWS_STAT_INODES)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (SAME_INODE (st1, st2));",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.h",
                    "line": 37,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.h",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function test_lstat_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 50,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: lstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-lstat.c",
                    "line": 50,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: lstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (SAME_INODE (st1, st2));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   #endif",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->   ASSERT (S_ISDIR (st1.st_mode));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|     ASSERT (S_ISDIR (st2.st_mode));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     ASSERT (func (\"/\", &st1) == 0);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-memchr.c",
                    "line": 59,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-memchr.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/zerosize-ptr.h",
                    "line": 71,
                    "column": 22,
                    "event": "note",
                    "message": "Non-deterministic values: getpagesize: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/zerosize-ptr.h",
                    "line": 73,
                    "column": 18,
                    "event": "note",
                    "message": "Non-deterministic values: mmap: len 8 bytes, [8 times 0xff] (i64: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|->   ASSERT (MEMCHR (input, 'b', n) == input + 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|     ASSERT (MEMCHR (input, 'c', n) == input + 2);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|     ASSERT (MEMCHR (input, 'd', n) == input + 1026);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|     /* Basic behavior tests.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|->   ASSERT (MEMRCHR (input, 'a', n) == input + n - 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     ASSERT (MEMRCHR (input, 'a', 0) == NULL);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 58,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 58,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|     ts.tv_sec = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|     ts.tv_nsec = 1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|->   ASSERT (nanosleep (&ts, &ts) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|     /* Remaining time is only defined on EINTR failure; but on success,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|        it is typically either 0 or unchanged from input.  At any rate,",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 65,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 65,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|     ASSERT (ts.tv_nsec == 0 || ts.tv_nsec == 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|     ts.tv_nsec = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|->   ASSERT (nanosleep (&ts, NULL) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   #if HAVE_DECL_ALARM",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 75,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 75,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 74,
                    "column": 18,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       ts.tv_nsec = 999999999;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     ASSERT (nanosleep (&ts, &ts) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       ASSERT (errno == EINTR);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       ASSERT (pentecost - 10 < ts.tv_sec && ts.tv_sec <= pentecost);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 76,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-nanosleep.c",
                    "line": 76,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 85,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/nanosleep.c",
                    "line": 74,
                    "column": 18,
                    "event": "note",
                    "message": "Non-deterministic values: nanosleep: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       ASSERT (nanosleep (&ts, &ts) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|->     ASSERT (errno == EINTR);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|       ASSERT (pentecost - 10 < ts.tv_sec && ts.tv_sec <= pentecost);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|       ASSERT (0 <= ts.tv_nsec && ts.tv_nsec <= 999999999);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-once.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-once.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-once.c",
                    "line": 38,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pthread_once: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|     gl_once (a_once, a_init);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->   ASSERT (a == 42);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     return 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-openat.c",
                    "line": 68,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-openat.c",
                    "line": 68,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-openat.c",
                    "line": 68,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: openat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/fflush.c",
                    "line": 9,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x0] (i8: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|->     ASSERT (openat (-1, \"foo\", O_RDONLY) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-openat.c",
                    "line": 69,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-openat.c",
                    "line": 69,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-openat.c",
                    "line": 68,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: openat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/fflush.c",
                    "line": 9,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x1] (i8: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|       ASSERT (openat (-1, \"foo\", O_RDONLY) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|     fd[0] = -1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     fd[1] = -1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|->   ASSERT (pipe (fd) >= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     ASSERT (fd[0] >= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     ASSERT (fd[1] >= 0);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     fd[1] = -1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|     ASSERT (pipe (fd) >= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|->   ASSERT (fd[0] >= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     ASSERT (fd[1] >= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|     ASSERT (fd[0] != fd[1]);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.h",
                    "line": 34,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.h",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function test_readlink ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.h",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: readlink: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     memset (buf, 0xff, sizeof buf);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   ASSERT (func (\"no_such\", buf, sizeof buf) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (errno == ENOENT);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     errno = 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.h",
                    "line": 35,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.h",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function test_readlink ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlink.h",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: readlink: len 8 bytes, [8 times 0xff] (i64: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     ASSERT (func (\"no_such\", buf, sizeof buf) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->   ASSERT (errno == ENOENT);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     ASSERT (func (\"no_such/\", buf, sizeof buf) == -1);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlinkat.c",
                    "line": 65,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlinkat.c",
                    "line": 65,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlinkat.c",
                    "line": 65,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: readlinkat: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|->     ASSERT (readlinkat (-1, \"foo\", buf, sizeof buf) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlinkat.c",
                    "line": 66,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlinkat.c",
                    "line": 66,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-readlinkat.c",
                    "line": 65,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: readlinkat: len 8 bytes, [8 times 0xff] (i64: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       ASSERT (readlinkat (-1, \"foo\", buf, sizeof buf) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 29,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 29,
                    "event": "note",
                    "message": "call stack: function test_rmdir_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|     /* Setup.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|->   ASSERT (mkdir (BASE \"dir\", 0700) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|     ASSERT (close (creat (BASE \"dir/file\", 0600)) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "event": "note",
                    "message": "call stack: function test_rmdir_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: creat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|     /* Setup.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|     ASSERT (mkdir (BASE \"dir\", 0700) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->   ASSERT (close (creat (BASE \"dir/file\", 0600)) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     /* Basic error conditions.  */",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 34,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function test_rmdir_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: creat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: rmdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     /* Basic error conditions.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   ASSERT (func (\"\") == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (errno == ENOENT);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     errno = 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 35,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function test_rmdir_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: creat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-rmdir.h",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: rmdir: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     ASSERT (func (\"\") == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->   ASSERT (errno == ENOENT);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     ASSERT (func (BASE \"nosuch\") == -1);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     ASSERT (setsockopt (-1, SOL_SOCKET, SO_REUSEADDR, &value, sizeof (value))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|               == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (errno == EBADF);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       ASSERT (setsockopt (-1, SOL_SOCKET, SO_REUSEADDR, &value, sizeof (value))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|               == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigemptyset: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|     sa.sa_flags = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|->   ASSERT (sigemptyset (&sa.sa_mask) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     ASSERT (sigaction (SIGABRT, &sa, NULL) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|     ASSERT (raise (SIGABRT) == 0);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 98,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 98,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigemptyset: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 98,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigaction: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|     sa.sa_flags = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     ASSERT (sigemptyset (&sa.sa_mask) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|->   ASSERT (sigaction (SIGABRT, &sa, NULL) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|     ASSERT (raise (SIGABRT) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 99,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 99,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigemptyset: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 98,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigaction: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 99,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: raise: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     ASSERT (sigemptyset (&sa.sa_mask) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     ASSERT (sigaction (SIGABRT, &sa, NULL) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|->   ASSERT (raise (SIGABRT) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|     sa.sa_flags = SA_RESETHAND | SA_NODEFER;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 102,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 102,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigemptyset: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 98,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigaction: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 99,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: raise: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 102,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigaction: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|     sa.sa_flags = SA_RESETHAND | SA_NODEFER;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->   ASSERT (sigaction (SIGABRT, &sa, &old_sa) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|     ASSERT ((old_sa.sa_flags & MASK_SA_FLAGS) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|     ASSERT (old_sa.sa_handler == handler);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 103,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 103,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 97,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigemptyset: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 98,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigaction: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 99,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: raise: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigaction.c",
                    "line": 102,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigaction: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|     sa.sa_flags = SA_RESETHAND | SA_NODEFER;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|     ASSERT (sigaction (SIGABRT, &sa, &old_sa) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|->   ASSERT ((old_sa.sa_flags & MASK_SA_FLAGS) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|     ASSERT (old_sa.sa_handler == handler);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|     ASSERT (raise (SIGABRT) == 0);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|     /* Check error handling.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|->   ASSERT (sigprocmask (1729, &set, NULL) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|     ASSERT (errno == EINVAL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|     /* Check error handling.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     ASSERT (sigprocmask (1729, &set, NULL) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->   ASSERT (errno == EINVAL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|     /* Block SIGINT.  */",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 42,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sleep: len 4 bytes, [0x2|3 times 0x0] (i32: 2)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   main (void)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|->   ASSERT (sleep (1) <= 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     ASSERT (sleep (0) == 0);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 44,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 42,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 44,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     ASSERT (sleep (1) <= 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   ASSERT (sleep (0) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   #if HAVE_DECL_ALARM",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 53,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 53,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 42,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 44,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-sleep.c",
                    "line": 52,
                    "column": 17,
                    "event": "note",
                    "message": "Non-deterministic values: sleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|       alarm (1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|       remaining = sleep (pentecost);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->     ASSERT (pentecost - 10 < remaining && remaining <= pentecost);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   #endif",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strstr.c",
                    "line": 48,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strstr.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       const char input[] = \"foo\";",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|       const char *result = strstr (input, \"\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|->     ASSERT (result == input);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoll.c",
                    "line": 41,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoll.c",
                    "line": 41,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       result = strtoll (input, &ptr, 10);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       ASSERT (result == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->     ASSERT (ptr == input);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (errno == 0 || errno == EINVAL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoumax.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoumax.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoumax.c",
                    "line": 39,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: strtoumax: len 8 bytes, [0x1|7 times 0x0] (i64: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       result = strtoumax (input, &ptr, 10);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     ASSERT (result == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|       ASSERT (ptr == input);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (errno == 0 || errno == EINVAL);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoumax.c",
                    "line": 41,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoumax.c",
                    "line": 41,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-strtoumax.c",
                    "line": 39,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: strtoumax: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|       result = strtoumax (input, &ptr, 10);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       ASSERT (result == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->     ASSERT (ptr == input);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|       ASSERT (errno == 0 || errno == EINVAL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: symlinkat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     ASSERT (symlinkat (\"foo\", -1, \"bar\") == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       ASSERT (errno == EBADF",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|               || errno == ENOSYS /* seen on mingw */",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-symlinkat.c",
                    "line": 65,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-symlinkat.c",
                    "line": 65,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: symlinkat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       ASSERT (symlinkat (\"foo\", -1, \"bar\") == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|->     ASSERT (errno == EBADF",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|               || errno == ENOSYS /* seen on mingw */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|              );",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-uname.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-uname.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-uname.c",
                    "line": 43,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: uname: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     memset (&buf, '?', sizeof (buf));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|->   ASSERT (uname (&buf) >= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     /* Verify that every field's value is NUL terminated.  */",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 29,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 29,
                    "event": "note",
                    "message": "call stack: function test_unlink_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|     /* Setup.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|->   ASSERT (mkdir (BASE \"dir\", 0700) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|     ASSERT (close (creat (BASE \"dir/file\", 0600)) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "event": "note",
                    "message": "call stack: function test_unlink_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: creat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|     /* Setup.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|     ASSERT (mkdir (BASE \"dir\", 0700) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|->   ASSERT (close (creat (BASE \"dir/file\", 0600)) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     /* Basic error conditions.  */",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 34,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function test_unlink_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: creat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: unlink: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     /* Basic error conditions.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   ASSERT (func (\"\") == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (errno == ENOENT);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     errno = 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 35,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function test_unlink_func ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 29,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: mkdir: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: creat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlink.h",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: unlink: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     ASSERT (func (\"\") == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->   ASSERT (errno == ENOENT);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     ASSERT (func (BASE \"nosuch\") == -1);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: unlinkat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|     {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|->     ASSERT (unlinkat (-1, \"foo\", 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|       ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlinkat.c",
                    "line": 72,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlinkat.c",
                    "line": 72,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: unlinkat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       errno = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|       ASSERT (unlinkat (-1, \"foo\", 0) == -1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|->     ASSERT (errno == EBADF);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|     {",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     time_t start = time (NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   ASSERT (usleep (1000000) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (start < time (NULL));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     time_t start = time (NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|     ASSERT (usleep (1000000) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|->   ASSERT (start < time (NULL));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     ASSERT (usleep (0) == 0);",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-usleep.c",
                    "line": 37,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     ASSERT (start < time (NULL));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|->   ASSERT (usleep (0) == 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     return 0;",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 68,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 68,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 61,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: setlocale: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c:61:7 (offset): note: Non-deterministic values: setlocale: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 67,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: wcrtomb: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|       buf[0] = 'x';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|       ret = wcrtomb (buf, 0, NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|->     ASSERT (ret == 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|       ASSERT (buf[0] == '\\0');",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|     }",
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
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 69,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 69,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 61,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: setlocale: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c:61:7 (offset): note: Non-deterministic values: setlocale: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gnulib-tests/../../gnulib-tests/test-wcrtomb.c",
                    "line": 67,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: wcrtomb: len 8 bytes, [0x1|7 times 0x0] (i64: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/../../../gl/lib/fflush.c",
                    "line": 150,
                    "column": 27,
                    "event": "note",
                    "message": "Non-deterministic values: __freading: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|       ret = wcrtomb (buf, 0, NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|       ASSERT (ret == 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|->     ASSERT (buf[0] == '\\0');",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|     }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   ",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/dtotimespec.c",
                    "line": 34,
                    "column": 27,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'time_t' (aka 'long') to 'double' changes value from 9223372036854775807 to 9223372036854775808",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  else if (! (sec < 1.0 + TYPE_MAXIMUM (time_t)))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ~ ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/intprops.h",
                    "line": 58,
                    "column": 4,
                    "event": "note",
                    "message": "expanded from macro 'TYPE_MAXIMUM'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ((t) (! TYPE_SIGNED (t)                                               \\",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     if (! (TYPE_MINIMUM (time_t) < sec))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       return make_timespec (TYPE_MINIMUM (time_t), 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->   else if (! (sec < 1.0 + TYPE_MAXIMUM (time_t)))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       return make_timespec (TYPE_MAXIMUM (time_t), TIMESPEC_HZ - 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     else",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
