{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "krb5-1.19.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/cbmc/output",
        "time-created": "2023-01-30 02:30:45",
        "time-finished": "2023-01-30 02:43:41",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/krb5-1.19.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
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
                    "file_name": "krb5-1.19.2/src/clients/kinit/kinit.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/clients/klist/klist.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/clients/ksu/xmalloc.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/clients/kvno/kvno.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/kadmin/cli/kadmin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/kdb5_util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/kadmin/dbutil/tdumputil.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/kprop/kpropd.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/lib/kadm5/logger.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_realm.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/plugins/tls/k5tls/openssl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 183,
                    "column": 16,
                    "event": "note",
                    "message": "'snprintf' output between 9 and 8200 bytes into a destination of size 4096",
                    "verbosity_level": 1
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
                    "message": "      |                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "column": 20,
                    "event": "note",
                    "message": "'snprintf' output between 10 and 8211 bytes into a destination of size 8192",
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
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |                             principal_string, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/create/kdb5_mkdums.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "column": 56,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'-DEPTH-' directive output may be truncated writing 7 bytes into a region of size between 0 and 8191",
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
                    "message": "      |                                                        ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 214,
                    "column": 18,
                    "event": "note",
                    "message": "'snprintf' output 10 or more bytes (assuming 8201) into a destination of size 8192",
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
                    "message": "      |                  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |                           (i != 1) ? \"/\" : \"\", prefix, n, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "line": 219,
                    "column": 50,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'snprintf' output may be truncated before the last format character",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219 |           snprintf(client, sizeof(client), \"%s@%s\", ctmp, cur_realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 219,
                    "column": 11,
                    "event": "note",
                    "message": "'snprintf' output 2 or more bytes (assuming 4097) into a destination of size 4096",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219 |           snprintf(client, sizeof(client), \"%s@%s\", ctmp, cur_realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   \t  strncat(ctmp, ctmp2, sizeof(ctmp) - 1 - strlen(ctmp));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   \t  ctmp[sizeof(ctmp) - 1] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|-> \t  snprintf(client, sizeof(client), \"%s@%s\", ctmp, cur_realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   \t  if (get_tgt (test_context, client, &client_princ, ccache)) {",
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
                    "column": 58,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'-DEPTH-' directive output may be truncated writing 7 bytes into a region of size between 0 and 8191",
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
                    "message": "      |                                                          ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 230,
                    "column": 20,
                    "event": "note",
                    "message": "'snprintf' output 10 or more bytes (assuming 8201) into a destination of size 8192",
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
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231 |                             (j != 1) ? \"/\" : \"\", prefix, n, j);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 235,
                    "column": 52,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'snprintf' output may be truncated before the last format character",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |             snprintf(server, sizeof(server), \"%s@%s\", stmp, cur_realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 235,
                    "column": 13,
                    "event": "note",
                    "message": "'snprintf' output 2 or more bytes (assuming 4097) into a destination of size 4096",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |             snprintf(server, sizeof(server), \"%s@%s\", stmp, cur_realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/hammer/kdc5_hammer.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|   \t    strncat(stmp, stmp2, sizeof(stmp) - 1 - strlen(stmp));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|   \t    stmp[sizeof(stmp) - 1] = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|-> \t    snprintf(server, sizeof(server), \"%s@%s\", stmp, cur_realm);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   \t    if (verify_cs_pair(test_context, client, client_princ,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|   \t\t\t       stmp, cur_realm, n, i, j, ccache))",
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
                    "file_name": "krb5-1.19.2/src/tests/softpkcs11/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 185,
                    "column": 16,
                    "event": "note",
                    "message": "'snprintf' output between 9 and 8200 bytes into a destination of size 4096",
                    "verbosity_level": 1
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
                    "message": "      |                ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "column": 20,
                    "event": "note",
                    "message": "'snprintf' output between 10 and 8211 bytes into a destination of size 8192",
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
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |                             principal_string, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/verify/kdb5_verify.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/util/support/plugins.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'krb5int_get_plugin_dir_func'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/util/support/plugins.c",
                    "line": 795,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'void (**)()' to 'void (**)(void)': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|       if (!err) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|->         *ptrs = p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|           p = NULL; /* ptrs takes ownership */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  797|       }",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
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
