{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "popt-1.18-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/popt-1.18-6.fc35/valgrind/output",
        "time-created": "2022-11-23 11:37:57",
        "time-finished": "2022-11-23 11:43:17",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/popt-1.18-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/popt-1.18-6.fc35/popt-1.18-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1482 with arguments: --grabbar boggle",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
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
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1428 with arguments: --arg2=aaaa -2 bbbb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 2 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
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
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1455 with arguments: --grab bingo boggle",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
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
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1050 with arguments: -I --arg2 foo",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
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
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1428 with arguments: --arg2=aaaa -2 bbbb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 2 of 3",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 219,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
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
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1860 with arguments: --optional=yadda",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
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
                    "file_name": "popt-1.18/tests/.libs/test1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1995 with arguments: -2foo=bar",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1126,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1419,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/src/popt.c",
                    "line": 1215,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "popt-1.18/tests/test1.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1124|       case POPT_ARG_STRING:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1125|   \t/* XXX memory leak, application is responsible for free. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1126|-> \targ.argv[0] = (con->os->nextArg) ? xstrdup(con->os->nextArg) : NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1127|   \tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
