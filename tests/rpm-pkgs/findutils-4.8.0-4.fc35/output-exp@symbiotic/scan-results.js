{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "findutils-4.8.0-4.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/findutils-4.8.0-4.fc35/symbiotic/output",
        "time-created": "2023-01-31 04:40:34",
        "time-finished": "2023-01-31 08:06:18",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/findutils-4.8.0-4.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/findutils-4.8.0-4.fc35/findutils-4.8.0-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
                    "line": 43,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function clear_ungetc_buffer_preserving_position (=140189645125280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
                    "line": 156,
                    "event": "note",
                    "message": "call stack: function rpl_fflush (=140189645125280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: address: 0:140189645125280",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
                    "line": 43,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gl/lib/freadahead.c",
                    "line": 38,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function freadahead (=140332167572128)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/closein.c",
                    "line": 87,
                    "event": "note",
                    "message": "call stack: function close_stdin ()",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-closein.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/freadahead.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: address: 0:140332167572168",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/freadahead.c",
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
                    "file_name": "findutils-4.8.0/gl/lib/fseeko.c",
                    "line": 52,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "call stack: function rpl_fseeko (=140486698314400, =0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fseek.c",
                    "line": 29,
                    "event": "note",
                    "message": "call stack: function rpl_fseek (=140486698314400, =0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fseek.c",
                    "line": 41,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fseeko.c",
                    "line": 52,
                    "event": "note",
                    "message": "Additional Info: address: 0:140486698314416",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fseeko.c",
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
                    "file_name": "findutils-4.8.0/gl/lib/xalloc-die.c",
                    "line": 40,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xalloc-die.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function xalloc_die ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrndup.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function xstrndup (=2, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/basename.c",
                    "line": 57,
                    "event": "note",
                    "message": "call stack: function base_name (=0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dirname.c",
                    "line": 142,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrndup.c",
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
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "call stack: function xstrtol (=0, =0, =0, =0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-xstrtol.c",
                    "line": 51,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrtol.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/xstrtol.c",
                    "line": 100,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: strtol: len 8 bytes, [8 times 0x0] (i64: 0)",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/dtotimespec.c",
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
                    "file_name": "findutils-4.8.0/gl/lib/intprops.h",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-accept.c",
                    "line": 42,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: accept: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-bind.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-bind.c",
                    "line": 47,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-bind.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: bind: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-c-strstr.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-c-strstr.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   32|       const char input[] = \"foo\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|       const char *result = c_strstr (input, \"\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     ASSERT (result == input);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|     }",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-chdir.c",
                    "line": 30,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-close.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-close.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-close.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: close: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-connect.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-connect.c",
                    "line": 48,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-connect.c",
                    "line": 46,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: connect: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dup.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dup.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dup.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: dup: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dup.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dup.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-dup.c",
                    "line": 34,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: dup: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: faccessat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-faccessat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-faccessat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-faccessat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: faccessat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fseeko3.c",
                    "line": 33,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fseeko3.c",
                    "line": 32,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fopen: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstat.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstat.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstatat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   80|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|->     ASSERT (fstatat (-1, \"foo\", &statbuf, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     }",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstatat.c",
                    "line": 83,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstatat.c",
                    "line": 83,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-fstatat.c",
                    "line": 82,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: fstatat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   81|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       ASSERT (fstatat (-1, \"foo\", &statbuf, 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|     {",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ftruncate.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ftruncate.c",
                    "line": 37,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: ftruncate: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 39,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: chdir: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-getcwd-lgpl.c",
                    "line": 43,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: getcwd: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-inet_pton.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-inet_pton.c",
                    "line": 45,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-inet_pton.c",
                    "line": 42,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: inet_pton: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ioctl.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-ioctl.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/ioctl.c",
                    "line": 42,
                    "column": 10,
                    "event": "note",
                    "message": "Non-deterministic values: ioctl: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-iswblank.c",
                    "line": 32,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: iswblank: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-listen.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-listen.c",
                    "line": 39,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-listen.c",
                    "line": 38,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: listen: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-memrchr.c",
                    "line": 49,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-once.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-once.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-once.c",
                    "line": 38,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pthread_once: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-pipe.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-pipe.c",
                    "line": 96,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: pipe: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-setsockopt.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-setsockopt.c",
                    "line": 40,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: setsockopt: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-sigprocmask.c",
                    "line": 63,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-sigprocmask.c",
                    "line": 62,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: sigprocmask: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: symlinkat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   62|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     ASSERT (symlinkat (\"foo\", -1, \"bar\") == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       ASSERT (errno == EBADF",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|               || errno == ENOSYS /* seen on mingw */",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-symlinkat.c",
                    "line": 65,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-symlinkat.c",
                    "line": 65,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-symlinkat.c",
                    "line": 64,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: symlinkat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   63|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       ASSERT (symlinkat (\"foo\", -1, \"bar\") == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|->     ASSERT (errno == EBADF",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|               || errno == ENOSYS /* seen on mingw */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|              );",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-uname.c",
                    "line": 43,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-uname.c",
                    "line": 43,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-uname.c",
                    "line": 43,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: uname: len 4 bytes, [3 times 0x0|0x80] (i32: -2147483648)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: unlinkat: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   69|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|->     ASSERT (unlinkat (-1, \"foo\", 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|       ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     }",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-unlinkat.c",
                    "line": 72,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-unlinkat.c",
                    "line": 72,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-unlinkat.c",
                    "line": 71,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: unlinkat: len 4 bytes, [4 times 0xff] (i32: -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "message": "   70|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|       ASSERT (unlinkat (-1, \"foo\", 0) == -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|->     ASSERT (errno == EBADF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|     {",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 35,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 35,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 37,
                    "event": "error",
                    "message": "reached \"unreachable\" instruction",
                    "verbosity_level": 0
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 37,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 34,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-usleep.c",
                    "line": 37,
                    "column": 3,
                    "event": "note",
                    "message": "Non-deterministic values: usleep: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/fflush.c",
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
        }
    ]
}
