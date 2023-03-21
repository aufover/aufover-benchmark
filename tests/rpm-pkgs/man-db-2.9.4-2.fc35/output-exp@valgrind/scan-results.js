{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "man-db-2.9.4-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/man-db-2.9.4-2.fc35/valgrind/output",
        "time-created": "2022-11-24 02:13:46",
        "time-finished": "2022-11-24 02:32:44",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/man-db-2.9.4-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/man-db-2.9.4-2.fc35/man-db-2.9.4-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fdutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 382,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382 |       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 382,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec * *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 133,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|             && (fd < 0 ? stat (file, &st) : fstat (fd, &st)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|       }",
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
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 595,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595 |       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 595,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec * *'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/gl/lib/utimens.c",
                    "line": 133,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  593|         if (adjustment_needed != 3 && lstat (file, &st))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  594|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  595|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  596|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  597|       }",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6619 with arguments: -C /tmp/tmp.gHEGSPY1fj/manpath.config /tmp/tmp.gHEGSPY1fj/file.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_anylinked_list2.h",
                    "line": 47,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "192 (104 direct, 88 indirect) bytes in 1 blocks are definitely lost in loss record 5 of 5",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_anylinked_list2.h",
                    "line": 47,
                    "event": "note",
                    "message": "called from gl_linked_nx_create_empty()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_list.h",
                    "line": 580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_xlist.h",
                    "line": 78,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/glcontainers.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from new_string_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manp.c",
                    "line": 928,
                    "event": "note",
                    "message": "called from get_manpath_from_path()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3820,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3949,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|     struct gl_list_impl *list =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|->     (struct gl_list_impl *) malloc (sizeof (struct gl_list_impl));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|     if (list == NULL)",
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11269 with arguments: -C /tmp/tmp.ZsqxHsuhFQ/manpath.config -u -q /tmp/tmp.ZsqxHsuhFQ/usr/share/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_array_list.c",
                    "line": 57,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "189 (64 direct, 125 indirect) bytes in 1 blocks are definitely lost in loss record 24 of 25",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_array_list.c",
                    "line": 57,
                    "event": "note",
                    "message": "called from gl_array_nx_create_empty()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_list.h",
                    "line": 580,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/gl_xlist.h",
                    "line": 78,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/glcontainers.c",
                    "line": 61,
                    "event": "note",
                    "message": "called from new_string_list()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 246,
                    "event": "note",
                    "message": "called from test_manfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 362,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 596,
                    "event": "note",
                    "message": "called from testmandirs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 648,
                    "event": "note",
                    "message": "called from create_db()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 387,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 546,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 608,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|     struct gl_list_impl *list =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|->     (struct gl_list_impl *) malloc (sizeof (struct gl_list_impl));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|     if (list == NULL)",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7922 with arguments: -C /tmp/tmp.WZvOwEE5kT/manpath.config -aw abc",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 1 blocks are definitely lost in loss record 2 of 17",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2229,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6544 with arguments: -C /tmp/tmp.0wEIsnM99I/manpath.config -aw 3p open",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "100 (32 direct, 68 indirect) bytes in 2 blocks are definitely lost in loss record 13 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/zsoelim.l",
                    "line": 547,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1137,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2260,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7922 with arguments: -C /tmp/tmp.WZvOwEE5kT/manpath.config -aw abc",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "110 (32 direct, 78 indirect) bytes in 2 blocks are definitely lost in loss record 14 of 17",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/zsoelim.l",
                    "line": 547,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1137,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2260,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7041 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/man manx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "135 (16 direct, 119 indirect) bytes in 1 blocks are definitely lost in loss record 14 of 14",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_client.c",
                    "line": 93,
                    "event": "note",
                    "message": "called from add_manconv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1213,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2260,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10217 with arguments: -C /tmp/tmp.LTwHpzRT8f/manpath.config -u -q /tmp/tmp.LTwHpzRT8f/usr/share/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 3 of 20",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/libdb/db_xdbm.c",
                    "line": 108,
                    "event": "note",
                    "message": "called from man_xdbm_firstkey()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 667,
                    "event": "note",
                    "message": "called from sanity_check_db.part.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/straycats.c",
                    "line": 336,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 951,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 599,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10003 with arguments: -C /tmp/tmp.HQumkjYRYj/manpath.config -u -q /tmp/tmp.HQumkjYRYj/usr/share/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2 bytes in 1 blocks are definitely lost in loss record 1 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/lexgrog.l",
                    "line": 939,
                    "event": "note",
                    "message": "called from find_name_decompressed()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/lexgrog.l",
                    "line": 886,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 284,
                    "event": "note",
                    "message": "called from test_manfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 362,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 596,
                    "event": "note",
                    "message": "called from testmandirs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 648,
                    "event": "note",
                    "message": "called from create_db()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 387,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 546,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 608,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6544 with arguments: -C /tmp/tmp.0wEIsnM99I/manpath.config -aw 3p open",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "270 (32 direct, 238 indirect) bytes in 2 blocks are definitely lost in loss record 16 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_client.c",
                    "line": 93,
                    "event": "note",
                    "message": "called from add_manconv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1213,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2260,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/accessdb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10345 with arguments: /tmp/tmp.sMkHRYU9M5/usr/share/man/index.db",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 2 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/libdb/db_xdbm.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from man_xdbm_firstkey()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/accessdb.c",
                    "line": 140,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10079 with arguments: -C /tmp/tmp.rD9kxNeX9u/manpath.config -q /tmp/tmp.rD9kxNeX9u/usr/share/man:/tmp/tmp.rD9kxNeX9u/usr/dir/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 2 blocks are definitely lost in loss record 1 of 15",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/lexgrog.l",
                    "line": 939,
                    "event": "note",
                    "message": "called from find_name_decompressed()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/lexgrog.l",
                    "line": 886,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 284,
                    "event": "note",
                    "message": "called from test_manfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 362,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 596,
                    "event": "note",
                    "message": "called from testmandirs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 648,
                    "event": "note",
                    "message": "called from create_db()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 387,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 546,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 608,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10217 with arguments: -C /tmp/tmp.LTwHpzRT8f/manpath.config -u -q /tmp/tmp.LTwHpzRT8f/usr/share/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "43 bytes in 1 blocks are definitely lost in loss record 11 of 20",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/libdb/db_xdbm.c",
                    "line": 127,
                    "event": "note",
                    "message": "called from man_xdbm_firstkey()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 991,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 951,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 599,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/accessdb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10473 with arguments: /tmp/tmp.sMkHRYU9M5/usr/share/man/index.db",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "48 bytes in 3 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/libdb/db_xdbm.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from man_xdbm_firstkey()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/accessdb.c",
                    "line": 140,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11145 with arguments: -C /tmp/tmp.ZsqxHsuhFQ/manpath.config -u -q /tmp/tmp.ZsqxHsuhFQ/usr/share/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5 bytes in 1 blocks are definitely lost in loss record 2 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/descriptions_store.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from store_descriptions()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 304,
                    "event": "note",
                    "message": "called from test_manfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 362,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 596,
                    "event": "note",
                    "message": "called from testmandirs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 648,
                    "event": "note",
                    "message": "called from create_db()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 387,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 546,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 608,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7041 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/man manx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "50 (16 direct, 34 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 14",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/zsoelim.l",
                    "line": 547,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1137,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2260,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7153 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/prog/*/man manpathx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "57 (16 direct, 41 indirect) bytes in 1 blocks are definitely lost in loss record 8 of 14",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/zsoelim.l",
                    "line": 547,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1137,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2260,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6834 with arguments: -L xyzzy_foo.bar -C /tmp/tmp.3f6Yi43Prc/manpath.config test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "6 bytes in 1 blocks are definitely lost in loss record 1 of 8",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2229,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
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
                    "file_name": "man-db-2.9.4/src/.libs/accessdb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10596 with arguments: /tmp/tmp.sMkHRYU9M5/usr/share/man/index.db",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "64 bytes in 4 blocks are definitely lost in loss record 2 of 2",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/libdb/db_xdbm.c",
                    "line": 114,
                    "event": "note",
                    "message": "called from man_xdbm_firstkey()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/accessdb.c",
                    "line": 140,
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
                    "file_name": "man-db-2.9.4/src/.libs/whatis",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11528 with arguments: -C /tmp/tmp.6kHbpNR6wj/manpath.config test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "68 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/whatis.c",
                    "line": 939,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10972 with arguments: -C /tmp/tmp.h49tr6xMjq/manpath.config -u -q /tmp/tmp.h49tr6xMjq/usr/share/man:/tmp/tmp.h49tr6xMjq/usr/X11R6/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "86 bytes in 2 blocks are definitely lost in loss record 20 of 22",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/libdb/db_xdbm.c",
                    "line": 127,
                    "event": "note",
                    "message": "called from man_xdbm_firstkey()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 991,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 951,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 599,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/mandb",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10003 with arguments: -C /tmp/tmp.HQumkjYRYj/manpath.config -u -q /tmp/tmp.HQumkjYRYj/usr/share/man",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "9 bytes in 1 blocks are definitely lost in loss record 3 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 53,
                    "event": "note",
                    "message": "called from xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 124,
                    "event": "note",
                    "message": "called from xmemdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/descriptions_store.c",
                    "line": 138,
                    "event": "note",
                    "message": "called from store_descriptions()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 304,
                    "event": "note",
                    "message": "called from test_manfile()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 362,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 596,
                    "event": "note",
                    "message": "called from testmandirs()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/check_mandirs.c",
                    "line": 648,
                    "event": "note",
                    "message": "called from create_db()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 387,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 546,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 608,
                    "event": "note",
                    "message": "called from process_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/mandb.c",
                    "line": 868,
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6902 with arguments: -L xyzzy_foo.bar -C /tmp/tmp.3f6Yi43Prc/manpath.config xyz",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "137 (88 direct, 49 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11716 with arguments: -C /tmp/tmp.sKQQsKZgMg/manpath.config test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "139 (88 direct, 51 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8367 with arguments: -C /tmp/tmp.wEwzbtQdQW/manpath.config testb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "144 (88 direct, 56 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8699 with arguments: -C /tmp/tmp.JfcoOrdfKs/manpath.config -aw chmod.2p",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "145 (88 direct, 57 indirect) bytes in 1 blocks are definitely lost in loss record 15 of 15",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3968,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8303 with arguments: -C /tmp/tmp.wEwzbtQdQW/manpath.config test-relso",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "151 (88 direct, 63 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8239 with arguments: -C /tmp/tmp.wEwzbtQdQW/manpath.config test-fullso",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "153 (88 direct, 65 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8434 with arguments: -C /tmp/tmp.wEwzbtQdQW/manpath.config test-fullsob",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "155 (88 direct, 67 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7153 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/prog/*/man manpathx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "157 (88 direct, 69 indirect) bytes in 1 blocks are definitely lost in loss record 14 of 14",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6544 with arguments: -C /tmp/tmp.0wEIsnM99I/manpath.config -aw 3p open",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "237 (176 direct, 61 indirect) bytes in 2 blocks are definitely lost in loss record 15 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3956,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7922 with arguments: -C /tmp/tmp.WZvOwEE5kT/manpath.config -aw abc",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "239 (176 direct, 63 indirect) bytes in 2 blocks are definitely lost in loss record 16 of 17",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8831 with arguments: -C /tmp/tmp.qsgDa0Ykda/manpath.config -aw md5sum",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "241 (176 direct, 65 indirect) bytes in 2 blocks are definitely lost in loss record 15 of 16",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7835 with arguments: -C /tmp/tmp.t4t4LJTJJP/manpath.config -E UTF-8 test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "262 (176 direct, 86 indirect) bytes in 2 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6834 with arguments: -L xyzzy_foo.bar -C /tmp/tmp.3f6Yi43Prc/manpath.config test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "284 (176 direct, 108 indirect) bytes in 2 blocks are definitely lost in loss record 8 of 8",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7041 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/man manx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "93 (88 direct, 5 indirect) bytes in 1 blocks are definitely lost in loss record 13 of 14",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7211 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/prog/[ab]/man whatisx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "96 (88 direct, 8 indirect) bytes in 1 blocks are definitely lost in loss record 13 of 14",
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
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xmalloc.c",
                    "line": 112,
                    "event": "note",
                    "message": "called from xcalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3135,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3558,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3921,
                    "event": "note",
                    "message": "called from locate_page_in_manpath()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3961,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|        successful.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     if (xalloc_oversized (n, s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|->       || (! (p = calloc (n, s)) && (HAVE_GNU_CALLOC || n != 0)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|       xalloc_die ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     return p;",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6902 with arguments: -L xyzzy_foo.bar -C /tmp/tmp.3f6Yi43Prc/manpath.config xyz",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "11 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11716 with arguments: -C /tmp/tmp.sKQQsKZgMg/manpath.config test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "12 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8367 with arguments: -C /tmp/tmp.wEwzbtQdQW/manpath.config testb",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "13 bytes in 1 blocks are definitely lost in loss record 2 of 7",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7211 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/prog/[ab]/man whatisx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "15 bytes in 1 blocks are definitely lost in loss record 5 of 14",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7153 with arguments: -C /tmp/tmp.HFOetnsfPs/manpath.config -aw -M /tmp/tmp.HFOetnsfPs/usr/share/prog/*/man manpathx",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 5 of 14",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7922 with arguments: -C /tmp/tmp.WZvOwEE5kT/manpath.config -aw abc",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 2 blocks are definitely lost in loss record 5 of 17",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12442 with arguments: --warnings -E UTF-8 -l ./man1/whatis.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "25 bytes in 1 blocks are definitely lost in loss record 6 of 12",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3863,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4248,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12202 with arguments: --warnings -E UTF-8 -l ./man1/apropos.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "26 bytes in 1 blocks are definitely lost in loss record 6 of 12",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3863,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4248,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12682 with arguments: --warnings -E UTF-8 -l ./man8/accessdb.8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "27 bytes in 1 blocks are definitely lost in loss record 6 of 12",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3863,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4248,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8831 with arguments: -C /tmp/tmp.qsgDa0Ykda/manpath.config -aw md5sum",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "28 bytes in 2 blocks are definitely lost in loss record 5 of 16",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 13290 with arguments: --warnings -E UTF-8 -l ./man1/man-recode.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "29 bytes in 1 blocks are definitely lost in loss record 6 of 12",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3863,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4248,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 6544 with arguments: -C /tmp/tmp.0wEIsnM99I/manpath.config -aw 3p open",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "31 bytes in 2 blocks are definitely lost in loss record 5 of 16",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12602 with arguments: --warnings -E UTF-8 -l ./man5/manpath.5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "57 bytes in 1 blocks are definitely lost in loss record 7 of 12",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3863,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4248,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 7835 with arguments: -C /tmp/tmp.t4t4LJTJJP/manpath.config -E UTF-8 test",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "68 bytes in 1 blocks are definitely lost in loss record 4 of 7",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3601,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3977,
                    "event": "note",
                    "message": "called from man()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4327,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/man",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 12282 with arguments: --warnings -E UTF-8 -l ./man1/man.1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "7 bytes in 1 blocks are definitely lost in loss record 3 of 12",
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
                    "message": "called from strndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/../gl/lib/xstrndup.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from xstrndup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 984,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 1021,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 2259,
                    "event": "note",
                    "message": "called from display()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 3863,
                    "event": "note",
                    "message": "called from local_man_loop()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/man.c",
                    "line": 4248,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   xstrndup (const char *string, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   char *s = strndup (string, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|     if (! s)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|       xalloc_die ();",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "man-db-2.9.4/lib/security.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/security.c",
                    "line": 39,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"_\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 | #define _(String) gettext (String)",
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
                    "message": "   37|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   #include \"gettext.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> #define _(String) gettext (String)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #include \"manconfig.h\"",
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
                    "file_name": "man-db-2.9.4/lib/security.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'running_setuid'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/lib/security.c",
                    "line": 98,
                    "column": 25,
                    "event": "warning[-Wsuggest-attribute=const]",
                    "message": "function might be candidate for attribute 'const'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98 | bool _GL_ATTRIBUTE_PURE running_setuid (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|-> bool _GL_ATTRIBUTE_PURE running_setuid (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   #ifdef MAN_OWNER",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9234 with arguments: -t UTF-8 /tmp/tmp.EoYGzW3Gms/usr/share/man/fr_FR.ISO-8859-1/man7/lang-dir.7.gz",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 117,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "66,019 (144 direct, 65,875 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 117,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 156,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   \t\t\tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t\t\t  sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|-> \t\t\tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|   \t\t\tgoto got_pipeline;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|   \t\t}",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9172 with arguments: -t UTF-8 /tmp/tmp.EoYGzW3Gms/usr/share/man/man7/coding-tag.7",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 133,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,783 (144 direct, 65,639 indirect) bytes in 1 blocks are definitely lost in loss record 7 of 7",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 133,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 156,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|-> \tp = pipeline_new ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   got_pipeline:",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9759 with arguments: -f UTF-8:ISO-8859-2 -t ISO-8859-2//IGNORE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,894 (144 direct, 65,750 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9060 with arguments: -f UTF-8 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,905 (144 direct, 65,761 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9109 with arguments: -f UTF-8 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,909 (144 direct, 65,765 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8898 with arguments: -f UTF-8 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,941 (144 direct, 65,797 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 8953 with arguments: -f UTF-8 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,975 (144 direct, 65,831 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9008 with arguments: -f UTF-8 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,977 (144 direct, 65,833 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9452 with arguments: -f UTF-8:ISO-8859-1 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65,984 (144 direct, 65,840 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9710 with arguments: -f UTF-8:ISO-8859-1 -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "66,080 (144 direct, 65,936 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/.libs/manconv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 9560 with arguments: -f UTF-8:KOI8-R -t UTF-8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "68,889 (144 direct, 68,745 indirect) bytes in 1 blocks are definitely lost in loss record 9 of 9",
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
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commandv()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpipeline.so.1.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from pipeline_new_commands()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/decompress.c",
                    "line": 151,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "man-db-2.9.4/src/manconv_main.c",
                    "line": 160,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|   \tcmd = pipecmd_new_function (\"zcat\", &decompress_zlib, NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|   \tpipecmd_pre_exec (cmd, sandbox_load, sandbox_free, sandbox);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|-> \tp = pipeline_new_commands (cmd, (void *) 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   #else /* HAVE_LIBZ */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   \tp = pipeline_new ();",
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
                    "file_name": "man-db-2.9.4/src/manp.c",
                    "line": 491,
                    "column": 7,
                    "event": "warning[-Wsuggest-attribute=malloc]",
                    "message": "function might be candidate for attribute 'malloc'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491 | char *add_nls_manpaths (const char *manpathlist, const char *locales)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  489|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  490|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  491|-> char *add_nls_manpaths (const char *manpathlist, const char *locales)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  492|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  493|   \tchar *manpath = NULL;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
