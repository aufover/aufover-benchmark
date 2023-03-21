{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "fapolicyd-1.0.3-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/fapolicyd-1.0.3-3.fc35/valgrind/output",
        "time-created": "2022-11-23 13:16:51",
        "time-finished": "2022-11-23 13:22:37",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/fapolicyd-1.0.3-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/fapolicyd-1.0.3-3.fc35/fapolicyd-1.0.3-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./gid_proc_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 815",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fapolicyd-1.0.3/src/tests/../library/attr-sets.c",
                    "line": 172,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 (32 direct, 96 indirect) bytes in 1 blocks are definitely lost in loss record 4 of 4",
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
                    "file_name": "fapolicyd-1.0.3/src/tests/../library/attr-sets.c",
                    "line": 172,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fapolicyd-1.0.3/src/tests/gid_proc_test.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|   attr_sets_entry_t *init_standalone_set(const int type)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|-> \tattr_sets_entry_t *s = malloc(sizeof(attr_sets_entry_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|   \tif (s) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|   \t\ts->name = NULL;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
