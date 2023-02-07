{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "lmdb-0.9.29-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/lmdb-0.9.29-2.fc35/cbmc/output",
        "time-created": "2023-01-26 07:18:12",
        "time-finished": "2023-01-26 07:23:48",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/lmdb-0.9.29-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/lmdb-0.9.29-2.fc35/lmdb-0.9.29-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "openldap-LMDB_0.9.29-8ad7be2510414b9506ec9f9e24f24d04d9b04a1a/libraries/liblmdb/mdb_dump.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openldap-LMDB_0.9.29-8ad7be2510414b9506ec9f9e24f24d04d9b04a1a/libraries/liblmdb/mdb_dump.c",
                    "line": 194,
                    "column": 30,
                    "event": "warning[-Wimplicit-fallthrough=]",
                    "message": "this statement may fall through",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 |                         list = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openldap-LMDB_0.9.29-8ad7be2510414b9506ec9f9e24f24d04d9b04a1a/libraries/liblmdb/mdb_dump.c",
                    "line": 196,
                    "column": 17,
                    "event": "note",
                    "message": "here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196 |                 case 'a':",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openldap-LMDB_0.9.29-8ad7be2510414b9506ec9f9e24f24d04d9b04a1a/libraries/liblmdb/mdb_dump.c",
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
                    "message": "  192|   \t\t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   \t\tcase 'l':",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|-> \t\t\tlist = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|   \t\t\t/*FALLTHROUGH*/;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   \t\tcase 'a':",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
