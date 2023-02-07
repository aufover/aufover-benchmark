{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "authselect-1.2.4-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/authselect-1.2.4-2.fc35/valgrind/output",
        "time-created": "2022-11-23 21:44:21",
        "time-finished": "2022-11-23 21:55:04",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/authselect-1.2.4-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/authselect-1.2.4-2.fc35/authselect-1.2.4-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "authselect-1.2.4/src/lib/util/template.c",
                    "line": 403,
                    "column": 19,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'if_true' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403 |         *_if_true = if_true;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|       if (_if_true != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|->         *_if_true = if_true;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|           free(if_true);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "authselect-1.2.4/src/lib/util/template.c",
                    "line": 409,
                    "column": 20,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'if_false' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409 |         *_if_false = if_false;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|       if (_if_false != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|->         *_if_false = if_false;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|           free(if_false);",
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
                    "file_name": "authselect-1.2.4/src/lib/util/template.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'template_process_matches'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/lib/util/template.c",
                    "line": 415,
                    "column": 17,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'value' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415 |         *_value = value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|       if (_value != NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|->         *_value = value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|           free(value);",
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
                    "file_name": "./test_util_template",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4891",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/tests/../lib/util/string_array.c",
                    "line": 81,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "127 (64 direct, 63 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "authselect-1.2.4/src/tests/../lib/util/string_array.c",
                    "line": 81,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/tests/../lib/util/string_array.c",
                    "line": 156,
                    "event": "note",
                    "message": "called from string_array_add_value_safe()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/tests/../lib/util/template.c",
                    "line": 602,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/tests/../lib/util/template.c",
                    "line": 657,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/tests/test_util_template.c",
                    "line": 239,
                    "event": "note",
                    "message": "called from test_template_list_features()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libcmocka.so.0.7.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libcmocka.so.0.7.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from _cmocka_run_group_tests()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "authselect-1.2.4/src/tests/test_util_template.c",
                    "line": 370,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|->     reallocated = realloc_array(array, char *, num_items + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       if (reallocated == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|           string_array_free(array);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
