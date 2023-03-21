{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libldb-2.4.0-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libldb-2.4.0-2.fc35/valgrind/output",
        "time-created": "2022-11-24 05:56:06",
        "time-finished": "2022-11-24 07:43:37",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libldb-2.4.0-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libldb-2.4.0-2.fc35/libldb-2.4.0-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 105,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "288 bytes in 1 blocks are possibly lost in loss record 22 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 105,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|-> \tldb = talloc_zero(mem_ctx, struct ldb_context);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   \tif (ldb == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   \t\treturn NULL;",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "128 bytes in 1 blocks are possibly lost in loss record 6 of 26",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_named_const()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from tevent_register_backend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from tevent_context_init_byname()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \t * having to provide their own private one explicitly */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   \tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|-> \t\tev_ctx = tevent_context_init(ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \t\tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\ttalloc_free(ldb);",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "136 bytes in 1 blocks are possibly lost in loss record 15 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from tevent_context_init_ops()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \t * having to provide their own private one explicitly */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   \tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|-> \t\tev_ctx = tevent_context_init(ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \t\tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\ttalloc_free(ldb);",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "176 bytes in 1 blocks are possibly lost in loss record 18 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from tevent_context_init_ops()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \t * having to provide their own private one explicitly */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   \tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|-> \t\tev_ctx = tevent_context_init(ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \t\tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\ttalloc_free(ldb);",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "376 bytes in 1 blocks are possibly lost in loss record 29 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtevent.so.0.11.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from tevent_context_init_ops()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|   \t * having to provide their own private one explicitly */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   \tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|-> \t\tev_ctx = tevent_context_init(ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \t\tif (ev_ctx == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\ttalloc_free(ldb);",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 96,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "240 bytes in 1 blocks are possibly lost in loss record 20 of 36",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 96,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 82,
                    "event": "note",
                    "message": "called from ldb_schema_attribute_add_with_syntax()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 318,
                    "event": "note",
                    "message": "called from ldb_setup_wellknown_attributes()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 123,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   \tn = ldb->schema.num_attributes + 1;",
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
                    "message": "   96|-> \ta = talloc_realloc(ldb, ldb->schema.attributes,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   \t\t\t   struct ldb_schema_attribute, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   \tif (a == NULL) {",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 345,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "128 bytes in 1 blocks are possibly lost in loss record 62 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 345,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_attributes.c",
                    "line": 332,
                    "event": "note",
                    "message": "called from ldb_dn_extended_add_syntax()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 181,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   \tn = ldb->schema.num_dn_extended_syntax + 1;",
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
                    "message": "  345|-> \ta = talloc_realloc(ldb, ldb->schema.dn_extended_syntax,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   \t\t\t   struct ldb_dn_extended_syntax, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 104,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "168 bytes in 1 blocks are possibly lost in loss record 75 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 104,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 89,
                    "event": "note",
                    "message": "called from ldb_dn_from_ldb_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 165,
                    "event": "note",
                    "message": "called from ldb_dn_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 33,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|-> \tdn = talloc_zero(mem_ctx, struct ldb_dn);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   \tLDB_DN_NULL_FAILED(dn);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 104,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,352 bytes in 14 blocks are possibly lost in loss record 140 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 104,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 89,
                    "event": "note",
                    "message": "called from ldb_dn_from_ldb_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 165,
                    "event": "note",
                    "message": "called from ldb_dn_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 187,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|-> \tdn = talloc_zero(mem_ctx, struct ldb_dn);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|   \tLDB_DN_NULL_FAILED(dn);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 122,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,350 bytes in 13 blocks are possibly lost in loss record 138 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 89,
                    "event": "note",
                    "message": "called from ldb_dn_from_ldb_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 165,
                    "event": "note",
                    "message": "called from ldb_dn_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 187,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t\t\tdn->special = true;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|-> \t\tdn->ext_linearized = talloc_strndup(dn, data, length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   \t\tLDB_DN_NULL_FAILED(dn->ext_linearized);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 122,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "100 bytes in 1 blocks are possibly lost in loss record 9 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 89,
                    "event": "note",
                    "message": "called from ldb_dn_from_ldb_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 165,
                    "event": "note",
                    "message": "called from ldb_dn_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1642,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t\t\tdn->special = true;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|-> \t\tdn->ext_linearized = talloc_strndup(dn, data, length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   \t\tLDB_DN_NULL_FAILED(dn->ext_linearized);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 136,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "485 bytes in 5 blocks are possibly lost in loss record 131 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 136,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 89,
                    "event": "note",
                    "message": "called from ldb_dn_from_ldb_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 165,
                    "event": "note",
                    "message": "called from ldb_dn_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 187,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   \t\t\tif (p_save == dn->ext_linearized) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|-> \t\t\t\tdn->linearized = talloc_strdup(dn, \"\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   \t\t\t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   \t\t\t\tdn->linearized = talloc_strdup(dn, p_save);",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 138,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "409 bytes in 4 blocks are possibly lost in loss record 130 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 89,
                    "event": "note",
                    "message": "called from ldb_dn_from_ldb_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 165,
                    "event": "note",
                    "message": "called from ldb_dn_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 187,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|   \t\t\t\tdn->linearized = talloc_strdup(dn, \"\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|   \t\t\t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|-> \t\t\t\tdn->linearized = talloc_strdup(dn, p_save);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|   \t\t\tLDB_DN_NULL_FAILED(dn->linearized);",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 337,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,200 bytes in 5 blocks are possibly lost in loss record 136 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 337,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 837,
                    "event": "note",
                    "message": "called from ldb_dn_get_extended_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   \t/* in the common case we have 3 or more components */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t/* make sure all components are zeroed, other functions depend on it */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|-> \tdn->components = talloc_zero_array(dn, struct ldb_dn_component, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|   \tif (dn->components == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   \t\treturn false;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 337,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "240 bytes in 1 blocks are possibly lost in loss record 92 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 337,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   \t/* in the common case we have 3 or more components */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t/* make sure all components are zeroed, other functions depend on it */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|-> \tdn->components = talloc_zero_array(dn, struct ldb_dn_component, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|   \tif (dn->components == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   \t\treturn false;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 337,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "720 bytes in 3 blocks are possibly lost in loss record 135 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 337,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 210,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|   \t/* in the common case we have 3 or more components */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   \t/* make sure all components are zeroed, other functions depend on it */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|-> \tdn->components = talloc_zero_array(dn, struct ldb_dn_component, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|   \tif (dn->components == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   \t\treturn false;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 394,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "120 bytes in 1 blocks are possibly lost in loss record 49 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 394,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 837,
                    "event": "note",
                    "message": "called from ldb_dn_get_extended_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|   \t\t\t\t/* Process name and ex_value */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|-> \t\t\t\text_comp = talloc_realloc(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   \t\t\t\t\tdn,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|   \t\t\t\t\tdn->ext_components,",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "196 bytes in 2 blocks are possibly lost in loss record 87 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 837,
                    "event": "note",
                    "message": "called from ldb_dn_get_extended_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   \t\t\t\t *  with spaces trimmed) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   \t\t\t\t*d++ = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|-> \t\t\t\tdn->components[dn->comp_num].name = talloc_strdup(dn->components, dt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   \t\t\t\tif (dn->components[dn->comp_num].name == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|   \t\t\t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "198 bytes in 2 blocks are possibly lost in loss record 88 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1956,
                    "event": "note",
                    "message": "called from ldb_dn_set_component()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1649,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   \t\t\t\t *  with spaces trimmed) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   \t\t\t\t*d++ = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|-> \t\t\t\tdn->components[dn->comp_num].name = talloc_strdup(dn->components, dt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   \t\t\t\tif (dn->components[dn->comp_num].name == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|   \t\t\t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "297 bytes in 3 blocks are possibly lost in loss record 106 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   \t\t\t\t *  with spaces trimmed) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   \t\t\t\t*d++ = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|-> \t\t\t\tdn->components[dn->comp_num].name = talloc_strdup(dn->components, dt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   \t\t\t\tif (dn->components[dn->comp_num].name == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|   \t\t\t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "392 bytes in 4 blocks are possibly lost in loss record 126 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 210,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   \t\t\t\t *  with spaces trimmed) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   \t\t\t\t*d++ = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|-> \t\t\t\tdn->components[dn->comp_num].name = talloc_strdup(dn->components, dt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   \t\t\t\tif (dn->components[dn->comp_num].name == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|   \t\t\t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "396 bytes in 4 blocks are possibly lost in loss record 127 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 490,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  488|   \t\t\t\t *  with spaces trimmed) */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   \t\t\t\t*d++ = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|-> \t\t\t\tdn->components[dn->comp_num].name = talloc_strdup(dn->components, dt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|   \t\t\t\tif (dn->components[dn->comp_num].name == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|   \t\t\t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "102 bytes in 1 blocks are possibly lost in loss record 14 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1956,
                    "event": "note",
                    "message": "called from ldb_dn_set_component()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1649,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|   \t\t\t\t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|   \t\t\t\tdn->components[dn->comp_num].value.data = \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|-> \t\t\t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|   \t\t\t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|   \t\t\t\tif (dn->components[dn->comp_num].value.data == NULL) {",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "200 bytes in 2 blocks are possibly lost in loss record 90 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|   \t\t\t\t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|   \t\t\t\tdn->components[dn->comp_num].value.data = \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|-> \t\t\t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|   \t\t\t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|   \t\t\t\tif (dn->components[dn->comp_num].value.data == NULL) {",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "298 bytes in 3 blocks are possibly lost in loss record 111 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|   \t\t\t\t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|   \t\t\t\tdn->components[dn->comp_num].value.data = \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|-> \t\t\t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|   \t\t\t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|   \t\t\t\tif (dn->components[dn->comp_num].value.data == NULL) {",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "98 bytes in 1 blocks are possibly lost in loss record 2 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 589,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 210,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|   \t\t\t\t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  588|   \t\t\t\tdn->components[dn->comp_num].value.data = \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|-> \t\t\t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|   \t\t\t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|   \t\t\t\tif (dn->components[dn->comp_num].value.data == NULL) {",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 602,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "288 bytes in 1 blocks are possibly lost in loss record 102 of 143",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 602,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  600|   \t\t\t\tdn->comp_num++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  601|   \t\t\t\tif (dn->comp_num > 2) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|-> \t\t\t\t\tdn->components = talloc_realloc(dn,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   \t\t\t\t\t\t\t\t\tdn->components,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   \t\t\t\t\t\t\t\t\tstruct ldb_dn_component,",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 731,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "100 bytes in 1 blocks are possibly lost in loss record 7 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 731,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 305,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 941,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  729|   \t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  730|   \t\tdn->components[dn->comp_num].value.data =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|-> \t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|   \t\tif (dn->components[dn->comp_num].value.data == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|   \t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 731,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "297 bytes in 3 blocks are possibly lost in loss record 110 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 731,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 210,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  729|   \t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  730|   \t\tdn->components[dn->comp_num].value.data =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|-> \t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|   \t\tif (dn->components[dn->comp_num].value.data == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|   \t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 731,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "98 bytes in 1 blocks are possibly lost in loss record 4 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 731,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 837,
                    "event": "note",
                    "message": "called from ldb_dn_get_extended_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  729|   \t\tdn->components[dn->comp_num].value.length = l;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  730|   \t\tdn->components[dn->comp_num].value.data =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|-> \t\t\t(uint8_t *)talloc_memdup(dn->components, dt, l + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|   \t\tif (dn->components[dn->comp_num].value.data == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|   \t\t\t/* ouch */",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 787,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "135 bytes in 1 blocks are possibly lost in loss record 64 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_array()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 787,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 758,
                    "event": "note",
                    "message": "called from ldb_dn_get_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 78,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|   \t\tlen += 2; /* '=' and ',' */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|-> \tdn->linearized = talloc_array(dn, char, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   \tif ( ! dn->linearized) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 787,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "150 bytes in 1 blocks are possibly lost in loss record 72 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_array()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 787,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 758,
                    "event": "note",
                    "message": "called from ldb_dn_get_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 99,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|   \t\tlen += 2; /* '=' and ',' */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|-> \tdn->linearized = talloc_array(dn, char, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   \tif ( ! dn->linearized) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1010,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "135 bytes in 1 blocks are possibly lost in loss record 63 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_array()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1010,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 978,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|   \t\tlen += 2; /* '=' and ',' */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1010|-> \tdn->casefold = talloc_array(dn, char, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1011|   \tif ( ! dn->casefold) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1012|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1010,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "142 bytes in 1 blocks are possibly lost in loss record 71 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_array()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1010,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 978,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|   \t\tlen += 2; /* '=' and ',' */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1010|-> \tdn->casefold = talloc_array(dn, char, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1011|   \tif ( ! dn->casefold) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1012|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1010,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "150 bytes in 1 blocks are possibly lost in loss record 73 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_array()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1010,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 978,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1008|   \t\tlen += 2; /* '=' and ',' */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1009|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1010|-> \tdn->casefold = talloc_array(dn, char, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1011|   \tif ( ! dn->casefold) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1012|   ",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1574,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "117 bytes in 1 blocks are possibly lost in loss record 33 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_vasprintf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_asprintf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1574,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1501,
                    "event": "note",
                    "message": "called from ldb_dn_add_child()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1618,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_fmt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 35,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1572|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1573|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1574|-> \t\tt = talloc_asprintf(dn, \"%s,%s\", s, dn->linearized);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1575|   \t\tif ( ! t) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1576|   \t\t\tldb_dn_mark_invalid(dn);",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1574,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "122 bytes in 1 blocks are possibly lost in loss record 50 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_vasprintf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_asprintf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1574,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1501,
                    "event": "note",
                    "message": "called from ldb_dn_add_child()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1618,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_fmt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 52,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1572|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1573|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1574|-> \t\tt = talloc_asprintf(dn, \"%s,%s\", s, dn->linearized);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1575|   \t\tif ( ! t) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1576|   \t\t\tldb_dn_mark_invalid(dn);",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1972,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "99 bytes in 1 blocks are possibly lost in loss record 5 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1972,
                    "event": "note",
                    "message": "called from ldb_dn_set_component()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1649,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1970|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1971|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1972|-> \tn = talloc_strdup(dn, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1973|   \tif ( ! n) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1974|   \t\treturn LDB_ERR_OTHER;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1983,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "103 bytes in 1 blocks are possibly lost in loss record 16 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_named_const()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1983,
                    "event": "note",
                    "message": "called from ldb_dn_set_component()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1649,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 96,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1981|   \t * avoids the over-read",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1982|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1983|-> \tv.data = (uint8_t *)talloc_size(dn, v.length+1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1984|   \tif ( ! v.data) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1985|   \t\ttalloc_free(n);",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1983,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "98 bytes in 1 blocks are possibly lost in loss record 1 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_named_const()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1983,
                    "event": "note",
                    "message": "called from ldb_dn_set_component()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 1649,
                    "event": "note",
                    "message": "called from ldb_dn_add_child_val()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1981|   \t * avoids the over-read",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1982|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1983|-> \tv.data = (uint8_t *)talloc_size(dn, v.length+1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1984|   \tif ( ! v.data) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1985|   \t\ttalloc_free(n);",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 676,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "112 bytes in 1 blocks are possibly lost in loss record 2 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 676,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 133,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
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
                    "message": "  675|   \t/* Register bitmask-and match */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|-> \tbitmask_and = talloc_zero(ldb, struct ldb_extended_match_rule);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|   \tif (bitmask_and == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|   \t\treturn LDB_ERR_OPERATIONS_ERROR;",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 690,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "112 bytes in 1 blocks are possibly lost in loss record 3 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 690,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 668,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 133,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  688|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|   \t/* Register bitmask-or match */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|-> \tbitmask_or = talloc_zero(ldb, struct ldb_extended_match_rule);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|   \tif (bitmask_or == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|   \t\treturn LDB_ERR_OPERATIONS_ERROR;",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 704,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "112 bytes in 1 blocks are possibly lost in loss record 4 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 704,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 668,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 133,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  702|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  703|   \t/* Register always-false match */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  704|-> \talways_false = talloc_zero(ldb, struct ldb_extended_match_rule);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  705|   \tif (always_false == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  706|   \t\treturn LDB_ERR_OPERATIONS_ERROR;",
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
                    "file_name": "bin/ldbdump",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3884 with arguments: -i bin/st/tmp/tmp5sd2zke1/guidindexpackv1.ldb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 734,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "120 bytes in 1 blocks are possibly lost in loss record 5 of 36",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 734,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 723,
                    "event": "note",
                    "message": "called from ldb_register_extended_match_rule()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_match.c",
                    "line": 684,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 133,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbdump.c",
                    "line": 327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  734|-> \tentry = talloc_zero(ldb, struct ldb_extended_match_entry);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  735|   \tif (!entry) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  736|   \t\treturn LDB_ERR_OPERATIONS_ERROR;",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 156,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "360 bytes in 3 blocks are possibly lost in loss record 15 of 26",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 156,
                    "event": "note",
                    "message": "called from ldb_register_backend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../ldb_ldap/ldb_ldap.c",
                    "line": 961,
                    "event": "note",
                    "message": "called from ldb_init_module()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1017,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1091,
                    "event": "note",
                    "message": "called from ldb_modules_load_dir()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 976,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1167,
                    "event": "note",
                    "message": "called from ldb_modules_load()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 100,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   \t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|-> \t\tbe = talloc_zero(ldb_backends, struct backends_list_entry);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|   \t\tif (!be) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|   \t\t\treturn LDB_ERR_OPERATIONS_ERROR;",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 160,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "336 bytes in 3 blocks are possibly lost in loss record 13 of 26",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_zero()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from ldb_register_backend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../ldb_ldap/ldb_ldap.c",
                    "line": 961,
                    "event": "note",
                    "message": "called from ldb_init_module()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1017,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1091,
                    "event": "note",
                    "message": "called from ldb_modules_load_dir()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 976,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1167,
                    "event": "note",
                    "message": "called from ldb_modules_load()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 100,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|   \t\t\treturn LDB_ERR_OPERATIONS_ERROR;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|-> \t\tbe->ops = talloc_zero(be, struct ldb_backend_ops);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|   \t\tif (!be->ops) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   \t\t\ttalloc_free(be);",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 297,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "672 bytes in 6 blocks are possibly lost in loss record 20 of 26",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_named_const()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 297,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 280,
                    "event": "note",
                    "message": "called from ldb_register_module()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1017,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1091,
                    "event": "note",
                    "message": "called from ldb_modules_load_dir()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 976,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1167,
                    "event": "note",
                    "message": "called from ldb_modules_load()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 100,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|   \t * frees the list.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|   \t */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|-> \tentry = talloc(NULL, struct ops_list_entry);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|   \tif (entry == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|   \t\treturn LDB_ERR_OPERATIONS_ERROR;",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 963,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,280 bytes in 10 blocks are possibly lost in loss record 22 of 26",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_named_const()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 963,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1091,
                    "event": "note",
                    "message": "called from ldb_modules_load_dir()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 976,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1167,
                    "event": "note",
                    "message": "called from ldb_modules_load()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 100,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  963|-> \tle = talloc(loaded, struct loaded);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|   \tif (le == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  965|   \t\tfprintf(stderr, \"ldb: unable to allocated loaded entry\\n\");",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 963,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "128 bytes in 1 blocks are possibly lost in loss record 5 of 26",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_named_const()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 963,
                    "event": "note",
                    "message": "called from ldb_modules_load_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_modules.c",
                    "line": 1167,
                    "event": "note",
                    "message": "called from ldb_modules_load()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb.c",
                    "line": 100,
                    "event": "note",
                    "message": "called from ldb_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  963|-> \tle = talloc(loaded, struct loaded);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|   \tif (le == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  965|   \t\tfprintf(stderr, \"ldb: unable to allocated loaded entry\\n\");",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 59,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "300 bytes in 3 blocks are possibly lost in loss record 112 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 59,
                    "event": "note",
                    "message": "called from ldb_casefold_default()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/attrib_handlers.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from ldb_handler_fold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 958,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 932,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   \tsize_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|-> \tchar *ret = talloc_strndup(mem_ctx, s, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \tif (!s) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \t\terrno = ENOMEM;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 59,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "305 bytes in 3 blocks are possibly lost in loss record 114 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 59,
                    "event": "note",
                    "message": "called from ldb_casefold_default()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/attrib_handlers.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from ldb_handler_fold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 958,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 932,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_val2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   \tsize_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|-> \tchar *ret = talloc_strndup(mem_ctx, s, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \tif (!s) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \t\terrno = ENOMEM;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 59,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "398 bytes in 4 blocks are possibly lost in loss record 129 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 59,
                    "event": "note",
                    "message": "called from ldb_casefold_default()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/attrib_handlers.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from ldb_handler_fold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 958,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 932,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   \tsize_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|-> \tchar *ret = talloc_strndup(mem_ctx, s, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \tif (!s) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \t\terrno = ENOMEM;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 115,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "297 bytes in 3 blocks are possibly lost in loss record 107 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from ldb_attr_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 949,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 932,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   \tsize_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|-> \tchar *ret = talloc_strdup(mem_ctx, s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \tif (!ret) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   \t\terrno = ENOMEM;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 115,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "396 bytes in 4 blocks are possibly lost in loss record 128 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_utf8.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from ldb_attr_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 949,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 932,
                    "event": "note",
                    "message": "called from ldb_dn_casefold_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 993,
                    "event": "note",
                    "message": "called from ldb_dn_get_casefold()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_ldb_dn_add_child_fmt2()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|   \tsize_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|-> \tchar *ret = talloc_strdup(mem_ctx, s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \tif (!ret) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   \t\terrno = ENOMEM;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 131,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "100 bytes in 1 blocks are possibly lost in loss record 13 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_memdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 131,
                    "event": "note",
                    "message": "called from extended_dn_read_ID()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 414,
                    "event": "note",
                    "message": "called from ldb_dn_explode.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../common/ldb_dn.c",
                    "line": 837,
                    "event": "note",
                    "message": "called from ldb_dn_get_extended_linearized()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   \t*out = *in;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|-> \tout->data = talloc_memdup(mem_ctx, in->data, in->length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|   \tif (out->data == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   \t\treturn -1;",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "114 bytes in 1 blocks are possibly lost in loss record 32 of 143",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from _talloc_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_asprintf_append_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   \t\t\t\t    tests[i].linearized);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|-> \t\text_linear = ldb_dn_get_extended_linearized(ldb, dn, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|   \t\tassert_true((ext_linear == NULL) ==",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   \t\t\t    (tests[i].ext_linearized_1 == NULL));",
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
                    "file_name": "bin/test_ldb_dn",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7246",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "603 bytes in 6 blocks are possibly lost in loss record 132 of 143",
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
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libtalloc.so.2.3.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from talloc_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 198,
                    "event": "note",
                    "message": "called from test_ldb_dn_explode()",
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
                    "file_name": "ldb-2.4.0/bin/default/../../tests/test_ldb_dn.c",
                    "line": 231,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   \t\t\t\t    tests[i].linearized);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|-> \t\text_linear = ldb_dn_get_extended_linearized(ldb, dn, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|   \t\tassert_true((ext_linear == NULL) ==",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|   \t\t\t    (tests[i].ext_linearized_1 == NULL));",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "815 (792 direct, 23 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 143,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2601 with arguments: tests/../tests/init.ldif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "831 (792 direct, 39 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 143,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
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
                    "file_name": "bin/ldbmodify",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3091 with arguments: tests/../tests/test-modify.ldif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "834 (792 direct, 42 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbmodify.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
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
                    "file_name": "bin/ldbrename",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3581 with arguments: cn=Ursula Hampster,ou=Alumni Association,ou=People,o=University of Michigan,c=TEST cn=Hampster Ursula,ou=Alumni Association,ou=People,o=University of Michigan,c=TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "850 (792 direct, 58 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbrename.c",
                    "line": 62,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2503",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "16 bytes in 1 blocks are possibly lost in loss record 2 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 143,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
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
                    "file_name": "bin/ldbadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2601 with arguments: tests/../tests/init.ldif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "24 bytes in 1 blocks are possibly lost in loss record 2 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbadd.c",
                    "line": 143,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
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
                    "file_name": "bin/ldbrename",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3581 with arguments: cn=Ursula Hampster,ou=Alumni Association,ou=People,o=University of Michigan,c=TEST cn=Hampster Ursula,ou=Alumni Association,ou=People,o=University of Michigan,c=TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "32 bytes in 1 blocks are possibly lost in loss record 2 of 26",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1328,
                    "event": "note",
                    "message": "called from calloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetContext()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/cmdline.c",
                    "line": 344,
                    "event": "note",
                    "message": "called from ldb_cmdline_process_internal.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/bin/default/../../tools/ldbrename.c",
                    "line": 62,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   \t}",
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
                    "message": "  344|-> \tpc = poptGetContext(argv[0], argc, argv, *popt_options,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   \t\t\t    POPT_CONTEXT_KEEP_FIRST);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘ldb_init’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 120,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120 |                 tevent_loop_allow_nesting(ev_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb.h",
                    "line": 51,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb_private.h",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \t\ttevent_set_debug(ev_ctx, ldb_tevent_debug, ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|-> \t\ttevent_loop_allow_nesting(ev_ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘ldb_handle_new’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 751,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751 |                 tevent_loop_allow_nesting(h->event_context);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb.h",
                    "line": 51,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/include/ldb_private.h",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/common/ldb.c",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   \t\ttevent_set_debug(h->event_context, ldb_tevent_debug, ldb);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|-> \t\ttevent_loop_allow_nesting(h->event_context);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_search_against_transaction’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 1646,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1644|   \tstruct ldb_dn *base_search_dn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1645|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1646|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1647|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1648|   \tbase_search_dn",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_modify_during_search’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 1965,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1965 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1963|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1964|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1965|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1966|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1967|   \tctx.basedn",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_modify_during_whole_search’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 2205,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2205 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2203|   \tstruct ldb_result *res2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2204|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2205|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2206|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2207|   \tctx.basedn",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘test_ldb_callback_modify_during_search’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 2689,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "‘tevent_loop_allow_nesting’ is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2689 |         tevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "ldb-2.4.0/tests/ldb_mod_op_test.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/tevent.h",
                    "line": 2304,
                    "column": 6,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2304 | void tevent_loop_allow_nesting(struct tevent_context *ev) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2687|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2688|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2689|-> \ttevent_loop_allow_nesting(search_test_ctx->ldb_test_ctx->ev);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2690|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2691|   \tctx.basedn",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
