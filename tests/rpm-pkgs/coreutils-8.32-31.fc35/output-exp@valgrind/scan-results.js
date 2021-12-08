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
        "project-name": "coreutils-8.32-31.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/coreutils-8.32-31.fc35/valgrind/output",
        "time-created": "2021-12-07 22:59:52",
        "time-finished": "2021-12-07 23:37:15",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/coreutils-8.32-31.fc35/valgrind/output' '-f' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/coreutils-8.32-31.fc35/coreutils-8.32-31.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211207.132556.gc0a64a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-lock.c",
                    "line": 439,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'test_rwlock' defined but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  439 | test_rwlock (void)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|   static void",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  439|-> test_rwlock (void)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|     int i;",
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
                    "file_name": "coreutils-8.32/gnulib-tests/test-memrchr.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-memrchr.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-memrchr.c",
                    "line": 32,
                    "column": 26,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'input_59' may be used uninitialized",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32 | #define MEMRCHR (char *) memrchr",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/lib/string.h",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/gnulib-tests/test-memrchr.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 117,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to 'memrchr' declared with attribute 'access (read_only, 1, 3)' here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | extern void *memrchr (const void *__s, int __c, size_t __n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   /* Calculating void * + int is not portable, so this wrapper converts",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|      to char * to make the tests easier to write.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|-> #define MEMRCHR (char *) memrchr",
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
                    "message": "   34|   int",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/at-func.c",
                    "line": 70,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | AT_FUNC_NAME (int fd, char const *file AT_FUNC_POST_FILE_PARAM_DECLS)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|      fails, then give a diagnostic and exit nonzero.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   FUNC_RESULT",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|-> AT_FUNC_NAME (int fd, char const *file AT_FUNC_POST_FILE_PARAM_DECLS)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|     VALIDATE_FLAG (flag);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/exclude.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/exclude.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'add_exclude_file'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/exclude.c",
                    "line": 691,
                    "column": 21,
                    "event": "warning[-Wmismatched-dealloc]",
                    "message": "'rpl_fclose' called on pointer returned from a mismatched allocation function",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691 |   if (!use_stdin && fclose (in) != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/exclude.c",
                    "line": 686,
                    "column": 20,
                    "event": "note",
                    "message": "returned from 'fopen'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  686 |   else if (! (in = fopen (file_name, \"r\")))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|     rc = add_exclude_fp (call_addfn, ex, in, options, line_end, &add_func);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|->   if (!use_stdin && fclose (in) != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|       rc = -1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 36,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36 | int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   #undef lgetfilecon",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   #undef fgetfilecon",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|-> int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 37,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37 | int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   #undef fgetfilecon",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|-> int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 38,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38 | int fgetfilecon (int fd, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   int getfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   int lgetfilecon (char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|-> int fgetfilecon (int fd, security_context_t *con);",
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
                    "message": "   40|   /* getfilecon, lgetfilecon, and fgetfilecon can all misbehave, be it",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 49,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49 | map_to_failure (int ret, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~",
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
                    "message": "   48|   static int",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|-> map_to_failure (int ret, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|     if (ret == 0)",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 69,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69 | rpl_getfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   int",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|-> rpl_getfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|     int ret = getfilecon (file, con);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 76,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | rpl_lgetfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   int",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|-> rpl_lgetfilecon (char const *file, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|     int ret = lgetfilecon (file, con);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/getfilecon.c",
                    "line": 83,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83 | rpl_fgetfilecon (int fd, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   int",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> rpl_fgetfilecon (int fd, security_context_t *con)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|     int ret = fgetfilecon (fd, con);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/src/chcon.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 34,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34 | int  getfileconat (int dir_fd, char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|      and return -1.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|      [*] with flags=0 here, with flags=AT_SYMLINK_NOFOLLOW for lgetfileconat  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|-> int  getfileconat (int dir_fd, char const *file, security_context_t *con);",
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
                    "message": "   36|   /* dir-fd-relative lgetfilecon.  This function is just like getfileconat,",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 39,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 | int lgetfileconat (int dir_fd, char const *file, security_context_t *con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|      except when DIR_FD and FILE specify a symlink:  lgetfileconat operates on",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|      the symlink, while getfileconat operates on the referent of the symlink.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> int lgetfileconat (int dir_fd, char const *file, security_context_t *con);",
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
                    "message": "   41|   /* dir-fd-relative setfilecon.  Set the SELinux security context of",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 45,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45 | int  setfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|      interpreted as for fstatat[*].  Upon success, return 0.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|      Otherwise, return -1 and set errno.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|-> int  setfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   /* dir-fd-relative lsetfilecon.  This function is just like setfileconat,",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/lib/selinux-at.h",
                    "line": 52,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52 | int lsetfileconat (int dir_fd, char const *file, security_context_t con);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|      except when DIR_FD and FILE specify a symlink:  lsetfileconat operates on",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|      the symlink, while setfileconat operates on the referent of the symlink.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|-> int lsetfileconat (int dir_fd, char const *file, security_context_t con);",
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
                    "file_name": "coreutils-8.32/separate/./src/mv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12633 with arguments: toself-dir toself-file toself-dir",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,344 (80 direct, 1,264 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 8",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/mv.c",
                    "line": 496,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10240 with arguments: --backup a a d/",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,370 (80 direct, 1,290 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2027,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 654,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10240 with arguments: --backup a a d/",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,372 (80 direct, 1,292 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 653,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/mv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11196 with arguments: a/bar a/foo b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,374 (80 direct, 1,294 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 8",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/mv.c",
                    "line": 496,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/ginstall",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 24534 with arguments: file dir",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,377 (80 direct, 1,297 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/ginstall",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31146 with arguments: -s /builddir/build/BUILD/coreutils-8.32/separate/src/ginstall .",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,379 (80 direct, 1,299 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/ginstall",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 30347 with arguments: -t sub4/a/b/c -Dv file",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,384 (80 direct, 1,304 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 8",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/mv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13413 with arguments: is3-dir1 is3-dir2 is3-dir2",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,386 (80 direct, 1,306 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/mv.c",
                    "line": 496,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/mv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16433 with arguments: f g /dev/shm/tmp12041",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,388 (80 direct, 1,308 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/mv.c",
                    "line": 496,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/ginstall",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 31731 with arguments: -t sub4/dir_exists -Dv file",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,389 (80 direct, 1,309 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 8",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20522 with arguments: -rl a dir dir",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,398 (80 direct, 1,318 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2027,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 654,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 23603 with arguments: -dR a/1 b/1 c",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,400 (80 direct, 1,320 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2027,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 654,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20522 with arguments: -rl a dir dir",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,406 (80 direct, 1,326 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 653,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 23741 with arguments: -d a b c",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,412 (80 direct, 1,332 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2027,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 654,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/mv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16638 with arguments: a b /dev/shm/tmp12041",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,432 (80 direct, 1,352 indirect) bytes in 1 blocks are definitely lost in loss record 13 of 14",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/mv.c",
                    "line": 496,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/mv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15328 with arguments: --verbose mv-null mv-dir /dev/shm/tmp10996",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,443 (80 direct, 1,363 indirect) bytes in 1 blocks are definitely lost in loss record 13 of 14",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/mv.c",
                    "line": 496,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8934 with arguments: --preserve=link a b c dst",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,454 (80 direct, 1,374 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2027,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 654,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/cp",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9276 with arguments: --preserve=link --parents a x/b c dst",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,456 (80 direct, 1,376 indirect) bytes in 1 blocks are definitely lost in loss record 11 of 11",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2027,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 654,
                    "event": "note",
                    "message": "called from do_copy()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/cp.c",
                    "line": 1232,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "src/ginstall",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 27841 with arguments: -c src/libstdbuf.so /builddir/build/BUILDROOT/coreutils-8.32-31.fc35.x86_64//usr/libexec/coreutils",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,460 (80 direct, 1,380 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "src/ginstall",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 27802 with arguments: -c src/chroot src/hostid src/timeout src/nice src/who src/users src/pinky src/stty src/df src/stdbuf src/[ src/b2sum src/base64 src/base32 src/basenc src/basename src/cat src/chcon src/chgrp src/chmod src/chown src/cksum src/comm src/cp src/csplit src/cut src/date src/dd src/dir src/dircolors src/dirname src/du src/echo src/env src/expand src/expr src/factor src/false src/fmt src/fold src/groups src/head src/id src/join src/link src/ln src/logname src/ls src/md5sum src/mkdir src/mkfifo src/mknod src/mktemp src/mv src/nl src/nproc src/nohup src/numfmt src/od src/paste src/pathchk src/pr src/printenv src/printf src/ptx src/pwd src/readlink src/realpath src/rm src/rmdir src/runcon src/seq src/sha1sum src/sha224sum src/sha256sum src/sha384sum src/sha512sum src/shred src/shuf src/sleep src/sort src/split src/stat src/sum src/sync src/tac src/tail src/tee src/test src/touch src/tr src/true src/truncate src/tsort src/tty src/uname src/unexpand src/uniq src/unlink src/vdir src/wc src/whoami src/yes src/arch /builddir/build/BUILDROOT/coreutils-8.32-31.fc35.x86_64//usr/bin",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11,884 (80 direct, 11,804 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "coreutils-8.32/separate/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
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
                    "file_name": "coreutils-8.32/separate/./src/stdbuf",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22608 with arguments: -o1 .",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/vasnprintf.c",
                    "line": 5564,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 1 blocks are definitely lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/vasnprintf.c",
                    "line": 5564,
                    "event": "note",
                    "message": "called from vasnprintf.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/vasprintf.c",
                    "line": 36,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/asprintf.c",
                    "line": 36,
                    "event": "note",
                    "message": "called from rpl_asprintf()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stdbuf.c",
                    "line": 291,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stdbuf.c",
                    "line": 375,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5562|           DCHAR_T *memory;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5563|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5564|->         memory = (DCHAR_T *) realloc (result, (length + 1) * sizeof (DCHAR_T));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5565|           if (memory != NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5566|             result = memory;",
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
                    "file_name": "coreutils-8.32/separate/./src/stdbuf",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22608 with arguments: -o1 .",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/vasnprintf.c",
                    "line": 5564,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "184 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/vasnprintf.c",
                    "line": 5564,
                    "event": "note",
                    "message": "called from vasnprintf.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/vasprintf.c",
                    "line": 36,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/asprintf.c",
                    "line": 36,
                    "event": "note",
                    "message": "called from rpl_asprintf()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stdbuf.c",
                    "line": 249,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stdbuf.c",
                    "line": 386,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5562|           DCHAR_T *memory;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5563|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5564|->         memory = (DCHAR_T *) realloc (result, (length + 1) * sizeof (DCHAR_T));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5565|           if (memory != NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5566|             result = memory;",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5551 with arguments: 9758060798730154302876482828124348356960410232492450771490 * 9758060798730154302876482828124348356960410232492450771490 * 9758060798730154302876482828124348356960410232492450771490",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "112 (24 direct, 88 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/split",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16612 with arguments: --number=r/3 -t \\0 in",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 3 blocks are definitely lost in loss record 2 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 121,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1150,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1654,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/split",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5882 with arguments: -n r/30",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "120 bytes in 30 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 121,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1150,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1654,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/tr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14802 with arguments: ab[:lower:] 0-1[:upper:]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 (32 direct, 96 indirect) bytes in 1 blocks are definitely lost in loss record 6 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1339,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1776,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/tsort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14761 with arguments: f",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "144 (56 direct, 88 indirect) bytes in 1 blocks are definitely lost in loss record 6 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 104,
                    "event": "note",
                    "message": "called from new_item()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 137,
                    "event": "note",
                    "message": "called from search_item()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 463,
                    "event": "note",
                    "message": "called from tsort()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 563,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/tsort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14761 with arguments: f",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 1 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 279,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 467,
                    "event": "note",
                    "message": "called from tsort()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 563,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/tr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22839 with arguments: a[=*2][=c=] xyyz",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "160 (32 direct, 128 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1339,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1782,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/sort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15176 with arguments: -m --batch-size=16 in/1 in/10 in/11 in/12 in/13 in/14 in/15 in/16 in/17 in/2 in/3 in/4 in/5 in/6 in/7 in/8 in/9",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "160 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 103,
                    "event": "note",
                    "message": "called from xnmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/sort.c",
                    "line": 4977,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/stat",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12704 with arguments: -f -",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "172 bytes in 1 blocks are definitely lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 121,
                    "event": "note",
                    "message": "called from xstrdup()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1903,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/stat",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12366 with arguments: x*",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "198 bytes in 1 blocks are definitely lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xvasprintf.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from xstrcat()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xvasprintf.c",
                    "line": 91,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xasprintf.c",
                    "line": 30,
                    "event": "note",
                    "message": "called from xasprintf.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1679,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1603,
                    "event": "note",
                    "message": "called from default_format()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1903,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/stat",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12366 with arguments: x*",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "219 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xvasprintf.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from xstrcat()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xvasprintf.c",
                    "line": 91,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xasprintf.c",
                    "line": 30,
                    "event": "note",
                    "message": "called from xasprintf.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1679,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1603,
                    "event": "note",
                    "message": "called from default_format()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/stat.c",
                    "line": 1904,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/sort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14789 with arguments: -c 02b.1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 103,
                    "event": "note",
                    "message": "called from xnmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/sort.c",
                    "line": 4977,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16362 with arguments: ab : a\\(\\)b",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "25 (24 direct, 1 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11792 with arguments: 1 | 1 / 0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "26 (24 direct, 2 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11179 with arguments: 00",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "27 (24 direct, 3 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15146 with arguments: substr abcdef 2 3",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "28 (24 direct, 4 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 865,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 798,
                    "event": "note",
                    "message": "called from eval6()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17807 with arguments: {1}a : \\(\\{1\\}a\\)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "29 (24 direct, 5 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 27728 with arguments:   -- -w      : :  *\\(.*[^ ]\\) *:",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "30 (24 direct, 6 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10258 with arguments: ././tests/factor/t09.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "31 (24 direct, 7 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10502 with arguments: length ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 (24 direct, 8 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 475,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 818,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 798,
                    "event": "note",
                    "message": "called from eval6()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/sort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22368 with arguments: -c -k1,1 02c-mb.1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 1 of 4",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 103,
                    "event": "note",
                    "message": "called from xnmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/sort.c",
                    "line": 4977,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1211 with arguments: ./../tests/mv/force.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "33 (24 direct, 9 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10335 with arguments: ./../tests/chmod/silent.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "34 (24 direct, 10 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10616 with arguments: ./../tests/mv/leak-fd.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "35 (24 direct, 11 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10096 with arguments: ./../tests/cp/fiemap-2.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "36 (24 direct, 12 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11341 with arguments: ./../tests/cp/same-file.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "37 (24 direct, 13 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12164 with arguments: ./../tests/id/no-context.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "38 (24 direct, 14 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10211 with arguments: ./../tests/mv/into-self-3.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "39 (24 direct, 15 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10011 with arguments: 2 + 128",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "40 (24 direct, 16 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/sort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22958 with arguments: -c -k 1,1fV 02r.1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "40 bytes in 1 blocks are definitely lost in loss record 1 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 103,
                    "event": "note",
                    "message": "called from xnmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/sort.c",
                    "line": 4977,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/split",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3998 with arguments: -e -n r/10 /dev/null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "40 bytes in 10 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 121,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1150,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1654,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10679 with arguments: ./../tests/chmod/thru-dangling.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "41 (24 direct, 17 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12880 with arguments: ./../tests/cp/sparse-to-pipe.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "42 (24 direct, 18 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11266 with arguments: ./../tests/misc/factor-parallel.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "43 (24 direct, 19 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18784 with arguments: ./../tests/ls/getxattr-speedup.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "44 (24 direct, 20 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12917 with arguments: ./../tests/misc/truncate-relative.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "45 (24 direct, 21 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18045 with arguments: ./../tests/split/suffix-auto-length.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "46 (24 direct, 22 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10883 with arguments: ./../tests/misc/sort-spinlock-abuse.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "47 (24 direct, 23 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1778 with arguments: 98782897298723498732987928734 + 1",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 (24 direct, 24 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 890,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/tr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19122 with arguments: -s abcdefghijklmn [:*016]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "480 (32 direct, 448 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 5",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1339,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1776,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19746 with arguments: ./../tests/misc/sort-benchmark-random.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "49 (24 direct, 25 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2784 with arguments: ./../tests/ls/root-rel-symlink-color.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "50 (24 direct, 26 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/split",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 29888 with arguments: --numeric-suffixes=1 --number=r/100 file.in",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "500 bytes in 100 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 121,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1150,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/split.c",
                    "line": 1654,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3635 with arguments: ./../tests/misc/truncate-owned-by-other.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "51 (24 direct, 27 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/expr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1120 with arguments: ./../tests/ls/readdir-mountpoint-inode.sh : .*/\\(.*\\)$",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "52 (24 direct, 28 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 486,
                    "event": "note",
                    "message": "called from str_value()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 729,
                    "event": "note",
                    "message": "called from docolon()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 898,
                    "event": "note",
                    "message": "called from eval5()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 921,
                    "event": "note",
                    "message": "called from eval4()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 960,
                    "event": "note",
                    "message": "called from eval3()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 990,
                    "event": "note",
                    "message": "called from eval2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1069,
                    "event": "note",
                    "message": "called from eval1()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 1100,
                    "event": "note",
                    "message": "called from eval()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/expr.c",
                    "line": 460,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/tr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10017 with arguments: \\351 x",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "64 (32 direct, 32 indirect) bytes in 1 blocks are definitely lost in loss record 3 of 4",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1339,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1776,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/df",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17415 with arguments: --local",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "64 bytes in 2 blocks are definitely lost in loss record 1 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/df.c",
                    "line": 812,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/df.c",
                    "line": 1503,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/df.c",
                    "line": 1868,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/seq",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10231 with arguments: -f % -.0f -1 0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/seq.c",
                    "line": 279,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/seq.c",
                    "line": 644,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/yes",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12021 with arguments: zeros\nnonzero",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8,192 bytes in 1 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/yes.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/tr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12693 with arguments: [:upper:][:lower:] a-z[:upper:]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "96 (32 direct, 64 indirect) bytes in 1 blocks are definitely lost in loss record 4 of 5",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1339,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tr.c",
                    "line": 1776,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/env",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 24678 with arguments: -S --help --help",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "14 bytes in 1 blocks are possibly lost in loss record 1 of 3",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/env.c",
                    "line": 400,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/env.c",
                    "line": 548,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/env.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   xmalloc (size_t n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|->   void *p = malloc (n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|     if (!p && n != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/chmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18403 with arguments: -w -w -- f",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 76,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/chmod.c",
                    "line": 475,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/tsort",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 14761 with arguments: f",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 5 of 6",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/readtokens.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from readtoken.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 457,
                    "event": "note",
                    "message": "called from tsort()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/tsort.c",
                    "line": 563,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/comm",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 23422 with arguments: -z za zb",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "256 bytes in 2 blocks are definitely lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 76,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/linebuffer.c",
                    "line": 84,
                    "event": "note",
                    "message": "called from readlinebuffer_delim()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/comm.c",
                    "line": 296,
                    "event": "note",
                    "message": "called from compare_files()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/comm.c",
                    "line": 493,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/chmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10780 with arguments: -w -- -- f",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 76,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/chmod.c",
                    "line": 475,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/chmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18513 with arguments: -2000 d",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 76,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/chmod.c",
                    "line": 475,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/src/comm",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 23422 with arguments: -z za zb",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "768 bytes in 6 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/xmalloc.c",
                    "line": 76,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../lib/linebuffer.c",
                    "line": 84,
                    "event": "note",
                    "message": "called from readlinebuffer_delim()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/comm.c",
                    "line": 368,
                    "event": "note",
                    "message": "called from compare_files()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/comm.c",
                    "line": 493,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10945 with arguments: status=none if=in.f of=/dev/null iflag=nocache bs=1M count=3000",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,056,771 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10001 with arguments: iflag=fullblock if=nonzero of=sparse.in conv=notrunc oflag=append bs=4096 count=4 status=none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "12,291 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22740 with arguments: if=file.in of=file.out ibs=2M obs=1M conv=sparse,notrunc",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,105,347 bytes in 1 blocks are possibly lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13470 with arguments: conv=sync bs=262144",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "270,339 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20952 with arguments: iflag=fullblock if=/dev/zero of=fifo count=50 bs=5000000",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "5,008,195 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17894 with arguments: bs=1 seek=128K of=sparse.12200",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,196 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15282 with arguments: skip=10 bs=2 iflag=skip_bytes",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,197 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 1770,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 1912,
                    "event": "note",
                    "message": "called from skip()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2169,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13292 with arguments: ibs=3 obs=3 if=dd.fifo",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,198 bytes in 1 blocks are possibly lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20543 with arguments: cbs=4 ibs=4 conv=unblock,sync",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,199 bytes in 1 blocks are possibly lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13364 with arguments: bs=5",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,200 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10057 with arguments: if=ifile iflag=nocache skip=10 count=10 of=/dev/null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "8,707 bytes in 1 blocks are possibly lost in loss record 2 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13015 with arguments: conv=sync bs=1024",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "9,219 bytes in 1 blocks are possibly lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 696,
                    "event": "note",
                    "message": "called from alloc_ibuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2218,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|       return;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|->   char *real_buf = malloc (input_blocksize + INPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|     if (!real_buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|       {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 22740 with arguments: if=file.in of=file.out ibs=2M obs=1M conv=sparse,notrunc",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 724,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,052,671 bytes in 1 blocks are possibly lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 724,
                    "event": "note",
                    "message": "called from alloc_obuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2219,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|         /* Page-align the output buffer, too.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|->       char *real_obuf = malloc (output_blocksize + OUTPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725|         if (!real_obuf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  726|           {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13292 with arguments: ibs=3 obs=3 if=dd.fifo",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 724,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "4,098 bytes in 1 blocks are possibly lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 724,
                    "event": "note",
                    "message": "called from alloc_obuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2219,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|         /* Page-align the output buffer, too.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|->       char *real_obuf = malloc (output_blocksize + OUTPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725|         if (!real_obuf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  726|           {",
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
                    "file_name": "coreutils-8.32/separate/./src/dd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10057 with arguments: if=ifile iflag=nocache skip=10 count=10 of=/dev/null",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 724,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "4,607 bytes in 1 blocks are possibly lost in loss record 1 of 2",
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
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 724,
                    "event": "note",
                    "message": "called from alloc_obuf.part.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2219,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/dd.c",
                    "line": 2552,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|         /* Page-align the output buffer, too.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|->       char *real_obuf = malloc (output_blocksize + OUTPUT_BLOCK_SLOP);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725|         if (!real_obuf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  726|           {",
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
                    "file_name": "coreutils-8.32/separate/src/join",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15669 with arguments: -t  3b-mb.1 3b-mb.2",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/join.c",
                    "line": 1371,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 1",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/join.c",
                    "line": 1371,
                    "event": "note",
                    "message": "Address 0x4a4f421 is 0 bytes after a block of size 1 alloc'd",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/join.c",
                    "line": 1371,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|               else if (optarg[1])",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|                 {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1371|->                 if (newtablen == 1 && newtab[1])",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1372|                   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1373|                     if (STREQ (newtab, \"\\\\0\"))",
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
                    "file_name": "coreutils-8.32/separate/./src/true",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19586",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/libstdbuf.c",
                    "line": 113,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/libstdbuf.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from apply_mode()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/src/debug/glibc-2.34-10.fc35.x86_64/elf/dl-init.c",
                    "line": 70,
                    "event": "note",
                    "message": "called from call_init()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/src/debug/glibc-2.34-10.fc35.x86_64/elf/dl-init.c",
                    "line": 26,
                    "event": "note",
                    "message": "called from call_init()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/src/debug/glibc-2.34-10.fc35.x86_64/elf/dl-init.c",
                    "line": 117,
                    "event": "note",
                    "message": "called from _dl_init()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/ld-linux-x86-64.so.2",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "0x1FFEFF80E5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|           }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|->       buf = size <= SIZE_MAX ? malloc (size) : NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|         if (!buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|           {",
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
                    "file_name": "coreutils-8.32/separate/./src/true",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20043",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/../src/libstdbuf.c",
                    "line": 113,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,024 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/../src/libstdbuf.c",
                    "line": 113,
                    "event": "note",
                    "message": "called from apply_mode()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/src/debug/glibc-2.34-10.fc35.x86_64/elf/dl-init.c",
                    "line": 70,
                    "event": "note",
                    "message": "called from call_init()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/src/debug/glibc-2.34-10.fc35.x86_64/elf/dl-init.c",
                    "line": 26,
                    "event": "note",
                    "message": "called from call_init()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/src/debug/glibc-2.34-10.fc35.x86_64/elf/dl-init.c",
                    "line": 117,
                    "event": "note",
                    "message": "called from _dl_init()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/ld-linux-x86-64.so.2",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "0x1FFEFF80E5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|           }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|->       buf = size <= SIZE_MAX ? malloc (size) : NULL;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|         if (!buf)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|           {",
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
                    "file_name": "./test-getndelim2",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4961",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../lib/getndelim2.c",
                    "line": 173,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12,380 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../lib/getndelim2.c",
                    "line": 173,
                    "event": "note",
                    "message": "called from getndelim2()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../gnulib-tests/test-getndelim2.c",
                    "line": 128,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|             nbytes_avail = newsize - (read_pos - ptr);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|->           newptr = realloc (ptr, newsize);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|             if (!newptr)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|               goto unlock_done;",
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
                    "file_name": "coreutils-8.32/separate/gnulib-tests/./test-readtokens",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6362",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../lib/xmalloc.c",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../lib/xmalloc.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../lib/xalloc.h",
                    "line": 207,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../lib/readtokens.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from readtoken()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../gnulib-tests/test-readtokens.c",
                    "line": 45,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/gnulib-tests/../../gnulib-tests/test-readtokens.c",
                    "line": 66,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       }",
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
                    "message": "   61|->   p = realloc (p, n);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|     if (!p && n)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       xalloc_die ();",
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
                    "file_name": "coreutils-8.32/single/src/coreutils",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 28118 with arguments: --coreutils-prog-shebang=ginstall src/ginstall -c src/coreutils /builddir/build/BUILDROOT/coreutils-8.32-31.fc35.x86_64//usr/libexec/coreutils/usr/bin",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/single/../lib/hash.c",
                    "line": 605,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,465 (80 direct, 1,385 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 6",
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
                    "file_name": "coreutils-8.32/single/../lib/hash.c",
                    "line": 605,
                    "event": "note",
                    "message": "called from hash_initialize.constprop.0()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/single/../src/copy.c",
                    "line": 2005,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/single/../src/install.c",
                    "line": 1056,
                    "event": "note",
                    "message": "called from single_binary_main_ginstall()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/single/../src/coreutils.c",
                    "line": 127,
                    "event": "note",
                    "message": "called from launch_program()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/single/../src/coreutils.c",
                    "line": 177,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|       comparator = raw_comparator;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|->   table = malloc (sizeof *table);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|     if (table == NULL)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       return NULL;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/src/install.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'setdefaultfilecon'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/install.c",
                    "line": 368,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368 |   if ((matchpathcon (file, st.st_mode, &scontext) != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/lib/selinux/selinux.h",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/install.c",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 502,
                    "column": 12,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502 | extern int matchpathcon(const char *path,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|        return to allow default context.  Note the \"<<none>>\" check",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|        is only needed for libselinux < 1.20 (2005-01-04).  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|->   if ((matchpathcon (file, st.st_mode, &scontext) != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|         || STREQ (scontext, \"<<none>>\"))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       {",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'defaultcon'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 132,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132 |   if (matchpathcon (path, mode, &scon) < 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/lib/selinux/selinux.h",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 502,
                    "column": 12,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502 | extern int matchpathcon(const char *path,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|->   if (matchpathcon (path, mode, &scon) < 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|         /* \"No such file or directory\" is a confusing error,",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'restorecon_private'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 222,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222 |   if (matchpathcon (path, sb.st_mode, &scon) < 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/separate/lib/selinux/selinux.h",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 502,
                    "column": 12,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502 | extern int matchpathcon(const char *path,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|->   if (matchpathcon (path, sb.st_mode, &scon) < 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|         /* \"No such file or directory\" is a confusing error,",
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
                    "file_name": "coreutils-8.32/src/uname.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/uname.c",
                    "line": 303,
                    "column": 23,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "initialization discards 'const' qualifier from pointer target type",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 |       char *element = unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|     if (toprint & PRINT_PROCESSOR)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|->       char *element = unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|   #if HAVE_SYSINFO && defined SI_ARCHITECTURE",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|         {",
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
                    "file_name": "coreutils-8.32/src/uname.c",
                    "line": 353,
                    "column": 23,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "initialization discards 'const' qualifier from pointer target type",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353 |       char *element = unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|     if (toprint & PRINT_HARDWARE_PLATFORM)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|       {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|->       char *element = unknown;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   #if HAVE_SYSINFO && defined SI_PLATFORM",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|         {",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
