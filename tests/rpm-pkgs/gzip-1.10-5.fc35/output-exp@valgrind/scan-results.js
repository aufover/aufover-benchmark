{
    "scan": {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gzip-1.10-5.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/valgrind/output",
        "time-created": "2021-11-29 15:51:21",
        "time-finished": "2021-11-29 15:55:53",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/valgrind/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/gzip-1.10-5.fc35/gzip-1.10-5.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211129.155004.g06eb34a.ldpwrap-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gzip-1.10/lib/savedir.c",
                    "line": 179,
                    "column": 20,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179 |   name_space[used] = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|       name_space = xrealloc (name_space, used + 1);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|->   name_space[used] = '\\0';",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|     return name_space;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   }",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
