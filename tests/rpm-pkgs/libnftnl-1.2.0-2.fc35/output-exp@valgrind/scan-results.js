{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libnftnl-1.2.0-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libnftnl-1.2.0-2.fc35/valgrind/output",
        "time-created": "2022-11-23 13:44:49",
        "time-finished": "2022-11-23 13:49:33",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libnftnl-1.2.0-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libnftnl-1.2.0-2.fc35/libnftnl-1.2.0-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libnftnl-1.2.0/tests/.libs/nft-expr_match-test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6092",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_match-test.c",
                    "line": 74,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/memcheck/../shared/vg_replace_strmem.c",
                    "line": 497,
                    "event": "note",
                    "message": "called from __strlen_sse2()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_match-test.c",
                    "line": 74,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   \tnftnl_expr_set_str(ex, NFTNL_EXPR_MT_NAME, \"Tests\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   \tnftnl_expr_set_u32(ex, NFTNL_EXPR_MT_REV, 0x12345678);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|-> \tnftnl_expr_set(ex, NFTNL_EXPR_MT_INFO, strdup(data), sizeof(data));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   \tnftnl_rule_add_expr(a, ex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   ",
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
                    "file_name": "libnftnl-1.2.0/tests/.libs/nft-expr_quota-test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6377",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_quota-test.c",
                    "line": 35,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_quota-test.c",
                    "line": 35,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_quota-test.c",
                    "line": 77,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   \t    nftnl_expr_get_u64(rule_b, NFTNL_EXPR_QUOTA_BYTES))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   \t\tprint_err(\"Expr NFTNL_EXPR_QUOTA_BYTES mismatches\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> \tif (nftnl_expr_get_u64(rule_a, NFTNL_EXPR_QUOTA_FLAGS) !=",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   \t    nftnl_expr_get_u64(rule_b, NFTNL_EXPR_QUOTA_FLAGS))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   \t\tprint_err(\"Expr NFTNL_EXPR_QUOTA_FLAGS mismatches\");",
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
                    "file_name": "libnftnl-1.2.0/tests/.libs/nft-expr_target-test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6512",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_target-test.c",
                    "line": 74,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/memcheck/../shared/vg_replace_strmem.c",
                    "line": 497,
                    "event": "note",
                    "message": "called from __strlen_sse2()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libnftnl-1.2.0/tests/nft-expr_target-test.c",
                    "line": 74,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|   \tnftnl_expr_set(ex, NFTNL_EXPR_TG_NAME, \"test\", strlen(\"test\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|   \tnftnl_expr_set_u32(ex, NFTNL_EXPR_TG_REV, 0x56781234);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|-> \tnftnl_expr_set(ex, NFTNL_EXPR_TG_INFO, strdup(data), sizeof(data));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|   \tnftnl_rule_add_expr(a, ex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
