{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libtasn1-4.16.0-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtasn1-4.16.0-6.fc35/cbmc/output",
        "time-created": "2023-01-26 16:21:40",
        "time-finished": "2023-01-26 16:38:25",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtasn1-4.16.0-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtasn1-4.16.0-6.fc35/libtasn1-4.16.0-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "libtasn1-4.16.0/lib/element.c",
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
