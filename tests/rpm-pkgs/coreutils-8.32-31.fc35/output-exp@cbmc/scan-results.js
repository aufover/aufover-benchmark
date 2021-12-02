{
    "scan": {
        "analyzer-version-cbmc": "5.38.0",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "coreutils-8.32-31.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/coreutils-8.32-31.fc35/cbmc/output",
        "time-created": "2021-12-01 16:08:16",
        "time-finished": "2021-12-01 16:16:47",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/coreutils-8.32-31.fc35/cbmc/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/coreutils-8.32-31.fc35/coreutils-8.32-31.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211130.141423.g64dd084.divine-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
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
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
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
            "events": [
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
            "events": [
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
            "events": [
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
            "events": [
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
            "events": [
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
            "events": [
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
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/lib/posixtm.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'posixtime'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/posixtm.c",
                    "line": 217,
                    "column": 9,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'__builtin_memcpy' writing 3 bytes into a region of size 0 overflows the destination",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217 |         strcpy (b - 2, \"59\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/posixtm.c",
                    "line": 215,
                    "column": 14,
                    "event": "note",
                    "message": "at offset -2 into destination object 'buf' of size 16",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |         char buf[16];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/posixtm.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|           char buf[16];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|           char *b = stpcpy (buf, s);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|->         strcpy (b - 2, \"59\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|           if (!posixtime (&dummy, buf, syntax_bits))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|             return false;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
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
            "events": [
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
            "events": [
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
            "events": [
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
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
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
                    "file_name": "coreutils-8.32/src/install.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
            "events": [
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
            "events": [
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
                    "file_name": "coreutils-8.32/src/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
            "events": [
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
            "events": [
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
                    "file_name": "coreutils-8.32/src/uname.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "coreutils-8.32/src/who.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'make_id_equals_comment'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/who.c",
                    "line": 454,
                    "column": 3,
                    "event": "warning[-Wstringop-overread]",
                    "message": "'strncat' argument 2 declared attribute 'nonstring'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454 |   strncat (comment, UT_ID (utmp_ent), utmpsize);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/utmpx.h",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/lib/readutmp.h",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/who.c",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/bits/utmpx.h",
                    "line": 61,
                    "column": 8,
                    "event": "note",
                    "message": "argument 'ut_id' declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61 |   char ut_id[4]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "coreutils-8.32/src/who.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|     strcpy (comment, _(\"id=\"));",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|->   strncat (comment, UT_ID (utmp_ent), utmpsize);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|     return comment;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|   }",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
