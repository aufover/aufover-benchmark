{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "findutils-4.8.0-4.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/findutils-4.8.0-4.fc35/valgrind/output",
        "time-created": "2022-11-24 01:40:36",
        "time-finished": "2022-11-24 02:13:25",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/findutils-4.8.0-4.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/findutils-4.8.0-4.fc35/findutils-4.8.0-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "findutils-4.8.0/build/find/oldfind",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 41400 with arguments: . -type f -execdir cat {} ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,552 bytes in 97 blocks are definitely lost in loss record 10 of 13",
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
                    "file_name": "findutils-4.8.0/build/find/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 91,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 120,
                    "event": "note",
                    "message": "called from impl_pred_exec.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/util.c",
                    "line": 1094,
                    "event": "note",
                    "message": "called from apply_predicate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/util.c",
                    "line": 1094,
                    "event": "note",
                    "message": "called from apply_predicate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1191,
                    "event": "note",
                    "message": "called from process_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1490,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1247,
                    "event": "note",
                    "message": "called from process_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1044,
                    "event": "note",
                    "message": "called from do_process_top_dir()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1077,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 243,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/find/oldfind",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 41400 with arguments: . -type f -execdir cat {} ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3,136 bytes in 196 blocks are definitely lost in loss record 11 of 13",
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
                    "file_name": "findutils-4.8.0/build/find/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 91,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 120,
                    "event": "note",
                    "message": "called from impl_pred_exec.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/util.c",
                    "line": 1094,
                    "event": "note",
                    "message": "called from apply_predicate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/util.c",
                    "line": 1094,
                    "event": "note",
                    "message": "called from apply_predicate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1191,
                    "event": "note",
                    "message": "called from process_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1490,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1247,
                    "event": "note",
                    "message": "called from process_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1490,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1247,
                    "event": "note",
                    "message": "called from process_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1044,
                    "event": "note",
                    "message": "called from do_process_top_dir()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 1077,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/oldfind.c",
                    "line": 243,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/find/testsuite/../find",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4713 with arguments: -O0 tmp -type f -empty -execdir sh ./runme {} ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "368 bytes in 23 blocks are definitely lost in loss record 10 of 13",
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
                    "file_name": "findutils-4.8.0/build/find/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 91,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/exec.c",
                    "line": 120,
                    "event": "note",
                    "message": "called from impl_pred_exec.constprop.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/util.c",
                    "line": 1094,
                    "event": "note",
                    "message": "called from apply_predicate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/util.c",
                    "line": 1094,
                    "event": "note",
                    "message": "called from apply_predicate()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/ftsfind.c",
                    "line": 181,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/ftsfind.c",
                    "line": 466,
                    "event": "note",
                    "message": "called from consider_visiting()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/ftsfind.c",
                    "line": 542,
                    "event": "note",
                    "message": "called from find()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/ftsfind.c",
                    "line": 583,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/find/../../find/ftsfind.c",
                    "line": 692,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/xargs/xargs",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 45339 with arguments: -I_ echo a._.b",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 1 of 7",
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
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../../xargs/xargs.c",
                    "line": 848,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/xargs/testsuite/../xargs",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 27649 with arguments: -IARG -s15 echo ARG",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "40 bytes in 1 blocks are definitely lost in loss record 5 of 7",
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
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../../xargs/xargs.c",
                    "line": 848,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/xargs/testsuite/../xargs",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 28075 with arguments: -n1 -IARG sh -c ARG",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../../xargs/xargs.c",
                    "line": 848,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/xargs/testsuite/../xargs",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 26988 with arguments: -P3 -n1 -IARG sh -c ARG",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "56 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../../xargs/xargs.c",
                    "line": 848,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/xargs/testsuite/../xargs",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 27064 with arguments: -i -0 echo from {} to x{}y",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "64 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../../xargs/xargs.c",
                    "line": 848,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/build/xargs/xargs",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 44085 with arguments: --replace=REPL",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 1 of 6",
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
                    "file_name": "findutils-4.8.0/build/xargs/../gl/lib/../../../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/xargs/../../xargs/xargs.c",
                    "line": 848,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   xmalloc (size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   void *p = malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|     if (!p && (HAVE_GNU_MALLOC || n))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|       xalloc_die ();",
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
                    "file_name": "findutils-4.8.0/gl/lib/canonicalize.c",
                    "line": 401,
                    "column": 33,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'end_idx' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401 |                 end = extra_buf + end_idx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ~~~~~~~~~~^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/canonicalize.c",
                    "line": 388,
                    "column": 21,
                    "event": "note",
                    "message": "'end_idx' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388 |               idx_t end_idx IF_LINT (= 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|                   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|                 if (end_in_extra_buffer)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|->                 end = extra_buf + end_idx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|                 /* Careful here, end may be a pointer into extra_buf... */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/canonicalize.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'canonicalize_filename_mode'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/canonicalize.c",
                    "line": 484,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484 |    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  482|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  483|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|->    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|      #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|     #endif",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/canonicalize.c",
                    "line": 485,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485 |    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  483|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  484|      #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  485|->    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  486|     #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  487|     struct scratch_buffer rname_buffer;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/careadlinkat.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'careadlinkat'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/careadlinkat.c",
                    "line": 184,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184 |    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  182|        shrinking realloc.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|->    #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|      #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|     #endif",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/careadlinkat.c",
                    "line": 185,
                    "column": 5,
                    "event": "warning[-Wcpp]",
                    "message": "#warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185 |    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  183|     #ifdef GCC_BOGUS_WRETURN_LOCAL_ADDR",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  184|      #warning \"GCC might issue a bogus -Wreturn-local-addr warning here.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|->    #warning \"See <https://gcc.gnu.org/bugzilla/show_bug.cgi?id=93644>.\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|     #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|     char stack_buf[STACK_BUF_SIZE];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 562,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gl/lib/careadlinkat.c",
                    "line": 188,
                    "column": 10,
                    "event": "warning[-Wreturn-local-addr]",
                    "message": "function may return address of local variable",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188 |   return readlink_stk (fd, filename, buffer, buffer_size, alloc,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189 |                        preadlinkat, stack_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gl/lib/careadlinkat.c",
                    "line": 187,
                    "column": 8,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187 |   char stack_buf[STACK_BUF_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|     #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|     char stack_buf[STACK_BUF_SIZE];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|->   return readlink_stk (fd, filename, buffer, buffer_size, alloc,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|                          preadlinkat, stack_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-lock.c",
                    "line": 287,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'test_rwlock' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287 | test_rwlock (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|   static void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|-> test_rwlock (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|     int i;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-memrchr.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-memrchr.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-memrchr.c",
                    "line": 32,
                    "column": 26,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'input_59' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32 | #define MEMRCHR (char *) memrchr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/build/gl/lib/string.h",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "findutils-4.8.0/gnulib-tests/test-memrchr.c",
                    "line": 20,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/string.h",
                    "line": 117,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to 'memrchr' declared with attribute 'access (read_only, 1, 3)' here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | extern void *memrchr (const void *__s, int __c, size_t __n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   /* Calculating void * + int is not portable, so this wrapper converts",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|      to char * to make the tests easier to write.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|-> #define MEMRCHR (char *) memrchr",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   int",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
