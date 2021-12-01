{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211119.190944",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "cov04.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sscg-3.0.0-1.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/symbiotic/output",
        "time-created": "2021-12-01 15:09:52",
        "time-finished": "2021-12-01 15:13:38",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/sscg-3.0.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 151,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 151,
                    "event": "note",
                    "message": "call stack: function sscg_handle_arguments (, =2, =0, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/sscg.c",
                    "line": 124,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 151,
                    "event": "note",
                    "message": "Additional Info: address: 1095216660480:136",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 151,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/sscg.c",
                    "line": 117,
                    "column": 26,
                    "event": "note",
                    "message": "Non-deterministic values: talloc_named_const: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/sscg.c:117:26 (offset): note: Non-deterministic values: talloc_named_const: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 145,
                    "column": 25,
                    "event": "note",
                    "message": "Non-deterministic values: talloc_named_const: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/arguments.c:145:25 (offset): note: Non-deterministic values: talloc_named_const: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 148,
                    "column": 34,
                    "event": "note",
                    "message": "Non-deterministic values: _talloc_zero: len 8 bytes, [4 times 0x0|0xff|3 times 0x0] (i64: 1095216660480)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/arguments.c:148:34 (offset): note: Non-deterministic values: _talloc_zero: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/arguments.c",
                    "line": 152,
                    "column": 5,
                    "event": "note",
                    "message": "Non-deterministic values: _talloc_zero_array: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|     CHECK_MEM (options);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|->   options->streams =",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|       talloc_zero_array (options, struct sscg_stream *, SSCG_NUM_FILE_TYPES);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   ",
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
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 63,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 63,
                    "event": "note",
                    "message": "call stack: function sscg_init_bignum (, =65537, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/key.c",
                    "line": 63,
                    "event": "note",
                    "message": "call stack: function sscg_generate_rsa_key (, =512, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../test/generate_rsa_key_test.c",
                    "line": 46,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 63,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 63,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../test/generate_rsa_key_test.c",
                    "line": 36,
                    "column": 25,
                    "event": "note",
                    "message": "Non-deterministic values: talloc_named_const: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../test/generate_rsa_key_test.c:36:25 (offset): note: Non-deterministic values: talloc_named_const: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/key.c",
                    "line": 56,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: talloc_named_const: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/key.c",
                    "line": 59,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: RSA_new: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/key.c:59:9 (offset): note: Non-deterministic values: RSA_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 43,
                    "column": 25,
                    "event": "note",
                    "message": "Non-deterministic values: talloc_named_const: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/bignum.c:43:25 (offset): note: Non-deterministic values: talloc_named_const: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 49,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: _talloc_zero: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/bignum.c:49:12 (offset): note: Non-deterministic values: _talloc_zero: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../src/bignum.c",
                    "line": 56,
                    "column": 19,
                    "event": "note",
                    "message": "Non-deterministic values: BN_new: len 8 bytes, [0x1|7 times 0x0] (i64: 1)\n/builddir/build/BUILD/sscg-3.0.0/redhat-linux-build/../src/bignum.c:56:19 (offset): note: Non-deterministic values: BN_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->   bignum->bn = sslbn;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|     talloc_set_destructor ((TALLOC_CTX *)bignum, _sscg_bignum_destructor);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   ",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
