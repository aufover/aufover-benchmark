{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "chrony-4.1-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/chrony-4.1-3.fc35/valgrind/output",
        "time-created": "2022-11-24 03:00:39",
        "time-finished": "2022-11-24 03:09:29",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/chrony-4.1-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/chrony-4.1-3.fc35/chrony-4.1-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./nts_ke_server.test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1808",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/../../memory.c",
                    "line": 38,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "1,792 bytes in 1 blocks are possibly lost in loss record 2 of 2",
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
                    "file_name": "chrony-4.1/test/unit/../../memory.c",
                    "line": 38,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/../../memory.c",
                    "line": 74,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/../../sched.c",
                    "line": 278,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/../../sched.c",
                    "line": 330,
                    "event": "note",
                    "message": "called from SCH_AddTimeout()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/../../sched.c",
                    "line": 378,
                    "event": "note",
                    "message": "called from SCH_AddTimeoutByDelay()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/../../nts_ke_server.c",
                    "line": 776,
                    "event": "note",
                    "message": "called from NKS_Initialise()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/nts_ke_server.c",
                    "line": 162,
                    "event": "note",
                    "message": "called from test_unit()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chrony-4.1/test/unit/test.c",
                    "line": 81,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     void *r;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->   r = malloc(size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     if (!r && size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       LOG_FATAL(\"Could not allocate memory\");",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
