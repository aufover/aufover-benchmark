{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "at-3.2.2-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/at-3.2.2-2.fc35/valgrind/output",
        "time-created": "2022-11-23 11:12:13",
        "time-finished": "2022-11-23 11:17:24",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/at-3.2.2-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/at-3.2.2-2.fc35/at-3.2.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'nextjob'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 202,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fscanf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202 |         fscanf(fid, \"%5lx\", &jobno);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|       fid = fopen(LFILE, \"r+\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|       if (fid != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|-> \tfscanf(fid, \"%5lx\", &jobno);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|   \trewind(fid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|       } else {",
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
                    "file_name": "at-3.2.2/atd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'set_selinux_context'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 223,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223 |     security_context_t user_context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   static int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   set_selinux_context(const char *name, const char *filename) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|->     security_context_t user_context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|       security_context_t file_context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|       int retval = 0;",
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
                    "file_name": "at-3.2.2/atd.c",
                    "line": 224,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224 |     security_context_t file_context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   set_selinux_context(const char *name, const char *filename) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|       security_context_t user_context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|->     security_context_t file_context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|       int retval = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|       char *seuser = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 538,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'nice' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538 |             nice((tolower((int) queue) - 'a') * 2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|   \tclose(fd_out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|-> \t    nice((tolower((int) queue) - 'a') * 2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|   #ifdef WITH_SELINUX",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 559,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'chdir' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559 |             chdir(\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|   \t\tperr(\"Cannot reset signal handler to default\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|-> \t    chdir(\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|   \t    execle(\"/bin/sh\", \"sh\", (char *) NULL, nenvp);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 629,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'chdir' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629 |             chdir (\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  627|   \t\tperr(\"Cannot reset signal handler to default\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|-> \t    chdir (\"/\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|   #if defined(SENDMAIL)",
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
                    "file_name": "at-3.2.2/atd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'run_loop'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 665,
                    "column": 10,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'batch_queue' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665 |     char batch_queue = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  663|       unsigned long jobno;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  664|       char queue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|->     char batch_queue = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|       time_t run_time, next_job;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|       char batch_name[] = \"z2345678901234\";",
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
                    "file_name": "at-3.2.2/daemon.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'daemon_setup'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/daemon.c",
                    "line": 124,
                    "column": 12,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'old_umask' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124 |     mode_t old_umask;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|       /* Set up standard daemon environment */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       pid_t pid;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->     mode_t old_umask;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|       int fd, devnull;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|       FILE *fp;",
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
                    "file_name": "at-3.2.2/lex.yy.c",
                    "line": 1507,
                    "column": 17,
                    "event": "warning[-Wunused-function]",
                    "message": "'yyunput' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1507 | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^      ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1505|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1506|   #ifndef YY_NO_UNPUT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1507|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1508|       static void yyunput (int c, char * yy_bp )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1509|   {",
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
                    "file_name": "at-3.2.2/lex.yy.c",
                    "line": 1550,
                    "column": 16,
                    "event": "warning[-Wunused-function]",
                    "message": "'input' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1550 | #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1548|   #ifdef __cplusplus",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1549|       static int yyinput (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1550|-> #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1551|       static int input  (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1552|   #endif",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "at-3.2.2/panic.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'panic'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/panic.c",
                    "line": 60,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 |         setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|       fprintf(stderr, \"%s: %s\\n\", namep, a);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       if (fcreated) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|-> \tsetregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \tunlink(atfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   \tsetregid(effective_gid, real_gid);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/panic.c",
                    "line": 62,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62 |         setregid(effective_gid, real_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \tsetregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \tunlink(atfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|-> \tsetregid(effective_gid, real_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       }",
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
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "at-3.2.2/panic.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'perr'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/panic.c",
                    "line": 82,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82 |         setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|       perror(buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       if (fcreated) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|->         setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   \tunlink(atfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|           setregid(effective_gid, real_gid);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/panic.c",
                    "line": 84,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 |         setregid(effective_gid, real_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|           setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   \tunlink(atfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->         setregid(effective_gid, real_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   ",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 498 with arguments: 1258462020 now + 1 min",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 38,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 4 of 7",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 38,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   %%",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|-> now\t\t{ COPY_TOK ; return NOW; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   am\t\t{ COPY_TOK ; return AM; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   pm\t\t{ COPY_TOK ; return PM; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 828 with arguments: 1258462020 Jan 32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 61,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 3 of 6",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 61,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   month(s)?\t{ COPY_TOK ; return MONTH; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   year(s)?\t{ COPY_TOK ; return YEAR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|-> jan(uary)?\t{ COPY_TOK ; return JAN; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   feb(ruary)?\t{ COPY_TOK ; return FEB; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   mar(ch)?\t{ COPY_TOK ; return MAR; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 843 with arguments: 1258462020 Feb 30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 62,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 2 of 5",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 62,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   year(s)?\t{ COPY_TOK ; return YEAR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   jan(uary)?\t{ COPY_TOK ; return JAN; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|-> feb(ruary)?\t{ COPY_TOK ; return FEB; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   mar(ch)?\t{ COPY_TOK ; return MAR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   apr(il)?\t{ COPY_TOK ; return APR; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 858 with arguments: 1258462020 Apr 31",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 64,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 2 of 5",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 64,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   feb(ruary)?\t{ COPY_TOK ; return FEB; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   mar(ch)?\t{ COPY_TOK ; return MAR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|-> apr(il)?\t{ COPY_TOK ; return APR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   may\t\t{ COPY_TOK ; return MAY; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   jun(e)?\t\t{ COPY_TOK ; return JUN; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 873 with arguments: 1258462020 May -1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 65,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 2 of 5",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 65,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   mar(ch)?\t{ COPY_TOK ; return MAR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   apr(il)?\t{ COPY_TOK ; return APR; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|-> may\t\t{ COPY_TOK ; return MAY; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   jun(e)?\t\t{ COPY_TOK ; return JUN; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   jul(y)?\t\t{ COPY_TOK ; return JUL; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 708 with arguments: 1258462020 12:00 Oct 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 70,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 2 of 6",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 70,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   aug(ust)?\t{ COPY_TOK ; return AUG; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   sep(tember)?\t{ COPY_TOK ; return SEP; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|-> oct(ober)?\t{ COPY_TOK ; return OCT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   nov(ember)?\t{ COPY_TOK ; return NOV; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   dec(ember)?\t{ COPY_TOK ; return DEC; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 693 with arguments: 1258462020 12:00 Dec 17",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 72,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 2 of 6",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 72,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   oct(ober)?\t{ COPY_TOK ; return OCT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   nov(ember)?\t{ COPY_TOK ; return NOV; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|-> dec(ember)?\t{ COPY_TOK ; return DEC; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   utc\t\t{ COPY_TOK ; return UTC; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   [0-9]{1}\t{ COPY_TOK ; COPY_VAL; return INT1DIGIT; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 498 with arguments: 1258462020 now + 1 min",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 74,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 74,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   dec(ember)?\t{ COPY_TOK ; return DEC; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   utc\t\t{ COPY_TOK ; return UTC; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|-> [0-9]{1}\t{ COPY_TOK ; COPY_VAL; return INT1DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   [0-9]{2}\t{ COPY_TOK ; COPY_VAL; return INT2DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   [0-9]{4}\t{ COPY_TOK ; COPY_VAL; return INT4DIGIT; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 513 with arguments: 1258462020 now + 23 min",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 75,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   utc\t\t{ COPY_TOK ; return UTC; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   [0-9]{1}\t{ COPY_TOK ; COPY_VAL; return INT1DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|-> [0-9]{2}\t{ COPY_TOK ; COPY_VAL; return INT2DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   [0-9]{4}\t{ COPY_TOK ; COPY_VAL; return INT4DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   [0-9]{5,8}\t{ COPY_TOK ; COPY_VAL; return INT5_8DIGIT; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 738 with arguments: 1258462020 12:00 Oct 17 + 35 days",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 2 blocks are definitely lost in loss record 5 of 8",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 75,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   utc\t\t{ COPY_TOK ; return UTC; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   [0-9]{1}\t{ COPY_TOK ; COPY_VAL; return INT1DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|-> [0-9]{2}\t{ COPY_TOK ; COPY_VAL; return INT2DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   [0-9]{4}\t{ COPY_TOK ; COPY_VAL; return INT4DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   [0-9]{5,8}\t{ COPY_TOK ; COPY_VAL; return INT5_8DIGIT; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 783 with arguments: 1258462020 00:00 Dec 24 + 358 days",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 78,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 4 of 9",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 78,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   [0-9]{4}\t{ COPY_TOK ; COPY_VAL; return INT4DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   [0-9]{5,8}\t{ COPY_TOK ; COPY_VAL; return INT5_8DIGIT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|-> [0-9]+\t\t{ COPY_TOK ; COPY_VAL; return INT; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   [0-9]{1,2}\\.[0-9]{1,2}\\.[0-9]{2}([0-9]{2})?\t{ COPY_TOK ; COPY_VAL; return DOTTEDDATE; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   [0-9]{2}([0-9]{2})?-[0-9]{1,2}-[0-9]{1,2}\t{ COPY_TOK ; COPY_VAL; return HYPHENDATE; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 633 with arguments: 1258462020 23:55 + 7 min",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 81,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 4 of 7",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 81,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   [0-9]{1,2}\\.[0-9]{1,2}\\.[0-9]{2}([0-9]{2})?\t{ COPY_TOK ; COPY_VAL; return DOTTEDDATE; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   [0-9]{2}([0-9]{2})?-[0-9]{1,2}-[0-9]{1,2}\t{ COPY_TOK ; COPY_VAL; return HYPHENDATE; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|-> [012]?[0-9][:'h,.][0-9]{2}\t{ COPY_TOK ; COPY_VAL; return HOURMIN; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   [ \\t\\n]\t\t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   .\t\t{ COPY_TOK ; return yytext[0]; }",
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
                    "file_name": "./parsetest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 498 with arguments: 1258462020 now + 1 min",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2 bytes in 1 blocks are definitely lost in loss record 1 of 7",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.l",
                    "line": 83,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/y.tab.c",
                    "line": 1295,
                    "event": "note",
                    "message": "called from yyparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 497,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 550,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   [012]?[0-9][:'h,.][0-9]{2}\t{ COPY_TOK ; COPY_VAL; return HOURMIN; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   [ \\t\\n]\t\t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> .\t\t{ COPY_TOK ; return yytext[0]; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   %%",
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
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 13,
                    "event": "warning",
                    "message": "\"__isleap\" redefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13 | #define __isleap(y) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/parsetime.y",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/time.h",
                    "line": 239,
                    "event": "note",
                    "message": "this is the location of the previous definition",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239 | #define __isleap(year)  \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   11|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   12|   #ifndef HAVE_ISLEAP",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13|-> #define __isleap(y) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|       ((y) % 4 == 0 && ((y) % 100 != 0 || (y) % 400 == 0))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15|   #endif",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 79,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 70,
                    "column": 31,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setreuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 |                               setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 792,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'RELINQUISH_PRIVS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792 |     RELINQUISH_PRIVS",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   \t\t\t      real_gid = getgid(); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   \t\t\t      effective_gid = getegid(); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|-> \t\t\t      setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   \t\t\t      setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   \t\t          }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 71,
                    "column": 31,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |                               setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 792,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'RELINQUISH_PRIVS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792 |     RELINQUISH_PRIVS",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   \t\t\t      effective_gid = getegid(); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   \t\t\t      setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|-> \t\t\t      setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   \t\t          }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 82,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 79,
                    "column": 31,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79 |                               setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 937,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'RELINQUISH_PRIVS_ROOT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937 |     RELINQUISH_PRIVS_ROOT(daemon_uid, daemon_gid)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \t\t\t      real_gid = (b); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   \t\t\t      effective_gid = getegid(); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|-> \t\t\t      setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   \t\t\t      setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t\t          }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 80,
                    "column": 31,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setreuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 |                               setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/atd.c",
                    "line": 937,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'RELINQUISH_PRIVS_ROOT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937 |     RELINQUISH_PRIVS_ROOT(daemon_uid, daemon_gid)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   \t\t\t      effective_gid = getegid(); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   \t\t\t      setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|-> \t\t\t      setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t\t          }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'list_jobs'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 84,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setreuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 |                     setreuid(real_uid, effective_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 616,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'PRIV_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616 |     PRIV_START",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   #define PRIV_START {\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|-> \t\t    setreuid(real_uid, effective_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\t    setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 85,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85 |                     setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 616,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'PRIV_START'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616 |     PRIV_START",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   #define PRIV_START {\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \t\t    setreuid(real_uid, effective_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|-> \t\t    setregid(real_gid, effective_gid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   #define PRIV_END \\",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 88,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88 |                     setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 654,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'PRIV_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654 |     PRIV_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   #define PRIV_END \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|-> \t\t    setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|   \t\t    setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   \t\t    }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 89,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setreuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |                     setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 654,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'PRIV_END'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654 |     PRIV_END",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   #define PRIV_END \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|   \t\t    setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|-> \t\t    setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   \t\t    }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 93,
                    "column": 25,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setreuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93 |                         setreuid(real_uid, effective_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 926,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'REDUCE_PRIV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  926 |         REDUCE_PRIV(daemon_uid, daemon_gid)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|   #define REDUCE_PRIV(a,b) {\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|-> \t\t\tsetreuid(real_uid, effective_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   \t\t\tsetregid(real_gid, effective_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \t\t\teffective_uid = (a); \\",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 94,
                    "column": 25,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94 |                         setregid(real_gid, effective_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 926,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'REDUCE_PRIV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  926 |         REDUCE_PRIV(daemon_uid, daemon_gid)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|   #define REDUCE_PRIV(a,b) {\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   \t\t\tsetreuid(real_uid, effective_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|-> \t\t\tsetregid(real_gid, effective_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \t\t\teffective_uid = (a); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   \t\t\teffective_gid = (b); \\",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 97,
                    "column": 25,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setregid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 |                         setregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 926,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'REDUCE_PRIV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  926 |         REDUCE_PRIV(daemon_uid, daemon_gid)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \t\t\teffective_uid = (a); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   \t\t\teffective_gid = (b); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|-> \t\t\tsetregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   \t\t\tsetreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \t\t    }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "at-3.2.2/privs.h",
                    "line": 98,
                    "column": 25,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'setreuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 |                         setreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "at-3.2.2/at.c",
                    "line": 926,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'REDUCE_PRIV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  926 |         REDUCE_PRIV(daemon_uid, daemon_gid)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   \t\t\teffective_gid = (b); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   \t\t\tsetregid(effective_gid, real_gid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|-> \t\t\tsetreuid(effective_uid, real_uid); \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \t\t    }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   #elif HAVE_SETRESUID",
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
                    "file_name": "at-3.2.2/privs.h",
                    "line": 177,
                    "column": 12,
                    "event": "warning[-Wunused-variable]",
                    "message": "'pam_session_opened' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177 | static int pam_session_opened = 0;      //global for open session",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|          } while (0) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|-> static int pam_session_opened = 0;      //global for open session",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|   #define AT_START_PAM { \\",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
