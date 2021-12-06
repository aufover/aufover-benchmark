{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211203.134551",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "cov04.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-pkcs11-0.4.11-4.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/symbiotic/output",
        "time-created": "2021-12-04 00:53:20",
        "time-finished": "2021-12-04 00:55:22",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/openssl-pkcs11-0.4.11-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211202.081848.gd264244.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "Additional Info: address: (ReadLSB w64 0 PKCS11_find_token):(Add w64 24",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "Additional Info: (ReadLSB w64 0 PKCS11_find_token_off))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "Additional Info: example: 0:279",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "Additional Info: segment range: [0, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "Additional Info: offset range: [0, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 96,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 75,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 78,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 87,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 95,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/libp11-0.4.11/examples/auth.c:95:9 (offset): note: Non-deterministic values: PKCS11_find_token: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   \t/* get first slot with a token */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \tslot = PKCS11_find_token(ctx, slots, nslots);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|-> \tif (slot == NULL || slot->token == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   \t\tfprintf(stderr, \"no token available\\n\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   \t\trc = 3;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "Additional Info: address: (ReadLSB w64 0 PKCS11_find_token):(ReadLSB w64 0 PKCS11_find_token_off)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "Additional Info: example: 13:18446744073709551595",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "Additional Info: segment range: [13, 13]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "Additional Info: offset range: [18446744073709551592, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [13] of size 66",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 101,
                    "event": "note",
                    "message": "Additional Info: MO1[66] allocated at main():  %3 = alloca i32, align 4",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 75,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 78,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 87,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 95,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [0xd|7 times 0x0] (i64: 13)\n/builddir/build/BUILD/libp11-0.4.11/examples/auth.c:95:9 (offset): note: Non-deterministic values: PKCS11_find_token: len 8 bytes, [0xe8|7 times 0xff] (i64: -24)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \t\tgoto notoken;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tprintf(\"Slot manufacturer......: %s\\n\", slot->manufacturer);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tprintf(\"Slot description.......: %s\\n\", slot->description);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \tprintf(\"Slot token label.......: %s\\n\", slot->token->label);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 252,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_sign' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        rc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 470,
                    "column": 1,
                    "event": "note",
                    "message": "'PKCS11_sign' has been explicitly marked deprecated here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "P11_DEPRECATED_FUNC extern int PKCS11_sign(int type,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 432,
                    "column": 2,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED_FUNC'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        P11_DEPRECATED(\"This function will be removed in libp11 0.5.0\")",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 423,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define P11_DEPRECATED(msg) __attribute__ ((deprecated))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \trc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \t\tsignature, &siglen, authkey);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \tif (rc != 1) {",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 261,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_private_decrypt' is deprecated",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        rc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 494,
                    "column": 1,
                    "event": "note",
                    "message": "'PKCS11_private_decrypt' has been explicitly marked deprecated here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "P11_DEPRECATED_FUNC extern int PKCS11_private_decrypt(",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 432,
                    "column": 2,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED_FUNC'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        P11_DEPRECATED(\"This function will be removed in libp11 0.5.0\")",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 423,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'P11_DEPRECATED'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define P11_DEPRECATED(msg) __attribute__ ((deprecated))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|-> \trc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   \t\t\tdecrypted, authkey, RSA_PKCS1_PADDING);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|   \tif (rc != RANDOM_SIZE) {",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "note",
                    "message": "Additional Info: address: 71776119061217280:24",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 97,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 81,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 85,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 90,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/listkeys.c",
                    "line": 95,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [6 times 0x0|0xff|0x0] (i64: 71776119061217280)\n/builddir/build/BUILD/libp11-0.4.11/examples/listkeys.c:95:9 (offset): note: Non-deterministic values: PKCS11_find_token: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \tslot = PKCS11_find_token(ctx, slots, nslots);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   \terror_queue(\"PKCS11_find_token\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|-> \tCHECK_ERR(!slot || !slot->token, \"no token available\", 3);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tprintf(\"Slot manufacturer......: %s\\n\", slot->manufacturer);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 260,
                    "column": 2,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_SignInit(ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 500,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignInit'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignInit(a,b)               EVP_DigestInit(a,b)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|-> \tEVP_SignInit(ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   #define TEST_DATA \"test data\"",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/fork-change-slot.c",
                    "line": 273,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 500,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignInit'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignInit(a,b)               EVP_DigestInit(a,b)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|->     EVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|       if (EVP_SignUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|           error_queue(\"EVP_SignUpdate\", pid);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/fork-change-slot.c",
                    "line": 294,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 503,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_VerifyInit'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_VerifyInit(a,b)             EVP_DigestInit(a,b)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|->     EVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|       if (EVP_VerifyUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|           error_queue(\"EVP_VerifyUpdate\", pid);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: address: (ReadLSB w64 0 PKCS11_find_token):(Add w64 24",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: (ReadLSB w64 0 PKCS11_find_token_off))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: example: 0:71776119061217304",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: segment range: [0, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: offset range: [0, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 116,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 88,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 93,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 104,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 114,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/libp11-0.4.11/tests/fork-test.c:114:9 (offset): note: Non-deterministic values: PKCS11_find_token: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   \tslot = PKCS11_find_token(ctx, slots, nslots);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \terror_queue(\"PKCS11_find_token\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|-> \tif (slot == NULL || slot->token == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   \t\tfprintf(stderr, \"no token available\\n\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   \t\trc = 3;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "Additional Info: address: (ReadLSB w64 0 PKCS11_find_token):(ReadLSB w64 0 PKCS11_find_token_off)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "Additional Info: example: 12:18446744073709551596",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "Additional Info: segment range: [12, 12]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "Additional Info: offset range: [18446744073709551592, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [12] of size 168",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 121,
                    "event": "note",
                    "message": "Additional Info: MO0[168] allocated at main():  %3 = alloca i32, align 4",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 88,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 93,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_CTX_load: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 104,
                    "column": 7,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_enumerate_slots: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 300,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: fork: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 114,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: PKCS11_find_token: len 8 bytes, [0xc|7 times 0x0] (i64: 12)\n/builddir/build/BUILD/libp11-0.4.11/tests/fork-test.c:114:9 (offset): note: Non-deterministic values: PKCS11_find_token: len 8 bytes, [0xe8|7 times 0xff] (i64: -24)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \t\tgoto notoken;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|-> \tprintf(\"Slot manufacturer......: %s\\n\", slot->manufacturer);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   \tprintf(\"Slot description.......: %s\\n\", slot->description);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   \tprintf(\"Slot token label.......: %s\\n\", slot->token->label);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 224,
                    "column": 2,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 500,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignInit'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignInit(a,b)               EVP_DigestInit(a,b)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|-> \tEVP_SignInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|   \tif (EVP_SignUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|   \t\terror_queue(\"EVP_SignUpdate\");",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libp11-0.4.11/tests/fork-test.c",
                    "line": 252,
                    "column": 2,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/include/openssl/evp.h",
                    "line": 503,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_VerifyInit'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_VerifyInit(a,b)             EVP_DigestInit(a,b)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~ ~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   \t}",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \tEVP_VerifyInit(md_ctx, digest_algo);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   \tif (EVP_VerifyUpdate(md_ctx, random, RANDOM_SIZE) <= 0) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \t\terror_queue(\"EVP_VerifyUpdate\");",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
