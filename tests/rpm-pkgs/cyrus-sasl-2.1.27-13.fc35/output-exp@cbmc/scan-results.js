{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "cyrus-sasl-2.1.27-13.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/cyrus-sasl-2.1.27-13.fc35/cbmc/output",
        "time-created": "2023-01-26 17:44:56",
        "time-finished": "2023-01-26 17:52:50",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/cyrus-sasl-2.1.27-13.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/cyrus-sasl-2.1.27-13.fc35/cyrus-sasl-2.1.27-13.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 114,
                    "column": 22,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114 |     SASL_CB_GETPATH, (sasl_callback_ft)&_sasl_getpath, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   /* Default getpath/getconfpath callbacks. These can be edited by sasl_set_path(). */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   static sasl_callback_t default_getpath_cb = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|->     SASL_CB_GETPATH, (sasl_callback_ft)&_sasl_getpath, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   static sasl_callback_t default_getconfpath_cb = {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 117,
                    "column": 26,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 |     SASL_CB_GETCONFPATH, (sasl_callback_ft)&_sasl_getconfpath, NULL",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   static sasl_callback_t default_getconfpath_cb = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|->     SASL_CB_GETCONFPATH, (sasl_callback_ft)&_sasl_getconfpath, NULL",
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
                    "message": "  119|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sasl_set_path'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 230,
                    "column": 39,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230 |             default_getpath_cb.proc = (sasl_callback_ft)&_sasl_getpath_simple;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|               /* Update the default getpath_t callback */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|->             default_getpath_cb.proc = (sasl_callback_ft)&_sasl_getpath_simple;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 244,
                    "column": 43,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244 |             default_getconfpath_cb.proc = (sasl_callback_ft)&_sasl_getconfpath_simple;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|               /* Update the default getpath_t callback */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|->             default_getconfpath_cb.proc = (sasl_callback_ft)&_sasl_getconfpath_simple;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_sasl_global_getopt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1416,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, const char *, const char *, const char **, unsigned int *)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1416 |           if (((sasl_getopt_t *)(callback->proc))(callback->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414|   \tif (callback->id == SASL_CB_GETOPT) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1415|   \t  if (!callback->proc) return SASL_FAIL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1416|-> \t  if (((sasl_getopt_t *)(callback->proc))(callback->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1417|   \t\t\t\t\t\t  plugin_name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1418|   \t\t\t\t\t\t  option,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_sasl_conn_getopt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1457,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, const char *, const char *, const char **, unsigned int *)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1457 |           && (((sasl_getopt_t *)(callback->proc))(callback->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1455|   \t callback++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1456|         if (callback->id == SASL_CB_GETOPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1457|-> \t  && (((sasl_getopt_t *)(callback->proc))(callback->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1458|   \t\t\t\t\t\t  plugin_name,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1459|   \t\t\t\t\t\t  option,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_sasl_getcallback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1734,
                    "column": 20,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1734 |           *pproc = (sasl_callback_ft)&_sasl_conn_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1732|     case SASL_CB_GETOPT:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1733|         if (conn) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1734|-> \t  *pproc = (sasl_callback_ft)&_sasl_conn_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735|   \t  *pcontext = conn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1736|         } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1737,
                    "column": 20,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1737 |           *pproc = (sasl_callback_ft)&_sasl_global_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735|   \t  *pcontext = conn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1736|         } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1737|-> \t  *pproc = (sasl_callback_ft)&_sasl_global_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1738|   \t  *pcontext = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1739|         }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1782,
                    "column": 14,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1782 |     *pproc = (sasl_callback_ft)&_sasl_syslog;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1780|   #ifdef HAVE_SYSLOG",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1781|     case SASL_CB_LOG:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1782|->     *pproc = (sasl_callback_ft)&_sasl_syslog;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1783|       *pcontext = conn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1784|       return SASL_OK;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1795,
                    "column": 14,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char **, size_t *)' {aka 'int (*)(void *, int,  const char **, long unsigned int *)'} to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1795 |     *pproc = (sasl_callback_ft)&_sasl_getsimple;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1793|       return SASL_OK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1794|     case SASL_CB_AUTHNAME:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1795|->     *pproc = (sasl_callback_ft)&_sasl_getsimple;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1796|       *pcontext = conn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1797|       return SASL_OK;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1799,
                    "column": 14,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, char *, int)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1799 |     *pproc = (sasl_callback_ft)&_sasl_verifyfile;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1797|       return SASL_OK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1798|     case SASL_CB_VERIFYFILE:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1799|->     *pproc = (sasl_callback_ft)&_sasl_verifyfile;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1800|       *pcontext = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1801|       return SASL_OK;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 1803,
                    "column": 14,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(sasl_conn_t *, void *, const char *, unsigned int,  const char *, unsigned int,  const char *, unsigned int,  struct propctx *)' {aka 'int (*)(struct sasl_conn *, void *, const char *, unsigned int,  const char *, unsigned int,  const char *, unsigned int,  struct propctx *)'} to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1803 |     *pproc = (sasl_callback_ft)&_sasl_proxy_policy;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1801|       return SASL_OK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1802|     case SASL_CB_PROXY_POLICY:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1803|->     *pproc = (sasl_callback_ft)&_sasl_proxy_policy;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1804|       *pcontext = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1805|       return SASL_OK;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_sasl_find_verifyfile_callback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
                    "line": 2160,
                    "column": 5,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, char *, int)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2160 |     (sasl_callback_ft)&_sasl_verifyfile,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/common.c",
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
                    "message": " 2158|     static const sasl_callback_t default_verifyfile_cb = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2159|       SASL_CB_VERIFYFILE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2160|->     (sasl_callback_ft)&_sasl_verifyfile,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2161|       NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2162|     };",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/dlopen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_sasl_get_plugin'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/dlopen.c",
                    "line": 369,
                    "column": 10,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, const char *, sasl_verify_type_t)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369 |     r = ((sasl_verifyfile_t *)(verifyfile_cb->proc))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|       lib_list_t *newhead;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|->     r = ((sasl_verifyfile_t *)(verifyfile_cb->proc))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|   \t\t    (verifyfile_cb->context, file, SASL_VRFY_PLUGIN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|       if (r != SASL_OK) return r;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/dlopen.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_sasl_load_plugins'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/dlopen.c",
                    "line": 469,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, const char **)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469 |     result = ((sasl_getpath_t *)(getpath_cb->proc))(getpath_cb->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/dlopen.c",
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
                    "message": "  467|   #if defined(DO_DLOPEN) && (defined(PIC) || (!defined(PIC) && defined(TRY_DLOPEN_WHEN_STATIC)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|       /* get the path to the plugins */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|->     result = ((sasl_getpath_t *)(getpath_cb->proc))(getpath_cb->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   \t\t\t\t\t\t    &path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  471|       if (result != SASL_OK) return result;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/server.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'load_config'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/server.c",
                    "line": 623,
                    "column": 15,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, char **)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623 |     result = ((sasl_getconfpath_t *)(getconfpath_cb->proc))(getconfpath_cb->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|       /* getconfpath_cb->proc MUST be a sasl_getconfpath_t; if only C had a type",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|          system */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|->     result = ((sasl_getconfpath_t *)(getconfpath_cb->proc))(getconfpath_cb->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|   \t\t\t\t\t\t\t    (char **) &path_to_config);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|       if (result != SASL_OK) goto done;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/server.c",
                    "line": 661,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, const char *, sasl_verify_type_t)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  661 |         result = ((sasl_verifyfile_t *)(verifyfile_cb->proc))(verifyfile_cb->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  659|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  660|           /* Ask the application if it's safe to use this file */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  661|->         result = ((sasl_verifyfile_t *)(verifyfile_cb->proc))(verifyfile_cb->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  662|   \t\t\t\t\t        config_filename, SASL_VRFY_CONF);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  663|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/server.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sasl_server_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/server.c",
                    "line": 913,
                    "column": 16,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void)' to 'int (*)(void *, const char *, sasl_verify_type_t)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  913 |         ret = ((sasl_verifyfile_t *)(vf->proc))(vf->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/lib/server.c",
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
                    "message": "  911|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  912|   \t/* Ask the application if it's safe to use this file */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  913|-> \tret = ((sasl_verifyfile_t *)(vf->proc))(vf->context,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  914|   \t\t\t\t\t\tpluginfile,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  915|   \t\t\t\t\t\tSASL_VRFY_CONF);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/gssapi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gssapi_server_mech_authneg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/gssapi.c",
                    "line": 909,
                    "column": 35,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  909 |         cb.application_data.value = params->cbinding->data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907|       if (params->cbinding != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  908|           cb.application_data.length = params->cbinding->len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  909|->         cb.application_data.value = params->cbinding->data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  910|           bindings = &cb;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  911|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/gssapi.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gssapi_client_mech_step'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/gssapi.c",
                    "line": 1826,
                    "column": 39,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1826 |             cb.application_data.value = params->cbinding->data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/gssapi.c",
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
                    "message": " 1824|           if (params->cbinding != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1825|               cb.application_data.length = params->cbinding->len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1826|->             cb.application_data.value = params->cbinding->data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1827|               bindings = &cb;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1828|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 195,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/ntlm.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'P16_lm'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/ntlm.c",
                    "line": 383,
                    "column": 21,
                    "event": "warning[-Wsign-compare]",
                    "message": "comparison of integer expressions of different signedness: 'long unsigned int' and 'int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383 |     if (passwd->len < Plen) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/plugins/ntlm.c",
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
                    "message": "  381|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|       Plen = sizeof(P14);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|->     if (passwd->len < Plen) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|           Plen = passwd->len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/sample/client.c",
                    "line": 188,
                    "column": 23,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char **, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188 |     SASL_CB_GETREALM, (sasl_callback_ft)&getrealm, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|   static sasl_callback_t callbacks[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->     SASL_CB_GETREALM, (sasl_callback_ft)&getrealm, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       SASL_CB_USER, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/sample/client.c",
                    "line": 190,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |     SASL_CB_USER, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       SASL_CB_GETREALM, (sasl_callback_ft)&getrealm, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->     SASL_CB_USER, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|       SASL_CB_AUTHNAME, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/sample/client.c",
                    "line": 192,
                    "column": 23,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192 |     SASL_CB_AUTHNAME, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       SASL_CB_USER, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|->     SASL_CB_AUTHNAME, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|       SASL_CB_PASS, (sasl_callback_ft)&getsecret, NULL",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/sample/client.c",
                    "line": 194,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(sasl_conn_t *, void *, int,  sasl_secret_t **)' {aka 'int (*)(struct sasl_conn *, void *, int,  struct sasl_secret **)'} to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |     SASL_CB_PASS, (sasl_callback_ft)&getsecret, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
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
                    "message": "  192|       SASL_CB_AUTHNAME, (sasl_callback_ft)&simple, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|->     SASL_CB_PASS, (sasl_callback_ft)&getsecret, NULL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|     }, {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|       SASL_CB_LIST_END, NULL, NULL",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/lak.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lak_check_hashed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/lak.c",
                    "line": 1808,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestInit' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1808 |         EVP_DigestInit(mdctx, md);",
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
                    "message": " 1806|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1807|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1808|-> \tEVP_DigestInit(mdctx, md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1809|   \tEVP_DigestUpdate(mdctx, passwd, strlen(passwd));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1810|   \tif (hrock->salted) {",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/lak.c",
                    "line": 1809,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1809 |         EVP_DigestUpdate(mdctx, passwd, strlen(passwd));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1807|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1808|   \tEVP_DigestInit(mdctx, md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1809|-> \tEVP_DigestUpdate(mdctx, passwd, strlen(passwd));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1810|   \tif (hrock->salted) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1811|   \t\tEVP_DigestUpdate(mdctx, &cred[EVP_MD_size(md)],",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/lak.c",
                    "line": 1811,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1811 |                 EVP_DigestUpdate(mdctx, &cred[EVP_MD_size(md)],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1812 |                                  clen - EVP_MD_size(md));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1809|   \tEVP_DigestUpdate(mdctx, passwd, strlen(passwd));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1810|   \tif (hrock->salted) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1811|-> \t\tEVP_DigestUpdate(mdctx, &cred[EVP_MD_size(md)],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1812|   \t\t\t\t clen - EVP_MD_size(md));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1813|   \t}",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/lak.c",
                    "line": 1814,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1814 |         EVP_DigestFinal(mdctx, digest, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/lak.c",
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
                    "message": " 1812|   \t\t\t\t clen - EVP_MD_size(md));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1813|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1814|-> \tEVP_DigestFinal(mdctx, digest, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1815|   \tEVP_MD_CTX_free(mdctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1816|   ",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_saslauthd_hmac_md5_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 400,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'unsigned char (*)[65l]' to 'POINTER': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|     /* scrub the pads and key context (if used) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|->   MD5_memset(&k_ipad, 0, sizeof(k_ipad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|     MD5_memset(&k_opad, 0, sizeof(k_opad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|     MD5_memset(&tk, 0, sizeof(tk));",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_saslauthd_hmac_md5_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 401,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'unsigned char (*)[65l]' to 'POINTER': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|     /* scrub the pads and key context (if used) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|     MD5_memset(&k_ipad, 0, sizeof(k_ipad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|->   MD5_memset(&k_opad, 0, sizeof(k_opad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|     MD5_memset(&tk, 0, sizeof(tk));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   ",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_saslauthd_hmac_md5_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 402,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'unsigned char (*)[16l]' to 'POINTER': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|     MD5_memset(&k_ipad, 0, sizeof(k_ipad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|     MD5_memset(&k_opad, 0, sizeof(k_opad));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|->   MD5_memset(&tk, 0, sizeof(tk));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|     /* and we're done. */",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_saslauthd_hmac_md5_precalc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 427,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'HMAC_MD5_CTX *' to 'POINTER': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|       state->ostate[lupe] = htonl(hmac.octx.state[lupe]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  427|->   MD5_memset(&hmac, 0, sizeof(hmac));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429|   ",
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
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_saslauthd_hmac_md5_import'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/saslauthd/md5.c",
                    "line": 435,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'HMAC_MD5_CTX *' to 'POINTER': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|     unsigned lupe;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|->   MD5_memset(hmac, 0, sizeof(HMAC_MD5_CTX));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|     for (lupe = 0; lupe < 4; lupe++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|       hmac->ictx.state[lupe] = ntohl(state->istate[lupe]);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_cli.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_cli.c",
                    "line": 129,
                    "column": 25,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129 |     callbacks[0].proc = (sasl_callback_ft)&getpath;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|       /* initialize the sasl library */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       callbacks[0].id = SASL_CB_GETPATH;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|->     callbacks[0].proc = (sasl_callback_ft)&getpath;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|       callbacks[0].context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|       callbacks[1].id = SASL_CB_LIST_END;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_cli.c",
                    "line": 162,
                    "column": 29,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162 |         callbacks[1].proc = (sasl_callback_ft)&get_user;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|           callbacks[1].id = SASL_CB_AUTHNAME;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|->         callbacks[1].proc = (sasl_callback_ft)&get_user;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|           callbacks[2].id = SASL_CB_PASS;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_cli.c",
                    "line": 165,
                    "column": 29,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(sasl_conn_t *, void *, int,  sasl_secret_t **)' {aka 'int (*)(struct sasl_conn *, void *, int,  struct sasl_secret **)'} to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165 |         callbacks[2].proc = (sasl_callback_ft)&get_pass;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_cli.c",
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
                    "message": "  163|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|           callbacks[2].id = SASL_CB_PASS;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|->         callbacks[2].proc = (sasl_callback_ft)&get_pass;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_srv.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_srv.c",
                    "line": 101,
                    "column": 27,
                    "event": "warning[-Wpointer-sign]",
                    "message": "pointer targets in passing argument 2 of 'parse_cb' differ in signedness",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |             parse_cb(&cb, cb_buf, 256, optarg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           unsigned char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_srv.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_common.h",
                    "line": 19,
                    "column": 49,
                    "event": "note",
                    "message": "expected 'char *' but argument is of type 'unsigned char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | void parse_cb(sasl_channel_binding_t *cb, char *buf, unsigned max, char *in);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|           switch (c) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|           case 'c':",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->             parse_cb(&cb, cb_buf, 256, optarg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|           case 'z':",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_srv.c",
                    "line": 121,
                    "column": 25,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121 |     callbacks[0].proc = (sasl_callback_ft)&getpath;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|       /* initialize the sasl library */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|       callbacks[0].id = SASL_CB_GETPATH;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|->     callbacks[0].proc = (sasl_callback_ft)&getpath;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|       callbacks[0].context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       callbacks[1].id = SASL_CB_GETOPT;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_srv.c",
                    "line": 124,
                    "column": 25,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124 |     callbacks[1].proc = (sasl_callback_ft)&test_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/tests/t_gssapi_srv.c",
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
                    "message": "  122|       callbacks[0].context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|       callbacks[1].id = SASL_CB_GETOPT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->     callbacks[1].proc = (sasl_callback_ft)&test_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|       callbacks[1].context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|       callbacks[2].id = SASL_CB_LIST_END;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/cyrusbdb2current.c",
                    "line": 211,
                    "column": 23,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211 |     { SASL_CB_GETOPT, (int (*)(void))&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   static struct sasl_callback goodsasl_cb[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|->     { SASL_CB_GETOPT, (int (*)(void))&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|       { SASL_CB_LIST_END, NULL, NULL }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   };",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/cyrusbdb2current.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/cyrusbdb2current.c",
                    "line": 276,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'void (*)(const char *, const char *, const char *, const char *, unsigned int)' to 'void * (*)(const char *, const char *, const char *, const char *, unsigned int)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276 |     listusers(db, (listcb_t *) &listusers_cb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/cyrusbdb2current.c",
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
                    "message": "  274|       getchar();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|->     listusers(db, (listcb_t *) &listusers_cb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|       sasl_dispose(&globalconn);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/dbconverter-2.c",
                    "line": 382,
                    "column": 23,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382 |     { SASL_CB_GETOPT, (int (*)(void))&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   static struct sasl_callback goodsasl_cb[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|->     { SASL_CB_GETOPT, (int (*)(void))&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|       { SASL_CB_LIST_END, NULL, NULL }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|   };",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/dbconverter-2.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/dbconverter-2.c",
                    "line": 431,
                    "column": 19,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'void (*)(const char *, const char *, const char *, const char *, unsigned int)' to 'void * (*)(const char *, const char *, const char *, const char *, unsigned int)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431 |     listusers(db, (listcb_t *) &listusers_cb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/dbconverter-2.c",
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
                    "message": "  429|       getchar();",
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
                    "message": "  431|->     listusers(db, (listcb_t *) &listusers_cb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|       sasl_dispose(&globalconn);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/pluginviewer.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/pluginviewer.c",
                    "line": 559,
                    "column": 22,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, int,  const char *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559 |     callback->proc = (sasl_callback_ft)&sasl_my_log;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|       /* log */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|       callback->id = SASL_CB_LOG;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|->     callback->proc = (sasl_callback_ft)&sasl_my_log;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|       callback->context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|       ++callback;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/pluginviewer.c",
                    "line": 566,
                    "column": 26,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char **)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566 |         callback->proc = (sasl_callback_ft)&getpath;",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|       if (searchpath) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565|           callback->id = SASL_CB_GETPATH;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|->         callback->proc = (sasl_callback_ft)&getpath;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|           callback->context = searchpath;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568|           ++callback;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/pluginviewer.c",
                    "line": 575,
                    "column": 22,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575 |     callback->proc = (sasl_callback_ft)&plugview_sasl_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/pluginviewer.c",
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
                    "message": "  573|          on client side SASL plugins, which just never query this option */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  574|       callback->id = SASL_CB_GETOPT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  575|->     callback->proc = (sasl_callback_ft)&plugview_sasl_getopt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  576|       callback->context = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  577|       ++callback;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/sasldblistusers.c",
                    "line": 91,
                    "column": 23,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91 |     { SASL_CB_GETOPT, (sasl_callback_ft)&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
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
                    "message": "   89|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   static struct sasl_callback goodsasl_cb[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|->     { SASL_CB_GETOPT, (sasl_callback_ft)&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|       { SASL_CB_LIST_END, NULL, NULL }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   };",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 843,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "cyrus-sasl-2.1.27/utils/saslpasswd.c",
                    "line": 256,
                    "column": 23,
                    "event": "warning[-Wcast-function-type]",
                    "message": "cast between incompatible function types from 'int (*)(void *, const char *, const char *, const char **, unsigned int *)' to 'int (*)(void)'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256 |     { SASL_CB_GETOPT, (sasl_callback_ft)&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^",
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
                    "message": "  254|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|   static struct sasl_callback goodsasl_cb[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|->     { SASL_CB_GETOPT, (sasl_callback_ft)&good_getopt, NULL },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|       { SASL_CB_LIST_END, NULL, NULL }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|   };",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
