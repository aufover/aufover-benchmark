{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libldb-2.4.0-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libldb-2.4.0-2.fc35/cbmc/output",
        "time-created": "2023-01-28 03:30:39",
        "time-finished": "2023-01-28 05:56:47",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libldb-2.4.0-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libldb-2.4.0-2.fc35/libldb-2.4.0-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘ldb_init’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 120,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120 |                 tevent_loop_allow_nesting(ev_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb.h",
                    "line": 51,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb_private.h",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \t\ttevent_set_debug(ev_ctx, ldb_tevent_debug, ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|-> \t\ttevent_loop_allow_nesting(ev_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   ",
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
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘ldb_handle_new’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 751,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751 |                 tevent_loop_allow_nesting(h->event_context);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb.h",
                    "line": 51,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb_private.h",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   \t\ttevent_set_debug(h->event_context, ldb_tevent_debug, ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|-> \t\ttevent_loop_allow_nesting(h->event_context);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753|   ",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_search_against_transaction’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 1646,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1644|   \tstruct ldb_dn *base_search_dn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1645|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1647|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1648|   \tbase_search_dn",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_modify_during_search’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 1965,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1965 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1963|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1964|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1965|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1966|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1967|   \tctx.basedn",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_modify_during_whole_search’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 2205,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2205 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2203|   \tstruct ldb_result *res2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2204|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2205|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2206|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2207|   \tctx.basedn",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_callback_modify_during_search’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 2689,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2689 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
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
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option ‘-Wno-unknown-warning-option’ may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2687|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2688|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2689|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2690|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2691|   \tctx.basedn",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
