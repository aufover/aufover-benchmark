{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sed-4.8-8.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sed-4.8-8.fc35/valgrind/output",
        "time-created": "2022-11-23 21:13:45",
        "time-finished": "2022-11-23 21:44:01",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sed-4.8-8.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sed-4.8-8.fc35/sed-4.8-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "sed-4.8/gnulib-tests/./dfa-match-aux",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 37596 with arguments: a ba 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,048 bytes in 1 blocks are possibly lost in loss record 12 of 13",
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
                    "file_name": "sed-4.8/gnulib-tests/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/dfa-match-aux.c",
                    "line": 67,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/gnulib-tests/./dfa-match-aux",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 37596 with arguments: a ba 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "128 bytes in 1 blocks are possibly lost in loss record 10 of 13",
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
                    "file_name": "sed-4.8/gnulib-tests/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/../lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/dfa-match-aux.c",
                    "line": 67,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/gnulib-tests/test-canonicalize-lgpl.c",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/null-ptr.h",
                    "line": 22,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'null_ptr' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22 | null_ptr (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|      Usual compilers are not able to infer something about the return value.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   static void *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> null_ptr (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|     unsigned int x = rand ();",
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
                    "file_name": "sed-4.8/gnulib-tests/test-memrchr.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-memrchr.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-memrchr.c",
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
                    "file_name": "sed-4.8/lib/string.h",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/gnulib-tests/test-memrchr.c",
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
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "sed-4.8/gnulib-tests/test-thread_create.c",
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
                    "file_name": "sed-4.8/gnulib-tests/test-thread_create.c",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36 | int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37 | int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38 | int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49 | map_to_failure (int ret, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69 | rpl_getfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | rpl_lgetfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
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
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83 | rpl_fgetfilecon (int fd, security_context_t *con)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
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
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1050 with arguments: s/^ *// empty2.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 1 blocks are definitely lost in loss record 3 of 68",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1505,
                    "event": "note",
                    "message": "called from compile_string()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 402,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21792 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary3.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 10 blocks are definitely lost in loss record 3 of 456",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1536,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1794 with arguments: -f fasts.1 fasts.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 13 blocks are definitely lost in loss record 2 of 91",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1536,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1174 with arguments: -n h;s/Version: *//p;g;s/version: *//Ip case-insensitive.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 2 blocks are definitely lost in loss record 1 of 48",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1505,
                    "event": "note",
                    "message": "called from compile_string()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 402,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1825 with arguments: -n -f factor.1 factor.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 3 blocks are definitely lost in loss record 3 of 493",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1536,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 5 blocks are definitely lost in loss record 3 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1536,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21731 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary2.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "0 bytes in 8 blocks are definitely lost in loss record 3 of 424",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 742,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1536,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1825 with arguments: -n -f factor.1 factor.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "10,240 bytes in 5 blocks are possibly lost in loss record 483 of 493",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19062 with arguments: -f prog1 in1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "12,288 bytes in 6 blocks are possibly lost in loss record 45 of 46",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31515 with arguments: 1s/ [^ ]* / sed /; /^E-mail/,$d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "14,336 bytes in 7 blocks are possibly lost in loss record 111 of 111",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 862,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1546 with arguments: -f brackets.1 brackets.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "16,384 bytes in 8 blocks are possibly lost in loss record 48 of 49",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1763 with arguments: -e s/-*enable-//;s/=.*// enable.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "18,432 bytes in 9 blocks are possibly lost in loss record 51 of 51",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12168 with arguments: --debug s/x// x_c30.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,048 bytes in 1 blocks are possibly lost in loss record 33 of 35",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1608 with arguments: -n -f classes.1 classes.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "20,480 bytes in 10 blocks are possibly lost in loss record 101 of 101",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "204,800 bytes in 100 blocks are possibly lost in loss record 432 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 284,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1639 with arguments: -n -f cv-vars.1 cv-vars.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "22,528 bytes in 11 blocks are possibly lost in loss record 100 of 100",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31752 with arguments: -f /builddir/build/BUILD/sed-4.8/testsuite/mac-mf.sed /builddir/build/BUILD/sed-4.8/testsuite/mac-mf.inp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "221,184 bytes in 108 blocks are possibly lost in loss record 248 of 249",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21731 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary2.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "249,856 bytes in 122 blocks are possibly lost in loss record 423 of 424",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1794 with arguments: -f fasts.1 fasts.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "26,624 bytes in 13 blocks are possibly lost in loss record 90 of 91",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "260,096 bytes in 127 blocks are possibly lost in loss record 433 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "264,192 bytes in 129 blocks are possibly lost in loss record 434 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21792 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary3.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "268,288 bytes in 131 blocks are possibly lost in loss record 455 of 456",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31752 with arguments: -f /builddir/build/BUILD/sed-4.8/testsuite/mac-mf.sed /builddir/build/BUILD/sed-4.8/testsuite/mac-mf.inp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "278,528 bytes in 136 blocks are possibly lost in loss record 249 of 249",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1174 with arguments: -n h;s/Version: *//p;g;s/version: *//Ip case-insensitive.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "32,768 bytes in 16 blocks are possibly lost in loss record 47 of 48",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1825 with arguments: -n -f factor.1 factor.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "36,864 bytes in 18 blocks are possibly lost in loss record 492 of 493",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 284,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1391 with arguments: -f recall.1 recall.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "4,096 bytes in 2 blocks are possibly lost in loss record 68 of 68",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1918 with arguments: -f khadafy.1 khadafy.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "51,200 bytes in 25 blocks are possibly lost in loss record 51 of 51",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21792 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary3.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "59,392 bytes in 29 blocks are possibly lost in loss record 451 of 456",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1112 with arguments: s/_\\S/XX/g;s/\\s/_/g space.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "6,144 bytes in 3 blocks are possibly lost in loss record 51 of 51",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31856 with arguments: -f /builddir/build/BUILD/sed-4.8/testsuite/madding.sed /builddir/build/BUILD/sed-4.8/testsuite/madding.inp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "669,696 bytes in 327 blocks are possibly lost in loss record 43 of 45",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31087 with arguments: -n -f distrib.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "67,584 bytes in 33 blocks are possibly lost in loss record 214 of 215",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21371 with arguments: -f 8bit-prog.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,192 bytes in 4 blocks are possibly lost in loss record 46 of 46",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31087 with arguments: -n -f distrib.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "88,064 bytes in 43 blocks are possibly lost in loss record 215 of 215",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21731 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary2.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "94,208 bytes in 46 blocks are possibly lost in loss record 420 of 424",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2949,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1546 with arguments: -f brackets.1 brackets.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,024 bytes in 8 blocks are possibly lost in loss record 37 of 49",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19845 with arguments: -f subst-prog2 subst-in2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,280 bytes in 10 blocks are possibly lost in loss record 36 of 47",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6340 with arguments: -f cnv-num-prog cnv-num-in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,408 bytes in 11 blocks are possibly lost in loss record 36 of 46",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1794 with arguments: -f fasts.1 fasts.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,664 bytes in 13 blocks are possibly lost in loss record 80 of 91",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1050 with arguments: s/^ *// empty2.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "128 bytes in 1 blocks are possibly lost in loss record 59 of 68",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31087 with arguments: -n -f distrib.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "192 bytes in 1 blocks are possibly lost in loss record 118 of 215",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3472,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,816 bytes in 22 blocks are possibly lost in loss record 370 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,944 bytes in 23 blocks are possibly lost in loss record 371 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1112 with arguments: s/_\\S/XX/g;s/\\s/_/g space.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "256 bytes in 2 blocks are possibly lost in loss record 39 of 51",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1918 with arguments: -f khadafy.1 khadafy.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "288 bytes in 1 blocks are possibly lost in loss record 28 of 51",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3472,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21731 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary2.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "3,072 bytes in 24 blocks are possibly lost in loss record 365 of 424",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21731 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary2.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "3,200 bytes in 25 blocks are possibly lost in loss record 367 of 424",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21792 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary3.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "3,456 bytes in 27 blocks are possibly lost in loss record 400 of 456",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2321 with arguments: -f sep.1 sep.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "384 bytes in 3 blocks are possibly lost in loss record 54 of 70",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31752 with arguments: -f /builddir/build/BUILD/sed-4.8/testsuite/mac-mf.sed /builddir/build/BUILD/sed-4.8/testsuite/mac-mf.inp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "5,120 bytes in 40 blocks are possibly lost in loss record 222 of 249",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1825 with arguments: -n -f factor.1 factor.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "512 bytes in 4 blocks are possibly lost in loss record 392 of 493",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 810,
                    "event": "note",
                    "message": "called from match_an_address_p()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1304,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31856 with arguments: -f /builddir/build/BUILD/sed-4.8/testsuite/madding.sed /builddir/build/BUILD/sed-4.8/testsuite/madding.inp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "55,416 bytes in 1 blocks are possibly lost in loss record 32 of 45",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "768 bytes in 3 blocks are possibly lost in loss record 308 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3521,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 21670 with arguments: -n -f /builddir/build/BUILD/sed-4.8/testsuite/binary.sed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "768 bytes in 4 blocks are possibly lost in loss record 309 of 435",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from build_state()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3472,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 284,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1825 with arguments: -n -f factor.1 factor.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "768 bytes in 6 blocks are possibly lost in loss record 416 of 493",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1980 with arguments: -f manis.1 manis.2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "896 bytes in 7 blocks are possibly lost in loss record 100 of 116",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from xpalloc.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 2853,
                    "event": "note",
                    "message": "called from realloc_trans_if_necessary()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3391,
                    "event": "note",
                    "message": "called from dfaexec_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/dfa.c",
                    "line": 3568,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/regexp.c",
                    "line": 292,
                    "event": "note",
                    "message": "called from match_regex()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1029,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1557,
                    "event": "note",
                    "message": "called from execute_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 1694,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 422,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "sed-4.8/./sed/sed",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16285 with arguments: R",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 2 of 5",
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
                    "file_name": "sed-4.8/lib/xmalloc.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/utils.c",
                    "line": 507,
                    "event": "note",
                    "message": "called from init_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 365,
                    "event": "note",
                    "message": "called from read_filename()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 390,
                    "event": "note",
                    "message": "called from get_openfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1201,
                    "event": "note",
                    "message": "called from compile_program()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 1505,
                    "event": "note",
                    "message": "called from compile_string()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/sed.c",
                    "line": 402,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|     return p;",
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
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'match_slash'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 493,
                    "column": 37,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'delim' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493 |           else if (state == 2 && ch == delim)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/compile.c",
                    "line": 458,
                    "column": 7,
                    "event": "note",
                    "message": "'delim' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  458 |   int delim IF_LINT ( = 0) ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|                 state = 2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493|->           else if (state == 2 && ch == delim)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494|               state = 3;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  495|             else",
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
                    "file_name": "sed-4.8/sed/execute.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'open_next_file'",
                    "verbosity_level": 1
                },
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
                    "message": "  575 |       security_context_t old_fscreatecon;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
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
                    "message": "  596 |           security_context_t con;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~",
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
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "sed-4.8/sed/utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_copy'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sed-4.8/sed/utils.c",
                    "line": 436,
                    "column": 7,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'c'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436 |   int c, retval = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|     FILE *infile, *outfile;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|->   int c, retval = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|     errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
