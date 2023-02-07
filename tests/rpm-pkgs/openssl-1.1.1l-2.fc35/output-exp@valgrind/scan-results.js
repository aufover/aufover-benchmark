{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-1.1.1l-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-1.1.1l-2.fc35/valgrind/output",
        "time-created": "2022-11-25 00:08:19",
        "time-finished": "2022-11-25 00:34:03",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-1.1.1l-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-1.1.1l-2.fc35/openssl-1.1.1l-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/crypto/ec/curve448/f_generic.c",
                    "line": 21,
                    "column": 27,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'uint8_t[56]' {aka 'unsigned char[56]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21 | void gf_serialize(uint8_t serial[SER_BYTES], const gf x, int with_hibit)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~~~~^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/ec/curve448/f_generic.c",
                    "line": 12,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/ec/curve448/field.h",
                    "line": 65,
                    "column": 28,
                    "event": "note",
                    "message": "previously declared as 'uint8_t *' {aka 'unsigned char *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65 | void gf_serialize(uint8_t *serial, const gf x, int with_highbit);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   /* Serialize to wire format. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|-> void gf_serialize(uint8_t serial[SER_BYTES], const gf x, int with_hibit)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|       unsigned int j = 0, fill = 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips.c",
                    "line": 443,
                    "column": 33,
                    "event": "warning[-Wlto-type-mismatch]",
                    "message": "type of 'OPENSSL_ia32cap_P' does not match original declaration",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443 |             extern unsigned int OPENSSL_ia32cap_P[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/cryptlib.c",
                    "line": 19,
                    "column": 21,
                    "event": "note",
                    "message": "array types have different bounds",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19 | extern unsigned int OPENSSL_ia32cap_P[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/cryptlib.c",
                    "line": 19,
                    "column": 21,
                    "event": "note",
                    "message": "'OPENSSL_ia32cap_P' was previously declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|   # ifdef OPENSSL_IA32_SSE2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|->             extern unsigned int OPENSSL_ia32cap_P[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|               if ((OPENSSL_ia32cap_P[0] & (1 << 25 | 1 << 26)) !=",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|                   (1 << 25 | 1 << 26)) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'FIPS_drbg_health_check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_locl.h",
                    "line": 62,
                    "column": 43,
                    "event": "warning[-Wunused-value]",
                    "message": "statement with no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62 | # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 762,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'fips_post_started'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762 |     fips_post_started(FIPS_TEST_DRBG, dctx->type, &dctx->xflags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|                   goto err",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|-> # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_locl.h",
                    "line": 63,
                    "column": 43,
                    "event": "warning[-Wunused-value]",
                    "message": "statement with no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 769,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'fips_post_success'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769 |         fips_post_success(FIPS_TEST_DRBG, dctx->type, &dctx->xflags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   # define fips_post_corrupt(id, subid, ex) 1",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_locl.h",
                    "line": 64,
                    "column": 42,
                    "event": "warning[-Wunused-value]",
                    "message": "statement with no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64 | # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 771,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'fips_post_failed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771 |         fips_post_failed(FIPS_TEST_DRBG, dctx->type, &dctx->xflags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|-> # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   # define fips_post_corrupt(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   # define fips_post_status() 1",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "crypto/fips/fips_standalone_hmac",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 56355 with arguments: /builddir/build/BUILDROOT/openssl-1.1.1l-2.fc35.x86_64/usr/lib64/libcrypto.so.1.1.1l",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/mem.c",
                    "line": 230,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "536 (32 direct, 504 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/mem.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/hmac/hmac.c",
                    "line": 144,
                    "event": "note",
                    "message": "called from HMAC_CTX_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_standalone_hmac.c",
                    "line": 85,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|   void *CRYPTO_zalloc(size_t num, const char *file, int line)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|->     void *ret = CRYPTO_malloc(num, file, line);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|       FAILTEST();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 590,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/crypto/mem.c",
                    "line": 312,
                    "column": 5,
                    "event": "warning[-Wfree-nonheap-object]",
                    "message": "'free' called on unallocated object 'recp'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312 |     free(str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/mem.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'BN_mod_exp_recp'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/bn/bn_exp.c",
                    "line": 169,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169 |     BN_RECP_CTX recp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|->     free(str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/ssl/ssl_ciph.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'ssl_create_cipher_list'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/ssl/ssl_ciph.c",
                    "line": 1474,
                    "column": 19,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "initialization discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474 |         char *p = rule_str + 14;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1472|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1473|       if (rule_str != NULL && strncmp(rule_str, \"PROFILE=SYSTEM\", 14) == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474|->         char *p = rule_str + 14;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1475|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1476|           new_rules = load_system_str(p);",
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
                    "file_name": "openssl-1.1.1l/test/cipherlist_test.c",
                    "line": 197,
                    "column": 12,
                    "event": "warning[-Wunused-function]",
                    "message": "'test_default_cipherlist_implicit' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 | static int test_default_cipherlist_implicit(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|       EXECUTE_TEST(execute_test, tear_down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|-> static int test_default_cipherlist_implicit(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|       SETUP_CIPHERLIST_TEST_FIXTURE();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 150,
                    "column": 15,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'P_160'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|       BIGNUM *p = NULL, *a = NULL, *b = NULL, *scalar3 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|       EC_GROUP *group = NULL, *tmp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|->     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                *P_256 = NULL, *P_384 = NULL, *P_521 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|       EC_POINT *P = NULL, *Q = NULL, *R = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 150,
                    "column": 30,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'P_192'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|       BIGNUM *p = NULL, *a = NULL, *b = NULL, *scalar3 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|       EC_GROUP *group = NULL, *tmp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|->     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                *P_256 = NULL, *P_384 = NULL, *P_521 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|       EC_POINT *P = NULL, *Q = NULL, *R = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 156,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'buf' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156 |     unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|       const EC_POINT *points[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|       const BIGNUM *scalars[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|->     unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|       size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|       int k;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 157,
                    "column": 12,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'len'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157 |     size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|       const BIGNUM *scalars[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|       unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|->     size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|       int k;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   ",
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
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'prime_field_tests'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 158,
                    "column": 9,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'k'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158 |     int k;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|       unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|       size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|->     int k;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|       if (!TEST_ptr(ctx = BN_CTX_new())",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
