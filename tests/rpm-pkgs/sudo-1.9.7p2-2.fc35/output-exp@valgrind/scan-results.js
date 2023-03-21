{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sudo-1.9.7p2-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sudo-1.9.7p2-2.fc35/valgrind/output",
        "time-created": "2022-11-24 05:36:04",
        "time-finished": "2022-11-24 05:55:44",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sudo-1.9.7p2-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sudo-1.9.7p2-2.fc35/sudo-1.9.7p2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12050 with arguments: -c  -f ldif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "13 bytes in 1 blocks are possibly lost in loss record 12 of 33",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11971 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "15 bytes in 1 blocks are possibly lost in loss record 12 of 33",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 272,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12012 with arguments: -c  -f json ./regress/sudoers/test1.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "34 bytes in 1 blocks are possibly lost in loss record 18 of 34",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12240 with arguments: -c  -f json ./regress/sudoers/test10.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "35 bytes in 1 blocks are possibly lost in loss record 17 of 24",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19238 with arguments: -c  -f sudoers -m user=millert,host=hercules ./regress/cvtsudoers/sudoers",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "36 bytes in 1 blocks are possibly lost in loss record 24 of 59",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18260 with arguments: -U 0 -G 135 root id",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "39 bytes in 1 blocks are possibly lost in loss record 20 of 32",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1055,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1100,
                    "event": "note",
                    "message": "called from push_include()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 223,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19318 with arguments: -c  -f sudoers -d command ./regress/cvtsudoers/sudoers.defs",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "41 bytes in 1 blocks are possibly lost in loss record 20 of 36",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19854 with arguments: -c  -b ou=SUDOers,dc=sudo,dc=ws ./regress/cvtsudoers/test23.out.ok",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "42 bytes in 1 blocks are possibly lost in loss record 28 of 45",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from sudo_rcstr_dup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1649,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 640,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/cvtsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 19798 with arguments: -c  -i ldif -b ou=SUDOers,dc=sudo,dc=ws -I 10 -O 10",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "44 bytes in 2 blocks are possibly lost in loss record 27 of 38",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./ldap_util.c",
                    "line": 517,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./parse_ldif.c",
                    "line": 419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./parse_ldif.c",
                    "line": 524,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./parse_ldif.c",
                    "line": 771,
                    "event": "note",
                    "message": "called from sudoers_parse_ldif.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 621,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./cvtsudoers.c",
                    "line": 334,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18213 with arguments: -U 0 -G 135 root id",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "89 bytes in 1 blocks are possibly lost in loss record 26 of 35",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1055,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1100,
                    "event": "note",
                    "message": "called from push_include()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 223,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17783 with arguments: -U 0 -G 135 root id",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "90 bytes in 1 blocks are possibly lost in loss record 26 of 32",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1055,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1100,
                    "event": "note",
                    "message": "called from push_include()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 223,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18345 with arguments: -U 0 -G 135 root id",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "91 bytes in 1 blocks are possibly lost in loss record 26 of 32",
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
                    "file_name": "sudo-1.9.7p2/lib/util/./rcstr.c",
                    "line": 64,
                    "event": "note",
                    "message": "called from sudo_rcstr_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 893,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 952,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 1158,
                    "event": "note",
                    "message": "called from push_include()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 223,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|       /* Note: sizeof(struct rcstr) includes space for the NUL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|->     rcs = malloc(sizeof(struct rcstr) + len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       if (rcs == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   \treturn NULL;",
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
                    "file_name": "sudo-1.9.7p2/lib/util/.libs/getgrouplist_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7636",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./regress/getgrouplist/getgrouplist_test.c",
                    "line": 59,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 1 of 9",
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
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/lib/util/./regress/getgrouplist/getgrouplist_test.c",
                    "line": 59,
                    "event": "note",
                    "message": "called from main()",
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
                    "message": "   58|       basegid = pw->pw_gid;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|->     if ((username = strdup(pw->pw_name)) == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   \tsudo_fatal_nodebug(NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 1 blocks are definitely lost in loss record 15 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 20 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1053,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 1 blocks are definitely lost in loss record 41 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1020,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "15 bytes in 1 blocks are definitely lost in loss record 48 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1086,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 55 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1057,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "18 bytes in 1 blocks are definitely lost in loss record 69 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1082,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1131,
                    "event": "note",
                    "message": "called from sudoers_policy_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 425,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 1 blocks are definitely lost in loss record 84 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1082,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1076,
                    "event": "note",
                    "message": "called from sudoers_policy_validate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 438,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "25 bytes in 1 blocks are definitely lost in loss record 93 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1082,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "30 bytes in 3 blocks are definitely lost in loss record 100 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "33 bytes in 3 blocks are definitely lost in loss record 101 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1053,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "39 bytes in 3 blocks are definitely lost in loss record 112 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1020,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "45 bytes in 3 blocks are definitely lost in loss record 118 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1086,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 bytes in 3 blocks are definitely lost in loss record 121 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1057,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "75 bytes in 3 blocks are definitely lost in loss record 140 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 433,
                    "event": "note",
                    "message": "called from sudo_setenv2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./env.c",
                    "line": 1082,
                    "event": "note",
                    "message": "called from rebuild_env()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 501,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|       esize = strlen(var) + 1 + strlen(val) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|->     if ((estring = malloc(esize)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 606,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,074 (440 direct, 634 indirect) bytes in 1 blocks are definitely lost in loss record 153 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 606,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 757,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|       /* Increase the length of command_info as needed, it is *not* checked. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|->     command_info = calloc(55, sizeof(char *));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       if (command_info == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   \tgoto oom;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 606,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3,229 (1,320 direct, 1,909 indirect) bytes in 3 blocks are definitely lost in loss record 156 of 156",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 606,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 757,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|       /* Increase the length of command_info as needed, it is *not* checked. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|->     command_info = calloc(55, sizeof(char *));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|       if (command_info == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   \tgoto oom;",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11971 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./pwutil_impl.c",
                    "line": 118,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "121 bytes in 1 blocks are possibly lost in loss record 24 of 33",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./pwutil_impl.c",
                    "line": 118,
                    "event": "note",
                    "message": "called from sudo_make_pwitem()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./pwutil.c",
                    "line": 283,
                    "event": "note",
                    "message": "called from sudo_getpwnam()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 214,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|       /* Allocate space for struct item, struct passwd and the strings. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     if ((pwitem = calloc(1, total)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17735 with arguments: -g bin -P ./regress/testsudoers/group root id",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./pwutil_impl.c",
                    "line": 192,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "82 bytes in 1 blocks are possibly lost in loss record 26 of 31",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./pwutil_impl.c",
                    "line": 192,
                    "event": "note",
                    "message": "called from testsudoers_make_gritem()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./pwutil.c",
                    "line": 597,
                    "event": "note",
                    "message": "called from sudo_getgrnam()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 405,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 280,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   \ttotal += strlen(name) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|->     if ((gritem = calloc(1, total)) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/check_hexchar",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11713",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/parser/check_hexchar.c",
                    "line": 51,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4,120 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/parser/check_hexchar.c",
                    "line": 51,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|       /* Build up test data. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       ntests = 256 + 256 + 3;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|->     test_data = calloc(sizeof(*test_data), ntests);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|       for (i = 0; i < 256; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   \t/* lower case */",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 372,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 87 of 156",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 372,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       /* Must leave an extra slot before NewArgv for bash's --login */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|       NewArgc = argc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|->     NewArgv = reallocarray(NULL, NewArgc + 2, sizeof(char *));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|       if (NewArgv == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 372,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "72 bytes in 3 blocks are definitely lost in loss record 138 of 156",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 372,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1043,
                    "event": "note",
                    "message": "called from sudoers_policy_check()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 417,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       /* Must leave an extra slot before NewArgv for bash's --login */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|       NewArgc = argc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|->     NewArgv = reallocarray(NULL, NewArgc + 2, sizeof(char *));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|       if (NewArgv == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_policy",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11309 with arguments: ./regress/corpus/seed/policy/policy.1 ./regress/corpus/seed/policy/policy.2 ./regress/corpus/seed/policy/policy.3 ./regress/corpus/seed/policy/policy.4 ./regress/corpus/seed/policy/policy.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 372,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "24 bytes in 1 blocks are possibly lost in loss record 86 of 156",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./sudoers.c",
                    "line": 372,
                    "event": "note",
                    "message": "called from sudoers_policy_main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./policy.c",
                    "line": 1076,
                    "event": "note",
                    "message": "called from sudoers_policy_validate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_policy.c",
                    "line": 438,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|       /* Must leave an extra slot before NewArgv for bash's --login */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|       NewArgc = argc;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|->     NewArgv = reallocarray(NULL, NewArgc + 2, sizeof(char *));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|       if (NewArgv == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18053 with arguments: -d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 3 blocks are definitely lost in loss record 14 of 32",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 715,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13871 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2 bytes in 1 blocks are definitely lost in loss record 3 of 36",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 715,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 17163 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "25 bytes in 5 blocks are definitely lost in loss record 19 of 25",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 634,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18013 with arguments: -d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3 bytes in 1 blocks are definitely lost in loss record 5 of 45",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 634,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16745 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 4 of 24",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 634,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "46 bytes in 10 blocks are definitely lost in loss record 22 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 634,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 8 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 686,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 2 blocks are definitely lost in loss record 9 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 715,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 16555 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 2 blocks are definitely lost in loss record 13 of 33",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 634,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18013 with arguments: -d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "9 bytes in 3 blocks are definitely lost in loss record 15 of 45",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 75,
                    "event": "note",
                    "message": "called from fill()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 715,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|       debug_decl(fill, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75|->     dst = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13871 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 128,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "69 bytes in 6 blocks are definitely lost in loss record 29 of 36",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 128,
                    "event": "note",
                    "message": "called from fill_cmnd()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 702,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|       arg_len = arg_size = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->     dst = sudoerslval.command.cmnd = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 128,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "81 bytes in 7 blocks are definitely lost in loss record 26 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./toke_util.c",
                    "line": 128,
                    "event": "note",
                    "message": "called from fill_cmnd()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/toke.l",
                    "line": 702,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.c",
                    "line": 1548,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|       arg_len = arg_size = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|->     dst = sudoerslval.command.cmnd = malloc(len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|       if (dst == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   \tsudo_warnx(U_(\"%s: %s\"), __func__, U_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12579 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 722,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 (16 direct, 32 indirect) bytes in 1 blocks are definitely lost in loss record 23 of 28",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 722,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  720|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  721|   \t\t|\tuserlist {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|-> \t\t\t    $$ = calloc(1, sizeof(struct runascontainer));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|   \t\t\t    if ($$ == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|   \t\t\t\tsudoerserror(N_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 722,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "96 (32 direct, 64 indirect) bytes in 2 blocks are definitely lost in loss record 27 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 722,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  720|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  721|   \t\t|\tuserlist {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|-> \t\t\t    $$ = calloc(1, sizeof(struct runascontainer));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|   \t\t\t    if ($$ == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|   \t\t\t\tsudoerserror(N_(\"unable to allocate memory\"));",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13871 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "160 bytes in 5 blocks are definitely lost in loss record 34 of 36",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1131,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13871 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "190 (160 direct, 30 indirect) bytes in 5 blocks are definitely lost in loss record 35 of 36",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1139,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18013 with arguments: -d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "232 (32 direct, 200 indirect) bytes in 1 blocks are definitely lost in loss record 43 of 45",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1131,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "256 bytes in 8 blocks are definitely lost in loss record 28 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1131,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12389 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 19 of 25",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1139,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 15681 with arguments: -dt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "36 (32 direct, 4 indirect) bytes in 1 blocks are definitely lost in loss record 23 of 28",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1139,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/fuzz_sudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11086 with arguments: ../../examples/sudoers ./regress/sudoers/test1.in ./regress/sudoers/test2.in ./regress/sudoers/test3.in ./regress/sudoers/test4.in ./regress/sudoers/test5.in ./regress/sudoers/test6.in ./regress/sudoers/test7.in ./regress/sudoers/test8.in ./regress/sudoers/test9.in ./regress/sudoers/test10.in ./regress/sudoers/test11.in ./regress/sudoers/test12.in ./regress/sudoers/test13.in ./regress/sudoers/test14.in ./regress/sudoers/test15.in ./regress/sudoers/test16.in ./regress/sudoers/test17.in ./regress/sudoers/test18.in ./regress/sudoers/test19.in ./regress/sudoers/test20.in ./regress/sudoers/test21.in ./regress/sudoers/test22.in ./regress/sudoers/test23.in ./regress/sudoers/test24.in ./regress/sudoers/test25.in",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "374 (320 direct, 54 indirect) bytes in 10 blocks are definitely lost in loss record 29 of 30",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1139,
                    "event": "note",
                    "message": "called from sudoersparse.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./regress/fuzz/fuzz_sudoers.c",
                    "line": 293,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/../../lib/fuzzstub/./fuzzstub.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/.libs/testsudoers",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 18013 with arguments: -d",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "73 (64 direct, 9 indirect) bytes in 2 blocks are definitely lost in loss record 36 of 45",
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
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1265,
                    "event": "note",
                    "message": "called from new_member.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/gram.y",
                    "line": 1139,
                    "event": "note",
                    "message": "called from sudoersparse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/./testsudoers.c",
                    "line": 295,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|       debug_decl(new_member, SUDOERS_DEBUG_PARSER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1264|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1265|->     if ((m = calloc(1, sizeof(struct member))) == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1266|   \tsudo_debug_printf(SUDO_DEBUG_ERROR|SUDO_DEBUG_LINENO,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1267|   \t    \"unable to allocate memory\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/log_client.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'tls_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sudo-1.9.7p2/plugins/sudoers/log_client.c",
                    "line": 181,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'SSL_clear' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181 |         SSL_clear(closure->ssl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~",
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
