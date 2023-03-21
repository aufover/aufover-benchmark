{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "rsync-3.2.3-8.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsync-3.2.3-8.fc35/valgrind/output",
        "time-created": "2022-11-23 22:25:20",
        "time-finished": "2022-11-23 22:35:44",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsync-3.2.3-8.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsync-3.2.3-8.fc35/rsync-3.2.3-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "rsync-3.2.3/acls.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'unpack_smb_acl'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/acls.c",
                    "line": 319,
                    "column": 25,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'g_u_id' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319 |                 ida->id = g_u_id;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/acls.c",
                    "line": 275,
                    "column": 22,
                    "event": "note",
                    "message": "'g_u_id' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275 |                 id_t g_u_id;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   \t\tida = EXPAND_ITEM_LIST(&temp_ida_list, id_access, -10);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|-> \t\tida->id = g_u_id;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|   \t\tida->access = access;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \t}",
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
                    "file_name": "rsync-3.2.3/getgroups",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1571",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/getgroups.c",
                    "line": 39,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "rsync-3.2.3/getgroups.c",
                    "line": 39,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> \tlist = (gid_t*)malloc(sizeof (gid_t) * (n + 1));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   \tif (!list) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \t\tfprintf(stderr, \"out of memory!\\n\");",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3021 with arguments: --config=/builddir/build/BUILD/rsync-3.2.3/testtmp/daemon-gzip-upload/test-rsyncd.conf --daemon",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/lib/compat.c",
                    "line": 120,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/memcheck/../shared/vg_replace_strmem.c",
                    "line": 497,
                    "event": "note",
                    "message": "called from __strlen_sse2()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "rsync-3.2.3/lib/compat.c",
                    "line": 120,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/log.c",
                    "line": 300,
                    "event": "note",
                    "message": "called from rwrite()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/io.c",
                    "line": 1598,
                    "event": "note",
                    "message": "called from read_a_msg.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/io.c",
                    "line": 1675,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/generator.c",
                    "line": 2344,
                    "event": "note",
                    "message": "called from generate_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1106,
                    "event": "note",
                    "message": "called from do_recv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1219,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1253,
                    "event": "note",
                    "message": "called from start_server()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/clientserver.c",
                    "line": 1135,
                    "event": "note",
                    "message": "called from rsync_module()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/clientserver.c",
                    "line": 1318,
                    "event": "note",
                    "message": "called from start_daemon()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/clientserver.c",
                    "line": 1432,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1787,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|    size_t strlcpy(char *d, const char *s, size_t bufsize)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|-> \tsize_t len = strlen(s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  121|   \tsize_t ret = len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|   \tif (bufsize > 0) {",
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
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'show_malloc_stats'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 472,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'mallinfo' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472 |         mi = mallinfo();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/rsync.h",
                    "line": 346,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 23,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/malloc.h",
                    "line": 113,
                    "column": 24,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113 | extern struct mallinfo mallinfo (void) __THROW __MALLOC_DEPRECATED;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   \tstruct mallinfo mi;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  471|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472|-> \tmi = mallinfo();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474|   \trprintf(FCLIENT, \"\\n\");",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6538 with arguments: -ai --include=/down/ --exclude=/* /builddir/build/BUILD/rsync-3.2.3/testtmp/relative/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/relative/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 2 blocks are definitely lost in loss record 10 of 35",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2479 with arguments: -av --include=text --include=*/ --exclude=* /builddir/build/BUILD/rsync-3.2.3/testtmp/compare-dest/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/compare-dest/alt1/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 3 blocks are definitely lost in loss record 10 of 34",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1411 with arguments: -av --exclude=foobar.baz /builddir/build/BUILD/rsync-3.2.3/testtmp/batch-mode/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/batch-mode/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 10 of 35",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3595 with arguments: -av -f exclude,! */ /builddir/build/BUILD/rsync-3.2.3/testtmp/delete/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/delete/chk/empty/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 1 blocks are definitely lost in loss record 10 of 34",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1809 with arguments: -avv --chmod ug-s,a+rX,D+w /builddir/build/BUILD/rsync-3.2.3/testtmp/chmod-option/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/chmod-option/to/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "14 bytes in 1 blocks are definitely lost in loss record 9 of 32",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5145 with arguments: -avH --bwlimit=0 --debug=all0,deltasum0 /builddir/build/BUILD/rsync-3.2.3/testtmp/hands/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/hands/to",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "15 bytes in 1 blocks are definitely lost in loss record 10 of 39",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2523 with arguments: -av --include=etc-ltr-list --include=*/ --exclude=* /builddir/build/BUILD/rsync-3.2.3/testtmp/compare-dest/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/compare-dest/alt2/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "18 bytes in 3 blocks are definitely lost in loss record 12 of 34",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5145 with arguments: -avH --bwlimit=0 --debug=all0,deltasum0 /builddir/build/BUILD/rsync-3.2.3/testtmp/hands/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/hands/to",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2 bytes in 1 blocks are definitely lost in loss record 2 of 39",
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
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4746 with arguments: -a --exclude=dir/text --exclude=subsubdir/** /builddir/build/BUILD/rsync-3.2.3/testtmp/files-from/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/files-from/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 2 blocks are definitely lost in loss record 12 of 34",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4287 with arguments: -av -f -_foo/too/ -f -_foo/down/ -f -_foo/and/ -f -_new/ /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "41 bytes in 4 blocks are definitely lost in loss record 15 of 35",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 746 with arguments: --info=help",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 2 of 14",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6494 with arguments: -av --existing --include=*/ --exclude=* /builddir/build/BUILD/rsync-3.2.3/testtmp/relative/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/relative/from/extra/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 2 blocks are definitely lost in loss record 5 of 34",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5527 with arguments: -a -f -! */ /builddir/build/BUILD/rsync-3.2.3/testtmp/itemize/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/itemize/to",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 7 of 34",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1185 with arguments: -ai --info=backup /builddir/build/BUILD/rsync-3.2.3/testtmp/backup/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/backup/to/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "7 bytes in 1 blocks are definitely lost in loss record 8 of 32",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1368,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|-> \twhile ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   \t\t/* most options are handled automatically by popt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1370|   \t\t * only special cases are returned and listed here. */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "rsync-3.2.3/receiver.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'receive_data'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/receiver.c",
                    "line": 330,
                    "column": 41,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'data' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330 |                         if (fd != -1 && write_file(fd, 0, offset, data, i) != i)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/receiver.c",
                    "line": 247,
                    "column": 15,
                    "event": "note",
                    "message": "'data' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 |         char *data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|   \t\t\tsum_update(data, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  329|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  330|-> \t\t\tif (fd != -1 && write_file(fd, 0, offset, data, i) != i)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  331|   \t\t\t\tgoto report_write_error;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  332|   \t\t\toffset += i;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "rsync-3.2.3/rounding.c",
                    "line": 35,
                    "column": 20,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'test_array' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|    int main(UNUSED(int argc), UNUSED(char *argv[]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> \tstatic int test_array[1 - 2 * (ACTUAL_SIZE != EXPECTED_SIZE)];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   \ttest_array[0] = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   \treturn 0;",
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
                    "file_name": "rsync-3.2.3/simd-checksum-x86_64.cpp",
                    "line": 90,
                    "column": 52,
                    "event": "warning[-Wunused-function]",
                    "message": "'int32_t get_checksum1_sse2_32(signed char*, int32_t, int32_t, uint32_t*, uint32_t*)' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90 | __attribute__ ((target(\"default\"))) MVSTATIC int32 get_checksum1_sse2_32(schar* buf, int32 len, int32 i, uint32* ps1, uint32* ps2) { return i; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|   __attribute__ ((target(\"default\"))) MVSTATIC int32 get_checksum1_avx2_64(schar* buf, int32 len, int32 i, uint32* ps1, uint32* ps2) { return i; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|   __attribute__ ((target(\"default\"))) MVSTATIC int32 get_checksum1_ssse3_32(schar* buf, int32 len, int32 i, uint32* ps1, uint32* ps2) { return i; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|-> __attribute__ ((target(\"default\"))) MVSTATIC int32 get_checksum1_sse2_32(schar* buf, int32 len, int32 i, uint32* ps1, uint32* ps2) { return i; }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|   /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "rsync-3.2.3/syscall.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_chmod'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/syscall.c",
                    "line": 259,
                    "column": 12,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'code' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259 |         if (code != 0 && (preserve_perms || preserve_executability))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|   \t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|-> \tif (code != 0 && (preserve_perms || preserve_executability))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|   \t\treturn code;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|   \treturn 0;",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1411 with arguments: -av --exclude=foobar.baz /builddir/build/BUILD/rsync-3.2.3/testtmp/batch-mode/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/batch-mode/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "21 bytes in 1 blocks are definitely lost in loss record 13 of 35",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1346,
                    "event": "note",
                    "message": "called from make_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1498,
                    "event": "note",
                    "message": "called from send_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1839,
                    "event": "note",
                    "message": "called from send_directory()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1992,
                    "event": "note",
                    "message": "called from send1extra()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2078,
                    "event": "note",
                    "message": "called from send_extra_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/sender.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from send_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1317,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6084 with arguments: -n -r -R --no-implied-dirs -y /builddir/build/BUILD/rsync-3.2.3/testtmp/missing/from/./subdir/file /builddir/build/BUILD/rsync-3.2.3/testtmp/missing/to/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "256 bytes in 1 blocks are definitely lost in loss record 20 of 27",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util.c",
                    "line": 1645,
                    "event": "note",
                    "message": "called from expand_item_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1949,
                    "event": "note",
                    "message": "called from send_implied_dirs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2384,
                    "event": "note",
                    "message": "called from send_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1309,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2809 with arguments: --config=/builddir/build/BUILD/rsync-3.2.3/testtmp/daemon-gzip-download/test-rsyncd.conf --daemon",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "27 bytes in 1 blocks are definitely lost in loss record 23 of 60",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/loadparm.c",
                    "line": 265,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/loadparm.c",
                    "line": 453,
                    "event": "note",
                    "message": "called from do_parameter.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/params.c",
                    "line": 553,
                    "event": "note",
                    "message": "called from Parse()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/params.c",
                    "line": 627,
                    "event": "note",
                    "message": "called from pm_process()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/clientserver.c",
                    "line": 1222,
                    "event": "note",
                    "message": "called from start_daemon()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/clientserver.c",
                    "line": 1432,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1787,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4428 with arguments: -avv /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "28 bytes in 2 blocks are definitely lost in loss record 10 of 31",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1346,
                    "event": "note",
                    "message": "called from make_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1498,
                    "event": "note",
                    "message": "called from send_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1839,
                    "event": "note",
                    "message": "called from send_directory()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1992,
                    "event": "note",
                    "message": "called from send1extra()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2078,
                    "event": "note",
                    "message": "called from send_extra_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/sender.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from send_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1317,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6538 with arguments: -ai --include=/down/ --exclude=/* /builddir/build/BUILD/rsync-3.2.3/testtmp/relative/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/relative/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "33 bytes in 1 blocks are definitely lost in loss record 15 of 35",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1346,
                    "event": "note",
                    "message": "called from make_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1498,
                    "event": "note",
                    "message": "called from send_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1839,
                    "event": "note",
                    "message": "called from send_directory()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1992,
                    "event": "note",
                    "message": "called from send1extra()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2078,
                    "event": "note",
                    "message": "called from send_extra_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/sender.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from send_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1317,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4287 with arguments: -av -f -_foo/too/ -f -_foo/down/ -f -_foo/and/ -f -_new/ /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/chk/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "44 bytes in 3 blocks are definitely lost in loss record 16 of 35",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1346,
                    "event": "note",
                    "message": "called from make_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1498,
                    "event": "note",
                    "message": "called from send_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1839,
                    "event": "note",
                    "message": "called from send_directory()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1992,
                    "event": "note",
                    "message": "called from send1extra()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2078,
                    "event": "note",
                    "message": "called from send_extra_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/sender.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from send_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1317,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 4331 with arguments: -av --prune-empty-dirs /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/exclude/to/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 3 of 34",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/uidlist.c",
                    "line": 110,
                    "event": "note",
                    "message": "called from uid_to_user()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/uidlist.c",
                    "line": 391,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/uidlist.c",
                    "line": 378,
                    "event": "note",
                    "message": "called from send_one_list.lto_priv.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/uidlist.c",
                    "line": 400,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2470,
                    "event": "note",
                    "message": "called from send_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1309,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 5697 with arguments: --delete -avH /builddir/build/BUILD/rsync-3.2.3/testtmp/longdir/from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/longdir/to",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "534 bytes in 2 blocks are definitely lost in loss record 25 of 33",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1346,
                    "event": "note",
                    "message": "called from make_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1498,
                    "event": "note",
                    "message": "called from send_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1839,
                    "event": "note",
                    "message": "called from send_directory()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1992,
                    "event": "note",
                    "message": "called from send1extra()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2078,
                    "event": "note",
                    "message": "called from send_extra_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/sender.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from send_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1317,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7105 with arguments: -avv from/safe/ to",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 5 of 31",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1346,
                    "event": "note",
                    "message": "called from make_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1498,
                    "event": "note",
                    "message": "called from send_file_name()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1839,
                    "event": "note",
                    "message": "called from send_directory()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 1992,
                    "event": "note",
                    "message": "called from send1extra()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2078,
                    "event": "note",
                    "message": "called from send_extra_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/sender.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from send_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1317,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3317 with arguments: -r localhost::test-hidden",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "8 bytes in 1 blocks are definitely lost in loss record 5 of 26",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 762,
                    "event": "note",
                    "message": "called from recv_file_entry()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/flist.c",
                    "line": 2585,
                    "event": "note",
                    "message": "called from recv_file_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/io.c",
                    "line": 1699,
                    "event": "note",
                    "message": "called from wait_for_receiver.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/io.c",
                    "line": 1674,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/generator.c",
                    "line": 2344,
                    "event": "note",
                    "message": "called from generate_files()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1106,
                    "event": "note",
                    "message": "called from do_recv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1362,
                    "event": "note",
                    "message": "called from client_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/clientserver.c",
                    "line": 145,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1535,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2809 with arguments: --config=/builddir/build/BUILD/rsync-3.2.3/testtmp/daemon-gzip-download/test-rsyncd.conf --daemon",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "9 bytes in 1 blocks are definitely lost in loss record 6 of 60",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1305,
                    "event": "note",
                    "message": "called from popt_unalias()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/options.c",
                    "line": 1364,
                    "event": "note",
                    "message": "called from parse_arguments()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1744,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3140 with arguments: -ve src/support/lsh.sh --no-cd --rsync-path=/builddir/build/BUILD/rsync-3.2.3/rsync  --config=/builddir/build/BUILD/rsync-3.2.3/testtmp/daemon/test-rsyncd.conf localhost::",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "12 bytes in 1 blocks are possibly lost in loss record 8 of 22",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1383,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1404,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2978 with arguments: -avvvvzz /builddir/build/BUILD/rsync-3.2.3/testtmp/daemon-gzip-upload/from/ localhost::test-to/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "20 bytes in 1 blocks are possibly lost in loss record 11 of 47",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1383,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1404,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2766 with arguments: -avvvvzz localhost::test-from/ /builddir/build/BUILD/rsync-3.2.3/testtmp/daemon-gzip-download/to/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "22 bytes in 1 blocks are possibly lost in loss record 12 of 31",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1383,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1404,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3317 with arguments: -r localhost::test-hidden",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "23 bytes in 1 blocks are possibly lost in loss record 12 of 26",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1383,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1404,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/rsync",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6651 with arguments: -avH -e /builddir/build/BUILD/rsync-3.2.3/testtmp/ssh-basic/src/support/lsh.sh --rsync-path=/builddir/build/BUILD/rsync-3.2.3/rsync  /builddir/build/BUILD/rsync-3.2.3/testtmp/ssh-basic/from/ localhost:/builddir/build/BUILD/rsync-3.2.3/testtmp/ssh-basic/to",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "65 bytes in 1 blocks are possibly lost in loss record 22 of 38",
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
                    "file_name": "rsync-3.2.3/util2.c",
                    "line": 83,
                    "event": "note",
                    "message": "called from my_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/ifuncs.h",
                    "line": 108,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1383,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1404,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/main.c",
                    "line": 1812,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   \tif (!ptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|-> \t\tptr = malloc(num * size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|   \telse if (ptr == do_calloc)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   \t\tptr = calloc(num, size);",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7311 with arguments: /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "857 (792 direct, 65 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 5",
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
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       int opt, line, i, flag[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->     poptContext pc = poptGetContext(\"wildtest\", argc, (const char**)argv,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7332 with arguments: -x1 /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "895 (792 direct, 103 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       int opt, line, i, flag[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->     poptContext pc = poptGetContext(\"wildtest\", argc, (const char**)argv,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7351 with arguments: -x1 -e1 /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "929 (792 direct, 137 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       int opt, line, i, flag[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->     poptContext pc = poptGetContext(\"wildtest\", argc, (const char**)argv,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7408 with arguments: -x2 -ese /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "930 (792 direct, 138 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       int opt, line, i, flag[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->     poptContext pc = poptGetContext(\"wildtest\", argc, (const char**)argv,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7370 with arguments: -x1 -e1se /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "931 (792 direct, 139 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 115,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       FILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|       int opt, line, i, flag[2];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|->     poptContext pc = poptGetContext(\"wildtest\", argc, (const char**)argv,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7351 with arguments: -x1 -e1 /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 118,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2 bytes in 1 blocks are definitely lost in loss record 1 of 8",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 118,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     while ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \tswitch (opt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t  case 'e':",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7408 with arguments: -x2 -ese /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 118,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3 bytes in 1 blocks are definitely lost in loss record 1 of 8",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 118,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     while ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \tswitch (opt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t  case 'e':",
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
                    "file_name": "rsync-3.2.3/wildtest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7370 with arguments: -x1 -e1se /builddir/build/BUILD/rsync-3.2.3/wildtest.txt",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 118,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 1 of 8",
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
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpopt.so.0.0.1",
                    "line": 0,
                    "event": "note",
                    "message": "called from poptGetNextOpt()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsync-3.2.3/wildtest.c",
                    "line": 118,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t    long_options, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|->     while ((opt = poptGetNextOpt(pc)) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \tswitch (opt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  120|   \t  case 'e':",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
