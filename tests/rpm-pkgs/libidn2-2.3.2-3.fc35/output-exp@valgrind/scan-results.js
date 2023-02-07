{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libidn2-2.3.2-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libidn2-2.3.2-3.fc35/valgrind/output",
        "time-created": "2022-11-23 17:30:41",
        "time-finished": "2022-11-23 17:36:08",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libidn2-2.3.2-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libidn2-2.3.2-3.fc35/libidn2-2.3.2-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libidn2-2.3.2/src/idn2.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'process_input'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libidn2-2.3.2/src/idn2.c",
                    "line": 153,
                    "column": 7,
                    "event": "warning[-Woverlength-strings]",
                    "message": "string length '28846' is greater than the length '4095' ISO C99 compilers are required to support",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153 |       puts (CONDITIONS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|     else if (strcmp (readbuf, \"show c\") == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|->       puts (CONDITIONS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|         return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|       }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
