{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "polkit-pkla-compat-0.1-20.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/polkit-pkla-compat-0.1-20.fc35/valgrind/output",
        "time-created": "2022-11-23 10:13:31",
        "time-finished": "2022-11-23 10:18:10",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/polkit-pkla-compat-0.1-20.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/polkit-pkla-compat-0.1-20.fc35/polkit-pkla-compat-0.1-20.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 694",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 79,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 639 of 1,039",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_with_properties()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpolkit-gobject-1.so.0.0.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from polkit_details_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 79,
                    "event": "note",
                    "message": "called from test_lookup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|     // We don't care about details",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|->   details = polkit_details_new ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|     // Create an identity to query with",
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
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 694",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 82,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 640 of 1,039",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_valist()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpolkit-gobject-1.so.0.0.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from polkit_unix_group_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpolkit-gobject-1.so.0.0.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from polkit_identity_from_string()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 82,
                    "event": "note",
                    "message": "called from test_lookup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|     // Create an identity to query with",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|->   identity = polkit_identity_from_string (\"unix-group:users\", &error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|     g_assert (identity);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     g_assert_no_error (error);",
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
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 694",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 101,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "45 (40 direct, 5 indirect) bytes in 1 blocks are definitely lost in loss record 679 of 1,039",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_valist()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpolkit-gobject-1.so.0.0.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from polkit_unix_user_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libpolkit-gobject-1.so.0.0.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from polkit_identity_from_string()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 101,
                    "event": "note",
                    "message": "called from test_lookup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|     // Create another identity to query with",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->   identity = polkit_identity_from_string (\"unix-user:root\", &error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|     g_assert (identity);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|     g_assert_no_error (error);",
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
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 694",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkittesthelper.c",
                    "line": 66,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "91 bytes in 1 blocks are definitely lost in loss record 871 of 1,039",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_strconcat()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkittesthelper.c",
                    "line": 66,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from test_lookup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run_suite()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/test/polkitbackendlocalauthorizationstoretest.c",
                    "line": 140,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|->   return g_strconcat(root, \"/\", relpath, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
