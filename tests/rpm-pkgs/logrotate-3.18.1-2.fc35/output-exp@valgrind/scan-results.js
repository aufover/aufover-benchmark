{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "logrotate-3.18.1-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/valgrind/output",
        "time-created": "2022-11-23 17:24:15",
        "time-finished": "2022-11-23 17:30:22",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/logrotate-3.18.1-2.fc35/logrotate-3.18.1-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "logrotate-3.18.1/build/logrotate",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2418 with arguments: -v -m ./mailer -s state test-config.18 -l syslog --force",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 2 blocks are definitely lost in loss record 6 of 14",
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
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2998|       poptSetOtherOptionHelp(optCon, \"[OPTION...] <configfile>\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2999|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3000|->     while ((arg = poptGetNextOpt(optCon)) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3001|           switch (arg) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3002|               case 'd':",
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
                    "file_name": "logrotate-3.18.1/build/logrotate",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2330 with arguments: -v -m ./mailer -s state test-config.17 -l logrotate.log",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "20 bytes in 2 blocks are definitely lost in loss record 5 of 9",
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
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2998|       poptSetOtherOptionHelp(optCon, \"[OPTION...] <configfile>\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2999|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3000|->     while ((arg = poptGetNextOpt(optCon)) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3001|           switch (arg) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3002|               case 'd':",
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
                    "file_name": "logrotate-3.18.1/build/logrotate",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6689 with arguments: -v -m ./mailer -s state test-config.60 --force -l ./logrotate.log",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 2 blocks are definitely lost in loss record 7 of 15",
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
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2998|       poptSetOtherOptionHelp(optCon, \"[OPTION...] <configfile>\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2999|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3000|->     while ((arg = poptGetNextOpt(optCon)) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3001|           switch (arg) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3002|               case 'd':",
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
                    "file_name": "logrotate-3.18.1/build/logrotate",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10032 with arguments: -v -m ./mailer -s state test-config.82 --force",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 2 of 13",
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
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "logrotate-3.18.1/build/../logrotate.c",
                    "line": 3000,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2998|       poptSetOtherOptionHelp(optCon, \"[OPTION...] <configfile>\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2999|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3000|->     while ((arg = poptGetNextOpt(optCon)) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3001|           switch (arg) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3002|               case 'd':",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
