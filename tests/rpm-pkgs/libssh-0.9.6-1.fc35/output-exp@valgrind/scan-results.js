{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libssh-0.9.6-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libssh-0.9.6-1.fc35/valgrind/output",
        "time-created": "2022-11-24 23:49:38",
        "time-finished": "2022-11-25 00:07:58",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libssh-0.9.6-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libssh-0.9.6-1.fc35/libssh-0.9.6-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha1_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 131,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 |     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   void sha1_update(SHACTX c, const void *data, unsigned long len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|->     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha1_final'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 138,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138 |     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|       unsigned int mdlen = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|->     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|       EVP_MD_CTX_destroy(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'evp'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 173,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestInit' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173 |     EVP_DigestInit(md, evp_md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|       EVP_MD_CTX *md = EVP_MD_CTX_new();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|->     EVP_DigestInit(md, evp_md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|       EVP_DigestUpdate(md, digest, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|       EVP_DigestFinal(md, hash, hlen);",
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
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 174,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174 |     EVP_DigestUpdate(md, digest, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|       EVP_DigestInit(md, evp_md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|->     EVP_DigestUpdate(md, digest, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|       EVP_DigestFinal(md, hash, hlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|       EVP_MD_CTX_free(md);",
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
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 175,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175 |     EVP_DigestFinal(md, hash, hlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|       EVP_DigestInit(md, evp_md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|       EVP_DigestUpdate(md, digest, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|->     EVP_DigestFinal(md, hash, hlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|       EVP_MD_CTX_free(md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'evp_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 188,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestInit' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188 |     EVP_DigestInit(ctx, evp_md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->     EVP_DigestInit(ctx, evp_md);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       return ctx;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'evp_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 195,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195 |     EVP_DigestUpdate(ctx, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   void evp_update(EVPCTX ctx, const void *data, unsigned long len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|->     EVP_DigestUpdate(ctx, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'evp_final'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 200,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200 |     EVP_DigestFinal(ctx, md, mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   void evp_final(EVPCTX ctx, unsigned char *md, unsigned int *mdlen)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|->     EVP_DigestFinal(ctx, md, mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|       EVP_MD_CTX_free(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha256_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 223,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223 |     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|   void sha256_update(SHA256CTX c, const void *data, unsigned long len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|->     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha256_final'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 230,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230 |     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|       unsigned int mdlen = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|->     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|       EVP_MD_CTX_destroy(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha384_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 261,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261 |     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   void sha384_update(SHA384CTX c, const void *data, unsigned long len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|->     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha384_final'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 268,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268 |     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|       unsigned int mdlen = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|->     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|       EVP_MD_CTX_destroy(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha512_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 299,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299 |     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|   void sha512_update(SHA512CTX c, const void *data, unsigned long len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|->     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'sha512_final'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 306,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306 |     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|       unsigned int mdlen = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|->     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|       EVP_MD_CTX_destroy(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'md5_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 337,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestUpdate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337 |     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   void md5_update(MD5CTX c, const void *data, unsigned long len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|->     EVP_DigestUpdate(c, data, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'md5_final'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/libcrypto.c",
                    "line": 344,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'EVP_DigestFinal' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344 |     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|       unsigned int mdlen = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|->     EVP_DigestFinal(c, md, &mdlen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       EVP_MD_CTX_destroy(c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   }",
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
                    "file_name": "libssh-0.9.6/redhat-linux-build/tests/unittests/torture_misc",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 931",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/misc.c",
                    "line": 1080,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "libssh-0.9.6/src/misc.c",
                    "line": 1080,
                    "event": "note",
                    "message": "called from ssh_path_expand_tilde.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/src/misc.c",
                    "line": 1037,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/tests/unittests/torture_misc.c",
                    "line": 148,
                    "event": "note",
                    "message": "called from torture_path_expand_tilde_unix()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libcmocka.so.0.7.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libcmocka.so.0.7.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from _cmocka_run_group_tests()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/tests/unittests/torture_misc.c",
                    "line": 685,
                    "event": "note",
                    "message": "called from torture_run_tests()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libssh-0.9.6/tests/torture.c",
                    "line": 1389,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|       lh = strlen(h);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1079|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1080|->     r = malloc(ld + lh + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|       if (r == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|           SAFE_FREE(h);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
