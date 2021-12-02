{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "diffutils-3.8-1.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/diffutils-3.8-1.fc35/valgrind/output",
        "time-created": "2021-12-02 01:30:28",
        "time-finished": "2021-12-02 01:37:00",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/diffutils-3.8-1.fc35/valgrind/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/diffutils-3.8-1.fc35/diffutils-3.8-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-c-stack",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17379 with arguments: 1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-c-stack.c",
                    "line": 66,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 1",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-c-stack.c",
                    "line": 66,
                    "event": "note",
                    "message": "Address 0x0 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-c-stack.c",
                    "line": 66,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|           {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|             exit_failure = 77;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|->           ++*argv[argc]; /* Intentionally dereference NULL.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|           }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|         return recurse (0);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-calloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17457",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-calloc-gnu.c",
                    "line": 62,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function calloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-calloc-gnu.c",
                    "line": 62,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|       for (size_t n = 2; n != 0; n <<= 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|         {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|->         void *volatile p = calloc (PTRDIFF_MAX / n + 1, identity (n));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|           ASSERT (p == NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|           ASSERT (errno == ENOMEM);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-malloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19501",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-malloc-gnu.c",
                    "line": 39,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function malloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-malloc-gnu.c",
                    "line": 39,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|         size_t one = argc != 12345;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->       p = malloc (PTRDIFF_MAX + one);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|         ASSERT (p == NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|         ASSERT (errno == ENOMEM);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-realloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20535",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-realloc-gnu.c",
                    "line": 31,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-realloc-gnu.c",
                    "line": 31,
                    "event": "note",
                    "message": "called from main()",
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
                    "message": "   30|     /* Check that realloc (NULL, 0) is not a NULL pointer.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|->   void *volatile p = realloc (NULL, 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|     ASSERT (p != NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-realloc-gnu",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20535",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-realloc-gnu.c",
                    "line": 39,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function realloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-realloc-gnu.c",
                    "line": 39,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|         size_t one = argc != 12345;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|->       p = realloc (p, PTRDIFF_MAX + one);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|         ASSERT (p == NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|         /* Avoid a test failure due to glibc bug",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-reallocarray",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20561",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-reallocarray.c",
                    "line": 41,
                    "event": "warning[FishyValue]",
                    "message": "Argument 'size' of function malloc has a fishy (possibly negative) value: -9223372036854775808\n",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-reallocarray.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|         if (PTRDIFF_MAX / n + 1 <= SIZE_MAX)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|           {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->           p = reallocarray (p, PTRDIFF_MAX / n + 1, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|             ASSERT (p == NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|             ASSERT (errno == ENOMEM);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "./test-sigsegv-catch-stackoverflow2",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21196",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-sigsegv-catch-stackoverflow2.c",
                    "line": 188,
                    "event": "warning[InvalidWrite]",
                    "message": "Invalid write of size 4",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-sigsegv-catch-stackoverflow2.c",
                    "line": 188,
                    "event": "note",
                    "message": "Address 0x0 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/gnulib-tests/test-sigsegv-catch-stackoverflow2.c",
                    "line": 188,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|         break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|       case 3:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->       *null_pointer_to_volatile_int = 42;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|         break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       case 4:",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/careadlinkat.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'careadlinkat'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/careadlinkat.c",
                    "line": 178,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178 |    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|        shrinking realloc.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|->    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|      #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|     #endif",
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
                    "file_name": "diffutils-3.8/lib/careadlinkat.c",
                    "line": 179,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179 |    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|      #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|->    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|     #endif",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|     char stack_buf[STACK_BUF_SIZE];",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 562,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/careadlinkat.c",
                    "line": 182,
                    "column": 10,
                    "event": "warning[-Wreturn-local-addr]",
                    "message": "function may return address of local variable",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182 |   return readlink_stk (fd, filename, buffer, buffer_size, alloc,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183 |                        preadlinkat, stack_buf);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/careadlinkat.c",
                    "line": 181,
                    "column": 8,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181 |   char stack_buf[STACK_BUF_SIZE];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|     #endif",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|     char stack_buf[STACK_BUF_SIZE];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|->   return readlink_stk (fd, filename, buffer, buffer_size, alloc,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|                          preadlinkat, stack_buf);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|   }",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/diffseq.h",
                    "line": 425,
                    "column": 36,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'fxbest' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425 |               part->ymid = fxybest - fxbest;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ~~~~~~~~^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/diffseq.h",
                    "line": 381,
                    "column": 18,
                    "event": "note",
                    "message": "'fxbest' was declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381 |           OFFSET fxbest IF_LINT (= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|               {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|                 part->xmid = fxbest;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|->               part->ymid = fxybest - fxbest;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|                 part->lo_minimal = true;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  427|                 part->hi_minimal = false;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/analyze.c",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/diffseq.h",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'compareseq'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/diffseq.h",
                    "line": 432,
                    "column": 36,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'bxbest' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432 |               part->ymid = bxybest - bxbest;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ~~~~~~~~^~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/diffseq.h",
                    "line": 383,
                    "column": 18,
                    "event": "note",
                    "message": "'bxbest' was declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383 |           OFFSET bxbest IF_LINT (= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|               {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|                 part->xmid = bxbest;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|->               part->ymid = bxybest - bxbest;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|                 part->lo_minimal = false;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|                 part->hi_minimal = true;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/lib/trim.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'trim2'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/lib/trim.c",
                    "line": 103,
                    "column": 16,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'r' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103 |             *r = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|             if (state == 2)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|->             *r = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|           }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       }",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/tests/../src/diff",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10774 with arguments: -Ix -I\\ a b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 859,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 8 of 12",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 859,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 758,
                    "event": "note",
                    "message": "called from re_compile_internal()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from rpl_re_compile_pattern()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 829,
                    "event": "note",
                    "message": "called from add_regexp()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 442,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|     dfa->nodes_alloc = pat_len + 1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|->   dfa->nodes = re_malloc (re_token_t, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|     /*  table_size = 2 ^ ceil(log pat_len) */",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/tests/../src/diff",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10774 with arguments: -Ix -I\\ a b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 866,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "192 (48 direct, 144 indirect) bytes in 1 blocks are definitely lost in loss record 12 of 12",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 866,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 758,
                    "event": "note",
                    "message": "called from re_compile_internal()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from rpl_re_compile_pattern()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 829,
                    "event": "note",
                    "message": "called from add_regexp()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 442,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  864|         break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  865|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  866|->   dfa->state_table = calloc (sizeof (struct re_state_table_entry), table_size);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  867|     dfa->state_hash_mask = table_size - 1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/tests/../src/diff",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10774 with arguments: -Ix -I\\ a b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 1169,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 7 of 12",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 1169,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 795,
                    "event": "note",
                    "message": "called from re_compile_internal()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from rpl_re_compile_pattern()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 829,
                    "event": "note",
                    "message": "called from add_regexp()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 442,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1167|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1168|     /* Allocate arrays.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1169|->   dfa->nexts = re_malloc (Idx, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1170|     dfa->org_indices = re_malloc (Idx, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1171|     dfa->edests = re_malloc (re_node_set, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/tests/../src/diff",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10774 with arguments: -Ix -I\\ a b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 1171,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 bytes in 1 blocks are definitely lost in loss record 9 of 12",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 1171,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 795,
                    "event": "note",
                    "message": "called from re_compile_internal()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from rpl_re_compile_pattern()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 829,
                    "event": "note",
                    "message": "called from add_regexp()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 442,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1169|     dfa->nexts = re_malloc (Idx, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1170|     dfa->org_indices = re_malloc (Idx, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1171|->   dfa->edests = re_malloc (re_node_set, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1172|     dfa->eclosures = re_malloc (re_node_set, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1173|     if (__glibc_unlikely (dfa->nexts == NULL || dfa->org_indices == NULL",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/tests/../src/diff",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10774 with arguments: -Ix -I\\ a b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 1172,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "64 (48 direct, 16 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 12",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 1172,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 795,
                    "event": "note",
                    "message": "called from re_compile_internal()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/regcomp.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from rpl_re_compile_pattern()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 829,
                    "event": "note",
                    "message": "called from add_regexp()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.c",
                    "line": 442,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1170|     dfa->org_indices = re_malloc (Idx, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1171|     dfa->edests = re_malloc (re_node_set, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1172|->   dfa->eclosures = re_malloc (re_node_set, dfa->nodes_alloc);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1173|     if (__glibc_unlikely (dfa->nexts == NULL || dfa->org_indices == NULL",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1174|   \t\t\t|| dfa->edests == NULL || dfa->eclosures == NULL))",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/tests/../src/diff3",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9083 with arguments: d e f",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/xmalloc.c",
                    "line": 44,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "520 (360 direct, 160 indirect) bytes in 5 blocks are definitely lost in loss record 25 of 27",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "diffutils-3.8/src/../lib/xmalloc.c",
                    "line": 44,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff3.c",
                    "line": 1015,
                    "event": "note",
                    "message": "called from process_diff()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff3.c",
                    "line": 425,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   xmalloc (size_t s)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   return nonnull (malloc (s));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/analyze.c",
                    "line": 21,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.h",
                    "line": 395,
                    "column": 1,
                    "event": "warning[-Wattributes]",
                    "message": "'pure' attribute ignored",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395 | extern bool (*lines_differ) (char const *, size_t, char const *, size_t) _GL_ATTRIBUTE_PURE;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|   extern char const pr_program[];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|   extern char *concat (char const *, char const *, char const *);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|-> extern bool (*lines_differ) (char const *, size_t, char const *, size_t) _GL_ATTRIBUTE_PURE;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|   extern bool lines_differ_singlebyte (char const *, size_t, char const *, size_t) _GL_ATTRIBUTE_PURE;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|   #ifdef HANDLE_MULTIBYTE",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/diff3.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'process_diff'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff3.c",
                    "line": 1096,
                    "column": 15,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'bptr' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1096 |   *last_block = bptr;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1094|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1095|     *block_list_end = NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1096|->   *last_block = bptr;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1097|     return block_list;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1098|   }",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/sdiff.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'edit'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/sdiff.c",
                    "line": 870,
                    "column": 11,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'cmd1' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  870 |       int cmd1 IF_LINT (= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  868|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  869|         int cmd0 IF_LINT (= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  870|->       int cmd1 IF_LINT (= 0);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  871|         bool gotcmd = false;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  872|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 1177,
                    "column": 29,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'convfail1_bak' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177 |   int convfail1, convfail2, convfail1_bak, convfail2_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1175|     size_t mblen1, mblen2;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1176|     mbstate_t state1, state2, state1_bak, state2_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177|->   int convfail1, convfail2, convfail1_bak, convfail2_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1178|     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1179|     char const *t1 = s1;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 1177,
                    "column": 44,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'convfail2_bak' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177 |   int convfail1, convfail2, convfail1_bak, convfail2_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1175|     size_t mblen1, mblen2;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1176|     mbstate_t state1, state2, state1_bak, state2_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177|->   int convfail1, convfail2, convfail1_bak, convfail2_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1178|     ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1179|     char const *t1 = s1;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lines_differ_multibyte'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 1235,
                    "column": 22,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'t2' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235 |                   t2 += mblen2;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|   \t\t    break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235|-> \t\t  t2 += mblen2;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1236|   \t\t  c2 = *t2;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1237|   \t\t  MBC2WC (t2, end2, mblen2, wc2, state2, convfail2);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 1300,
                    "column": 27,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'wc1_bak' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300 |                       wc1 = wc1_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ~~~~^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1298|   \t\t    {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|   \t\t      t1 = t1_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|-> \t\t      wc1 = wc1_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|   \t\t      state1 = state1_bak;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|   \t\t      convfail1 = convfail1_bak;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 1307,
                    "column": 44,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'wc2_bak' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1307 |                       && !convfail2_bak && iswspace (wc2_bak))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1305|   \t\t  if (wc1 == L' ' && wc2 != L'\\n'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1306|   \t\t      && t2 > s2",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1307|-> \t\t      && !convfail2_bak && iswspace (wc2_bak))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1308|   \t\t    {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1309|   \t\t      t2 = t2_bak;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "diffutils-3.8/src/util.c",
                    "line": 1446,
                    "column": 22,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'t1' may be used uninitialized in this function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1446 |                   t1 += mblen1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~^~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1444|   \t      else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1445|   \t\t{",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1446|-> \t\t  t1 += mblen1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1447|   \t\t  t2 += mblen2;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1448|   \t\t}",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
