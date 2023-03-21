{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "chkconfig-1.19-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/chkconfig-1.19-1.fc35/valgrind/output",
        "time-created": "2022-11-23 11:49:27",
        "time-finished": "2022-11-23 11:55:52",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/chkconfig-1.19-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/chkconfig-1.19-1.fc35/chkconfig-1.19-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 129,
                    "column": 16,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'slaveTitle' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129 |         return strcmp(a, b) ? 0 : 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1245,
                    "column": 28,
                    "event": "note",
                    "message": "'slaveTitle' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1245 |     char *title, *target, *slaveTitle;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                            ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   int streq(const char *a, const char *b) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       if (a && b)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|->         return strcmp(a, b) ? 0 : 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|       if (!a && !b)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1464 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 173,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 5 of 19",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 173,
                    "event": "note",
                    "message": "called from setupSingleArg()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1325,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|       if (!*nextArg || **nextArg == '/')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|->     *title = strdup(*nextArg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|       *nextArgPtr = nextArg + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|   }",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1672 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --set TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 189,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 5 of 20",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 189,
                    "event": "note",
                    "message": "called from setupDoubleArg()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1321,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|       if (!*nextArg || **nextArg == '/')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|->     *title = strdup(*nextArg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|       nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|   ",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1672 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --set TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 194,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 16 of 20",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 194,
                    "event": "note",
                    "message": "called from setupDoubleArg()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1321,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|       if (!*nextArg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|->     *target = strdup(normalize_path(*nextArg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|       *nextArgPtr = nextArg + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   }",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7554 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main STEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 210,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 6 of 22",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 210,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1281,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|       if (!*nextArg || **nextArg == '/')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|->     *title = strdup(*nextArg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|       nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|   ",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7554 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main STEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 215,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 17 of 22",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 215,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1281,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       if (!*nextArg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->     *target = strdup(normalize_path(*nextArg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|       nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   ",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7554 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main STEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 220,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 9 of 22",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 220,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1281,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|       if (!*nextArg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->     *slaveTitle = strdup(*nextArg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|       *nextArgPtr = nextArg + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|   }",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6040 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --add-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 229,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "31 bytes in 1 blocks are definitely lost in loss record 16 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 229,
                    "event": "note",
                    "message": "called from setupLinkSet()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1279,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|       if (!*nextArg || **nextArg != '/')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|->     set->facility = strdup(normalize_path(*nextArg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|       nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|   ",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6040 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --add-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 234,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 8 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 234,
                    "event": "note",
                    "message": "called from setupLinkSet()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1279,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|       if (!*nextArg || **nextArg == '/')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|           usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|->     set->title = strdup(*nextArg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|       nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   ",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'readConfig'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 289,
                    "column": 10,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "assignment discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289 |     path = normalize_path(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|       sprintf(path, \"%s/%s\", stateDir, title);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|->     path = normalize_path(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|       if (FL_VERBOSE(flags))",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7598 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 333,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "51 (16 direct, 35 indirect) bytes in 1 blocks are definitely lost in loss record 12 of 13",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 333,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  333|->     groups = realloc(groups, sizeof(*groups));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  334|       groups[0].title = strdup(title);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|       groups[0].facility = line;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7598 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 338,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1 bytes in 1 blocks are definitely lost in loss record 1 of 13",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 338,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|       numGroups = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|->     line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|           if (*line == '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1464 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 345,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "104 (32 direct, 72 indirect) bytes in 1 blocks are definitely lost in loss record 18 of 19",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 345,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|           }",
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
                    "message": "  345|->         groups = realloc(groups, sizeof(*groups) * (numGroups + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|           groups[numGroups].title = line;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1464 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 356,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1 bytes in 1 blocks are definitely lost in loss record 1 of 19",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 356,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|           groups[numGroups++].facility = line;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   ",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2817 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 364,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 18 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 364,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|->     line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|           set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7554 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main STEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "131 (64 direct, 67 indirect) bytes in 1 blocks are definitely lost in loss record 22 of 22",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 838,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1396,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1464 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "225 (64 direct, 161 indirect) bytes in 1 blocks are definitely lost in loss record 19 of 19",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3072 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_b",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "227 (64 direct, 163 indirect) bytes in 1 blocks are definitely lost in loss record 26 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 914,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4951 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --set TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "234 (64 direct, 170 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1071,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1404,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2817 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "289 (128 direct, 161 indirect) bytes in 1 blocks are definitely lost in loss record 24 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5032 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "298 (128 direct, 170 indirect) bytes in 1 blocks are definitely lost in loss record 26 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1971 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "450 (128 direct, 322 indirect) bytes in 1 blocks are definitely lost in loss record 20 of 20",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7302 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "452 (128 direct, 324 indirect) bytes in 1 blocks are definitely lost in loss record 20 of 20",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5827 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "459 (128 direct, 331 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3664 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "468 (128 direct, 340 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7258 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_b/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "516 (192 direct, 324 indirect) bytes in 1 blocks are definitely lost in loss record 25 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5783 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "523 (192 direct, 331 indirect) bytes in 1 blocks are definitely lost in loss record 25 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5406 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "532 (192 direct, 340 indirect) bytes in 1 blocks are definitely lost in loss record 26 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6376 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --add-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "677 (192 direct, 485 indirect) bytes in 1 blocks are definitely lost in loss record 25 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 874,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1394,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6416 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --add-slave TEST /tmp/tmp.oQUYmyRpBm/link_b/main /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_b/slave_b",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "679 (192 direct, 487 indirect) bytes in 1 blocks are definitely lost in loss record 25 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 874,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1394,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4737 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "702 (192 direct, 510 indirect) bytes in 1 blocks are definitely lost in loss record 21 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 366,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|       line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|       while (line && *line) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|->         set->alts = realloc(set->alts, (set->numAlts + 1) * sizeof(*set->alts));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|           if (*line != '/') {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2817 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 374,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "30 bytes in 1 blocks are definitely lost in loss record 14 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 374,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|->         set->alts[set->numAlts].master.facility = strdup(normalize_path(groups[0].facility));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|           set->alts[set->numAlts].master.title = strdup(groups[0].title);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|           set->alts[set->numAlts].master.target = line;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2817 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 375,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 5 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 375,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|           set->alts[set->numAlts].master.facility = strdup(normalize_path(groups[0].facility));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|->         set->alts[set->numAlts].master.title = strdup(groups[0].title);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|           set->alts[set->numAlts].master.target = line;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|           set->alts[set->numAlts].numSlaves = numGroups - 1;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2817 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 379,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "94 (24 direct, 70 indirect) bytes in 1 blocks are definitely lost in loss record 22 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 379,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|           set->alts[set->numAlts].numSlaves = numGroups - 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|           if (numGroups > 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|->             set->alts[set->numAlts].slaves = malloc(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|                   (numGroups - 1) * sizeof(*set->alts[set->numAlts].slaves));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|           else",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3072 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_b",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 379,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "96 (24 direct, 72 indirect) bytes in 1 blocks are definitely lost in loss record 24 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 379,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 914,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|           set->alts[set->numAlts].numSlaves = numGroups - 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|           if (numGroups > 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|->             set->alts[set->numAlts].slaves = malloc(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|                   (numGroups - 1) * sizeof(*set->alts[set->numAlts].slaves));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|           else",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3620 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_b/main 20 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_b/slave --family family_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 1 blocks are definitely lost in loss record 10 of 27",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 914,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5827 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 2 blocks are definitely lost in loss record 8 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5783 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "19 bytes in 3 blocks are definitely lost in loss record 9 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3664 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "26 bytes in 2 blocks are definitely lost in loss record 10 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1464 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3 bytes in 1 blocks are definitely lost in loss record 2 of 19",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4737 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "39 bytes in 3 blocks are definitely lost in loss record 14 of 21",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7302 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 2 blocks are definitely lost in loss record 4 of 20",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1971 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 2 blocks are definitely lost in loss record 5 of 20",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6376 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --add-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 3 blocks are definitely lost in loss record 6 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 384,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 874,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1394,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|               set->alts[set->numAlts].slaves = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           set->alts[set->numAlts].priority = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|           set->alts[set->numAlts].initscript = NULL;",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5032 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_a/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 400,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "9 bytes in 1 blocks are definitely lost in loss record 8 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 400,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|               *end = '\\0';",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|->             set->alts[set->numAlts].family = strdup(line);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|               line = end + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|           }",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7554 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main STEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 423,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "35 bytes in 1 blocks are definitely lost in loss record 19 of 22",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 423,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 838,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1396,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|           for (i = 1; i < numGroups; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|->             line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|               if (line && strlen(line) && *line != '/') {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|                   fprintf(stderr, _(\"slave path expected in %s\\n\"), path);",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7258 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove TEST /tmp/tmp.oQUYmyRpBm/link_b/main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 440,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 17 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 440,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1117,
                    "event": "note",
                    "message": "called from removeService()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|           set->numAlts++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  439|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|->         line = parseLine(&buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|   ",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1464 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --display TEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 480,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 16 of 19",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 480,
                    "event": "note",
                    "message": "called from readConfig()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 968,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1398,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  478|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  479|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  480|->     set->currentLink = strdup(normalize_path(linkBuf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  481|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  482|       return 0;",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'makeLinks'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 544,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'readlink' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  544 |             readlink(l->facility, buf, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  543|               memset(buf, 0, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  544|->             readlink(l->facility, buf, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  545|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  546|               if(!streq(sl, buf)) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 566,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'readlink' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566 |         readlink(sl, buf, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565|           memset(buf, 0, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|->         readlink(sl, buf, sizeof(buf));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568|           if(!streq(l->target, buf)) {",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'writeState'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 668,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668 |                 asprintf(&path, \"/bin/systemctl -q is-enabled %s.service || \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669 |                                 \"/bin/systemctl -q preset %s.service\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670 |                          alt->initscript, alt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|           if (alt->initscript) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|               if (isSystemd(alt->initscript)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|->                 asprintf(&path, \"/bin/systemctl -q is-enabled %s.service || \"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|                                   \"/bin/systemctl -q preset %s.service\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|                            alt->initscript, alt->initscript);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 673,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673 |                 system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|                   if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|                       printf(_(\"running %s\\n\"), path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|->                 system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|                   free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|               } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 676,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676 |                 asprintf(&path, \"/sbin/chkconfig --add %s\", alt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|                   free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|               } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|->                 asprintf(&path, \"/sbin/chkconfig --add %s\", alt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|                   if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|                       printf(_(\"running %s\\n\"), path);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 679,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679 |                 system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|                   if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|                       printf(_(\"running %s\\n\"), path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|->                 system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|                   free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  681|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 687,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  687 |                     asprintf(&path, \"/bin/systemctl -q disable %s.service\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  688 |                              tmpalt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  685|               if (tmpalt != alt && tmpalt->initscript) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  686|                   if (isSystemd(tmpalt->initscript)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  687|->                     asprintf(&path, \"/bin/systemctl -q disable %s.service\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  688|                                tmpalt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|                       if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 691,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691 |                     system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  689|                       if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  690|                           printf(_(\"running %s\\n\"), path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  691|->                     system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|                       free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693|                   } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 694,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694 |                     asprintf(&path, \"/sbin/chkconfig --del %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695 |                              tmpalt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  692|                       free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  693|                   } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  694|->                     asprintf(&path, \"/sbin/chkconfig --del %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  695|                                tmpalt->initscript);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|                       if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 698,
                    "column": 21,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698 |                     system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  696|                       if (FL_VERBOSE(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  697|                           printf(_(\"running %s\\n\"), path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  698|->                     system(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  699|                       free(path);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  700|                   }",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3072 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_b",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "24 bytes in 1 blocks are definitely lost in loss record 12 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 926,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|                                struct alternative *template) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|       template->numSlaves = source.numSlaves;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|->     template->slaves = malloc(source.numSlaves * sizeof(struct linkSet));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|       memcpy(template->slaves, source.slaves,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|              source.numSlaves * sizeof(struct linkSet));",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6040 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --add-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "57 (24 direct, 33 indirect) bytes in 1 blocks are definitely lost in loss record 22 of 24",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 886,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1394,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|                                struct alternative *template) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|       template->numSlaves = source.numSlaves;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|->     template->slaves = malloc(source.numSlaves * sizeof(struct linkSet));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|       memcpy(template->slaves, source.slaves,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|              source.numSlaves * sizeof(struct linkSet));",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7554 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --remove-slave TEST /tmp/tmp.oQUYmyRpBm/link_a/main STEST",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "61 (24 direct, 37 indirect) bytes in 1 blocks are definitely lost in loss record 20 of 22",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 852,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1396,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|                                struct alternative *template) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|       template->numSlaves = source.numSlaves;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|->     template->slaves = malloc(source.numSlaves * sizeof(struct linkSet));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|       memcpy(template->slaves, source.slaves,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|              source.numSlaves * sizeof(struct linkSet));",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1927 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_b/main 20 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_b/slave",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "94 (24 direct, 70 indirect) bytes in 1 blocks are definitely lost in loss record 23 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 717,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 926,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  715|                                struct alternative *template) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  716|       template->numSlaves = source.numSlaves;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  717|->     template->slaves = malloc(source.numSlaves * sizeof(struct linkSet));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  718|       memcpy(template->slaves, source.slaves,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|              source.numSlaves * sizeof(struct linkSet));",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1927 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_b/main 20 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_b/slave",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "380 (128 direct, 252 indirect) bytes in 1 blocks are definitely lost in loss record 25 of 25",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|               removeUnusedSlavesFromTemplate(set, &template, altDir, flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|->             set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  939|               set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  940|               if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3620 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_b/main 20 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_b/slave --family family_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "398 (128 direct, 270 indirect) bytes in 1 blocks are definitely lost in loss record 27 of 27",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|               removeUnusedSlavesFromTemplate(set, &template, altDir, flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|->             set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  939|               set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  940|               if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6336 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_c/main 5 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_c/slave",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "605 (192 direct, 413 indirect) bytes in 1 blocks are definitely lost in loss record 26 of 26",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|               removeUnusedSlavesFromTemplate(set, &template, altDir, flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|->             set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  939|               set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  940|               if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5743 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_c/main 30 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_c/slave --family family_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "614 (192 direct, 422 indirect) bytes in 1 blocks are definitely lost in loss record 27 of 27",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|               removeUnusedSlavesFromTemplate(set, &template, altDir, flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|->             set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  939|               set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  940|               if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4693 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_c/main 30 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_c/slave --family family_b",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "632 (192 direct, 440 indirect) bytes in 1 blocks are definitely lost in loss record 28 of 28",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 938,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|               removeUnusedSlavesFromTemplate(set, &template, altDir, flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|->             set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  939|               set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  940|               if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1420 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 948,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "225 (64 direct, 161 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 948,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  946|               return 2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|->         set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|           set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|           if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3031 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 948,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "227 (64 direct, 163 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 948,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  946|               return 2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|->         set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|           set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|           if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3579 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave --family family_a",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 948,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "234 (64 direct, 170 indirect) bytes in 1 blocks are definitely lost in loss record 11 of 11",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 948,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1392,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  946|               return 2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  947|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  948|->         set.alts = realloc(set.alts, sizeof(*set.alts) * (set.numAlts + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|           set.alts[set.numAlts] = newAlt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|           if (set.alts[set.best].priority < newAlt.priority)",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'configService'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1034,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1034 |                 asprintf(&nicer, \"%s (%s)\", set.alts[i].family,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035 |                          set.alts[i].master.target);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                          ~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|           for (i = 0; i < set.numAlts; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1033|               if (set.alts[i].family)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1034|->                 asprintf(&nicer, \"%s (%s)\", set.alts[i].family,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035|                            set.alts[i].master.target);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1036|               printf(\"%c%c %-4d        %s\\n\", i == set.best ? '*' : ' ',",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1420 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1355,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "20 bytes in 1 blocks are definitely lost in loss record 3 of 10",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1355,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1353|               if (!*nextArg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1354|                   usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1355|->             altDir = strdup(normalize_path(*nextArg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1356|               nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357|           } else if (!strcmp(*nextArg, \"--admindir\")) {",
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
                    "file_name": "./alternatives",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1420 with arguments: --altdir /tmp/tmp.tN5nKh06yO --admindir /tmp/tmp.gzBT3WXOOS --install /tmp/tmp.oQUYmyRpBm/main_link TEST /tmp/tmp.oQUYmyRpBm/link_a/main 10 --slave /tmp/tmp.oQUYmyRpBm/slave_link STEST /tmp/tmp.oQUYmyRpBm/link_a/slave",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1361,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "20 bytes in 1 blocks are definitely lost in loss record 4 of 10",
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
                    "file_name": "chkconfig-1.19/alternatives.c",
                    "line": 1361,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|               if (!*nextArg)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360|                   usage(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1361|->             stateDir = strdup(normalize_path(*nextArg));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1362|               nextArg++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|           } else if (!strcmp(*nextArg, \"--list\")) {",
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
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'reloadSystemd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 106,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |         system(\"systemctl daemon-reload > /dev/null 2>&1\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   static void reloadSystemd(void) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       if (systemdActive())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->         system(\"systemctl daemon-reload > /dev/null 2>&1\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   ",
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
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'setService'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 658,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  658 |         system(\"/sbin/service xinetd reload >/dev/null 2>&1\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|               return 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  657|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  658|->         system(\"/sbin/service xinetd reload >/dev/null 2>&1\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  659|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  660|   ",
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
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'forwardSystemd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 677,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677 |             asprintf(&p, \"%s.service\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|           if (!socket)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|->             asprintf(&p, \"%s.service\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|           else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|               asprintf(&p, \"%s.socket\", name);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/chkconfig.c",
                    "line": 679,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679 |             asprintf(&p, \"%s.socket\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  677|               asprintf(&p, \"%s.service\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  678|           else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  679|->             asprintf(&p, \"%s.socket\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  680|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  681|           fprintf(stderr, _(\"Note: Forwarding request to 'systemctl %s %s'.\\n\"),",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'selinux_restore'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 47,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47 |     security_context_t newcon = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|       struct selabel_handle *hnd = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|       struct stat buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|->     security_context_t newcon = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       int r = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   ",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'readXinetdServiceInfo'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 226,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226 |     asprintf(&filename, XINETDDIR \"/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|       char *eng_desc = NULL, *start;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|->     asprintf(&filename, XINETDDIR \"/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|       if ((fd = open(filename, O_RDONLY)) < 0)",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'readServiceInfo'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 367,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367 |     asprintf(&filename, RUNLEVELS \"/init.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|           goto try_xinetd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|->     asprintf(&filename, RUNLEVELS \"/init.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|       if ((fd = open(filename, O_RDONLY)) < 0)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 377,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377 |     asprintf(&filename, RUNLEVELS \"/chkconfig.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|           return parseret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|->     asprintf(&filename, RUNLEVELS \"/chkconfig.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|       if ((fd = open(filename, O_RDONLY)) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|           parseret = parseServiceInfo(fd, name, &serv_overrides, honorHide, 1);",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'readServiceDifferences'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 428,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428 |     asprintf(&filename, RUNLEVELS \"/init.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|           goto try_xinetd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  427|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428|->     asprintf(&filename, RUNLEVELS \"/init.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|       if ((fd = open(filename, O_RDONLY)) < 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 440,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440 |     asprintf(&filename, RUNLEVELS \"/chkconfig.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  438|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  439|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  440|->     asprintf(&filename, RUNLEVELS \"/chkconfig.d/%s\", name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|       if ((fd = open(filename, O_RDONLY)) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|           parseret = parseServiceInfo(fd, name, &serv_overrides, honorHide, 1);",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'setXinetdService'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 887,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  887 |             write(newfd, tmp, strlen(tmp));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  885|               buf++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  886|           if (strncmp(buf, \"disable\", 7) && strlen(buf)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  887|->             write(newfd, tmp, strlen(tmp));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888|               write(newfd, \"\\n\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|               if (buf[0] == '{') {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 888,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888 |             write(newfd, \"\\n\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  886|           if (strncmp(buf, \"disable\", 7) && strlen(buf)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  887|               write(newfd, tmp, strlen(tmp));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888|->             write(newfd, \"\\n\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|               if (buf[0] == '{') {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|                   snprintf(tmpstr, 50, \"\\tdisable\\t= %s\", on ? \"no\" : \"yes\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 891,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891 |                 write(newfd, tmpstr, strlen(tmpstr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|               if (buf[0] == '{') {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|                   snprintf(tmpstr, 50, \"\\tdisable\\t= %s\", on ? \"no\" : \"yes\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|->                 write(newfd, tmpstr, strlen(tmpstr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  892|                   write(newfd, \"\\n\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 892,
                    "column": 17,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'write' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  892 |                 write(newfd, \"\\n\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|                   snprintf(tmpstr, 50, \"\\tdisable\\t= %s\", on ? \"no\" : \"yes\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|                   write(newfd, tmpstr, strlen(tmpstr));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  892|->                 write(newfd, \"\\n\", 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  894|           }",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'isOverriddenBySystemd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 966,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  966 |     asprintf(&p, SYSTEMD_SERVICE_PATH \"/%s.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|       int rc = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  965|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  966|->     asprintf(&p, SYSTEMD_SERVICE_PATH \"/%s.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  967|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  968|       if (access(p, F_OK) >= 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 973,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973 |     asprintf(&p, SYSTEMD_LOCAL_SERVICE_PATH \"/%s.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  971|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  972|       free(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  973|->     asprintf(&p, SYSTEMD_LOCAL_SERVICE_PATH \"/%s.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  974|       if (access(p, F_OK) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  975|           rc = 1;",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'isSocketActivatedBySystemd'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 987,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987 |     asprintf(&p, SYSTEMD_SERVICE_PATH \"/%s@.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|       int rc = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|->     asprintf(&p, SYSTEMD_SERVICE_PATH \"/%s@.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  988|       asprintf(&s, SYSTEMD_SERVICE_PATH \"/%s.socket\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  989|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 988,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  988 |     asprintf(&s, SYSTEMD_SERVICE_PATH \"/%s.socket\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|       asprintf(&p, SYSTEMD_SERVICE_PATH \"/%s@.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  988|->     asprintf(&s, SYSTEMD_SERVICE_PATH \"/%s.socket\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  989|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  990|       if (access(p, F_OK) >= 0 && access(s, F_OK) >= 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 997,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997 |     asprintf(&p, SYSTEMD_LOCAL_SERVICE_PATH \"/%s@.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995|       free(s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|->     asprintf(&p, SYSTEMD_LOCAL_SERVICE_PATH \"/%s@.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|       asprintf(&s, SYSTEMD_LOCAL_SERVICE_PATH \"/%s.socket\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  999|       if (access(p, F_OK) >= 0 && access(s, F_OK) >= 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 998,
                    "column": 5,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998 |     asprintf(&s, SYSTEMD_LOCAL_SERVICE_PATH \"/%s.socket\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|       asprintf(&p, SYSTEMD_LOCAL_SERVICE_PATH \"/%s@.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|->     asprintf(&s, SYSTEMD_LOCAL_SERVICE_PATH \"/%s.socket\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  999|       if (access(p, F_OK) >= 0 && access(s, F_OK) >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1000|           rc = 1;",
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
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'serviceNameToUnit'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/leveldb.c",
                    "line": 1164,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1164 |         asprintf(&ret, \"%s.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1162|           ret = strdup(\"time-sync.target\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1163|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1164|->         asprintf(&ret, \"%s.service\", service);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1165|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1166|   ",
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
                    "file_name": "chkconfig-1.19/ntsysv.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'servicesWindow'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "chkconfig-1.19/ntsysv.c",
                    "line": 166,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'asprintf' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166 |             asprintf(&cmd, \"/usr/bin/systemctl %s %s >/dev/null 2>&1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167 |                      en ? \"enable\" : \"disable\", services[i].name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|               else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|                   continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|->             asprintf(&cmd, \"/usr/bin/systemctl %s %s >/dev/null 2>&1\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|                        en ? \"enable\" : \"disable\", services[i].name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|               if (cmd == NULL)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "chkconfig-1.19/ntsysv.c",
                    "line": 170,
                    "column": 13,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'system' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170 |             system(cmd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|               if (cmd == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|                   return 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|->             system(cmd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|               free(cmd);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|           } else {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
