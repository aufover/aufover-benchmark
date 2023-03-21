{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sudo-1.9.7p2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/sudo-1.9.7p2-2.fc35/symbiotic/output",
        "time-created": "2023-02-01 10:18:41",
        "time-finished": "2023-02-01 11:10:49",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/sudo-1.9.7p2-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/sudo-1.9.7p2-2.fc35/sudo-1.9.7p2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "sudo-1.9.7p2/lib/util/gidlist.c",
                    "line": 71,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/gidlist.c",
                    "line": 71,
                    "event": "note",
                    "message": "call stack: function sudo_parse_gids_v1 (=0, =16, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/parse_gids/parse_gids_test.c",
                    "line": 77,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/gidlist.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: address: 65280:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/gidlist.c",
                    "line": 71,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/gidlist.c",
                    "line": 64,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: reallocarray: len 8 bytes, [0x0|0xff|6 times 0x0] (i64: 65280)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/gidlist.c",
                    "line": 64,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: reallocarray (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   69|   \tngids = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|   \tif (basegid != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|-> \t    gids[ngids++] = *basegid;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   \tcp = gidstr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   \tdo {",
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
                    "file_name": "sudo-1.9.7p2/lib/util/progname.c",
                    "line": 75,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/progname.c",
                    "line": 75,
                    "event": "note",
                    "message": "call stack: function initprogname2 (=24, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/progname.c",
                    "line": 99,
                    "event": "note",
                    "message": "call stack: function initprogname (=24)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/progname/progname_test.c",
                    "line": 42,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/progname.c",
                    "line": 75,
                    "event": "note",
                    "message": "Additional Info: address: 41:1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/progname.c",
                    "line": 75,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [41] of size 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/progname.c",
                    "line": 75,
                    "event": "note",
                    "message": "Additional Info: MO30[1] allocated at global:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       /* Check for libtool prefix and strip it if present. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     if (name[0] == 'l' && name[1] == 't' && name[2] == '-' && name[3] != '\\0')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   \tname += 3;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   ",
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
                    "file_name": "sudo-1.9.7p2/lib/util/regress/getgrouplist/getgrouplist_test.c",
                    "line": 58,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/getgrouplist/getgrouplist_test.c",
                    "line": 58,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/getgrouplist/getgrouplist_test.c",
                    "line": 58,
                    "event": "note",
                    "message": "Additional Info: address: 255:20",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/getgrouplist/getgrouplist_test.c",
                    "line": 58,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/getgrouplist/getgrouplist_test.c",
                    "line": 56,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getpwuid: len 8 bytes, [0xff|7 times 0x0] (i64: 255)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/getgrouplist/getgrouplist_test.c",
                    "line": 56,
                    "column": 15,
                    "event": "note",
                    "message": "Non-deterministic values: getpwuid (offset): len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|       if ((pw = getpwuid(0)) == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   \tsudo_fatal_nodebug(\"getpwuid(0)\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|->     basegid = pw->pw_gid;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|       if ((username = strdup(pw->pw_name)) == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \tsudo_fatal_nodebug(NULL);",
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
                    "file_name": "sudo-1.9.7p2/lib/util/strtomode.c",
                    "line": 50,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/strtomode.c",
                    "line": 50,
                    "event": "note",
                    "message": "call stack: function sudo_strtomode_v1 (=0, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/regress/strtofoo/strtomode_test.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/strtomode.c",
                    "line": 50,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/strtomode.c",
                    "line": 50,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/strtomode.c",
                    "line": 49,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: strtol: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       errno = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       lval = strtol(cp, &ep, 8);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|->     if (ep == cp || *ep != '\\0') {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   \tif (errstr != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   \t    *errstr = N_(\"invalid value\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/log_client.c",
                    "line": 181,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of function declared with 'warn_unused_result' attribute",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        SSL_clear(closure->ssl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~~~ ~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|           if (closure->ssl == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|               debug_return_bool(false);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|->         SSL_clear(closure->ssl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|           debug_return_bool(true);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|       }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
