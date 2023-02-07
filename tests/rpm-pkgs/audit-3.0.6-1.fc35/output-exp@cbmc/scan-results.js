{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "audit-3.0.6-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/audit-3.0.6-1.fc35/cbmc/output",
        "time-created": "2023-01-27 00:23:14",
        "time-finished": "2023-01-27 00:29:17",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/audit-3.0.6-1.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/audit-3.0.6-1.fc35/audit-3.0.6-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'submission_thread_main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 106,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'volatile ZOS_REMOTE *' to 'ZOS_REMOTE *': disregarding volatile",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|           log_debug(\"Starting event submission thread\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->         rc = zos_remote_init(&zos_remote_inst, conf.server, ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|                             conf.port, conf.user,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|                             conf.password,",
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
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'submission_thread_main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 106,
                    "column": 30,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "passing argument 1 of 'zos_remote_init' discards 'volatile' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |         rc = zos_remote_init(&zos_remote_inst, conf.server,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-log.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-ldap.h",
                    "line": 297,
                    "column": 21,
                    "event": "note",
                    "message": "expected 'ZOS_REMOTE *' {aka 'struct opaque *'} but argument is of type 'volatile ZOS_REMOTE *' {aka 'volatile struct opaque *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297 | int zos_remote_init(ZOS_REMOTE *, const char *, int, const char *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|           log_debug(\"Starting event submission thread\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->         rc = zos_remote_init(&zos_remote_inst, conf.server, ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|                             conf.port, conf.user,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|                             conf.password,",
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
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'submission_thread_main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 128,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'volatile ZOS_REMOTE *' to 'ZOS_REMOTE *': disregarding volatile",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                   debug_ber(ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->                 rc = submit_request_s(&zos_remote_inst, ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                   if (rc == ICTX_E_FATAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                           log_err(\"Error - Fatal error in event submission. Aborting\");",
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
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 128,
                    "column": 39,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "passing argument 1 of 'submit_request_s' discards 'volatile' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128 |                 rc = submit_request_s(&zos_remote_inst, ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-log.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-ldap.h",
                    "line": 309,
                    "column": 22,
                    "event": "note",
                    "message": "expected 'ZOS_REMOTE *' {aka 'struct opaque *'} but argument is of type 'volatile ZOS_REMOTE *' {aka 'volatile struct opaque *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309 | int submit_request_s(ZOS_REMOTE *, BerElement *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|                   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|                   debug_ber(ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->                 rc = submit_request_s(&zos_remote_inst, ber);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                   if (rc == ICTX_E_FATAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|                           log_err(\"Error - Fatal error in event submission. Aborting\");",
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
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'submission_thread_main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 141,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'volatile ZOS_REMOTE *' to 'ZOS_REMOTE *': disregarding volatile",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|           log_debug(\"Stopping event submission thread\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|->         zos_remote_destroy(&zos_remote_inst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           return 0;",
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
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 141,
                    "column": 28,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "passing argument 1 of 'zos_remote_destroy' discards 'volatile' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141 |         zos_remote_destroy(&zos_remote_inst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-log.h",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
                    "line": 44,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-ldap.h",
                    "line": 303,
                    "column": 25,
                    "event": "note",
                    "message": "expected 'ZOS_REMOTE *' {aka 'struct opaque *'} but argument is of type 'volatile ZOS_REMOTE *' {aka 'volatile struct opaque *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | void zos_remote_destroy(ZOS_REMOTE *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/audisp/plugins/zos-remote/zos-remote-plugin.c",
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
                    "message": "  139|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|           log_debug(\"Stopping event submission thread\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|->         zos_remote_destroy(&zos_remote_inst);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           return 0;",
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
                    "file_name": "audit-3.0.6/auparse/interpret.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_interpret'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/auparse/interpret.c",
                    "line": 3009,
                    "column": 22,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "initialization discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3009 |         nvlist *nv = &r->nv;",
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
                    "file_name": "audit-3.0.6/auparse/interpret.c",
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
                    "message": " 3007|   const char *do_interpret(const rnode *r, auparse_esc_t escape_mode)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3008|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3009|-> \tnvlist *nv = &r->nv;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3010|   \tint type;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3011|   \tidata id;",
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
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'auparse_callback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 294,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294 |     result = PyEval_CallObject(cb->func, arglist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 2,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "message": "  293|       arglist = Py_BuildValue(\"OiO\", cb->py_AuParser, cb_event_type, cb->user_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|->     result = PyEval_CallObject(cb->func, arglist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       Py_DECREF(arglist);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|       Py_XDECREF(result);",
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
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'AuParser_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 375,
                    "column": 31,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375 |                 if ((files[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|               for (i = 0; i < n; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|                   item = PySequence_GetItem(source, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|->                 if ((files[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                       PyErr_SetString(PyExc_ValueError, \"members of source sequence must be a string when source_type is AUSOURCE_FILE_ARRAY\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|                       Py_DECREF(item);",
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
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
                    "line": 418,
                    "column": 33,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418 |                 if ((buffers[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/bindings/python/auparse_python.c",
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
                    "message": "  416|               for (i = 0; i < n; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|                   item = PySequence_GetItem(source, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|->                 if ((buffers[i] = PYSTR_ASSTRING(item)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|                       PyErr_SetString(PyExc_ValueError, \"members of source sequence must be a string when source_type is AUSOURCE_BUFFER_ARRAY\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|                       Py_DECREF(item);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "audit-3.0.6/lib/gen_tables.c",
                    "line": 89,
                    "column": 22,
                    "event": "warning[-Woverflow]",
                    "message": "overflow in conversion from 'long long unsigned int' to 'int' changes value from '4294967296' to '0'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 | #define _S(VAL, S) { (VAL), (S), 0, 0 },",
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
                    "file_name": "audit-3.0.6/auparse/clone-flagtab.h",
                    "line": 47,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro '_S'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47 | _S(0x100000000ULL,      \"CLONE_CLEAR_SIGHAND\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~",
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
                    "message": "   87|   /* The mapping to store. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|   static struct value values[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|-> #define _S(VAL, S) { (VAL), (S), 0, 0 },",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|   #include TABLE_H",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   #undef _S",
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
                    "file_name": "audit-3.0.6/src/ausearch.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'process_stdin'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/ausearch.c",
                    "line": 524,
                    "column": 13,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'siginterrupt' is deprecated: Use sigaction with SA_RESTART instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524 |             siginterrupt(SIGALRM, 1) == -1)",
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
                    "file_name": "/usr/include/sys/param.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/ausearch.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/signal.h",
                    "line": 324,
                    "column": 12,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324 | extern int siginterrupt (int __sig, int __interrupt) __THROW",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "audit-3.0.6/src/ausearch.c",
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
                    "message": "  522|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   \tif (signal(SIGALRM, alarm_handler) == SIG_ERR ||",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524|-> \t    siginterrupt(SIGALRM, 1) == -1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|   \t\treturn -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|   ",
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
                    "file_name": "audit-3.0.6/src/libev/ev.c",
                    "line": 2146,
                    "column": 31,
                    "event": "warning",
                    "message": "'ev_default_loop_ptr' initialized and declared 'extern'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2146 |   EV_API_DECL struct ev_loop *ev_default_loop_ptr = 0; /* needs to be initialised to make it a definition despite extern */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~",
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
                    "message": " 2144|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2145|     static struct ev_loop default_loop_struct;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2146|->   EV_API_DECL struct ev_loop *ev_default_loop_ptr = 0; /* needs to be initialised to make it a definition despite extern */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2147|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2148|   #else",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
