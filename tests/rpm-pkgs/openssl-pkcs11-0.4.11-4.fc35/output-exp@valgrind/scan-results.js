{
    "scan": {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-pkcs11-0.4.11-4.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/valgrind/output",
        "time-created": "2021-11-29 16:37:10",
        "time-finished": "2021-11-29 16:44:00",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/valgrind/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-pkcs11-0.4.11-4.fc35/openssl-pkcs11-0.4.11-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211129.160954.g74fe693.ldpwrap-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 252,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_sign' is deprecated: This function will be removed in libp11 0.5.0",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252 |         rc = PKCS11_sign(NID_sha1, random, RANDOM_SIZE,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/auth.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 470,
                    "column": 32,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470 | P11_DEPRECATED_FUNC extern int PKCS11_sign(int type,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~",
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
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 261,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PKCS11_private_decrypt' is deprecated: This function will be removed in libp11 0.5.0",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261 |         rc = PKCS11_private_decrypt(len, encrypted,",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/examples/decrypt.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/src/libp11.h",
                    "line": 494,
                    "column": 32,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494 | P11_DEPRECATED_FUNC extern int PKCS11_private_decrypt(",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~~~~~~~~~~~~~~~~",
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
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./check-privkey",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 144922 with arguments: output.144805/ec-cert.pem pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=private;pin-value=1234 /usr/lib64/pkcs11/libsofthsm2.so output.144805/engines.cnf",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/check-privkey.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "7,456 (192 direct, 7,264 indirect) bytes in 1 blocks are definitely lost in loss record 164 of 165",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/check-privkey.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tengine = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tif (engine == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t\tprintf(\"Could not get engine\\n\");",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./evp-sign",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 145468 with arguments: ctrl 1234 output.144386/engines.cnf label_server-key label_server-key /usr/lib64/pkcs11/libsofthsm2.so",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4,717 (192 direct, 4,525 indirect) bytes in 1 blocks are definitely lost in loss record 84 of 86",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|-> \te = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   \tif (e == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   \t\tdisplay_openssl_errors(__LINE__);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./evp-sign",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 144491 with arguments: ctrl false output.144386/engines.cnf pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=private;pin-value=1234 pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=public;pin-value=1234 /usr/lib64/pkcs11/libsofthsm2.so",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4,745 (192 direct, 4,553 indirect) bytes in 1 blocks are definitely lost in loss record 84 of 86",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|-> \te = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   \tif (e == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   \t\tdisplay_openssl_errors(__LINE__);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./evp-sign",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 145205 with arguments: ctrl 1234 output.144389/engines.cnf label_server-key label_server-key /usr/lib64/pkcs11/libsofthsm2.so",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5,789 (192 direct, 5,597 indirect) bytes in 1 blocks are definitely lost in loss record 124 of 125",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|-> \te = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   \tif (e == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   \t\tdisplay_openssl_errors(__LINE__);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./evp-sign",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 144610 with arguments: ctrl false output.144389/engines.cnf pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=private;pin-value=1234 pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=public;pin-value=1234 /usr/lib64/pkcs11/libsofthsm2.so",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5,817 (192 direct, 5,625 indirect) bytes in 1 blocks are definitely lost in loss record 124 of 125",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/evp-sign.c",
                    "line": 199,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|-> \te = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   \tif (e == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   \t\tdisplay_openssl_errors(__LINE__);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libp11-0.4.11/tests/list-tokens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/list-tokens.c",
                    "line": 42,
                    "column": 22,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'certs'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 |         PKCS11_CERT *certs;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   \tPKCS11_CTX *ctx;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tPKCS11_SLOT *slots, *slot;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> \tPKCS11_CERT *certs;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   \tint rc = 0, token_found = 0;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./rsa-oaep",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 144758 with arguments: 1234 output.144743/engines.cnf pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=private;pin-value=1234 pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=public;pin-value=1234 /usr/lib64/pkcs11/libsofthsm2.so",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/rsa-oaep.c",
                    "line": 110,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4,745 (192 direct, 4,553 indirect) bytes in 1 blocks are definitely lost in loss record 80 of 82",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/rsa-oaep.c",
                    "line": 110,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|-> \te = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|   \tif (e == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \t\tdisplay_openssl_errors(__LINE__);",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./rsa-pss-sign",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 144464 with arguments: 1234 output.144385/engines.cnf pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=private;pin-value=1234 pkcs11:token=libp11-test;id=%01%02%03%04;object=server-key;type=public;pin-value=1234 /usr/lib64/pkcs11/libsofthsm2.so",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/rsa-pss-sign.c",
                    "line": 111,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4,745 (192 direct, 4,553 indirect) bytes in 1 blocks are definitely lost in loss record 80 of 82",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_new()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from ENGINE_by_id()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libp11-0.4.11/tests/rsa-pss-sign.c",
                    "line": 111,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|   \tENGINE_load_builtin_engines();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|-> \te = ENGINE_by_id(\"pkcs11\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \tif (e == NULL) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   \t\tdisplay_openssl_errors(__LINE__);",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
