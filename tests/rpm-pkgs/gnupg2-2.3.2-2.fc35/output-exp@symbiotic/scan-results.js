{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gnupg2-2.3.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/symbiotic/output",
        "time-created": "2023-01-31 12:47:02",
        "time-finished": "2023-01-31 23:04:10",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnupg2-2.3.2-2.fc35/gnupg2-2.3.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 83,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 83,
                    "event": "note",
                    "message": "call stack: function percent_plus_escape (=0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/t-percent.c",
                    "line": 75,
                    "event": "note",
                    "message": "call stack: function test_percent_plus_escape ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/t-percent.c",
                    "line": 317,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 83,
                    "event": "note",
                    "message": "Additional Info: address: 255:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 83,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 66,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: gcry_malloc: len 8 bytes, [0xff|7 times 0x0] (i64: 255)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/percent.c",
                    "line": 66,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: gcry_malloc (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|           *p++ = *s;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|->   *p = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|     return buffer;",
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
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 109,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 109,
                    "event": "note",
                    "message": "call stack: function zb32_encode (=0, =1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/t-zb32.c",
                    "line": 93,
                    "event": "note",
                    "message": "call stack: function test_zb32enc ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/t-zb32.c",
                    "line": 302,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 109,
                    "event": "note",
                    "message": "Additional Info: address: 1095216660480:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 109,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 63,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: gcry_malloc: len 8 bytes, [4 times 0x0|0xff|3 times 0x0] (i64: 1095216660480)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/common/zb32.c",
                    "line": 63,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: gcry_malloc (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|       case 1:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|->       *d++ = zb32asc[((s[0]      ) >> 3)               ];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|         *d++ = zb32asc[((s[0] &   7) << 2)               ];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|         break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnupg-2.3.2/scd/app-p15.c",
                    "line": 722,
                    "column": 21,
                    "event": "warning[-Wuninitialized]",
                    "message": "variable 'sw' is uninitialized when used here",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            *r_sw = sw;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnupg-2.3.2/scd/app-p15.c",
                    "line": 709,
                    "column": 9,
                    "event": "note",
                    "message": "initialize the variable 'sw' to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  int sw;",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  720|                        efid_desc, efid, gpg_strerror (err));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  721|             if (r_sw)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|->             *r_sw = sw;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|             return err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|           }",
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
                    "file_name": "gnupg-2.3.2/scd/app-sc-hsm.c",
                    "line": 474,
                    "column": 17,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ul' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  unsigned long ul;",
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
                    "message": "  472|     prkdf_object_t prkdf = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|     cdf_object_t cdf = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474|->   unsigned long ul;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|     const unsigned char *objid;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|     size_t objidlen;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
