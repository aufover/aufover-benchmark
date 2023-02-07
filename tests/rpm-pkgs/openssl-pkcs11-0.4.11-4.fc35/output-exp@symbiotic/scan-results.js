{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-pkcs11-0.4.11-4.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/symbiotic/output",
        "time-created": "2023-01-29 21:15:16",
        "time-finished": "2023-01-29 21:22:42",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/openssl-pkcs11-0.4.11-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 252,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_sign' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        rc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 470,
                    "column": 1,
                    "event": "note",
                    "message": "'PKCS11_sign' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "P11_DEPRECATED_FUNC extern int PKCS11_sign(int type,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 432,
                    "column": 2,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED_FUNC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        P11_DEPRECATED(\"This function will be removed in libp11 0.5.0\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 423,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define P11_DEPRECATED(msg) __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
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
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 261,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_private_decrypt' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        rc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 494,
                    "column": 1,
                    "event": "note",
                    "message": "'PKCS11_private_decrypt' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "P11_DEPRECATED_FUNC extern int PKCS11_private_decrypt(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 432,
                    "column": 2,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED_FUNC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        P11_DEPRECATED(\"This function will be removed in libp11 0.5.0\")",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 423,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define P11_DEPRECATED(msg) __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
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
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "note",
                    "message": "Additional Info: address: 255:24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 81,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 85,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 90,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 95,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [0xff|7 times 0x0] (i64: 255)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 95,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \tslot = PKCS11_find_token(ctx, slots, nslots);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   \terror_queue(\"PKCS11_find_token\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|-> \tCHECK_ERR(!slot || !slot->token, \"no token available\", 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tprintf(\"Slot manufacturer......: %s\\n\", slot->manufacturer);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 260,
                    "column": 2,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_SignInit(ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 500,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignInit(a,b)               EVP_DigestInit(a,b)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|-> \tEVP_SignInit(ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   #define TEST_DATA \"test data\"",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/fork-change-slot.c",
                    "line": 273,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 500,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignInit(a,b)               EVP_DigestInit(a,b)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|->     EVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|       if (EVP_SignUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|           error_queue(\"EVP_SignUpdate\", pid);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/fork-change-slot.c",
                    "line": 294,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 503,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_VerifyInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_VerifyInit(a,b)             EVP_DigestInit(a,b)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|->     EVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       if (EVP_VerifyUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|           error_queue(\"EVP_VerifyUpdate\", pid);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: address: 4278190080:24",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 88,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 93,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 104,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 114,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [3 times 0x0|0xff|4 times 0x0] (i64: 4278190080)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 114,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   \tslot = PKCS11_find_token(ctx, slots, nslots);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \terror_queue(\"PKCS11_find_token\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|-> \tif (slot == NULL || slot->token == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   \t\tfprintf(stderr, \"no token available\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   \t\trc = 3;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 224,
                    "column": 2,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 500,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignInit(a,b)               EVP_DigestInit(a,b)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|-> \tEVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|   \tif (EVP_SignUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|   \t\terror_queue(\"EVP_SignUpdate\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 252,
                    "column": 2,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 503,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_VerifyInit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_VerifyInit(a,b)             EVP_DigestInit(a,b)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
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
                    "message": "  252|-> \tEVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \tif (EVP_VerifyUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \t\terror_queue(\"EVP_VerifyUpdate\");",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
