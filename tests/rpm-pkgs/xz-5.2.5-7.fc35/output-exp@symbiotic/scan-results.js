{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "xz-5.2.5-7.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/xz-5.2.5-7.fc35/symbiotic/output",
        "time-created": "2023-01-30 00:49:59",
        "time-finished": "2023-01-30 01:48:08",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/xz-5.2.5-7.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/xz-5.2.5-7.fc35/xz-5.2.5-7.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 134,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "xz-5.2.5/src/xz/message.c",
                    "line": 729,
                    "column": 20,
                    "event": "warning[-Wformat-nonliteral]",
                    "message": "format string is not a string literal",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                vfprintf(stderr, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  727|   \t\t// a space before a colon.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  728|   \t\tfprintf(stderr, _(\"%s: \"), progname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  729|-> \t\tvfprintf(stderr, fmt, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  730|   \t\tfputc('\\n', stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
