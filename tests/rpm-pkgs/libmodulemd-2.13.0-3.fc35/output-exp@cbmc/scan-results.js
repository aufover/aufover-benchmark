{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libmodulemd-2.13.0-3.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmodulemd-2.13.0-3.fc35/cbmc/output",
        "time-created": "2023-01-27 00:29:37",
        "time-finished": "2023-01-27 00:41:00",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmodulemd-2.13.0-3.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmodulemd-2.13.0-3.fc35/libmodulemd-2.13.0-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "modulemd-2.13.0/modulemd/tests/test-modulemd-validator.c",
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
        }
    ]
}
