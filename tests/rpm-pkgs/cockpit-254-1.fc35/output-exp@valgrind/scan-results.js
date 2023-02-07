{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "cockpit-254-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/cockpit-254-1.fc35/valgrind/output",
        "time-created": "2022-11-23 19:26:18",
        "time-finished": "2022-11-23 19:36:10",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/cockpit-254-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/cockpit-254-1.fc35/cockpit-254-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cockpit-254/src/common/test-jsonfds.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_unix_socket_simple'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cockpit-254/src/common/test-jsonfds.c",
                    "line": 649,
                    "column": 22,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'n_fds' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649 |   for (gint i = 0; i < nfds; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cockpit-254/src/common/test-jsonfds.c",
                    "line": 773,
                    "column": 8,
                    "event": "note",
                    "message": "'n_fds' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773 |   gint n_fds;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|     gint nfds = *inout_nfds;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649|->   for (gint i = 0; i < nfds; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|         g_assert (fds[i] != -1);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
