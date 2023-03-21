{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libsolv-0.7.19-3.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsolv-0.7.19-3.fc35/cbmc/output",
        "time-created": "2023-01-26 16:16:13",
        "time-finished": "2023-01-26 16:21:19",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsolv-0.7.19-3.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsolv-0.7.19-3.fc35/libsolv-0.7.19-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 610,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610 | void solv_SHA256_Final(sha2_byte digest[], SHA256_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 76,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[32]' {aka 'unsigned char[32]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | void solv_SHA256_Final(uint8_t[SHA256_DIGEST_LENGTH], SHA256_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|-> void solv_SHA256_Final(sha2_byte digest[], SHA256_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|   \tsha2_word32\t*d = (sha2_word32*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 907,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907 | void solv_SHA512_Final(sha2_byte digest[], SHA512_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 84,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[64]' {aka 'unsigned char[64]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 | void solv_SHA512_Final(uint8_t[SHA512_DIGEST_LENGTH], SHA512_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  905|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  906|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907|-> void solv_SHA512_Final(sha2_byte digest[], SHA512_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  908|   \tsha2_word64\t*d = (sha2_word64*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  909|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 951,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  951 | void solv_SHA384_Final(sha2_byte digest[], SHA384_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 80,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[48]' {aka 'unsigned char[48]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | void solv_SHA384_Final(uint8_t[SHA384_DIGEST_LENGTH], SHA384_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  951|-> void solv_SHA384_Final(sha2_byte digest[], SHA384_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  952|   \tsha2_word64\t*d = (sha2_word64*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  953|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 996,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996 | void solv_SHA224_Final(sha2_byte digest[], SHA224_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 72,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[28]' {aka 'unsigned char[28]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 | void solv_SHA224_Final(uint8_t[SHA224_DIGEST_LENGTH], SHA224_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "message": "  994|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|-> void solv_SHA224_Final(sha2_byte digest[], SHA224_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|   \tsha2_word32\t*d = (sha2_word32*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
