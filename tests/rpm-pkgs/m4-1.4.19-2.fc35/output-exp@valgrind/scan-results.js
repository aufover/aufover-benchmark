{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "m4-1.4.19-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/m4-1.4.19-2.fc35/valgrind/output",
        "time-created": "2022-11-23 23:02:29",
        "time-finished": "2022-11-23 23:16:43",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/m4-1.4.19-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/m4-1.4.19-2.fc35/m4-1.4.19-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "m4-1.4.19/lib/canonicalize.c",
                    "line": 401,
                    "column": 33,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'end_idx' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401 |                 end = extra_buf + end_idx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ~~~~~~~~~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/lib/canonicalize.c",
                    "line": 388,
                    "column": 21,
                    "event": "note",
                    "message": "'end_idx' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388 |               idx_t end_idx IF_LINT (= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|                   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|                 if (end_in_extra_buffer)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|->                 end = extra_buf + end_idx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|                 /* Careful here, end may be a pointer into extra_buf... */",
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
                    "file_name": "m4-1.4.19/lib/canonicalize.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'canonicalize_filename_mode'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/lib/canonicalize.c",
                    "line": 484,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484 |    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  482|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  483|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|->    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|      #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|     #endif",
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
                    "file_name": "m4-1.4.19/lib/canonicalize.c",
                    "line": 485,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485 |    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  483|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|      #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|->    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|     #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|     struct scratch_buffer rname_buffer;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "m4-1.4.19/lib/trim.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'trim2'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/lib/trim.c",
                    "line": 103,
                    "column": 16,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'r' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103 |             *r = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|             if (state == 2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|->             *r = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-posix_spawn-chdir",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15310",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/concat-filename.c",
                    "line": 58,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/concat-filename.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/xconcat-filename.c",
                    "line": 36,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/findprog.c",
                    "line": 94,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/findprog.c",
                    "line": 42,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-posix_spawn-chdir.c",
                    "line": 173,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|           (directory_len > FILE_SYSTEM_PREFIX_LEN (directory)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|            && !ISSLASH (directory[directory_len - 1]));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|->       result = (char *) malloc (directory_len + need_slash",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|                                   + strlen (filename)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|                                   + (suffix != NULL ? strlen (suffix) : 0)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-canonicalize",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11930",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/malloc/scratch_buffer_dupfree.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 1 blocks are definitely lost in loss record 2 of 10",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/malloc/scratch_buffer_dupfree.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/./malloc/scratch_buffer.h",
                    "line": 147,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/canonicalize.c",
                    "line": 467,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/../lib/canonicalize.c",
                    "line": 488,
                    "event": "note",
                    "message": "called from canonicalize_filename_mode()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-canonicalize.c",
                    "line": 72,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|     if (data == buffer->__space.__c)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->       void *copy = malloc (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|         return copy != NULL ? memcpy (copy, data, size) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-execute-script",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12298",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 82,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 82,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 202,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-execute-script.c",
                    "line": 87,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|     }",
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
                    "message": "   82|->   if (!(buf = malloc (alloc)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       return NULL; /* errno is ENOMEM.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-execute-main",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13164 with arguments: ./test-execute-child 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 82,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 82,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 202,
                    "event": "note",
                    "message": "called from read_file.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-execute-main.c",
                    "line": 224,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|     }",
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
                    "message": "   82|->   if (!(buf = malloc (alloc)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       return NULL; /* errno is ENOMEM.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-execute-main",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14341 with arguments: ./test-execute-child 18",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 82,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "7 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 82,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 202,
                    "event": "note",
                    "message": "called from read_file.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-execute-main.c",
                    "line": 395,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|     }",
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
                    "message": "   82|->   if (!(buf = malloc (alloc)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|       return NULL; /* errno is ENOMEM.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-execute-main",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13369 with arguments: ./test-execute-child 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 121,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 121,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/read-file.c",
                    "line": 202,
                    "event": "note",
                    "message": "called from read_file.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-execute-main.c",
                    "line": 256,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|                   else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|                     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|->                     char *smaller_buf = realloc (buf, size + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|                       if (smaller_buf != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|                         buf = smaller_buf;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-c-stack",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11847 with arguments: 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-c-stack.c",
                    "line": 66,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "m4-1.4.19/tests/test-c-stack.c",
                    "line": 66,
                    "event": "note",
                    "message": "Address 0x0 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-c-stack.c",
                    "line": 66,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|             exit_failure = 77;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|->           ++*argv[argc]; /* Intentionally dereference NULL.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|         return recurse (0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-calloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11888",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-calloc-gnu.c",
                    "line": 62,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function calloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/test-calloc-gnu.c",
                    "line": 62,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|       for (size_t n = 2; n != 0; n <<= 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|         {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|->         void *volatile p = calloc (PTRDIFF_MAX / n + 1, identity (n));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|           ASSERT (p == NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|           ASSERT (errno == ENOMEM);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-canonicalize",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11930",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-canonicalize.c",
                    "line": 67,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 1 blocks are definitely lost in loss record 1 of 10",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from __libc_scratch_buffer_dupfree()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from realpath_stk()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from realpath@@GLIBC_2.3()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libcsexec-preload.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from canonicalize_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-canonicalize.c",
                    "line": 67,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|        to different files (except for hard links).  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|->     char *result0 = canonicalize_file_name (\"/etc/passwd\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|       if (result0 != NULL) /* This file does not exist on native Windows.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|         {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-explicit_bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12322",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 117,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 117,
                    "event": "note",
                    "message": "Address 0x4a36040 is 0 bytes inside a block of size 9 free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 117,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 173,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|         /* some implementation could override freed memory by canaries so",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|            compare against secret */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|->       ASSERT (memcmp (heapbuf, SECRET, SECRET_SIZE) != 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|         printf (\"test_heap: address range is still mapped after free().\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-explicit_bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12322",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 143,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 143,
                    "event": "note",
                    "message": "called from do_secret_stuff()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 156,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 174,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|     else /* pass == 2 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|->       return memcmp (zero, stackbuf, SECRET_SIZE) != 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_secret_stuff'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 143,
                    "column": 14,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'stackbuf' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143 |       return memcmp (zero, stackbuf, SECRET_SIZE) != 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<built-in>",
                    "line": 0,
                    "event": "note",
                    "message": "by argument 2 of type 'const void *' to '__builtin_memcmp_eq' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-explicit_bzero.c",
                    "line": 134,
                    "column": 8,
                    "event": "note",
                    "message": "'stackbuf' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134 |   char stackbuf[SECRET_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|     else /* pass == 2 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|->       return memcmp (zero, stackbuf, SECRET_SIZE) != 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-malloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14451",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-malloc-gnu.c",
                    "line": 39,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function malloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/test-malloc-gnu.c",
                    "line": 39,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|         size_t one = argc != 12345;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->       p = malloc (PTRDIFF_MAX + one);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|         ASSERT (p == NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|         ASSERT (errno == ENOMEM);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "m4-1.4.19/tests/test-memrchr.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-memrchr.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-memrchr.c",
                    "line": 32,
                    "column": 26,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'input_59' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32 | #define MEMRCHR (char *) memrchr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/lib/string.h",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-memrchr.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 117,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to 'memrchr' declared with attribute 'access (read_only, 1, 3)' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | extern void *memrchr (const void *__s, int __c, size_t __n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   /* Calculating void * + int is not portable, so this wrapper converts",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|      to char * to make the tests easier to write.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|-> #define MEMRCHR (char *) memrchr",
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
                    "message": "   34|   int",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-realloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15673",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-realloc-gnu.c",
                    "line": 31,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/test-realloc-gnu.c",
                    "line": 31,
                    "event": "note",
                    "message": "called from main()",
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
                    "message": "   30|     /* Check that realloc (NULL, 0) is not a NULL pointer.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|->   void *volatile p = realloc (NULL, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     ASSERT (p != NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-realloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15673",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-realloc-gnu.c",
                    "line": 39,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function realloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/test-realloc-gnu.c",
                    "line": 39,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|         size_t one = argc != 12345;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->       p = realloc (p, PTRDIFF_MAX + one);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|         ASSERT (p == NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|         /* Avoid a test failure due to glibc bug",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-reallocarray",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15683",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-reallocarray.c",
                    "line": 39,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function malloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "m4-1.4.19/tests/test-reallocarray.c",
                    "line": 39,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|         void *volatile p = NULL;",
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
                    "message": "   39|->       p = reallocarray (p, PTRDIFF_MAX / n + 1, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|         ASSERT (p == NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|         ASSERT (errno == ENOMEM);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test-sigsegv-catch-stackoverflow2",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16306",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-sigsegv-catch-stackoverflow2.c",
                    "line": 186,
                    "event": "warning[InvalidWrite]",
                    "message": "Invalid write of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "m4-1.4.19/tests/test-sigsegv-catch-stackoverflow2.c",
                    "line": 186,
                    "event": "note",
                    "message": "Address 0x0 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "m4-1.4.19/tests/test-sigsegv-catch-stackoverflow2.c",
                    "line": 186,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|       case 3:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|->       *(volatile int *) 0 = 42;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       case 4:",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "m4-1.4.19/tests/test-thread_create.c",
                    "line": 30,
                    "column": 20,
                    "event": "warning[-Wunused-variable]",
                    "message": "'worker_thread' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30 | static gl_thread_t worker_thread;",
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
                    "message": "   28|   static gl_thread_t main_thread_before;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   static gl_thread_t main_thread_after;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> static gl_thread_t worker_thread;",
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
                    "message": "   32|   static int dummy;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "m4-1.4.19/tests/test-thread_create.c",
                    "line": 36,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'worker_thread_func' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36 | worker_thread_func (void *arg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~",
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
                    "message": "   35|   static void *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|-> worker_thread_func (void *arg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|     work_done = 1;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
