{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libmodulemd-2.13.0-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmodulemd-2.13.0-3.fc35/valgrind/output",
        "time-created": "2022-11-23 19:43:07",
        "time-finished": "2022-11-23 19:52:38",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmodulemd-2.13.0-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmodulemd-2.13.0-3.fc35/libmodulemd-2.13.0-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
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
                    "file_name": "modulemd-2.13.0/modulemd/tests/test-modulemd-validator.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_exit_code’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/modulemd/tests/test-modulemd-validator.c",
                    "line": 136,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘g_spawn_check_exit_status’ is deprecated: Use 'g_spawn_check_wait_status' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136 |   g_spawn_check_exit_status (validator_exit_status, &error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 81,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/modulemd/tests/test-modulemd-validator.c",
                    "line": 14,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gspawn.h",
                    "line": 280,
                    "column": 10,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280 | gboolean g_spawn_check_exit_status (gint      wait_status,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|     g_autoptr (GError) error = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|     g_autofree gchar *message = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|->   g_spawn_check_exit_status (validator_exit_status, &error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|     message = g_strdup_printf (\"exit code was %d\", expected_exit_code);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|     if (0 == expected_exit_code)",
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
                    "file_name": "modulemd/modulemd-validator",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5571 with arguments: /builddir/build/BUILD/modulemd-2.13.0/redhat-linux-build/../modulemd/tests/test_data/invalid_defaults.yaml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-defaults-v1.c",
                    "line": 564,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "660 (64 direct, 596 indirect) bytes in 1 blocks are definitely lost in loss record 293 of 298",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_valist()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-defaults-v1.c",
                    "line": 564,
                    "event": "note",
                    "message": "called from modulemd_defaults_v1_parse_yaml()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-module-index.c",
                    "line": 217,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-module-index.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from modulemd_module_index_update_from_parser()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-module-index.c",
                    "line": 638,
                    "event": "note",
                    "message": "called from modulemd_module_index_update_from_file_ext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-validator.c",
                    "line": 375,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "modulemd-2.13.0/redhat-linux-build/../modulemd/modulemd-validator.c",
                    "line": 473,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  562|      * constructed object.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563|      */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|->   defaults = modulemd_defaults_v1_new (DEFAULT_PLACEHOLDER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|     YAML_PARSER_PARSE_WITH_EXIT (&parser, &event, error);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
