{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "lmdb-0.9.29-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/lmdb-0.9.29-2.fc35/valgrind/output",
        "time-created": "2022-11-23 11:01:21",
        "time-finished": "2022-11-23 11:06:55",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/lmdb-0.9.29-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/lmdb-0.9.29-2.fc35/lmdb-0.9.29-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
