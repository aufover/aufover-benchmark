{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-pkcs11-0.4.11-4.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/cbmc/output",
        "time-created": "2023-01-26 11:29:34",
        "time-finished": "2023-01-26 11:36:16",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/openssl-pkcs11-0.4.11-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 252,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_sign' is deprecated: This function will be removed in libp11 0.5.0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252 |         rc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 470,
                    "column": 32,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470 | P11_DEPRECATED_FUNC extern int PKCS11_sign(int type,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
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
                    "message": "  250|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \trc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \t\tsignature, &siglen, authkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \tif (rc != 1) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 261,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_private_decrypt' is deprecated: This function will be removed in libp11 0.5.0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261 |         rc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 494,
                    "column": 32,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494 | P11_DEPRECATED_FUNC extern int PKCS11_private_decrypt(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
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
                    "message": "  259|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|-> \trc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   \t\t\tdecrypted, authkey, RSA_PKCS1_PADDING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|   \tif (rc != RANDOM_SIZE) {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
