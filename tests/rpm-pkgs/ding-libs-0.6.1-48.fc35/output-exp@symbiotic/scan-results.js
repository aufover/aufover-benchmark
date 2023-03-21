{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "ding-libs-0.6.1-48.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/symbiotic/output",
        "time-created": "2023-01-30 02:19:58",
        "time-finished": "2023-01-30 02:27:10",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/ding-libs-0.6.1-48.fc35/ding-libs-0.6.1-48.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/collection/collection_tools.c",
                    "line": 205,
                    "column": 27,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'col_get_type'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static inline const char *col_get_type(int type)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|   /* Return a static string based on type of the element */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|-> static inline const char *col_get_type(int type)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|       switch (type) {",
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
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 97,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 97,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 97,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111091",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 97,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 72,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: hash_create: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/symbiotic/lib/posix/strdup.c",
                    "line": 11,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x1] (i8: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 84,
                    "column": 18,
                    "event": "note",
                    "message": "Non-deterministic values: hash_enter: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 91,
                    "column": 18,
                    "event": "note",
                    "message": "Non-deterministic values: hash_keys: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|       for (i = 0; i < count; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|->         printf(\"key: %s\\n\", keys[i].str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|       free(keys);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   ",
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
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 145,
                    "event": "error",
                    "message": "memory error: memory leak detected",
                    "verbosity_level": 0
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 145,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 145,
                    "event": "note",
                    "message": "Additional Info: address: 91:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 145,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [91] of size 8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 145,
                    "event": "note",
                    "message": "Additional Info: MO80[8] allocated at strdup():  %19 = call align 16 i8* @malloc(i64 %18), !dbg !84",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 72,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: hash_create: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/symbiotic/lib/posix/strdup.c",
                    "line": 11,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x0] (i8: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ding-libs-0.6.1/dhash/examples/dhash_example.c",
                    "line": 84,
                    "column": 18,
                    "event": "note",
                    "message": "Non-deterministic values: hash_enter: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|       return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|-> }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_configmod_ut_check.c",
                    "line": 146,
                    "column": 47,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                file, line, expected_cfg_len, res_buffer_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                              ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 472,
                    "column": 77,
                    "event": "note",
                    "message": "expanded from macro 'fail_unless'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__, NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|                   \"\\n\\t[%s:%d] Size of expected config %zu and result config %d \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|                   \"does not match. Res:%d\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|->                 file, line, expected_cfg_len, res_buffer_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|                   call_diff(function, expected_cfg, expected_cfg_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|                             res_buffer, res_buffer_size));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 503,
                    "column": 60,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                      ~~   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 472,
                    "column": 77,
                    "event": "note",
                    "message": "expanded from macro 'fail_unless'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__, NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 537,
                    "column": 60,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                      ~~   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 472,
                    "column": 77,
                    "event": "note",
                    "message": "expanded from macro 'fail_unless'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__, NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 597,
                    "column": 60,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                      ~~   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 472,
                    "column": 77,
                    "event": "note",
                    "message": "expanded from macro 'fail_unless'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__, NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|->     fail_unless(num_err == 2, \"Expected 2 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  598|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  599|       errmsg = ini_errobj_get_msg(errobj);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "ding-libs-0.6.1/ini/ini_validators_ut_check.c",
                    "line": 673,
                    "column": 60,
                    "event": "warning[-Wformat]",
                    "message": "format specifies type 'int' but the argument has type 'size_t' (aka 'unsigned long')",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                      ~~   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/check.h",
                    "line": 472,
                    "column": 77,
                    "event": "note",
                    "message": "expanded from macro 'fail_unless'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    _ck_assert_failed(__FILE__, __LINE__, \"Assertion '\"#expr\"' failed\" , ## __VA_ARGS__, NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|       num_err = ini_errobj_count(errobj);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|->     fail_unless(num_err == 4, \"Expected 4 errors, got %d\", num_err);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|       ini_errobj_destroy(&errobj);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj.c",
                    "line": 84,
                    "column": 22,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            part = *((char **)(ptr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|               ref_array_get(raw_lengths, i, (void *)&len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->             part = *((char **)(ptr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|               TRACE_INFO_STRING(\"Value:\", part);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj.c",
                    "line": 343,
                    "column": 26,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                part = *((char **)ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|               ptr = ref_array_get(vo->raw_lines, last, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|               if (ptr) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|->                 part = *((char **)ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|                   TRACE_INFO_STRING(\"Value\", part);",
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
                    "file_name": "ding-libs-0.6.1/ini/ini_valueobj.c",
                    "line": 1080,
                    "column": 26,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                part = *((char **)(ptr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1078|                   ref_array_get(vo->raw_lengths, i, (void *)&len);",
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
                    "message": " 1080|->                 part = *((char **)(ptr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1081|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1082|                   TRACE_INFO_STRING(\"Value:\", part);",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 346,
                    "column": 17,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    array_ptr = (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|       /* component array */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|->     array_ptr = (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|       /* components copied after end of array */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       component_ptr = mem_block + ((n_components+1)*sizeof(char *));",
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
                    "file_name": "ding-libs-0.6.1/path_utils/path_utils.c",
                    "line": 368,
                    "column": 12,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|       *array_ptr = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|       if (count) *count = n_components;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|->     return (char **)mem_block;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|   ",
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
                    "file_name": "ding-libs-0.6.1/refarray/ref_array.c",
                    "line": 568,
                    "column": 32,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'unsigned char *' to 'char **' increases required alignment from 1 to 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(\"\\n%s\\n\", *((char **)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|           if (num == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568|->             printf(\"\\n%s\\n\", *((char **)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  570|           else if (num > 0) {",
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
                    "file_name": "ding-libs-0.6.1/refarray/ref_array.c",
                    "line": 571,
                    "column": 32,
                    "event": "warning[-Wcast-align]",
                    "message": "cast from 'unsigned char *' to 'uint32_t *' (aka 'unsigned int *') increases required alignment from 1 to 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(\"\\n%d\\n\", *((uint32_t *)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  570|           else if (num > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  571|->             printf(\"\\n%d\\n\", *((uint32_t *)((unsigned char *)(ra->storage) + i * ra->elsize)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  572|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  573|           else {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
