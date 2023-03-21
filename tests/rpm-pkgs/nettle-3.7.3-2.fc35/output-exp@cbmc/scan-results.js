{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "nettle-3.7.3-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/nettle-3.7.3-2.fc35/cbmc/output",
        "time-created": "2023-01-26 23:34:48",
        "time-finished": "2023-01-27 00:14:13",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/nettle-3.7.3-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/nettle-3.7.3-2.fc35/nettle-3.7.3-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 68,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'time_cmac'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/cmac.h",
                    "line": 54,
                    "column": 29,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'key' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 | #define cmac_aes128_set_key nettle_cmac_aes128_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 437,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'cmac_aes128_set_key'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437 |   cmac_aes128_set_key (&ctx, key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/cmac.h",
                    "line": 54,
                    "column": 29,
                    "event": "note",
                    "message": "by argument 2 of type 'const uint8_t *' {aka 'const unsigned char *'} to 'nettle_cmac_aes128_set_key' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 | #define cmac_aes128_set_key nettle_cmac_aes128_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/cmac.h",
                    "line": 197,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'cmac_aes128_set_key'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 | cmac_aes128_set_key(struct cmac_aes128_ctx *ctx, const uint8_t *key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 435,
                    "column": 11,
                    "event": "note",
                    "message": "'key' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435 |   uint8_t key[16];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   #define cmac128_update nettle_cmac128_update",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   #define cmac128_digest nettle_cmac128_digest",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|-> #define cmac_aes128_set_key nettle_cmac_aes128_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   #define cmac_aes128_update nettle_cmac_aes128_update",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|   #define cmac_aes128_digest nettle_cmac_aes128_digest",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "Assembler messages",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 2,
                    "event": "Error",
                    "message": "alignment not a power of 2",
                    "verbosity_level": 0
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "Assembler messages",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 4,
                    "event": "Error",
                    "message": "unknown pseudo-op: `.def'",
                    "verbosity_level": 0
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "Assembler messages",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 4,
                    "event": "Error",
                    "message": "unrecognized symbol type \"\"",
                    "verbosity_level": 0
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
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 5,
                    "event": "Error",
                    "message": "unknown pseudo-op: `.scl'",
                    "verbosity_level": 0
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
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 6,
                    "event": "Error",
                    "message": "Missing symbol name in directive",
                    "verbosity_level": 0
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
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 6,
                    "event": "Error",
                    "message": "unrecognized symbol type \"32\"",
                    "verbosity_level": 0
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
                    "file_name": "nettle-3.7.3/conftest.s",
                    "line": 7,
                    "event": "Error",
                    "message": "unknown pseudo-op: `.endef'",
                    "verbosity_level": 0
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 69,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'time_poly1305_aes'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/poly1305.h",
                    "line": 45,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'key' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45 | #define poly1305_aes_set_key nettle_poly1305_aes_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 454,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'poly1305_aes_set_key'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454 |   poly1305_aes_set_key (&ctx, key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/poly1305.h",
                    "line": 45,
                    "column": 30,
                    "event": "note",
                    "message": "by argument 2 of type 'const uint8_t *' {aka 'const unsigned char *'} to 'nettle_poly1305_aes_set_key' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45 | #define poly1305_aes_set_key nettle_poly1305_aes_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/poly1305.h",
                    "line": 92,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'poly1305_aes_set_key'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 | poly1305_aes_set_key (struct poly1305_aes_ctx *ctx, const uint8_t *key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 452,
                    "column": 11,
                    "event": "note",
                    "message": "'key' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452 |   uint8_t key[32];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
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
                    "message": "   43|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   /* Name mangling */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|-> #define poly1305_aes_set_key nettle_poly1305_aes_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   #define poly1305_aes_set_nonce nettle_poly1305_aes_set_nonce",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   #define poly1305_aes_update nettle_poly1305_aes_update",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "nettle-3.7.3/testsuite/ecdh-test.c",
                    "line": 141,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'test_public_key' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141 | test_public_key (const char *label, const struct ecc_curve *ecc,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
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
                    "message": "  139|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   static void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|-> test_public_key (const char *label, const struct ecc_curve *ecc,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|                    const char *x, const char *y, int expect_success)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|   {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 67,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'time_umac'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/umac.h",
                    "line": 42,
                    "column": 25,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'key' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define umac32_set_key  nettle_umac32_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 395,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'umac32_set_key'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395 |   umac32_set_key (&ctx32, key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/umac.h",
                    "line": 42,
                    "column": 25,
                    "event": "note",
                    "message": "by argument 2 of type 'const uint8_t *' {aka 'const unsigned char *'} to 'nettle_umac32_set_key' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define umac32_set_key  nettle_umac32_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/umac.h",
                    "line": 134,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'umac32_set_key'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134 | umac32_set_key (struct umac32_ctx *ctx, const uint8_t *key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 393,
                    "column": 11,
                    "event": "note",
                    "message": "'key' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393 |   uint8_t key[16];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   /* Namespace mangling */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define umac32_set_key  nettle_umac32_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #define umac64_set_key  nettle_umac64_set_key",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #define umac96_set_key  nettle_umac96_set_key",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
