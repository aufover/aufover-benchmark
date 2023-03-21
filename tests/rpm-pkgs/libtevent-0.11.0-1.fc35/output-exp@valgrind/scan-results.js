{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libtevent-0.11.0-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtevent-0.11.0-1.fc35/valgrind/output",
        "time-created": "2022-11-23 16:25:54",
        "time-finished": "2022-11-23 16:33:45",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtevent-0.11.0-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtevent-0.11.0-1.fc35/libtevent-0.11.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "bin/test_tevent_tag",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 433",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 97,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "128 bytes in 1 blocks are possibly lost in loss record 1 of 5",
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
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 97,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 86,
                    "event": "note",
                    "message": "called from tevent_register_backend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent_poll.c",
                    "line": 644,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 129,
                    "event": "note",
                    "message": "called from tevent_backend_init.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 123,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 144,
                    "event": "note",
                    "message": "called from tevent_find_ops_byname()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent.c",
                    "line": 536,
                    "event": "note",
                    "message": "called from tevent_context_init_byname()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tests/test_tevent_tag.c",
                    "line": 77,
                    "event": "note",
                    "message": "called from test_setup()",
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
                    "file_name": "tevent-0.11.0/bin/default/../../tests/test_tevent_tag.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|-> \te = talloc(NULL, struct tevent_ops_list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   \tif (e == NULL) return false;",
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
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "bin/test_tevent_tag",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 433",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tevent_signal.c",
                    "line": 258,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "2,864 bytes in 1 blocks are possibly lost in loss record 5 of 5",
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
                    "file_name": "tevent-0.11.0/bin/default/../../tevent_signal.c",
                    "line": 258,
                    "event": "note",
                    "message": "called from tevent_common_add_signal.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "tevent-0.11.0/bin/default/../../tests/test_tevent_tag.c",
                    "line": 153,
                    "event": "note",
                    "message": "called from test_signal_tag()",
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
                    "file_name": "tevent-0.11.0/bin/default/../../tests/test_tevent_tag.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|   \t   multiple event contexts */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|   \tif (sig_state == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|-> \t\tsig_state = talloc_zero(NULL, struct tevent_sig_state);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   \t\tif (sig_state == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|   \t\t\treturn NULL;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
