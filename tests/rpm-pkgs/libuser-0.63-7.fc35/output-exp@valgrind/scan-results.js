{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libuser-0.63-7.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libuser-0.63-7.fc35/valgrind/output",
        "time-created": "2022-11-23 20:59:32",
        "time-finished": "2022-11-23 21:13:13",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libuser-0.63-7.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libuser-0.63-7.fc35/libuser-0.63-7.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libuser-0.63/apps/apputil.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'check_access'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/apputil.c",
                    "line": 41,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41 |         security_context_t user_context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   \tint status;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|-> \tsecurity_context_t user_context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   \tstatus = -1;",
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
                    "file_name": "libuser-0.63/apps/apputil.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lu_authenticate_unprivileged'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/apputil.c",
                    "line": 228,
                    "column": 33,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228 |                                 security_context_t user_context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|   \t\t\tperm = string_to_av_perm(class, \"chfn\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|   \t\t\tif (check_access(user, perm) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|-> \t\t\t\tsecurity_context_t user_context;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   \t\t\t\tif (getprevcon(&user_context) < 0)",
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
                    "file_name": "libuser-0.63/apps/.libs/lgroupadd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2988 with arguments: -g 2147483758 group1_1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lgroupadd.c",
                    "line": 63,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 8 of 247",
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
                    "file_name": "libuser-0.63/apps/lgroupadd.c",
                    "line": 63,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   \tpopt = poptGetContext(\"lgroupadd\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] group\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lgroupmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4735 with arguments: -g 2147483989 group3_4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 8 of 247",
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
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \tpopt = poptGetContext(\"lgroupmod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] group\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lgroupmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3936 with arguments: -p !!02yd6IWnPes66 group3_3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 98 of 239",
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
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \tpopt = poptGetContext(\"lgroupmod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] group\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lgroupmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3636 with arguments: -a user3_1,user3_1notexist -m user3_3,user3_2notexist -L group3_2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 bytes in 2 blocks are definitely lost in loss record 126 of 239",
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
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \tpopt = poptGetContext(\"lgroupmod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] group\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lgroupmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3528 with arguments: -A user3_1,user3_2 -g 2147483959 -L -M user3_3,user3_4 -n group3_2 -p 01vokOibos3pg group3_1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "66 bytes in 5 blocks are definitely lost in loss record 135 of 247",
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
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \tpopt = poptGetContext(\"lgroupmod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] group\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lgroupmod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4648 with arguments: -M user3_6 group3_4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 8 of 239",
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
                    "file_name": "libuser-0.63/apps/lgroupmod.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \tpopt = poptGetContext(\"lgroupmod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] group\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/luseradd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4907 with arguments: -M -u 2147484058 user4_1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 8 of 247",
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
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tpopt = poptGetContext(\"luseradd\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/luseradd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4290 with arguments: -M -g group3_4 -u 2147483998 user3_5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "20 bytes in 2 blocks are definitely lost in loss record 98 of 247",
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
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tpopt = poptGetContext(\"luseradd\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/luseradd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8673 with arguments: -g 2147484588 -u 2147484588 -M user9_4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 2 blocks are definitely lost in loss record 98 of 247",
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
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tpopt = poptGetContext(\"luseradd\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/luseradd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6869 with arguments: -c GECOS7_1 -d HomeDir7_1 -g group7_1 -M -p 03dgZm5nZvqOc -s Shell7_1 -u 2147484358 user7_1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "63 bytes in 6 blocks are definitely lost in loss record 131 of 247",
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
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tpopt = poptGetContext(\"luseradd\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/luseradd",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7212 with arguments: -g group8_1 -M user8_1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "9 bytes in 1 blocks are definitely lost in loss record 8 of 247",
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
                    "file_name": "libuser-0.63/apps/luseradd.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   \tpopt = poptGetContext(\"luseradd\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lusermod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9087 with arguments: -g 2147484609 user9_6",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 8 of 239",
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
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpopt = poptGetContext(\"lusermod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lusermod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8357 with arguments: -p !!05FdoegP8UniQ user9_3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 98 of 239",
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
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpopt = poptGetContext(\"lusermod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lusermod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8029 with arguments: -c GECOS9_1 -d HomeDir9_1 -g 2147484568 -l user9_2 -p 04aqostCGmvZM -s Shell9_1 -u 2147484559 user9_1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "73 bytes in 7 blocks are definitely lost in loss record 135 of 247",
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
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpopt = poptGetContext(\"lusermod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
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
                    "file_name": "libuser-0.63/apps/.libs/lusermod",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8830 with arguments: -l user9_5 user9_4",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 8 of 247",
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
                    "file_name": "libuser-0.63/apps/lusermod.c",
                    "line": 102,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tpopt = poptGetContext(\"lusermod\", argc, argv, options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|   \tpoptSetOtherOptionHelp(popt, _(\"[OPTION...] user\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|-> \tc = poptGetNextOpt(popt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   \tif (c != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   \t\tfprintf(stderr, _(\"Error parsing arguments: %s.\\n\"),",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "libuser-0.63/lib/user_private.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 25,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/config.h",
                    "line": 9,
                    "event": "warning",
                    "message": "\"GLIB_VERSION_MIN_REQUIRED\" redefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    9 | #define GLIB_VERSION_MIN_REQUIRED GLIB_VERSION_2_30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gtypes.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/galloca.h",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 30,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/config.h",
                    "line": 23,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 19,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 325,
                    "event": "note",
                    "message": "this is the location of the previous definition",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325 | # define GLIB_VERSION_MIN_REQUIRED      (GLIB_VERSION_CUR_STABLE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    7|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    8|   /* Shut up warnings about deprecated GValueArray */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    9|-> #define GLIB_VERSION_MIN_REQUIRED GLIB_VERSION_2_30",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   10|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   11|   /* Stay away from deprecated glib functionality. */",
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
                    "file_name": "libuser-0.63/apps/.libs/luserdel",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7456 with arguments: user8_2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 166,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 166,
                    "event": "note",
                    "message": "Address 0x4df8990 is 0 bytes inside a block of size 8 free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "valgrind-3.19.0/memcheck/../shared/vg_replace_strmem.c",
                    "line": 462,
                    "event": "note",
                    "message": "called from strnlen()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 166,
                    "event": "note",
                    "message": "called from lu_audit_logger_with_group()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luserdel.c",
                    "line": 140,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|   \tif (audit_fd < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|   \t\treturn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|-> \tlen = strnlen(grp, sizeof(enc_group)/2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   \tif (audit_value_needs_encoding(grp, len)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   \t\tsnprintf(buf, sizeof(buf), \"%s grp=%s\", op,",
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
                    "file_name": "libuser-0.63/apps/.libs/luserdel",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7456 with arguments: user8_2",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 167,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 167,
                    "event": "note",
                    "message": "Address 0x4df8990 is 0 bytes inside a block of size 8 free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libaudit.so.1.0.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from audit_value_needs_encoding()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/common.c",
                    "line": 167,
                    "event": "note",
                    "message": "called from lu_audit_logger_with_group()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/apps/luserdel.c",
                    "line": 140,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|   \t\treturn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   \tlen = strnlen(grp, sizeof(enc_group)/2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|-> \tif (audit_value_needs_encoding(grp, len)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   \t\tsnprintf(buf, sizeof(buf), \"%s grp=%s\", op,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|   \t\t\taudit_encode_value(enc_group, grp, len));",
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
                    "file_name": "libuser-0.63/apps/apputil.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/user_private.h",
                    "line": 311,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311 | typedef security_context_t lu_security_context_t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|      intentionally not compatible with libuser built !WITH_SELINUX. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   #ifdef WITH_SELINUX",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|-> typedef security_context_t lu_security_context_t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   gboolean lu_util_fscreate_save(security_context_t *ctx,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   \t\t\t\t      struct lu_error **error);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/lib/user_private.h",
                    "line": 312,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312 | gboolean lu_util_fscreate_save(security_context_t *ctx,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|   #ifdef WITH_SELINUX",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|   typedef security_context_t lu_security_context_t;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|-> gboolean lu_util_fscreate_save(security_context_t *ctx,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   \t\t\t\t      struct lu_error **error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|   void lu_util_fscreate_restore(security_context_t ctx);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/lib/user_private.h",
                    "line": 314,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314 | void lu_util_fscreate_restore(security_context_t ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   gboolean lu_util_fscreate_save(security_context_t *ctx,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   \t\t\t\t      struct lu_error **error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|-> void lu_util_fscreate_restore(security_context_t ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   gboolean lu_util_fscreate_from_fd(int fd, const char *path,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|   \t\t\t\t  struct lu_error **error);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 748,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  748 | lu_util_fscreate_save(security_context_t *ctx, struct lu_error **error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  746|   /* Store current fscreate context to ctx. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  747|   gboolean",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  748|-> lu_util_fscreate_save(security_context_t *ctx, struct lu_error **error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   \t*ctx = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 762,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762 | lu_util_fscreate_restore(security_context_t ctx)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  760|   /* Restore fscreate context from ctx, and free it. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  761|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762|-> lu_util_fscreate_restore(security_context_t ctx)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  763|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|   \tif (is_selinux_enabled() > 0) {",
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
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lu_util_fscreate_from_fd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 776,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776 |                 security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|   \tif (is_selinux_enabled() > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|-> \t\tsecurity_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778|   \t\tif (fgetfilecon(fd, &ctx) < 0) {",
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
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lu_util_fscreate_from_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 802,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802 |                 security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  800|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \tif (is_selinux_enabled() > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|-> \t\tsecurity_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|   \t\tif (getfilecon(file, &ctx) < 0) {",
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
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lu_util_fscreate_from_lfile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 828,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  828 |                 security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  826|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  827|   \tif (is_selinux_enabled() > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  828|-> \t\tsecurity_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   \t\tif (lgetfilecon(file, &ctx) < 0) {",
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
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lu_util_fscreate_for_path'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 855,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855 |                 security_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854|   \tif (is_selinux_enabled() > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|-> \t\tsecurity_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|   \t\tif (matchpathcon(path, mode, &ctx) < 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 857,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'matchpathcon' is deprecated: Use selabel_lookup instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857 |                 if (matchpathcon(path, mode, &ctx) < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/lib/util.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/selinux/selinux.h",
                    "line": 502,
                    "column": 12,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502 | extern int matchpathcon(const char *path,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|   \t\tsecurity_context_t ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|-> \t\tif (matchpathcon(path, mode, &ctx) < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|   \t\t\tif (errno == ENOENT)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|   \t\t\t\tctx = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/python/admin.c",
                    "line": 1515,
                    "column": 9,
                    "event": "warning[-Wint-conversion]",
                    "message": "initialization of 'long int' from 'void *' makes integer from pointer without a cast",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1515 |         NULL,                   /* tp_print */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/admin.c",
                    "line": 1515,
                    "column": 9,
                    "event": "note",
                    "message": "(near initialization for 'AdminType.tp_vectorcall_offset')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1513|   \t0,\t\t\t/* tp_itemsize */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1514|   \tlibuser_admin_destroy,\t/* tp_dealloc */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1515|-> \tNULL,\t\t\t/* tp_print */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1516|   \tNULL,\t\t\t/* tp_getattr */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1517|   \tNULL,\t\t\t/* tp_setattr */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libuser_entity_setattro'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 273,
                    "column": 14,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273 |         name = PYSTRTYPE_ASSTRING(attr_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|   \t\treturn -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|-> \tname = PYSTRTYPE_ASSTRING(attr_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   \tif (name == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   \t\tDEBUG_EXIT;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libuser_entity_get_item'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 630,
                    "column": 14,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630 |         attr = PYSTRTYPE_ASSTRING(item);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  628|   \t\treturn NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  629|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  630|-> \tattr = PYSTRTYPE_ASSTRING(item);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  631|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  632|   \tif (!lu_ent_has(me->ent, attr)) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'libuser_entity_set_item'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 682,
                    "column": 14,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  682 |         attr = PYSTRTYPE_ASSTRING(item);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|   \t\treturn -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  681|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  682|-> \tattr = PYSTRTYPE_ASSTRING(item);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  683|   #ifdef DEBUG_BINDING",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  684|   \tfprintf(stderr, \"%sSetting item (`%s')...\\n\", getindent(), attr);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 803,
                    "column": 9,
                    "event": "warning[-Wint-conversion]",
                    "message": "initialization of 'long int' from 'void *' makes integer from pointer without a cast",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803 |         NULL,                   /* tp_print */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/ent.c",
                    "line": 803,
                    "column": 9,
                    "event": "note",
                    "message": "(near initialization for 'EntityType.tp_vectorcall_offset')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \t0,\t\t\t/* tp_itemsize */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|   \tlibuser_entity_destroy, /* tp_dealloc */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|-> \tNULL,\t\t\t/* tp_print */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|   \tNULL,\t\t\t/* tp_getattr */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|   \tNULL,\t\t\t/* tp_setattr */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libuser-0.63/python/misc.c",
                    "line": 496,
                    "column": 9,
                    "event": "warning[-Wint-conversion]",
                    "message": "initialization of 'long int' from 'void *' makes integer from pointer without a cast",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  496 |         NULL,                   /* tp_print */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libuser-0.63/python/misc.c",
                    "line": 496,
                    "column": 9,
                    "event": "note",
                    "message": "(near initialization for 'PromptType.tp_vectorcall_offset')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  494|   \t0,\t\t\t/* tp_itemsize */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  495|   \tlibuser_prompt_destroy,\t/* tp_dealloc */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  496|-> \tNULL,\t\t\t/* tp_print */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  497|   \tNULL,\t\t\t/* tp_getattr */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|   \tNULL,\t\t\t/* tp_setattr */",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
