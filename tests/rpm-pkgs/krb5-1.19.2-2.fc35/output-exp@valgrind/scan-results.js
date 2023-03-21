{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "krb5-1.19.2-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/valgrind/output",
        "time-created": "2022-11-24 23:20:16",
        "time-finished": "2022-11-24 23:49:08",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/krb5-1.19.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/appl/gss-sample/gss-server",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26663 with arguments: -export -port 61021 host",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/gss-sample/gss-server.c",
                    "line": 774,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 33 of 72",
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
                    "file_name": "krb5-1.19.2/src/appl/gss-sample/gss-server.c",
                    "line": 774,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  772|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|               do {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|->                 struct _work_plan *work = malloc(sizeof(struct _work_plan));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|                   if (work == NULL) {",
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
                    "file_name": "krb5-1.19.2/src/clients/kinit/kinit.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'extended_com_err_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/kinit/kinit.c",
                    "line": 196,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'extended_com_err_fn' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196 |     vfprintf(stderr, fmt, args);",
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
                    "message": "  194|       fprintf(stderr, \"%s: %s \", myprog, emsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|       krb5_free_error_message(errctx, emsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|->     vfprintf(stderr, fmt, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|       fprintf(stderr, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   }",
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
                    "file_name": "krb5-1.19.2/src/clients/klist/klist.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'extended_com_err_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/klist/klist.c",
                    "line": 120,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'extended_com_err_fn' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120 |     vfprintf(stderr, fmt, args);",
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
                    "message": "  118|       fprintf(stderr, \"%s: %s%s\", prog, msg, (*fmt == '\\0') ? \"\" : \" \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       krb5_free_error_message(context, msg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|->     vfprintf(stderr, fmt, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|       fprintf(stderr, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   }",
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
                    "file_name": "krb5-1.19.2/src/clients/ksu/authorization.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fcmd_resolve'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/authorization.c",
                    "line": 352,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352 |             asprintf(&err, _(\"Error: bad entry - %s in %s file, must be \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353 |                              \"either full path or just the cmd name\\n\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354 |                      fcmd, KRB5_USERS_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|           /* must be either full path or just the cmd name */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|           if (strchr(fcmd, '/')){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|->             asprintf(&err, _(\"Error: bad entry - %s in %s file, must be \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|                                \"either full path or just the cmd name\\n\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|                        fcmd, KRB5_USERS_NAME);",
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
                    "file_name": "krb5-1.19.2/src/clients/ksu/authorization.c",
                    "line": 375,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375 |             asprintf(&err, _(\"Error: bad entry - %s in %s file, CMD_PATH \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376 |                              \"contains no paths \\n\"), fcmd, KRB5_USERS_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|           if (! tc){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|->             asprintf(&err, _(\"Error: bad entry - %s in %s file, CMD_PATH \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                                \"contains no paths \\n\"), fcmd, KRB5_USERS_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|               *out_err = err;",
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
                    "file_name": "krb5-1.19.2/src/clients/ksu/authorization.c",
                    "line": 384,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384 |                 asprintf(&err, _(\"Error: bad path %s in CMD_PATH for %s must \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385 |                                  \"start with '/' \\n\"), tc, KRB5_USERS_NAME );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|           do{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|               if (*tc != '/'){  /* must be full path */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->                 asprintf(&err, _(\"Error: bad path %s in CMD_PATH for %s must \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|                                    \"start with '/' \\n\"), tc, KRB5_USERS_NAME );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|                   *out_err = err;",
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
                    "file_name": "krb5-1.19.2/src/clients/ksu/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'set_env_var'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/main.c",
                    "line": 1090,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090 |     asprintf(&env_var_buf,\"%s=%s\",name, value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|       char * env_var_buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|->     asprintf(&env_var_buf,\"%s=%s\",name, value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|       return putenv(env_var_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1092|   ",
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
                    "file_name": "krb5-1.19.2/src/clients/ksu/xmalloc.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'xasprintf'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/xmalloc.c",
                    "line": 74,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'xasprintf' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74 |     if (vasprintf(&out, format, args) < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       va_start (args, format);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|->     if (vasprintf(&out, format, args) < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|           perror (prog_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|           exit (1);",
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
                    "file_name": "krb5-1.19.2/src/clients/kvno/kvno.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'extended_com_err_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/kvno/kvno.c",
                    "line": 193,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'extended_com_err_fn' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193 |     vfprintf(stderr, fmt, args);",
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
                    "message": "  191|       fprintf(stderr, \"%s: %s \", myprog, emsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|       krb5_free_error_message(context, emsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|->     vfprintf(stderr, fmt, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|       fprintf(stderr, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/ksu.h",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/krb_auth_su.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/krb_auth_su.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5_auth_check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-util.h",
                    "line": 67,
                    "column": 34,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'seteuid' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | #  define krb5_seteuid(EUID)    (seteuid((uid_t)(EUID)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ~^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/clients/ksu/krb_auth_su.c",
                    "line": 108,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'krb5_seteuid'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108 |             krb5_seteuid(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   #if defined(HAVE_SETEUID)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|-> #  define krb5_seteuid(EUID)    (seteuid((uid_t)(EUID)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   #elif defined(HAVE_SETRESUID)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   #  define krb5_seteuid(EUID)    setresuid(getuid(), (uid_t)(EUID), geteuid())",
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
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'extended_com_err_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 240,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'extended_com_err_fn' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240 |     vfprintf(stderr, fmt, args);",
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
                    "message": "  238|           error(\"%s: \", myprog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|->     vfprintf(stderr, fmt, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|       error(\"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   }",
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
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'kadmin_startup'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 356,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356 |             asprintf(&db_name, \"dbname=%s\", optarg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|               /* db_name has to be passed as part of the db_args. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|               free(db_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|->             asprintf(&db_name, \"dbname=%s\", optarg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|               db_args_size++;",
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
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'kadmin_delprinc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 692,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fgets' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692 |         fgets(reply, sizeof (reply), stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|           printf(_(\"Are you sure you want to delete the principal \\\"%s\\\"? \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|                    \"(yes/no): \"), canon);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|->         fgets(reply, sizeof (reply), stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693|           if (strcmp(\"yes\\n\", reply)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|               fprintf(stderr, _(\"Principal \\\"%s\\\" not deleted\\n\"), canon);",
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
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'kadmin_renameprinc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 753,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fgets' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753 |         fgets(reply, sizeof(reply), stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|           printf(_(\"Are you sure you want to rename the principal \\\"%s\\\" \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752|                    \"to \\\"%s\\\"? (yes/no): \"), ocanon, ncanon);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753|->         fgets(reply, sizeof(reply), stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  754|           if (strcmp(\"yes\\n\", reply)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  755|               fprintf(stderr, _(\"Principal \\\"%s\\\" not renamed\\n\"), ocanon);",
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
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'kadmin_delpol'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1716,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fgets' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1716 |         fgets(reply, sizeof(reply), stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1714|           printf(_(\"Are you sure you want to delete the policy \\\"%s\\\"? \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1715|                    \"(yes/no): \"), argv[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1716|->         fgets(reply, sizeof(reply), stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1717|           if (strcmp(\"yes\\n\", reply)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1718|               fprintf(stderr, _(\"Policy \\\"%s\\\" not deleted.\\n\"), argv[1]);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 10,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_addprinc' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   10 | extern void kadmin_addprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1193,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193 | kadmin_addprinc(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1193,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1193,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_addprinc' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    9|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   10|-> extern void kadmin_addprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   11|   static char const * const ssu00002[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   12|   \"delete_principal\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 16,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_delprinc' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   16 | extern void kadmin_delprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 666,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666 | kadmin_delprinc(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 666,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 666,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_delprinc' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   16|-> extern void kadmin_delprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17|   static char const * const ssu00003[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   18|   \"modify_principal\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 22,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_modprinc' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22 | extern void kadmin_modprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1316,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1316 | kadmin_modprinc(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1316,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1316,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_modprinc' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> extern void kadmin_modprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   static char const * const ssu00004[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   \"rename_principal\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 28,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_renameprinc' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 | extern void kadmin_renameprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 714,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  714 | kadmin_renameprinc(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 714,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 714,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_renameprinc' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|-> extern void kadmin_renameprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   static char const * const ssu00005[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   \"change_password\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 34,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_cpw' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34 | extern void kadmin_cpw __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 787,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787 | kadmin_cpw(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 787,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 787,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_cpw' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|-> extern void kadmin_cpw __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   static char const * const ssu00006[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   \"get_principal\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 40,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_getprinc' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40 | extern void kadmin_getprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1389,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1389 | kadmin_getprinc(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1389,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1389,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_getprinc' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> extern void kadmin_getprinc __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   static char const * const ssu00007[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \"list_principals\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 48,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_getprincs' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48 | extern void kadmin_getprincs __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1525,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1525 | kadmin_getprincs(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1525,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1525,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_getprincs' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|-> extern void kadmin_getprincs __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   static char const * const ssu00008[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   \"add_policy\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 54,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_addpol' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 | extern void kadmin_addpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1662,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1662 | kadmin_addpol(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1662,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1662,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_addpol' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|-> extern void kadmin_addpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   static char const * const ssu00009[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|   \"modify_policy\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 60,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_modpol' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | extern void kadmin_modpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1683,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1683 | kadmin_modpol(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1683,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1683,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_modpol' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|-> extern void kadmin_modpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   static char const * const ssu00010[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   \"delete_policy\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 66,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_delpol' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66 | extern void kadmin_delpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1704,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1704 | kadmin_delpol(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1704,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1704,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_delpol' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|-> extern void kadmin_delpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   static char const * const ssu00011[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   \"get_policy\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 72,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_getpol' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 | extern void kadmin_getpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1730,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1730 | kadmin_getpol(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1730,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1730,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_getpol' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|-> extern void kadmin_getpol __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   static char const * const ssu00012[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   \"list_policies\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 80,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_getpols' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | extern void kadmin_getpols __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1776,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1776 | kadmin_getpols(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1776,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1776,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_getpols' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|-> extern void kadmin_getpols __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   static char const * const ssu00013[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \"get_privs\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 86,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_getprivs' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86 | extern void kadmin_getprivs __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1798,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1798 | kadmin_getprivs(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1798,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1798,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_getprivs' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|-> extern void kadmin_getprivs __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   static char const * const ssu00014[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|   \"ktadd\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 92,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_keytab_add' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 | extern void kadmin_keytab_add __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/keytab.c",
                    "line": 114,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114 | kadmin_keytab_add(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/keytab.c",
                    "line": 114,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/keytab.c",
                    "line": 114,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_keytab_add' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|-> extern void kadmin_keytab_add __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   static char const * const ssu00015[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   \"ktremove\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 98,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_keytab_remove' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 | extern void kadmin_keytab_remove __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/keytab.c",
                    "line": 206,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206 | kadmin_keytab_remove(int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/keytab.c",
                    "line": 206,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/keytab.c",
                    "line": 206,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_keytab_remove' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|-> extern void kadmin_keytab_remove __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   static char const * const ssu00016[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \"lock\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 103,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_lock' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103 | extern void kadmin_lock __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 636,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636 | kadmin_lock(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 636,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 636,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_lock' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|-> extern void kadmin_lock __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   static char const * const ssu00017[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   \"unlock\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 108,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_unlock' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108 | extern void kadmin_unlock __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 651,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651 | kadmin_unlock(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 651,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 651,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_unlock' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|-> extern void kadmin_unlock __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   static char const * const ssu00018[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|   \"purgekeys\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 113,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_purgekeys' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 | extern void kadmin_purgekeys __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1823,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1823 | kadmin_purgekeys(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1823,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1823,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_purgekeys' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|-> extern void kadmin_purgekeys __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   static char const * const ssu00019[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \"get_strings\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 119,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_getstrings' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119 | extern void kadmin_getstrings __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1875,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1875 | kadmin_getstrings(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1875,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1875,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_getstrings' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|-> extern void kadmin_getstrings __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   static char const * const ssu00020[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \"set_string\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 125,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_setstring' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125 | extern void kadmin_setstring __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1921,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1921 | kadmin_setstring(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1921,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1921,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_setstring' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|-> extern void kadmin_setstring __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   static char const * const ssu00021[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   \"del_string\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin_ct.c",
                    "line": 131,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'kadmin_delstring' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 | extern void kadmin_delstring __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1962,
                    "column": 1,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1962 | kadmin_delstring(int argc, char *argv[])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1962,
                    "column": 1,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 1962,
                    "column": 1,
                    "event": "note",
                    "message": "'kadmin_delstring' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|-> extern void kadmin_delstring __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|   static char const * const ssu00022[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   \"list_requests\",",
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
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/dump.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'update_ok_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/dump.c",
                    "line": 239,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239 |     write(fd, \"\", 1);",
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
                    "message": "  237|   update_ok_file(krb5_context context, int fd)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|->     write(fd, \"\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|       krb5_lock_file(context, fd, KRB5_LOCKMODE_UNLOCK);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|       close(fd);",
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
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/kdb5_util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'extended_com_err_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/kdb5_util.c",
                    "line": 176,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'extended_com_err_fn' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176 |     vfprintf (stderr, fmt, args);",
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
                    "message": "  174|           fprintf (stderr, \"%s: \", myprog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|->     vfprintf (stderr, fmt, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       fprintf (stderr, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   }",
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
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/tdumputil.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'writequoted'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/tdumputil.c",
                    "line": 109,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'writequoted' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109 |     ret = vasprintf(&s, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|       assert(fl.quotechar != '\\0');",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|->     ret = vasprintf(&s, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|       if (ret < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|           return ret;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 9,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_clear_list' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    9 | extern void ktutil_clear_list __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 66,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66 | void ktutil_clear_list(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 66,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 66,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_clear_list' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    7|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    9|-> extern void ktutil_clear_list __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   10|   static char const * const ssu00002[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   11|   \"read_kt\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 15,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_read_v5' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15 | extern void ktutil_read_v5 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 82,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82 | void ktutil_read_v5(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 82,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 82,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_read_v5' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15|-> extern void ktutil_read_v5 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   16|   static char const * const ssu00003[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17|   \"read_st\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 21,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_read_v4' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21 | extern void ktutil_read_v4 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 97,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97 | void ktutil_read_v4(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 97,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 97,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_read_v4' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|-> extern void ktutil_read_v4 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|   static char const * const ssu00004[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   \"write_kt\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 27,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_write_v5' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27 | extern void ktutil_write_v5 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 105,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 | void ktutil_write_v5(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 105,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 105,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_write_v5' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|-> extern void ktutil_write_v5 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   static char const * const ssu00005[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   \"write_st\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 33,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_write_v4' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33 | extern void ktutil_write_v4 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 120,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120 | void ktutil_write_v4(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 120,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 120,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_write_v4' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|-> extern void ktutil_write_v4 __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   static char const * const ssu00006[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \"add_entry\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 39,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_add_entry' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 | extern void ktutil_add_entry __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 128,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 | void ktutil_add_entry(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 128,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 128,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_add_entry' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> extern void ktutil_add_entry __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   static char const * const ssu00007[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \"delete_entry\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 45,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_delete_entry' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45 | extern void ktutil_delete_entry __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 186,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186 | void ktutil_delete_entry(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 186,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 186,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_delete_entry' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|-> extern void ktutil_delete_entry __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   static char const * const ssu00008[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   \"list\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_ct.c",
                    "line": 51,
                    "column": 13,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'ktutil_list' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51 | extern void ktutil_list __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 201,
                    "column": 6,
                    "event": "note",
                    "message": "type mismatch in parameter 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201 | void ktutil_list(argc, argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 201,
                    "column": 6,
                    "event": "note",
                    "message": "type 'void' should match type 'int'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil.c",
                    "line": 201,
                    "column": 6,
                    "event": "note",
                    "message": "'ktutil_list' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       (char const *)0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|-> extern void ktutil_list __SS_PROTO;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   static char const * const ssu00009[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   \"list_requests\",",
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
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_funcs.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'ktutil_add'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/ktutil/ktutil_funcs.c",
                    "line": 215,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fgets' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |         fgets(buf, BUFSIZ, stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|           printf(_(\"Key for %s (hex): \"), princ_full);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->         fgets(buf, BUFSIZ, stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|           /*",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|            * We need to get rid of the trailing '\\n' from fgets.",
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
                    "file_name": "krb5-1.19.2/src/kadmin/testing/util/tcl_kadm5.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_tcl_kadm5_init_any.part.0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/testing/util/tcl_kadm5.c",
                    "line": 129,
                    "column": 35,
                    "event": "warning[-Wformat-overflow=]",
                    "message": "'%d' directive writing between 1 and 10 bytes into a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129 |         sprintf(buf, \"kadm5_handle%d\", i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/testing/util/tcl_kadm5.c",
                    "line": 129,
                    "column": 22,
                    "event": "note",
                    "message": "directive argument in the range [1, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129 |         sprintf(buf, \"kadm5_handle%d\", i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kadmin/testing/util/tcl_kadm5.c",
                    "line": 3,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 38,
                    "column": 10,
                    "event": "note",
                    "message": "'__sprintf_chk' output between 14 and 23 bytes into a destination of size 20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38 |   return __builtin___sprintf_chk (__s, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 |                                   __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40 |                                   __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       do {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|->         sprintf(buf, \"kadm5_handle%d\", i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|           entry = Tcl_CreateHashEntry(struct_table, buf, &newPtr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|           i++;",
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
                    "file_name": "krb5-1.19.2/src/kprop/kprop.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'update_last_prop_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kprop/kprop.c",
                    "line": 594,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  594 |     write(fd, \"\", 1);",
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
                    "message": "  592|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  593|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  594|->     write(fd, \"\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|       free(file_last_prop);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|       close(fd);",
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
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'alarm_handler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 215,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |     write(STDERR_FILENO, timeout_msg, strlen(timeout_msg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       static char *timeout_msg = \"Full propagation timed out\\n\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->     write(STDERR_FILENO, timeout_msg, strlen(timeout_msg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|       exit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   }",
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
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 275,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'daemon' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275 |             daemon(0, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|           /* \"ready\" is a sentinel for the test framework. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|           if (!debug && !nodaemon) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|->             daemon(0, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|               printf(_(\"ready\\n\"));",
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
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'parse_args'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 1140,
                    "column": 26,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "argument 1 of 'set_com_err_hook' might be a candidate for a format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1140 |         set_com_err_hook(kpropd_com_err_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1138|       openlog(\"kpropd\", LOG_PID | LOG_ODELAY, SYSLOG_CLASS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1139|       if (!debug)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1140|->         set_com_err_hook(kpropd_com_err_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1141|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1142|       if (realm == NULL) {",
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
                    "file_name": "krb5-1.19.2/src/lib/apputils/net-server.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'loop_add_address'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/apputils/net-server.c",
                    "line": 193,
                    "column": 39,
                    "event": "warning[-Wunused-value]",
                    "message": "right-hand operand of comma expression has no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193 |     (set.data[idx] = set.data[--set.n], 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/apputils/net-server.c",
                    "line": 328,
                    "column": 13,
                    "event": "note",
                    "message": "in expansion of macro 'DEL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328 |             DEL(bind_addresses, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   #define DEL(set, idx)                           \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|->     (set.data[idx] = set.data[--set.n], 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|   #define FREE_SET_DATA(set)                                      \\",
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
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_prng.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_prng.c",
                    "line": 62,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'scanf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62 |                 scanf (\"%2x\",  &i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|               assert(!ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|               for (lc = seed_length; lc > 0; lc--) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|->                 scanf (\"%2x\",  &i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|                   input.data[seed_length-lc] = (unsigned) (i&0xff);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|               }",
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
                    "file_name": "krb5-1.19.2/src/lib/kadm5/logger.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5_klog_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/logger.c",
                    "line": 518,
                    "column": 37,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "argument 1 of 'set_com_err_hook' might be a candidate for a format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518 |             (void) set_com_err_hook(klog_com_err_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|           if (do_com_err)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518|->             (void) set_com_err_hook(klog_com_err_proc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|       return((log_control.log_nentries) ? 0 : ENOENT);",
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
                    "file_name": "krb5-1.19.2/src/lib/kadm5/srv/svr_principal.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'apply_keysalt_policy'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/srv/svr_principal.c",
                    "line": 212,
                    "column": 14,
                    "event": "warning[-Walloc-size-larger-than=]",
                    "message": "argument 1 range [18446744071562067968, 18446744073709551615] exceeds maximum object size 9223372036854775807",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212 |     subset = calloc(n_ks_tuple, sizeof(*subset));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 61,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/srv/svr_principal.c",
                    "line": 7,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdlib.h",
                    "line": 542,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to allocation function 'calloc' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542 | extern void *calloc (size_t __nmemb, size_t __size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|        * then skip this), but we don't bother.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|        */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|->     subset = calloc(n_ks_tuple, sizeof(*subset));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       if (subset == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|           ret = ENOMEM;",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/asn.1/asn1_encode.c",
                    "line": 42,
                    "column": 19,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 |         *buf->ptr = o;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       if (buf->ptr != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|           buf->ptr--;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|->         *buf->ptr = o;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|       buf->count++;",
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
                    "file_name": "./uuserver",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26121 with arguments: 9999",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/../../../include/k5-int.h",
                    "line": 2306,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "73 (40 direct, 33 indirect) bytes in 1 blocks are definitely lost in loss record 26 of 40",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/../../../include/k5-int.h",
                    "line": 2306,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/../../../include/k5-int.h",
                    "line": 2315,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/ccmarshal.c",
                    "line": 163,
                    "event": "note",
                    "message": "called from unmarshal_princ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/ccmarshal.c",
                    "line": 324,
                    "event": "note",
                    "message": "called from k5_unmarshal_princ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/cc_file.c",
                    "line": 319,
                    "event": "note",
                    "message": "called from read_principal.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/cc_file.c",
                    "line": 956,
                    "event": "note",
                    "message": "called from fcc_get_principal.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/user_user/server.c",
                    "line": 135,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2305|       /* Allocate at least one byte since zero-byte allocs may return NULL. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2306|->     ptr = calloc(nmemb ? nmemb : 1, size ? size : 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2307|       *code = (ptr == NULL) ? ENOMEM : 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2308|       return ptr;",
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
                    "file_name": "./uuserver",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26121 with arguments: 9999",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/cc_file.c",
                    "line": 676,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "156 (24 direct, 132 indirect) bytes in 1 blocks are definitely lost in loss record 32 of 40",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/cc_file.c",
                    "line": 676,
                    "event": "note",
                    "message": "called from fcc_resolve.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/user_user/server.c",
                    "line": 128,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|->     lid = malloc(sizeof(struct _krb5_ccache));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|       if (lid == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|           free_fccdata(context, data);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/t_cc.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'cc_test'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/t_cc.c",
                    "line": 429,
                    "column": 35,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around comparison in operand of '!='",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429 |         CHECK(creds.times.endtime == 0, \"no-lifetime cred\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~~~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/ccache/t_cc.c",
                    "line": 186,
                    "column": 9,
                    "event": "note",
                    "message": "in definition of macro 'CHECK'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186 |     if (kret != KRB5_OK) {                              \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  427|           CHECK(kret, \"next_cred for remove-iter: %s\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429|->         CHECK(creds.times.endtime == 0, \"no-lifetime cred\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|           krb5_free_cred_contents(context, &creds);",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/../../../include/k5-int.h",
                    "line": 2306,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "100 (40 direct, 60 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 13",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/../../../include/k5-int.h",
                    "line": 2306,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/../../../include/k5-int.h",
                    "line": 2315,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/parse.c",
                    "line": 50,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/parse.c",
                    "line": 190,
                    "event": "note",
                    "message": "called from krb5_parse_name_flags()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/ktest.c",
                    "line": 50,
                    "event": "note",
                    "message": "called from ktest_make_sample_principal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 1218,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2305|       /* Allocate at least one byte since zero-byte allocs may return NULL. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2306|->     ptr = calloc(nmemb ? nmemb : 1, size ? size : 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2307|       *code = (ptr == NULL) ? ENOMEM : 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2308|       return ptr;",
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
                    "file_name": "./uuserver",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26121 with arguments: 9999",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/../../../include/k5-int.h",
                    "line": 2306,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "73 (40 direct, 33 indirect) bytes in 1 blocks are definitely lost in loss record 27 of 40",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/../../../include/k5-int.h",
                    "line": 2306,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/../../../include/k5-int.h",
                    "line": 2315,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/parse.c",
                    "line": 50,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/parse.c",
                    "line": 190,
                    "event": "note",
                    "message": "called from krb5_parse_name_flags()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/user_user/server.c",
                    "line": 144,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2305|       /* Allocate at least one byte since zero-byte allocs may return NULL. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2306|->     ptr = calloc(nmemb ? nmemb : 1, size ? size : 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2307|       *code = (ptr == NULL) ? ENOMEM : 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2308|       return ptr;",
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
                    "file_name": "./uuserver",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26121 with arguments: 9999",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/init_ctx.c",
                    "line": 207,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "779 (464 direct, 315 indirect) bytes in 1 blocks are definitely lost in loss record 37 of 40",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/init_ctx.c",
                    "line": 207,
                    "event": "note",
                    "message": "called from krb5_init_context_profile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/user_user/server.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|       *context_out = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|->     ctx = calloc(1, sizeof(struct _krb5_context));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|       if (!ctx)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|           return ENOMEM;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/ser_ctx.c",
                    "line": 30,
                    "column": 17,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'profile_ser_size' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30 | krb5_error_code profile_ser_size(krb5_context, profile_t, size_t *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 524,
                    "column": 11,
                    "event": "note",
                    "message": "return value type mismatch",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524 | errcode_t profile_ser_size(const char *unused, profile_t profile,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 524,
                    "column": 11,
                    "event": "note",
                    "message": "type 'errcode_t' should match type 'krb5_error_code'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 524,
                    "column": 11,
                    "event": "note",
                    "message": "'profile_ser_size' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 524,
                    "column": 11,
                    "event": "note",
                    "message": "code may be misoptimized unless '-fno-strict-aliasing' is used",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   #include \"int-proto.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> krb5_error_code profile_ser_size(krb5_context, profile_t, size_t *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   krb5_error_code profile_ser_externalize(krb5_context, profile_t,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|                                           krb5_octet **, size_t *);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/ser_ctx.c",
                    "line": 31,
                    "column": 17,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'profile_ser_externalize' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31 | krb5_error_code profile_ser_externalize(krb5_context, profile_t,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 546,
                    "column": 11,
                    "event": "note",
                    "message": "return value type mismatch",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546 | errcode_t profile_ser_externalize(const char *unused, profile_t profile,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 546,
                    "column": 11,
                    "event": "note",
                    "message": "type 'errcode_t' should match type 'krb5_error_code'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 546,
                    "column": 11,
                    "event": "note",
                    "message": "'profile_ser_externalize' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 546,
                    "column": 11,
                    "event": "note",
                    "message": "code may be misoptimized unless '-fno-strict-aliasing' is used",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   krb5_error_code profile_ser_size(krb5_context, profile_t, size_t *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|-> krb5_error_code profile_ser_externalize(krb5_context, profile_t,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|                                           krb5_octet **, size_t *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   krb5_error_code profile_ser_internalize(krb5_context, profile_t *,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/ser_ctx.c",
                    "line": 33,
                    "column": 17,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'profile_ser_internalize' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33 | krb5_error_code profile_ser_internalize(krb5_context, profile_t *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 600,
                    "column": 11,
                    "event": "note",
                    "message": "return value type mismatch",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600 | errcode_t profile_ser_internalize(const char *unused, profile_t *profilep,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 600,
                    "column": 11,
                    "event": "note",
                    "message": "type 'errcode_t' should match type 'krb5_error_code'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 600,
                    "column": 11,
                    "event": "note",
                    "message": "'profile_ser_internalize' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/prof_init.c",
                    "line": 600,
                    "column": 11,
                    "event": "note",
                    "message": "code may be misoptimized unless '-fno-strict-aliasing' is used",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   krb5_error_code profile_ser_externalize(krb5_context, profile_t,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|                                           krb5_octet **, size_t *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|-> krb5_error_code profile_ser_internalize(krb5_context, profile_t *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|                                           krb5_octet **, size_t *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   ",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_princ.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_princ'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_princ.c",
                    "line": 106,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |     asprintf(&princ_reformed, \"%s@%s\", princ_short, realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       realm = p->realm.data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->     asprintf(&princ_reformed, \"%s@%s\", princ_short, realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|       ret = krb5_parse_name(context, princ_reformed, &p2);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/t_locate_kdc.c",
                    "line": 11,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/locate_kdc.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'Tprintf'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/locate_kdc.c",
                    "line": 116,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'Tprintf' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116 |     vfprintf(stderr, fmt, ap);",
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
                    "message": "  114|       va_list ap;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|       va_start(ap, fmt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|->     vfprintf(stderr, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|       va_end(ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   #endif",
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
                    "file_name": "./uuserver",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26121 with arguments: 9999",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/read_msg.c",
                    "line": 52,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "17 bytes in 1 blocks are definitely lost in loss record 10 of 40",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/read_msg.c",
                    "line": 52,
                    "event": "note",
                    "message": "called from krb5_read_message()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/user_user/server.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|            * We may want to include a sanity check here someday....",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|->         if (!(buf = malloc(ilen))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|               return(ENOMEM);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|           }",
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
                    "file_name": "./uuserver",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26121 with arguments: 9999",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/read_msg.c",
                    "line": 52,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "318 bytes in 1 blocks are definitely lost in loss record 35 of 40",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/read_msg.c",
                    "line": 52,
                    "event": "note",
                    "message": "called from krb5_read_message()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/appl/user_user/server.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|            * We may want to include a sanity check here someday....",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|->         if (!(buf = malloc(ilen))) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|               return(ENOMEM);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|           }",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/trace.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'hash_bytes'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/trace.c",
                    "line": 100,
                    "column": 16,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100 |         (void) asprintf(&s, \"%02X%02X\", cksum.contents[0], cksum.contents[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|           return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|       if (cksum.length >= 2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|->         (void) asprintf(&s, \"%02X%02X\", cksum.contents[0], cksum.contents[1]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|       krb5_free_checksum_contents(context, &cksum);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|       return s;",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/trace.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'file_trace_cb'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/trace.c",
                    "line": 449,
                    "column": 12,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449 |     (void) write(*fd, info->message, strlen(info->message));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|->     (void) write(*fd, info->message, strlen(info->message));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   ",
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
                    "file_name": "krb5-1.19.2/src/lib/rpc/unit-test/server.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'rpc_test_echo_1_svc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/rpc/unit-test/server.c",
                    "line": 161,
                    "column": 6,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161 |      asprintf(&res, \"Echo: %s\", *arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|        if (res)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|   \t  free(res);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|->      asprintf(&res, \"Echo: %s\", *arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|        return &res;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   }",
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
                    "file_name": "krb5-1.19.2/src/plugins/kadm5_auth/test/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'welcomer_end'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kadm5_auth/test/main.c",
                    "line": 257,
                    "column": 33,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%d' directive output may be truncated writing between 1 and 11 bytes into a region of size 10",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257 |     snprintf(buf, sizeof(buf), \"%d\", atoi(val) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kadm5_auth/test/main.c",
                    "line": 257,
                    "column": 32,
                    "event": "note",
                    "message": "directive argument in the range [-2147483647, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257 |     snprintf(buf, sizeof(buf), \"%d\", atoi(val) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kadm5_auth/test/main.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 2 and 12 bytes into a destination of size 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|       if (krb5_dbe_get_string(context, ent, \"ends\", &val) != 0 || val == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|           goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|->     snprintf(buf, sizeof(buf), \"%d\", atoi(val) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|       if (krb5_dbe_set_string(context, ent, \"ends\", buf) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|           goto cleanup;",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__kdb2_delpair'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 308,
                    "column": 29,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'next_key' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308 |         int16_t delta, len, next_key;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|   \tindx_t ndx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|   \tshort check_ndx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|-> \tint16_t delta, len, next_key;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|   \tint32_t n;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   \tu_int8_t *src, *dest;",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'overflow_page'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 1130,
                    "column": 31,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1130 |                         (void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   \tif (offset > SPLITMASK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1129|   \t\tif (++splitnum >= NCACHED) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1130|-> \t\t\t(void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1131|   \t\t\treturn (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132|   \t\t}",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 1142,
                    "column": 31,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1142 |                         (void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1140|   \t\tfree_page++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1141|   \t\tif (free_page >= NCACHED) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1142|-> \t\t\t(void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1143|   \t\t\treturn (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144|   \t\t}",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 1166,
                    "column": 39,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1166 |                                 (void)write(STDERR_FILENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1167 |                                     OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                     ~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1164|   \t\tif (offset > SPLITMASK) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1165|   \t\t\tif (++splitnum >= NCACHED) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1166|-> \t\t\t\t(void)write(STDERR_FILENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1167|   \t\t\t\t    OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1168|   \t\t\t\treturn (0);",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 1193,
                    "column": 23,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193 |                 (void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1191|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1192|   \tif (OADDR_TO_PAGE(addr) > MAX_PAGES(hashp)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193|-> \t\t(void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1194|   \t\treturn (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1195|   \t}",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 1226,
                    "column": 23,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1226 |                 (void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1224|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1225|   \tif (OADDR_TO_PAGE(addr) > MAX_PAGES(hashp)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1226|-> \t\t(void)write(STDERR_FILENO, OVMSG, sizeof(OVMSG) - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1227|   \t\treturn (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1228|   \t}",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_realm.c",
                    "line": 138,
                    "column": 18,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'no_msg' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138 |     krb5_boolean no_msg = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|       int mask = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|       krb5_error_code retval = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|->     krb5_boolean no_msg = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|       krb5_boolean print_usage = FALSE;",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_realm.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_ticket_policy'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_realm.c",
                    "line": 140,
                    "column": 18,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'print_usage' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140 |     krb5_boolean print_usage = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|       krb5_boolean no_msg = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|->     krb5_boolean print_usage = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|       char *me = progname;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|   ",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'extended_com_err_fn'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_util.c",
                    "line": 230,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'extended_com_err_fn' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230 |     vfprintf (stderr, fmt, args);",
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
                    "message": "  228|       fprintf (stderr, \"%s: %s \", myprog, emsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|       krb5_free_error_message (util_context, emsg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|->     vfprintf (stderr, fmt, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|       fprintf (stderr, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|   }",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'cms_signeddata_create'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1258,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestInit_ex' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1258 |         EVP_DigestInit_ex(ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1256|           if (ctx == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1257|               goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1258|->         EVP_DigestInit_ex(ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|           EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|           md_tmp = EVP_MD_CTX_md(ctx);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1259,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259 |         EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1257|               goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1258|           EVP_DigestInit_ex(ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|->         EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|           md_tmp = EVP_MD_CTX_md(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1261|           EVP_DigestFinal_ex(ctx, md_data, &md_len);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1261,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal_ex' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1261 |         EVP_DigestFinal_ex(ctx, md_data, &md_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|           EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|           md_tmp = EVP_MD_CTX_md(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1261|->         EVP_DigestFinal_ex(ctx, md_data, &md_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1262|           EVP_MD_CTX_free(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|   ",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1299,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestInit_ex' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299 |             EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1297|               if (ctx == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1298|                   goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|->             EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|               EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|               EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1300,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300 |             EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1298|                   goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|               EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|->             EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|               EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|               EVP_MD_CTX_free(ctx);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1301,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal_ex' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301 |             EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|               EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|               EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|->             EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|               EVP_MD_CTX_free(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'create_signature'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 4155,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_SignFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4155 |     EVP_SignFinal(ctx, *sig, sig_len, pkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4153|       if ((*sig = malloc(*sig_len)) == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4154|           goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4155|->     EVP_SignFinal(ctx, *sig, sig_len, pkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4156|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4157|       retval = 0;",
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
                    "file_name": "krb5-1.19.2/src/plugins/tls/k5tls/openssl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'write_tls'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/tls/k5tls/openssl.c",
                    "line": 514,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'SSL_set_ex_data' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514 |     (void)SSL_set_ex_data(handle->ssl, ex_context_id, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|           return ERROR_TLS;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|       nwritten = SSL_write(handle->ssl, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|->     (void)SSL_set_ex_data(handle->ssl, ex_context_id, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|       if (nwritten > 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|           return DONE;",
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
                    "file_name": "krb5-1.19.2/src/plugins/tls/k5tls/openssl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'read_tls'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/plugins/tls/k5tls/openssl.c",
                    "line": 540,
                    "column": 11,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'SSL_set_ex_data' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540 |     (void)SSL_set_ex_data(handle->ssl, ex_context_id, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|           return ERROR_TLS;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|       nread = SSL_read(handle->ssl, data, data_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|->     (void)SSL_set_ex_data(handle->ssl, ex_context_id, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|       if (nread > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542|           *len_out = nread;",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "165 bytes in 1 blocks are definitely lost in loss record 11 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 323,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "173 bytes in 1 blocks are definitely lost in loss record 12 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_encode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26779",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/ktest.c",
                    "line": 217,
                    "event": "note",
                    "message": "called from ktest_make_sample_pa_data_array()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/ktest.c",
                    "line": 972,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_encode_test.c",
                    "line": 758,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 6 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 359,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "39 bytes in 1 blocks are definitely lost in loss record 7 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 360,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "416 bytes in 1 blocks are definitely lost in loss record 13 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 484,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "45 bytes in 1 blocks are definitely lost in loss record 8 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 362,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "./krb5_decode_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26874",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "51 bytes in 1 blocks are definitely lost in loss record 9 of 13",
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
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from ealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/utility.c",
                    "line": 107,
                    "event": "note",
                    "message": "called from krb5_data_hex_parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/asn.1/krb5_decode_test.c",
                    "line": 361,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ealloc(size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|->     void *ptr = calloc(1, size);",
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
                    "message": "   42|       if (ptr == NULL)",
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
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 183,
                    "column": 44,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 8191 bytes into a region of size 4096",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183 |         (void) snprintf(tmp, sizeof(tmp), \"%s-DEPTH-1\", principal_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~           ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 9 and 8200 bytes into a destination of size 4096",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|              again given a prefix and count to test the db lib and kdb */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|           (void) snprintf(suffix, suffix_size, \"%d\", n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|->         (void) snprintf(tmp, sizeof(tmp), \"%s-DEPTH-1\", principal_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|           tmp[sizeof(tmp) - 1] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|           str_newprinc = tmp;",
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
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 189,
                    "column": 53,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'-DEPTH-' directive output may be truncated writing 7 bytes into a region of size between 0 and 8191",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189 |             (void) snprintf(tmp2, sizeof(tmp2), \"/%s-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 189,
                    "column": 49,
                    "event": "note",
                    "message": "directive argument in the range [2, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189 |             (void) snprintf(tmp2, sizeof(tmp2), \"/%s-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 10 and 8210 bytes into a destination of size 8192",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|           for (i = 2; i <= depth; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|->             (void) snprintf(tmp2, sizeof(tmp2), \"/%s-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|                               principal_string, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|               tmp2[sizeof(tmp2) - 1] = '\\0';",
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
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 214,
                    "column": 54,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%d' directive output may be truncated writing between 1 and 10 bytes into a region of size between 0 and 8192",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214 |           (void) snprintf(ctmp2, sizeof(ctmp2), \"%s%s%d-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                      ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 214,
                    "column": 49,
                    "event": "note",
                    "message": "directive argument in the range [1, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214 |           (void) snprintf(ctmp2, sizeof(ctmp2), \"%s%s%d-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 214,
                    "column": 49,
                    "event": "note",
                    "message": "directive argument in the range [1, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 10 and 8220 bytes into a destination of size 8192",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|   \tctmp[0] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   \tfor (i = 1; i <= depth; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|-> \t  (void) snprintf(ctmp2, sizeof(ctmp2), \"%s%s%d-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|   \t\t\t  (i != 1) ? \"/\" : \"\", prefix, n, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|   \t  ctmp2[sizeof(ctmp2) - 1] = '\\0';",
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
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 230,
                    "column": 56,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%d' directive output may be truncated writing between 1 and 10 bytes into a region of size between 0 and 8192",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230 |             (void) snprintf(stmp2, sizeof(stmp2), \"%s%s%d-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                        ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 230,
                    "column": 51,
                    "event": "note",
                    "message": "directive argument in the range [1, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230 |             (void) snprintf(stmp2, sizeof(stmp2), \"%s%s%d-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 230,
                    "column": 51,
                    "event": "note",
                    "message": "directive argument in the range [1, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 26,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 10 and 8220 bytes into a destination of size 8192",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|   \t  stmp[0] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|   \t  for (j = 1; j <= depth; j++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|-> \t    (void) snprintf(stmp2, sizeof(stmp2), \"%s%s%d-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|   \t\t\t    (j != 1) ? \"/\" : \"\", prefix, n, j);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|   \t    stmp2[sizeof (stmp2) - 1] = '\\0';",
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
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'application_error'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 161,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'application_error' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161 |     vprintf(fmt, ap);",
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
                    "message": "  159|       va_list ap;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|       va_start(ap, fmt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|->     vprintf(fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|       va_end(ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|       if (soft_token.flags.app_error_fatal)",
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
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'st_logf'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 174,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'st_logf' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174 |     vfprintf(soft_token.logfile, fmt, ap);",
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
                    "message": "  172|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|       va_start(ap, fmt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|->     vfprintf(soft_token.logfile, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|       va_end(ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|       fflush(soft_token.logfile);",
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
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'snprintf_fill'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 185,
                    "column": 5,
                    "event": "warning[-Wsuggest-attribute=format]",
                    "message": "function 'snprintf_fill' might be a candidate for 'gnu_printf' format attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185 |     len = vsnprintf(str, size, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|       va_list ap;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|       va_start(ap, fmt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|->     len = vsnprintf(str, size, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|       va_end(ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|       if (len < 0 || len > size)",
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
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 185,
                    "column": 44,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 8191 bytes into a region of size 4096",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185 |         (void) snprintf(tmp, sizeof(tmp), \"%s-DEPTH-1\", principal_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                            ^~           ~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 9 and 8200 bytes into a destination of size 4096",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|              again given a prefix and count to test the db lib and kdb */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|           (void) snprintf(suffix, suffix_size, \"%d\", n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|->         (void) snprintf(tmp, sizeof(tmp), \"%s-DEPTH-1\", principal_string);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|           str_princ = tmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|           if (check_princ(context, str_princ)) errors++;",
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
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 190,
                    "column": 53,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'-DEPTH-' directive output may be truncated writing 7 bytes into a region of size between 0 and 8191",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |             (void) snprintf(tmp2, sizeof(tmp2), \"/%s-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 190,
                    "column": 49,
                    "event": "note",
                    "message": "directive argument in the range [2, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |             (void) snprintf(tmp2, sizeof(tmp2), \"/%s-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-platform.h",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/include/k5-int.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 10 and 8210 bytes into a destination of size 8192",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|           for (i = 2; i <= depth; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->             (void) snprintf(tmp2, sizeof(tmp2), \"/%s-DEPTH-%d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|                               principal_string, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|               tmp2[sizeof(tmp2) - 1] = '\\0';",
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
                    "file_name": "./profile_tcl",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7281 with arguments: ./prof_test1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1858,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "16,384 bytes in 1 blocks are possibly lost in loss record 31 of 39",
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
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpAlloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_Alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclNRRunCallbacks()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_EvalEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_Eval()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1858,
                    "event": "note",
                    "message": "called from Tcl_AppInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_MainEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1856|   int Tcl_AppInit(Tcl_Interp *interp){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1857|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1858|->   if (Tcl_Init(interp) == TCL_ERROR)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1859|       return TCL_ERROR;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1860|   ",
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
                    "file_name": "./profile_tcl",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7281 with arguments: ./prof_test1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1858,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "32,768 bytes in 2 blocks are possibly lost in loss record 36 of 39",
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
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpAlloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpRealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_AppendLimitedToObj()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_EvalEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_Eval()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1858,
                    "event": "note",
                    "message": "called from Tcl_AppInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_MainEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1856|   int Tcl_AppInit(Tcl_Interp *interp){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1857|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1858|->   if (Tcl_Init(interp) == TCL_ERROR)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1859|       return TCL_ERROR;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1860|   ",
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
                    "file_name": "./profile_tcl",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7281 with arguments: ./prof_test1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1858,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "49,152 bytes in 3 blocks are possibly lost in loss record 39 of 39",
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
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpAlloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_Alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_NewStringObj()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclCreateProc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_ProcObjCmd()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclNRRunCallbacks()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_EvalEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_Eval()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1858,
                    "event": "note",
                    "message": "called from Tcl_AppInit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_MainEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1856|   int Tcl_AppInit(Tcl_Interp *interp){",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1857|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1858|->   if (Tcl_Init(interp) == TCL_ERROR)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1859|       return TCL_ERROR;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1860|   ",
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
                    "file_name": "./profile_tcl",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7281 with arguments: ./prof_test1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1892,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "16,384 bytes in 1 blocks are possibly lost in loss record 10 of 39",
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
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpAlloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_Alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_CreateInterp()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1892,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1890|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1891|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1892|->   Tcl_Main(argc, argv, Tcl_AppInit);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1893|     return(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1894|   ",
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
                    "file_name": "./profile_tcl",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7281 with arguments: ./prof_test1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1892,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "24,214 bytes in 1 blocks are possibly lost in loss record 35 of 39",
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
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpAlloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from TclpRealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_AppendLimitedToObj()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_FSEvalFileEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_MainEx()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1892,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1890|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1891|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1892|->   Tcl_Main(argc, argv, Tcl_AppInit);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1893|     return(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1894|   ",
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
                    "file_name": "./profile_tcl",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7281 with arguments: ./prof_test1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1892,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "38,400 bytes in 1 blocks are possibly lost in loss record 37 of 39",
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
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_NewObj()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtcl8.6.so",
                    "line": 0,
                    "event": "note",
                    "message": "called from Tcl_CreateInterp()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/profile_tcl.c",
                    "line": 1892,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1890|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1891|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1892|->   Tcl_Main(argc, argv, Tcl_AppInit);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1893|     return(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1894|   ",
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
                    "file_name": "krb5-1.19.2/src/util/profile/testmod/testmod_main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_values'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/profile/testmod/testmod_main.c",
                    "line": 48,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48 |     asprintf(&(*ret_values)[1], \"%d\", d->gen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       *ret_values = calloc(3, sizeof(*ret_values));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|       (*ret_values)[0] = strdup(d->residual);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|->     asprintf(&(*ret_values)[1], \"%d\", d->gen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       (*ret_values)[2] = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       return 0;",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 101,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 | {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   static security_context_t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   push_fscreatecon(const char *pathname, mode_t mode)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|       security_context_t previous, configuredsc, currentsc, derivedsc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       context_t current, derived;",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'push_fscreatecon'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 102,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |     security_context_t previous, configuredsc, currentsc, derivedsc;",
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
                    "message": "  100|   push_fscreatecon(const char *pathname, mode_t mode)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->     security_context_t previous, configuredsc, currentsc, derivedsc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       context_t current, derived;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       const char *fullpath, *currentuser;",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 237,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237 | pop_fscreatecon(security_context_t previous)",
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
                    "message": "  235|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   static void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|-> pop_fscreatecon(security_context_t previous)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|       if (!is_selinux_enabled()) {",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5int_labeled_fopen'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 291,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291 |     security_context_t ctx;",
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
                    "message": "  289|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|       if ((strcmp(mode, \"r\") == 0) ||",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5int_labeled_creat'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 317,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317 |     security_context_t ctx;",
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
                    "message": "  315|       int fd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|       k5_once(&labeled_once, label_mutex_init);",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5int_labeled_mknod'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 338,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338 |     security_context_t ctx;",
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
                    "message": "  336|       int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|       k5_once(&labeled_once, label_mutex_init);",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5int_labeled_mkdir'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 359,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359 |     security_context_t ctx;",
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
                    "message": "  357|       int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       k5_once(&labeled_once, label_mutex_init);",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5int_labeled_open'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 380,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380 |     security_context_t ctx;",
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
                    "message": "  378|       int fd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|       mode_t mode;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|       va_list ap;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
