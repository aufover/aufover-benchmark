{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "krb5-1.19.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/symbiotic/output",
        "time-created": "2023-02-04 19:14:25",
        "time-finished": "2023-02-05 23:39:16",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/krb5-1.19.2-2.fc35/krb5-1.19.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/kdc/rtest.c",
                    "line": 108,
                    "event": "error",
                    "message": "memory error: memory leak detected",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/kdc/rtest.c",
                    "line": 108,
                    "event": "note",
                    "message": "call stack: function main (=5, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kdc/rtest.c",
                    "line": 108,
                    "event": "note",
                    "message": "Additional Info: address: 99:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kdc/rtest.c",
                    "line": 108,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [99] of size 4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kdc/rtest.c",
                    "line": 108,
                    "event": "note",
                    "message": "Additional Info: MO88[4] allocated at make_princ():  %22 = call noalias align 16 i8* @malloc(i64 %21) #12, !dbg !208",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kdc/rtest.c",
                    "line": 74,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: krb5int_init_context_kdc: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/kdc/kdc_transit.c",
                    "line": 377,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: krb5int_strlcat: len 8 bytes, [0xb|7 times 0x0] (i64: 11)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|       krb5_free_context(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|->     exit(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|   ",
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
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_derive.c",
                    "line": 305,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_derive.c",
                    "line": 305,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_derive.c",
                    "line": 305,
                    "event": "note",
                    "message": "Additional Info: address: 0:16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_derive.c",
                    "line": 305,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_derive.c",
                    "line": 297,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_k_create_key: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_derive.c",
                    "line": 302,
                    "column": 19,
                    "event": "note",
                    "message": "Non-deterministic values: krb5int_derive_key: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|                                        test->alg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|               assert(!ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|->             outcmp = make_data(key->keyblock.contents, key->keyblock.length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|               ret = alloc_data(&rnd, test->expected_key.length);",
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
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 57,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 57,
                    "event": "note",
                    "message": "call stack: function test (=0, )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 109,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 110,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_c_random_seed: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       if (retval) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|           printf(\"Failed: %s\\n\", error_message(retval));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|->         abort();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|       } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|           printf(\"OK\\n\");",
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
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 142,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 142,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 142,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111087",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 142,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 110,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_c_random_seed: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 132,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_keyblock: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 134,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_c_make_random_key: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_encrypt.c",
                    "line": 136,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_k_create_key: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|           /* We use an intermediate `len' because size_t may be different size",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|              than `int' */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|->         krb5_c_encrypt_length (context, keyblock->enctype, in.length, &len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           enc_out.ciphertext.length = len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|   ",
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
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_str2key.c",
                    "line": 451,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_str2key.c",
                    "line": 451,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_str2key.c",
                    "line": 451,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111091",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_str2key.c",
                    "line": 451,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_str2key.c",
                    "line": 424,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_keyblock: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/crypto/crypto_tests/t_str2key.c",
                    "line": 427,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_c_string_to_key_with_params: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|               continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|->         assert(keyblock->length == test->expected_key.length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|           if (memcmp(keyblock->contents, test->expected_key.data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|                      keyblock->length) != 0) {",
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
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/destroy-test.c",
                    "line": 38,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/destroy-test.c",
                    "line": 38,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/destroy-test.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111099",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/destroy-test.c",
                    "line": 38,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/destroy-test.c",
                    "line": 24,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: kadm5_init_krb5_context: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/destroy-test.c",
                    "line": 30,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: kadm5_init: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|           handle = (kadm5_server_handle_t) server_handle;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->         cp = strdup(strchr(handle->cache_name, ':') + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|           kadm5_destroy(server_handle);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|           if(access(cp, F_OK) == 0) {",
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
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/setkey-test.c",
                    "line": 91,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/setkey-test.c",
                    "line": 91,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/setkey-test.c",
                    "line": 91,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111095",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/setkey-test.c",
                    "line": 91,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kadm5/unit-test/setkey-test.c",
                    "line": 84,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_parse_name: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|       if((ret = krb5_build_principal_ext(context, &server,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|->                                        krb5_princ_realm(kcontext, princ)->length,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|                                          krb5_princ_realm(kcontext, princ)->data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|                                          tgtname.length, tgtname.data,",
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
                    "file_name": "krb5-1.19.2/src/lib/kdb/t_ulog.c",
                    "line": 71,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kdb/t_ulog.c",
                    "line": 71,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kdb/t_ulog.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: address: 0:8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kdb/t_ulog.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/kdb/t_ulog.c",
                    "line": 68,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: ulog_map: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|           abort();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       lctx = context->kdblog_context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|->     ulog = lctx->ulog;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       /* Modify the ulog to look like it has reached the last serial number.",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_authdata.c",
                    "line": 87,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_authdata.c",
                    "line": 87,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_authdata.c",
                    "line": 87,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_authdata.c",
                    "line": 87,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_authdata.c",
                    "line": 85,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_context: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_authdata.c",
                    "line": 86,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_merge_authdata: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|       assert(krb5_init_context(&context) == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|       assert(krb5_merge_authdata(context, adseq1, adseq2, &results) == 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|->     compare_authdata(results[0], &ad1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|       compare_authdata( results[1], &ad2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|       compare_authdata(results[2], &ad4);",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 44,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 44,
                    "event": "note",
                    "message": "call stack: function check ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 120,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 120,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_context: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       if (!cond)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->         abort();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|   ",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 73,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 73,
                    "event": "note",
                    "message": "call stack: function check_context (=12370169555311111083, =12370169555311111083)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 122,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 73,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111091",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 73,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 120,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_context: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_copy_context.c",
                    "line": 121,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_copy_context: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|       /* Check fields which should have been propagated from r. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|->     compare_etypes(c->tgs_etypes, r->tgs_etypes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       check(c->os_context.time_offset == r->os_context.time_offset);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|       check(c->os_context.usec_offset == r->os_context.usec_offset);",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_sname_match.c",
                    "line": 108,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_sname_match.c",
                    "line": 108,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_sname_match.c",
                    "line": 108,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111271",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_sname_match.c",
                    "line": 108,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_sname_match.c",
                    "line": 90,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_context: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_sname_match.c",
                    "line": 105,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_parse_name: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|               abort();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|->         ctx->ignore_acceptor_hostname = t->ignore_acceptor_hostname;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|           if (krb5_sname_match(ctx, matching, princ) != t->result)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|               abort();",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/valid_times.c",
                    "line": 50,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/valid_times.c",
                    "line": 50,
                    "event": "note",
                    "message": "call stack: function krb5int_validate_times (=12370169555311111083, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_valid_times.c",
                    "line": 52,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/valid_times.c",
                    "line": 50,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111147",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/valid_times.c",
                    "line": 50,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/t_valid_times.c",
                    "line": 45,
                    "column": 11,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_init_context: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/valid_times.c",
                    "line": 41,
                    "column": 19,
                    "event": "note",
                    "message": "Non-deterministic values: krb5_timeofday: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|           starttime = times->authtime;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|->     if (ts_after(starttime, ts_incr(currenttime, context->clockskew)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|           return KRB5KRB_AP_ERR_TKT_NYV;  /* ticket not yet valid */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/x-deltat.y",
                    "line": 212,
                    "column": 6,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "misleading indentation; statement is not part of the previous 'if'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            num *= 10;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/krb/x-deltat.y",
                    "line": 210,
                    "column": 4,
                    "event": "note",
                    "message": "previous statement is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          if (num > MAX_TIME / 10)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   \t  if (num > MAX_TIME / 10)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|   \t    return tok_OVERFLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|-> \t    num *= 10;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   \t    if (num > MAX_TIME - (*P - '0'))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|   \t      return tok_OVERFLOW;",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/dnsglue.c",
                    "line": 349,
                    "column": 19,
                    "event": "warning[-Wtautological-constant-out-of-range-compare]",
                    "message": "result of comparison of constant 2147483647 with expression of type 'unsigned short' is always false",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (rdlen > INT_MAX)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~ ^ ~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|           if (!INCR_OK(ds->ansp, ds->anslen, p, rdlen))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|               return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|->         if (rdlen > INT_MAX)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|               return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|           if (nclass == ds->nclass && ntype == ds->ntype) {",
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
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/t_expand_path.c",
                    "line": 16,
                    "event": "error",
                    "message": "memory error: invalid pointer: free",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/t_expand_path.c",
                    "line": 16,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/t_expand_path.c",
                    "line": 16,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/t_expand_path.c",
                    "line": 16,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/lib/krb5/os/t_expand_path.c",
                    "line": 9,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: k5_expand_path_tokens_extra: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|       else if (strcmp(path, argv[2]) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15|   \treturn 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   16|->     free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   18|   }",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/db2/libdb2/hash/hash_page.c",
                    "line": 308,
                    "column": 22,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'next_key' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        int16_t delta, len, next_key;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|   \tindx_t ndx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|   \tshort check_ndx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|-> \tint16_t delta, len, next_key;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|   \tint32_t n;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   \tu_int8_t *src, *dest;",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_realm.c",
                    "line": 138,
                    "column": 18,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'no_msg' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    krb5_boolean no_msg = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|       int mask = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|       krb5_error_code retval = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|->     krb5_boolean no_msg = FALSE;",
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
                    "message": "  140|       krb5_boolean print_usage = FALSE;",
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
                    "file_name": "krb5-1.19.2/src/plugins/kdb/ldap/ldap_util/kdb5_ldap_realm.c",
                    "line": 140,
                    "column": 18,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'print_usage' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    krb5_boolean print_usage = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|       krb5_boolean no_msg = FALSE;",
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
                    "message": "  140|->     krb5_boolean print_usage = FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|       char *me = progname;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|   ",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1258,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_DigestInit_ex(ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1256|           if (ctx == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1257|               goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1258|->         EVP_DigestInit_ex(ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|           EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|           md_tmp = EVP_MD_CTX_md(ctx);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1259,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1257|               goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1258|           EVP_DigestInit_ex(ctx, EVP_sha1(), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|->         EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|           md_tmp = EVP_MD_CTX_md(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1261|           EVP_DigestFinal_ex(ctx, md_data, &md_len);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1261,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        EVP_DigestFinal_ex(ctx, md_data, &md_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|           EVP_DigestUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|           md_tmp = EVP_MD_CTX_md(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1261|->         EVP_DigestFinal_ex(ctx, md_data, &md_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1262|           EVP_MD_CTX_free(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|   ",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1299,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1297|               if (ctx == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1298|                   goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|->             EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|               EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|               EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1300,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1298|                   goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|               EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|->             EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|               EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|               EVP_MD_CTX_free(ctx);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 1301,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1299|               EVP_DigestInit_ex(ctx, md_tmp, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|               EVP_DigestUpdate(ctx, abuf, alen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|->             EVP_DigestFinal_ex(ctx, md_data2, &md_len2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|               EVP_MD_CTX_free(ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 4150,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_SignInit(ctx, EVP_sha1());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "message": " 4148|       if (ctx == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4149|           return ENOMEM;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4150|->     EVP_SignInit(ctx, EVP_sha1());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4151|       EVP_SignUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4152|       *sig_len = EVP_PKEY_size(pkey);",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 4151,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_SignUpdate(ctx, data, data_len);",
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
                    "line": 501,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'EVP_SignUpdate'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define EVP_SignUpdate(a,b,c)           EVP_DigestUpdate(a,b,c)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~~~ ~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4149|           return ENOMEM;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4150|       EVP_SignInit(ctx, EVP_sha1());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4151|->     EVP_SignUpdate(ctx, data, data_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4152|       *sig_len = EVP_PKEY_size(pkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4153|       if ((*sig = malloc(*sig_len)) == NULL)",
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
                    "file_name": "krb5-1.19.2/src/plugins/preauth/pkinit/pkinit_crypto_openssl.c",
                    "line": 4155,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    EVP_SignFinal(ctx, *sig, sig_len, pkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4153|       if ((*sig = malloc(*sig_len)) == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4154|           goto cleanup;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4155|->     EVP_SignFinal(ctx, *sig, sig_len, pkey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4156|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4157|       retval = 0;",
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
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 127,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 127,
                    "event": "note",
                    "message": "call stack: function oid_equal (=12370169555311111083, =16)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 158,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 127,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 143,
                    "column": 17,
                    "event": "note",
                    "message": "Non-deterministic values: gss_oid_to_str: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_oid.c",
                    "line": 156,
                    "column": 17,
                    "event": "note",
                    "message": "Non-deterministic values: gss_str_to_oid: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   oid_equal(gss_OID o1, gss_OID o2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->     return o1->length == o2->length &&",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|           memcmp(o1->elements, o2->elements, o1->length) == 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   }",
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
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_prf.c",
                    "line": 103,
                    "event": "error",
                    "message": "abort failure",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_prf.c",
                    "line": 103,
                    "event": "note",
                    "message": "call stack: function fromhex (=0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_prf.c",
                    "line": 142,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/gssapi/t_prf.c",
                    "line": 102,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: k5_hex_decode: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|       if (k5_hex_decode(hexstr, &bytes, &len) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|->         abort();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       memcpy(out, bytes, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       free(bytes);",
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
                    "file_name": "krb5-1.19.2/src/tests/misc/test_getpw.c",
                    "line": 49,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/misc/test_getpw.c",
                    "line": 49,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/misc/test_getpw.c",
                    "line": 49,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/misc/test_getpw.c",
                    "line": 49,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/misc/test_getpw.c",
                    "line": 42,
                    "column": 14,
                    "event": "note",
                    "message": "Non-deterministic values: getuid: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "krb5-1.19.2/src/tests/misc/test_getpw.c",
                    "line": 45,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: getpwuid_r: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|       if (x != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|           exit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|->     printf(\"    username is '%s'\\n\", pwd->pw_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       exit(0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   }",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 99,
                    "column": 8,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static security_context_t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   }",
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
                    "message": "   99|-> static security_context_t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   push_fscreatecon(const char *pathname, mode_t mode)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   {",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 102,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    security_context_t previous, configuredsc, currentsc, derivedsc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   push_fscreatecon(const char *pathname, mode_t mode)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|->     security_context_t previous, configuredsc, currentsc, derivedsc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       context_t current, derived;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|       const char *fullpath, *currentuser;",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 237,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "pop_fscreatecon(security_context_t previous)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   static void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|-> pop_fscreatecon(security_context_t previous)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|       if (!is_selinux_enabled()) {",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 291,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|       if ((strcmp(mode, \"r\") == 0) ||",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 317,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|       int fd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|       k5_once(&labeled_once, label_mutex_init);",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 338,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|       int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|       k5_once(&labeled_once, label_mutex_init);",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 359,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|       int ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       k5_once(&labeled_once, label_mutex_init);",
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
                    "file_name": "krb5-1.19.2/src/util/support/selinux.c",
                    "line": 380,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 19,
                    "column": 17,
                    "event": "note",
                    "message": "'security_context_t' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "__attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|       int fd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|       int errno_save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|->     security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|       mode_t mode;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|       va_list ap;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
