{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libtasn1-4.16.0-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtasn1-4.16.0-6.fc35/valgrind/output",
        "time-created": "2022-11-23 15:44:53",
        "time-finished": "2022-11-23 15:53:09",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtasn1-4.16.0-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtasn1-4.16.0-6.fc35/libtasn1-4.16.0-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "libtasn1-4.16.0/lib/element.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_asn1_append_sequence_set'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libtasn1-4.16.0/lib/element.c",
                    "line": 186,
                    "column": 7,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'_asn1_ltostr' accessing 22 bytes in a region of size 21",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186 |       _asn1_ltostr (n, temp + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libtasn1-4.16.0/lib/element.c",
                    "line": 186,
                    "column": 7,
                    "event": "note",
                    "message": "referencing argument 2 of type 'char *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libtasn1-4.16.0/lib/element.c",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libtasn1-4.16.0/lib/parser_aux.h",
                    "line": 70,
                    "column": 7,
                    "event": "note",
                    "message": "in a call to function '_asn1_ltostr'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | char *_asn1_ltostr (int64_t v, char str[LTOSTR_MAX_SIZE]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|         n++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|         temp[0] = '?';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|->       _asn1_ltostr (n, temp + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|     _asn1_set_name (p2, temp);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
