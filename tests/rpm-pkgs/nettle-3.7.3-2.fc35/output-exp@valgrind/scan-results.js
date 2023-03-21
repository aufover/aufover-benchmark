{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "nettle-3.7.3-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/nettle-3.7.3-2.fc35/valgrind/output",
        "time-created": "2022-11-23 19:06:47",
        "time-finished": "2022-11-23 19:18:36",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/nettle-3.7.3-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/nettle-3.7.3-2.fc35/nettle-3.7.3-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'time_umac'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/examples/nettle-benchmark.c",
                    "line": 395,
                    "column": 3,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'key' may be used uninitialized",
                    "verbosity_level": 0
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
                    "message": "      |   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/umac.h",
                    "line": 134,
                    "column": 1,
                    "event": "note",
                    "message": "by argument 2 of type 'const uint8_t *' to 'nettle_umac32_set_key' declared here",
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
                    "message": "      | ^",
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
                    "message": "      |           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|     uint8_t key[16];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|->   umac32_set_key (&ctx32, key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|     info.ctx = &ctx32;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|     info.update = (nettle_hash_update_func *) umac32_update;",
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
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "nettle-3.7.3/testsuite/x86-ibt-test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'segfault_handler'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "nettle-3.7.3/testsuite/x86-ibt-test.c",
                    "line": 7,
                    "column": 22,
                    "event": "warning[-Wunused-parameter]",
                    "message": "unused parameter 'signo'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    7 | segfault_handler(int signo)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    5|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    6|   static void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    7|-> segfault_handler(int signo)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    9|     exit(0);",
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
                    "file_name": "nettle-3.7.3/umac.h",
                    "line": 42,
                    "column": 25,
                    "event": "note",
                    "message": "by argument 2 of type 'const uint8_t *' to 'nettle_umac32_set_key' declared here",
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
