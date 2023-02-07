{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "dbus-glib-0.112-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/dbus-glib-0.112-2.fc35/valgrind/output",
        "time-created": "2022-11-23 13:38:41",
        "time-finished": "2022-11-23 13:44:26",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/dbus-glib-0.112-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/dbus-glib-0.112-2.fc35/dbus-glib-0.112-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1181 with arguments: --mode=glib-server --prefix=test ./data/nested-introspect.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 307,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 256 of 273",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_sized_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 307,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 592,
                    "event": "note",
                    "message": "called from generate_glue()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 411,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 531,
                    "event": "note",
                    "message": "called from generate_glue()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 411,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 487,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 923,
                    "event": "note",
                    "message": "called from dbus_binding_tool_output_glib_server()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 421,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|       return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  307|->   ret = g_string_new (MARSHAL_PREFIX);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|     g_string_append (ret, prefix);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|     g_string_append_c (ret, '_');",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1181 with arguments: --mode=glib-server --prefix=test ./data/nested-introspect.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 889,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 128 of 273",
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
                    "message": "called from __vasprintf_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_vasprintf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_strdup_vprintf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_strdup_printf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 889,
                    "event": "note",
                    "message": "called from dbus_binding_tool_output_glib_server()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 421,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  887|     g_ptr_array_add (argv, \"--body\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  888|     g_ptr_array_add (argv, \"--skip-source\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  889|->   g_ptr_array_add (argv, g_strdup_printf (\"--prefix=%s%s\", MARSHAL_PREFIX, prefix));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  890|     g_ptr_array_add (argv, tempfile_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  891|     g_ptr_array_add (argv, NULL);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 1146,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146 |   MAP_KNOWN(G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144|     MAP_KNOWN(G_TYPE_VALUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1145|     MAP_KNOWN(G_TYPE_STRV);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146|->   MAP_KNOWN(G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1147|     MAP_KNOWN(DBUS_TYPE_G_PROXY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1148|     MAP_KNOWN(DBUS_TYPE_G_OBJECT_PATH);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_type_get_lookup_function'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 1146,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146 |   MAP_KNOWN(G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~                                                     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144|     MAP_KNOWN(G_TYPE_VALUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1145|     MAP_KNOWN(G_TYPE_STRV);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1146|->   MAP_KNOWN(G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1147|     MAP_KNOWN(DBUS_TYPE_G_PROXY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1148|     MAP_KNOWN(DBUS_TYPE_G_OBJECT_PATH);",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1181 with arguments: --mode=glib-server --prefix=test ./data/nested-introspect.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gidl.c",
                    "line": 268,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "549 (32 direct, 517 indirect) bytes in 1 blocks are definitely lost in loss record 270 of 273",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gidl.c",
                    "line": 268,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 303,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 790,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 86,
                    "event": "note",
                    "message": "called from expat_StartElementHandler()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from XML_ParseBuffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 222,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 183,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|     /* name can be NULL */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|->   info = g_new0 (NodeInfo, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|     info->base.refcount = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|     info->base.name = g_strdup (name);",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1181 with arguments: --mode=glib-server --prefix=test ./data/nested-introspect.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 340,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 113 of 273",
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
                    "message": "called from g_slist_prepend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 340,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|->         files = g_slist_prepend (files, (char*) arg);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|         ++i;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 105,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'GStaticRWLock' is deprecated: Use 'GRWLock' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 | static GStaticRWLock globals_lock = G_STATIC_RW_LOCK_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 198,
                    "column": 8,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198 | struct _GStaticRWLock",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   } DBusGErrorInfo;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|-> static GStaticRWLock globals_lock = G_STATIC_RW_LOCK_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   /* See comments in check_property_access */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   static gboolean disable_legacy_property_access = FALSE;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 105,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_init\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 | static GStaticRWLock globals_lock = G_STATIC_RW_LOCK_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   } DBusGErrorInfo;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|-> static GStaticRWLock globals_lock = G_STATIC_RW_LOCK_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   /* See comments in check_property_access */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   static gboolean disable_legacy_property_access = FALSE;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 105,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_rw_lock_init\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105 | static GStaticRWLock globals_lock = G_STATIC_RW_LOCK_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   } DBusGErrorInfo;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|-> static GStaticRWLock globals_lock = G_STATIC_RW_LOCK_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   /* See comments in check_property_access */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   static gboolean disable_legacy_property_access = FALSE;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gerror_domaincode_to_dbus_error_name'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1480,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_rw_lock_reader_lock' is deprecated: Use 'g_rw_lock_reader_lock' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1480 |       g_static_rw_lock_reader_lock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 216,
                    "column": 11,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216 | void      g_static_rw_lock_reader_lock    (GStaticRWLock *lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1478|         DBusGErrorInfo *info;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1479|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1480|->       g_static_rw_lock_reader_lock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1481|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1482|         if (error_metadata != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1487,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_rw_lock_reader_unlock' is deprecated: Use 'g_rw_lock_reader_unlock' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1487 |       g_static_rw_lock_reader_unlock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 222,
                    "column": 11,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222 | void      g_static_rw_lock_reader_unlock  (GStaticRWLock *lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1485|   \tinfo = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1486|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1487|->       g_static_rw_lock_reader_unlock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1488|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1489|         if (info)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'invoke_object_method'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1803,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_prepend' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1803 |   g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 76,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | GValueArray*    g_value_array_prepend        (GValueArray       *value_array,",
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
                    "message": " 1801|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1802|     /* Prepend object as first argument */ ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1803|->   g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1804|     g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_OBJECT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1805|     g_value_set_object (g_value_array_get_nth (value_array, 0), object);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1804,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1804 |   g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_OBJECT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1802|     /* Prepend object as first argument */ ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1803|     g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1804|->   g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_OBJECT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1805|     g_value_set_object (g_value_array_get_nth (value_array, 0), object);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1806|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1805,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1805 |   g_value_set_object (g_value_array_get_nth (value_array, 0), object);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1803|     g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1804|     g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_OBJECT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1805|->   g_value_set_object (g_value_array_get_nth (value_array, 0), object);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1806|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1807|     if (is_async)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1819,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1819 |       g_value_array_append (value_array, &context_value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1817|         g_value_init (&context_value, G_TYPE_POINTER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1818|         g_value_set_pointer (&context_value, context);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1819|->       g_value_array_append (value_array, &context_value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1820|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1821|     else",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1895,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1895 |       out_param_gvalues = g_value_array_new (out_param_count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1893|          * types.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1894|          */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1895|->       out_param_gvalues = g_value_array_new (out_param_count);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1896|         out_param_pos = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1897|         out_param_gvalue_pos = 0;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1932,
                    "column": 15,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1932 |               g_value_array_append (out_param_gvalues, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1930|   \t  else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1931|   \t    {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1932|-> \t      g_value_array_append (out_param_gvalues, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1933|   \t      g_value_set_pointer (&value, out_param_gvalues->values + out_param_gvalue_pos);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1934|   \t      out_param_gvalue_pos++;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1936,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1936 |           g_value_array_append (value_array, &value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1934|   \t      out_param_gvalue_pos++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1935|   \t    }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1936|-> \t  g_value_array_append (value_array, &value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1937|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1938|       }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1944,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1944 |       g_value_array_append (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1942|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1943|         g_assert (have_retval);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1944|->       g_value_array_append (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1945|         g_value_init (g_value_array_get_nth (value_array, value_array->n_values - 1), G_TYPE_POINTER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1946|         g_value_set_pointer (g_value_array_get_nth (value_array, value_array->n_values - 1), &gerror);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1945,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1945 |       g_value_init (g_value_array_get_nth (value_array, value_array->n_values - 1), G_TYPE_POINTER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1943|         g_assert (have_retval);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1944|         g_value_array_append (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1945|->       g_value_init (g_value_array_get_nth (value_array, value_array->n_values - 1), G_TYPE_POINTER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1946|         g_value_set_pointer (g_value_array_get_nth (value_array, value_array->n_values - 1), &gerror);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1947|       }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 1946,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1946 |       g_value_set_pointer (g_value_array_get_nth (value_array, value_array->n_values - 1), &gerror);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1944|         g_value_array_append (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1945|         g_value_init (g_value_array_get_nth (value_array, value_array->n_values - 1), G_TYPE_POINTER);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1946|->       g_value_set_pointer (g_value_array_get_nth (value_array, value_array->n_values - 1), &gerror);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1947|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1948|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 2087,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2087 |       g_value_array_free (out_param_gvalues);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2085|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2086|         g_array_free (out_param_values, TRUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2087|->       g_value_array_free (out_param_gvalues);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2088|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2089|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 2093,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2093 |   g_value_array_free (value_array);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2091|       g_clear_error (&gerror);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2092|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2093|->   g_value_array_free (value_array);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2094|     return DBUS_HANDLER_RESULT_HANDLED;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2095|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_error_domain_register'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 2753,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_rw_lock_writer_lock' is deprecated: Use 'g_rw_lock_writer_lock' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2753 |   g_static_rw_lock_writer_lock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 225,
                    "column": 11,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225 | void      g_static_rw_lock_writer_lock    (GStaticRWLock *lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2751|     g_return_if_fail (G_TYPE_FUNDAMENTAL (code_enum) == G_TYPE_ENUM);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2752|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2753|->   g_static_rw_lock_writer_lock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2754|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2755|     if (error_metadata == NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 2777,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_rw_lock_writer_unlock' is deprecated: Use 'g_rw_lock_writer_unlock' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2777 |   g_static_rw_lock_writer_unlock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluecollector.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gobject.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 231,
                    "column": 11,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231 | void      g_static_rw_lock_writer_unlock  (GStaticRWLock *lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2775|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2776|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2777|->   g_static_rw_lock_writer_unlock (&globals_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2778|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2779|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2729 with arguments: --prefix=test_invalid --mode=glib-server --output=invalid-glue.h ./invalid-nested-annotation.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 311,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "512 (16 direct, 496 indirect) bytes in 1 blocks are definitely lost in loss record 248 of 251",
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
                    "message": "called from g_slist_prepend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 311,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 790,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 86,
                    "event": "note",
                    "message": "called from expat_StartElementHandler()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from XML_ParseBuffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 222,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 183,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|->   parser->node_stack = g_slist_prepend (parser->node_stack,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|                                           node);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2499 with arguments: --prefix=test_invalid --mode=glib-server --output=invalid-glue.h ./invalid-annotated-node.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 311,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "91 (16 direct, 75 indirect) bytes in 1 blocks are definitely lost in loss record 194 of 242",
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
                    "message": "called from g_slist_prepend()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 311,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 790,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 86,
                    "event": "note",
                    "message": "called from expat_StartElementHandler()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from XML_ParseBuffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 222,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 183,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 406,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|->   parser->node_stack = g_slist_prepend (parser->node_stack,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|                                           node);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2499 with arguments: --prefix=test_invalid --mode=glib-server --output=invalid-glue.h ./invalid-annotated-node.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 733,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "52 (16 direct, 36 indirect) bytes in 1 blocks are definitely lost in loss record 128 of 242",
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
                    "message": "called from g_error_new_valist()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_set_error()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 733,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gparser.c",
                    "line": 826,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gloader-expat.c",
                    "line": 86,
                    "event": "note",
                    "message": "called from expat_StartElementHandler()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libexpat.so.1.8.10",
                    "line": 0,
                    "event": "note",
                    "message": "called from XML_ParseBuffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|         parser->in_annotation)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|->       g_set_error (error, G_MARKUP_ERROR,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  734|                      G_MARKUP_ERROR_PARSE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  735|                      \"Can't put <%s> element here\",",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 140,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'GStaticMutex' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140 |   GStaticMutex lock; /**< Thread lock */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 133,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | typedef struct",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   struct _DBusGProxyManager",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|->   GStaticMutex lock; /**< Thread lock */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|     int refcount;      /**< Reference count */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|     DBusConnection *connection; /**< Connection we're associated with. */",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 179,
                    "column": 1,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'GStaticMutex' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179 | static GStaticMutex connection_g_proxy_lock = G_STATIC_MUTEX_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 133,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 | typedef struct",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   /* Lock controlling get/set manager as data on each connection */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|-> static GStaticMutex connection_g_proxy_lock = G_STATIC_MUTEX_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   static DBusGProxyManager*",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 179,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_init\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179 | static GStaticMutex connection_g_proxy_lock = G_STATIC_MUTEX_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~          ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  178|   /* Lock controlling get/set manager as data on each connection */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  179|-> static GStaticMutex connection_g_proxy_lock = G_STATIC_MUTEX_INIT;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  180|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  181|   static DBusGProxyManager*",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 190,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |   g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       g_error (\"out of memory\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->   g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|     manager = dbus_connection_get_data (connection, g_proxy_manager_slot);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_get'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 190,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |   g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       g_error (\"out of memory\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->   g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|     manager = dbus_connection_get_data (connection, g_proxy_manager_slot);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 190,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190 |   g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|       g_error (\"out of memory\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->   g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|     manager = dbus_connection_get_data (connection, g_proxy_manager_slot);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 197,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 |       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|         dbus_connection_free_data_slot (&g_proxy_manager_slot);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|         dbus_g_proxy_manager_ref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|->       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|         return manager;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|       }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 197,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 |       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|         dbus_connection_free_data_slot (&g_proxy_manager_slot);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|         dbus_g_proxy_manager_ref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|->       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|         return manager;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|       }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 197,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 |       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|         dbus_connection_free_data_slot (&g_proxy_manager_slot);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|         dbus_g_proxy_manager_ref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|->       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|         return manager;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|       }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 206,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_init' is deprecated: Use 'g_mutex_init' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206 |   g_static_mutex_init (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 150,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 | void    g_static_mutex_init           (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|     manager->connection = connection;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|->   g_static_mutex_init (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  207|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|     /* Proxy managers keep the connection alive, which means that",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 220,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |   g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|                                 manager, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->   g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|     return manager;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 220,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |   g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|                                 manager, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->   g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|     return manager;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 220,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220 |   g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|                                 manager, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->   g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|     return manager;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 231,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|     g_assert (manager->refcount > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|     manager->refcount += 1;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_ref'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 231,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|     g_assert (manager->refcount > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|     manager->refcount += 1;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 231,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|     g_assert (manager->refcount > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|     manager->refcount += 1;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 235,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|     manager->refcount += 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|     return manager;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 235,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|     manager->refcount += 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|     return manager;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 235,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|     manager->refcount += 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|     return manager;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 246,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|     g_assert (manager->refcount > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|     manager->refcount -= 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|     if (manager->refcount == 0)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_unref'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 246,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|     g_assert (manager->refcount > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|     manager->refcount -= 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|     if (manager->refcount == 0)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 246,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|     g_assert (manager->refcount > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|     manager->refcount -= 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|     if (manager->refcount == 0)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 250,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250 |       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|     if (manager->refcount == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|->       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|         if (manager->bus_proxy)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 250,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250 |       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~              ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|     if (manager->refcount == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|->       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|         if (manager->bus_proxy)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 250,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250 |       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~                                               ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|     if (manager->refcount == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|->       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|         if (manager->bus_proxy)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 290,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_free' is deprecated: Use 'g_mutex_clear' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290 |       g_static_mutex_free (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 152,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152 | void    g_static_mutex_free           (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|         g_assert (manager->unassociated_proxies == NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|->       g_static_mutex_free (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|         g_static_mutex_lock (&connection_g_proxy_lock);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 292,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292 |       g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|         g_static_mutex_free (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|->       g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|         dbus_connection_remove_filter (manager->connection, dbus_g_proxy_manager_filter,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 292,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292 |       g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|         g_static_mutex_free (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|->       g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|         dbus_connection_remove_filter (manager->connection, dbus_g_proxy_manager_filter,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 292,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292 |       g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|         g_static_mutex_free (&manager->lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|->       g_static_mutex_lock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|         dbus_connection_remove_filter (manager->connection, dbus_g_proxy_manager_filter,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 301,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301 |       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|                                   NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|->       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|         dbus_connection_unref (manager->connection);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 301,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301 |       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|                                   NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|->       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|         dbus_connection_unref (manager->connection);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 301,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301 |       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|                                   NULL, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|->       g_static_mutex_unlock (&connection_g_proxy_lock);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|         dbus_connection_unref (manager->connection);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 310,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|->       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 310,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~              ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|->       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 310,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~                                               ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|->       UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 789,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|   \t\t\t\tunassociate_proxies, &data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|-> \t  UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|             /* the destroyed list's data pointers are weak pointers, so that we",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_replace_name_owner'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 789,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~                 ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|   \t\t\t\tunassociate_proxies, &data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|-> \t  UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|             /* the destroyed list's data pointers are weak pointers, so that we",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 789,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~                                                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|   \t\t\t\tunassociate_proxies, &data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  789|-> \t  UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  790|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|             /* the destroyed list's data pointers are weak pointers, so that we",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 803,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \t  g_slist_free (data.destroyed);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|-> \t  LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|   \t  if (info)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 803,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \t  g_slist_free (data.destroyed);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|-> \t  LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|   \t  if (info)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 803,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~                                                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  801|   \t  g_slist_free (data.destroyed);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|-> \t  LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|   \t  if (info)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 831,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831 |   LOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|     owner = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|->   LOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|     if (!dbus_g_proxy_end_call (bus_proxy, call, &error,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'got_name_owner_cb'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 831,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831 |   LOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~              ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|     owner = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|->   LOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|     if (!dbus_g_proxy_end_call (bus_proxy, call, &error,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 831,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831 |   LOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~                                             ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|     owner = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|->   LOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|     if (!dbus_g_proxy_end_call (bus_proxy, call, &error,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 859,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859 |   UNLOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|    out:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|     priv->name_call = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|->   UNLOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860|     g_free (owner);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 859,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859 |   UNLOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~            ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|    out:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|     priv->name_call = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|->   UNLOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860|     g_free (owner);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 859,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859 |   UNLOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~                                             ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  857|    out:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|     priv->name_call = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|->   UNLOCK_MANAGER (priv->manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860|     g_free (owner);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 936,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  934|     DBusGProxyPrivate *priv = DBUS_G_PROXY_GET_PRIVATE(proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  935|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|     if (manager->proxy_lists == NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_register'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 936,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  934|     DBusGProxyPrivate *priv = DBUS_G_PROXY_GET_PRIVATE(proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  935|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|     if (manager->proxy_lists == NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 936,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  934|     DBusGProxyPrivate *priv = DBUS_G_PROXY_GET_PRIVATE(proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  935|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  938|     if (manager->proxy_lists == NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1042,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1042,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1042,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1040|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1041|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1042|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1043|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1053,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1051|     char *tri;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1052|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1054|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1055|   #ifndef G_DISABLE_CHECKS",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_unregister'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1053,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1051|     char *tri;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1052|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1054|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1055|   #ifndef G_DISABLE_CHECKS",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1053,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1051|     char *tri;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1052|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1053|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1054|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1055|   #ifndef G_DISABLE_CHECKS",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1153,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1151|     g_free (tri);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1152|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1154|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1155|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1153,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1151|     g_free (tri);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1152|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1154|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1155|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1153,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1151|     g_free (tri);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1152|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1153|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1154|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1155|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1211,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209|     dbus_g_proxy_manager_ref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1210|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1212|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1213|     if (dbus_message_is_signal (message,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_manager_filter'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1211,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209|     dbus_g_proxy_manager_ref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1210|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1212|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1213|     if (dbus_message_is_signal (message,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1211,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211 |   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209|     dbus_g_proxy_manager_ref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1210|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211|->   LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1212|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1213|     if (dbus_message_is_signal (message,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1232,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230|             proxy = DBUS_G_PROXY (tmp->data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232|->           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|             dbus_g_proxy_destroy (proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|             g_object_unref (G_OBJECT (proxy));",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1232,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~          ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230|             proxy = DBUS_G_PROXY (tmp->data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232|->           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|             dbus_g_proxy_destroy (proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|             g_object_unref (G_OBJECT (proxy));",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1232,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~                                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230|             proxy = DBUS_G_PROXY (tmp->data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232|->           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|             dbus_g_proxy_destroy (proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|             g_object_unref (G_OBJECT (proxy));",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1235,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|             dbus_g_proxy_destroy (proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|             g_object_unref (G_OBJECT (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235|->           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1236|             ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1237|             tmp = tmp->next;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1235,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~            ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|             dbus_g_proxy_destroy (proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|             g_object_unref (G_OBJECT (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235|->           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1236|             ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1237|             tmp = tmp->next;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1235,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~                                           ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1233|             dbus_g_proxy_destroy (proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1234|             g_object_unref (G_OBJECT (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1235|->           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1236|             ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1237|             tmp = tmp->next;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1357,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1355|   \t  proxy = DBUS_G_PROXY (tmp->data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1356|   \t  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357|-> \t  UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1358|   \t  dbus_g_proxy_emit_remote_signal (proxy, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|   \t  g_object_unref (G_OBJECT (proxy));",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1357,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~                 ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1355|   \t  proxy = DBUS_G_PROXY (tmp->data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1356|   \t  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357|-> \t  UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1358|   \t  dbus_g_proxy_emit_remote_signal (proxy, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|   \t  g_object_unref (G_OBJECT (proxy));",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1357,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357 |           UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~                                                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1355|   \t  proxy = DBUS_G_PROXY (tmp->data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1356|   \t  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1357|-> \t  UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1358|   \t  dbus_g_proxy_emit_remote_signal (proxy, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|   \t  g_object_unref (G_OBJECT (proxy));",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1360,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1358|   \t  dbus_g_proxy_emit_remote_signal (proxy, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|   \t  g_object_unref (G_OBJECT (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360|-> \t  LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1361|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1362|         g_slist_free (full_list);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1360,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1358|   \t  dbus_g_proxy_emit_remote_signal (proxy, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|   \t  g_object_unref (G_OBJECT (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360|-> \t  LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1361|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1362|         g_slist_free (full_list);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1360,
                    "column": 20,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_lock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360 |           LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~                                                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1358|   \t  dbus_g_proxy_emit_remote_signal (proxy, message);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1359|   \t  g_object_unref (G_OBJECT (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360|-> \t  LOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1361|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1362|         g_slist_free (full_list);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1365,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_static_mutex_get_mutex_impl' is deprecated: Use 'GMutex' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 154,
                    "column": 9,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154 | GMutex *g_static_mutex_get_mutex_impl (GStaticMutex *mutex);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1364|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|     dbus_g_proxy_manager_unref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1365,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                  ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1364|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|     dbus_g_proxy_manager_unref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1365,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"g_mutex_unlock\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365 |   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~                                                   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1364|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|->   UNLOCK_MANAGER (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|     dbus_g_proxy_manager_unref (manager);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|     ",
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
                    "file_name": "dbus-glib-0.112/test/core/.libs/peer-client",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1600",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1432,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "155 (32 direct, 123 indirect) bytes in 1 blocks are definitely lost in loss record 373 of 408",
                    "verbosity_level": 0
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1432,
                    "event": "note",
                    "message": "called from dbus_g_proxy_constructor()",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2016,
                    "event": "note",
                    "message": "called from dbus_g_proxy_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/peer-client.c",
                    "line": 98,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1430|     parent_class = G_OBJECT_CLASS (g_type_class_peek_parent (klass));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1432|->   proxy = DBUS_G_PROXY (parent_class->constructor (type, n_construct_properties,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1433|   \t\t\t\t\t\t    construct_properties));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1434|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'marshal_dbus_message_to_g_marshaller'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1740,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_prepend' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740 |   g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 76,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | GValueArray*    g_value_array_prepend        (GValueArray       *value_array,",
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
                    "message": " 1738|       return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1739|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740|->   g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1741|     g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_FROM_INSTANCE (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742|     g_value_set_instance (g_value_array_get_nth (value_array, 0), proxy);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1741,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1741 |   g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_FROM_INSTANCE (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1739|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1740|     g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1741|->   g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_FROM_INSTANCE (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742|     g_value_set_instance (g_value_array_get_nth (value_array, 0), proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1743|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1742,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742 |   g_value_set_instance (g_value_array_get_nth (value_array, 0), proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1740|     g_value_array_prepend (value_array, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1741|     g_value_init (g_value_array_get_nth (value_array, 0), G_TYPE_FROM_INSTANCE (proxy));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1742|->   g_value_set_instance (g_value_array_get_nth (value_array, 0), proxy);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1743|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1744|     g_cclosure_marshal_generic (closure, return_value, value_array->n_values,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1747,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1747 |   g_value_array_free (value_array);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 1745|         value_array->values, invocation_hint, marshal_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1746|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1747|->   g_value_array_free (value_array);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1748|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1749|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1923,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1921|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1922|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1924|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1925|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1923,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 1921|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1922|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1924|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1925|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1923,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1921|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1922|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1924|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1925|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'manager_begin_bus_call'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1923,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1921|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1922|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1923|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1924|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1925|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 1930,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1930 |       g_value_array_free (arg_values);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 1928|             notify, user_data, destroy, arg_values, -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1929|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1930|->       g_value_array_free (arg_values);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1931|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1932|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_marshal_args_to_message'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2334,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2334 |       gvalue = g_value_array_get_nth (args, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 2332|         GValue *gvalue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2333|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2334|->       gvalue = g_value_array_get_nth (args, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2335|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2336|         if (!_dbus_gvalue_marshal (&msgiter, gvalue))",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2637,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2635|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2636|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2638|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2639|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2637,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2635|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2636|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2638|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2639|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2637,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 2635|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2636|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2638|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2639|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_begin_call'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2637,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2635|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2636|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2637|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2638|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2639|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2644,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2644 |       g_value_array_free (arg_values);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2642|             user_data, destroy, arg_values, priv->default_timeout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2643|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2644|->       g_value_array_free (arg_values);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2645|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2646|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2705,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2703|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2704|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2706|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2707|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2705,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2703|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2704|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2706|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2707|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2705,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 2703|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2704|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2706|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2707|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_begin_call_with_timeout'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2705,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2703|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2704|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2705|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (arg_values, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2706|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2707|     if (arg_values != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2712,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2712 |       g_value_array_free (arg_values);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2710|             user_data, destroy, arg_values, timeout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2711|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2712|->       g_value_array_free (arg_values);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2713|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2714|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2814,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2812|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2813|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2815|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2816|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2814,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2812|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2813|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2815|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2816|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2814,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 2812|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2813|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2815|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2816|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_call'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2814,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2812|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2813|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2814|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2815|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2816|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2821,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2821 |       g_value_array_free (in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2819|             NULL, in_args, priv->default_timeout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2820|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2821|->       g_value_array_free (in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2822|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2823|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2877,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2875|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2876|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2878|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2879|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2877,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2875|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2876|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2878|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2879|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2877,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 2875|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2876|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2878|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2879|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_call_with_timeout'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2877,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2875|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2876|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2877|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2878|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2879|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2884,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2884 |       g_value_array_free (in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2882|             NULL, in_args, timeout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2883|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2884|->       g_value_array_free (in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2885|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2886|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2935,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2933|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2934|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2936|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2937|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2935,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2933|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2934|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2936|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2937|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2935,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 2933|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2934|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2936|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2937|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_proxy_call_no_reply'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2935,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935 |   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2933|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2934|     va_start (args, first_arg_type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2935|->   DBUS_G_VALUE_ARRAY_COLLECT_ALL (in_args, first_arg_type, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2936|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2937|     if (in_args != NULL)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 2941,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2941 |       g_value_array_free (in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gproxy.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 2939|         message = dbus_g_proxy_marshal_args_to_message (proxy, method, in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2940|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2941|->       g_value_array_free (in_args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2942|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2943|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/.libs/dbus-binding-tool",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1181 with arguments: --mode=glib-server --prefix=test ./data/nested-introspect.xml",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 618,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "16 bytes in 1 blocks are definitely lost in loss record 114 of 273",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 618,
                    "event": "note",
                    "message": "called from register_container()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 1367,
                    "event": "note",
                    "message": "called from _dbus_g_type_specialized_builtins_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 438,
                    "event": "note",
                    "message": "called from specialized_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_once_impl()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 458,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 454,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-binding-tool-glib.c",
                    "line": 849,
                    "event": "note",
                    "message": "called from dbus_binding_tool_output_glib_server()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib-tool.c",
                    "line": 421,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|     g_warn_if_fail (vtable->copy_func != NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|->   klass = g_new0 (DBusGTypeSpecializedContainer, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|     klass->type = type;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|     klass->vtable = vtable;",
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
                    "file_name": "dbus-glib-0.112/test/.libs/test-specialized-types",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1175",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 1524,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "17 bytes in 1 blocks are definitely lost in loss record 127 of 314",
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
                    "message": "called from g_strdup()",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 1524,
                    "event": "note",
                    "message": "called from dbus_g_type_struct_get()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/specialized-types.c",
                    "line": 445,
                    "event": "note",
                    "message": "called from test_suo()",
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
                    "file_name": "dbus-glib-0.112/test/specialized-types.c",
                    "line": 491,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1522|         dbus_g_type_struct_get_member (value, i, &val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1523|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1524|->       G_VALUE_LCOPY (&val, var_args, 0, &error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1525|         if (error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1526|           {",
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
                    "file_name": "dbus-glib-0.112/test/.libs/test-specialized-types",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1175",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 1524,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4 bytes in 1 blocks are definitely lost in loss record 3 of 314",
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
                    "message": "called from g_strdup()",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtype-specialized.c",
                    "line": 1524,
                    "event": "note",
                    "message": "called from dbus_g_type_struct_get()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/specialized-types.c",
                    "line": 445,
                    "event": "note",
                    "message": "called from test_suo()",
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
                    "file_name": "dbus-glib-0.112/test/specialized-types.c",
                    "line": 491,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1522|         dbus_g_type_struct_get_member (value, i, &val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1523|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1524|->       G_VALUE_LCOPY (&val, var_args, 0, &error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1525|         if (error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1526|           {",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dbus_g_value_tuple_parse_variant'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 267,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267 |   GValueArray *va = g_value_array_new (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|     GType *types;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|     gsize i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|->   GValueArray *va = g_value_array_new (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|     const GVariantType *inner_type;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 283,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283 |       g_value_array_append (va, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|           inner_variant = g_variant_get_child_value (variant, i);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|->       g_value_array_append (va, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|         dbus_g_value_parse_variant_by_type (inner_variant, inner_type,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|                                             &va->values[i]);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 295,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295 |     g_value_array_free (va);",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.h",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-parse-variant.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": "  293|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|     if (variant == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|->     g_value_array_free (va);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|       g_value_take_boxed (value, va);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_dbus_gvalue_store'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 87,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_get_char' is deprecated: Use 'g_value_get_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87 |       *((gchar *) storage) = g_value_get_char (value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 195,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195 | gchar                 g_value_get_char          (const GValue *value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|       case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|->       *((gchar *) storage) = g_value_get_char (value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|         return TRUE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|       case G_TYPE_UCHAR:",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_dbus_gvalue_set_from_pointer'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 138,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_set_char' is deprecated: Use 'g_value_set_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138 |       g_value_set_char (value, *((gchar *) storage));",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 192,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192 | void                  g_value_set_char          (GValue       *value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|       case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|->       g_value_set_char (value, *((gchar *) storage));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|         return TRUE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|       case G_TYPE_UCHAR:",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'hash_simple_free_from_gtype'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 323,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323 |       else if (gtype == G_TYPE_VALUE_ARRAY)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \t  return TRUE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|->       else if (gtype == G_TYPE_VALUE_ARRAY)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|             *func = (GDestroyNotify) g_value_array_free;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 323,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323 |       else if (gtype == G_TYPE_VALUE_ARRAY)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                          ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|   \t  return TRUE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|->       else if (gtype == G_TYPE_VALUE_ARRAY)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|             *func = (GDestroyNotify) g_value_array_free;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 325,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325 |           *func = (GDestroyNotify) g_value_array_free;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": "  323|         else if (gtype == G_TYPE_VALUE_ARRAY)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|->           *func = (GDestroyNotify) g_value_array_free;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|             return TRUE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|           }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'gvalue_take_hash_value'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 510,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_set_char' is deprecated: Use 'g_value_set_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510 |       g_value_set_char (value, (gchar) GPOINTER_TO_INT (instance));",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 192,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192 | void                  g_value_set_char          (GValue       *value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|       case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|->       g_value_set_char (value, (gchar) GPOINTER_TO_INT (instance));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|       case G_TYPE_UCHAR:",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'hash_value_from_gvalue'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 541,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_get_char' is deprecated: Use 'g_value_get_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541 |       return GINT_TO_POINTER ((int) g_value_get_char (value));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 195,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195 | gchar                 g_value_get_char          (const GValue *value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|       case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|->       return GINT_TO_POINTER ((int) g_value_get_char (value));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  542|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  543|       case G_TYPE_UCHAR:",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'valuearray_constructor'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 773,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773 |   ret = g_value_array_new (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771|     guint size = dbus_g_type_get_struct_size (type);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  772|     guint i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  773|->   ret = g_value_array_new (size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  774|     for (i=0; i < size; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|       {",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 778,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778 |       g_value_array_append(ret, &val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|         GValue val = {0,};",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|         g_value_init (&val, dbus_g_type_get_struct_member_type (type, i));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778|->       g_value_array_append(ret, &val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  780|     return (gpointer)ret;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'valuearray_copy'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 786,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_copy' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786 |   return g_value_array_copy ((GValueArray*) src);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 73,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 | GValueArray*    g_value_array_copy           (const GValueArray *value_array);",
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
                    "message": "  784|   valuearray_copy (GType type, gpointer src)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  785|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  786|->   return g_value_array_copy ((GValueArray*) src);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  787|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  788|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'valuearray_simple_free'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 792,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792 |   g_value_array_free (val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": "  790|   valuearray_simple_free (gpointer val)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  791|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|->   g_value_array_free (val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'valuearray_get_member'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 803,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803 |       val = g_value_array_get_nth (va, member);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  801|     if (member < dbus_g_type_get_struct_size (type))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  802|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  803|->       val = g_value_array_get_nth (va, member);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  804|         g_value_copy (val, ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  805|         return TRUE;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'valuearray_set_member'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 819,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  819 |       vp = g_value_array_get_nth (va, member);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  817|     if (member < dbus_g_type_get_struct_size (type))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  818|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  819|->       vp = g_value_array_get_nth (va, member);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  820|         g_value_copy (member_type, vp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  821|         return TRUE;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'array_iterator'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 884,
                    "column": 13,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_set_char' is deprecated: Use 'g_value_set_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  884 |             g_value_set_char (&val, g_array_index (array, gchar, i));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 192,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192 | void                  g_value_set_char          (GValue       *value,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  882|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  883|             case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  884|->             g_value_set_char (&val, g_array_index (array, gchar, i));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  885|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  886|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'array_append'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 964,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_get_char' is deprecated: Use 'g_value_get_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964 |         tmp.c = g_value_get_char (value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue-utils.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 195,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195 | gchar                 g_value_get_char          (const GValue *value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  963|         case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|->         tmp.c = g_value_get_char (value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  965|           g_array_append_val (array, tmp.c);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  966|           break;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_dbus_gvalue_to_signature'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 509,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509 |   if (g_type_is_a (gtype, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|     gtype = G_VALUE_TYPE (val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|->   if (g_type_is_a (gtype, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|         GString *str;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 509,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509 |   if (g_type_is_a (gtype, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|     gtype = G_VALUE_TYPE (val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|->   if (g_type_is_a (gtype, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|         GString *str;",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 521,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521 |           sig = _dbus_gvalue_to_signature (g_value_array_get_nth (array, i));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  519|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|   \t  char *sig;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521|-> \t  sig = _dbus_gvalue_to_signature (g_value_array_get_nth (array, i));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|   \t  g_string_append (str, sig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   \t  g_free (sig);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'demarshal_valuearray'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 898,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  898 |   ret = g_value_array_new (12);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  896|     dbus_message_iter_recurse (iter, &subiter);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  897|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  898|->   ret = g_value_array_new (12);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  899|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  900|     while ((current_type = dbus_message_iter_get_arg_type (&subiter)) != DBUS_TYPE_INVALID)",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 906,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  906 |       g_value_array_append (ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  904|         char *current_sig;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  905|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  906|->       g_value_array_append (ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907|         val = g_value_array_get_nth (ret, ret->n_values - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  908|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 907,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907 |       val = g_value_array_get_nth (ret, ret->n_values - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  905|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  906|         g_value_array_append (ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907|->       val = g_value_array_get_nth (ret, ret->n_values - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  908|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  909|         current_sig = dbus_message_iter_get_signature (&subiter);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 914,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  914 |           g_value_array_free (ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": "  912|         if (elt_type == G_TYPE_INVALID)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  913|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  914|-> \t  g_value_array_free (ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  915|   \t  g_set_error (error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  916|   \t\t       DBUS_GERROR,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 928,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  928 |           g_value_array_free (ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": "  926|         if (!_dbus_gvalue_demarshal (context, &subiter, val, error))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  927|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  928|-> \t  g_value_array_free (ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  929|   \t  return FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  930|   \t}",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_type_demarshaller'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1101,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101 |       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1099|     if (typedata == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1100|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101|->       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|   \treturn demarshal_valuearray;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1103|         if (dbus_g_type_is_collection (type))",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1101,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101 |       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1099|     if (typedata == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1100|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101|->       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|   \treturn demarshal_valuearray;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1103|         if (dbus_g_type_is_collection (type))",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_dbus_gvalue_demarshal_message'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1302,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302 |   ret = g_value_array_new (6);  /* 6 is a typical maximum for arguments */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1300|     guint index_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1301|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1302|->   ret = g_value_array_new (6);  /* 6 is a typical maximum for arguments */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1303|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1304|     dbus_message_iter_init (message, &iter);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1319,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1319 |       g_value_array_append (ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1317|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1318|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1319|->       g_value_array_append (ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1320|         value = g_value_array_get_nth (ret, index_);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1321|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1320,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1320 |       value = g_value_array_get_nth (ret, index_);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1318|         ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1319|         g_value_array_append (ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1320|->       value = g_value_array_get_nth (ret, index_);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1321|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1322|         gtype = types[index_]; ",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1340,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1340 |   g_value_array_free (ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 1338|     return ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1339|    lose:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1340|->   g_value_array_free (ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1341|     return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1342|   }",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'marshal_basic'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1362,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_get_char' is deprecated: Use 'g_value_get_schar' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1362 |         char b = g_value_get_char (value);",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 36,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluetypes.h",
                    "line": 195,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195 | gchar                 g_value_get_char          (const GValue *value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1360|       case G_TYPE_CHAR:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1361|         {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1362|->         char b = g_value_get_char (value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1363|           if (!dbus_message_iter_append_basic (iter,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1364|                                                DBUS_TYPE_BYTE,",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1540,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1540 |   g_assert (G_VALUE_TYPE (value) == G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1538|     DBusMessageIter subiter;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1539|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1540|->   g_assert (G_VALUE_TYPE (value) == G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1541|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1542|     array = g_value_get_boxed (value);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'marshal_valuearray'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1540,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1540 |   g_assert (G_VALUE_TYPE (value) == G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                             ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1538|     DBusMessageIter subiter;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1539|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1540|->   g_assert (G_VALUE_TYPE (value) == G_TYPE_VALUE_ARRAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1541|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1542|     array = g_value_get_boxed (value);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1554,
                    "column": 11,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1554 |           if (!_dbus_gvalue_marshal (&subiter, g_value_array_get_nth (array, i)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1552|         for (i = 0; i < array->n_values; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1553|           {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1554|->           if (!_dbus_gvalue_marshal (&subiter, g_value_array_get_nth (array, i)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1555|               {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1556|                 dbus_message_iter_abandon_container (iter, &subiter);",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'get_type_marshaller'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1849,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1849 |       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gtest.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1847|     if (typedata == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1848|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1849|->       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1850|   \treturn marshal_valuearray;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1851|         if (dbus_g_type_is_collection (type))",
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
                    "file_name": "dbus-glib-0.112/dbus/dbus-gvalue.c",
                    "line": 1849,
                    "column": 13,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1849 |       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                    ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1847|     if (typedata == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1848|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1849|->       if (g_type_is_a (type, G_TYPE_VALUE_ARRAY))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1850|   \treturn marshal_valuearray;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1851|         if (dbus_g_type_is_collection (type))",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 80,
                    "column": 27,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 |                           G_TYPE_VALUE_ARRAY, &hello_reply_struct, G_TYPE_INVALID))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|     if (!dbus_g_proxy_call (remote_object, \"GetTuple\", &error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   \t\t\t  G_TYPE_INVALID,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|-> \t\t\t  G_TYPE_VALUE_ARRAY, &hello_reply_struct, G_TYPE_INVALID))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       lose_gerror (\"Failed to complete GetTuple\", error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 80,
                    "column": 34,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 |                           G_TYPE_VALUE_ARRAY, &hello_reply_struct, G_TYPE_INVALID))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|     if (!dbus_g_proxy_call (remote_object, \"GetTuple\", &error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   \t\t\t  G_TYPE_INVALID,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|-> \t\t\t  G_TYPE_VALUE_ARRAY, &hello_reply_struct, G_TYPE_INVALID))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|       lose_gerror (\"Failed to complete GetTuple\", error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 99,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99 |       if (!g_value_transform (g_value_array_get_nth (hello_reply_struct, i), &strval))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "   97|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|         g_value_init (&strval, G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|->       if (!g_value_transform (g_value_array_get_nth (hello_reply_struct, i), &strval))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tg_value_set_static_string (&strval, \"(couldn't transform to string)\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|         g_print (\"%s: %s\\n\", g_type_name (G_VALUE_TYPE (g_value_array_get_nth (hello_reply_struct, i))),",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 101,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101 |       g_print (\"%s: %s\\n\", g_type_name (G_VALUE_TYPE (g_value_array_get_nth (hello_reply_struct, i))),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "   99|         if (!g_value_transform (g_value_array_get_nth (hello_reply_struct, i), &strval))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|   \tg_value_set_static_string (&strval, \"(couldn't transform to string)\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->       g_print (\"%s: %s\\n\", g_type_name (G_VALUE_TYPE (g_value_array_get_nth (hello_reply_struct, i))),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|   \t       g_value_get_string (&strval));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       }",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 104,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104 |   g_value_array_free (hello_reply_struct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-client.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": "  102|   \t       g_value_get_string (&strval));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|->   g_value_array_free (hello_reply_struct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|     printf (\"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|   ",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'some_object_get_tuple'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 88,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88 |   *ret = g_value_array_new (6);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   some_object_get_tuple (SomeObject *obj, GValueArray **ret, GError **error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|->   *ret = g_value_array_new (6);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|     g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_STRING);",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 89,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_prepend' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |   g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 76,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | GValueArray*    g_value_array_prepend        (GValueArray       *value_array,",
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
                    "message": "   87|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|     *ret = g_value_array_new (6);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|->   g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|     g_value_set_string (g_value_array_get_nth (*ret, 0), \"hello\");",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 90,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90 |   g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "   88|     *ret = g_value_array_new (6);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|     g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|->   g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|     g_value_set_string (g_value_array_get_nth (*ret, 0), \"hello\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|     g_value_array_prepend (*ret, NULL);",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 91,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91 |   g_value_set_string (g_value_array_get_nth (*ret, 0), \"hello\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "   89|     g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|->   g_value_set_string (g_value_array_get_nth (*ret, 0), \"hello\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|     g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_UINT);",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 92,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_prepend' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92 |   g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 76,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | GValueArray*    g_value_array_prepend        (GValueArray       *value_array,",
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
                    "message": "   90|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|     g_value_set_string (g_value_array_get_nth (*ret, 0), \"hello\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|->   g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|     g_value_set_uint (g_value_array_get_nth (*ret, 0), 42);",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 93,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93 |   g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "   91|     g_value_set_string (g_value_array_get_nth (*ret, 0), \"hello\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|     g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|->   g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|     g_value_set_uint (g_value_array_get_nth (*ret, 0), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     ",
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
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 94,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94 |   g_value_set_uint (g_value_array_get_nth (*ret, 0), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/examples/example-service.c",
                    "line": 5,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "   92|     g_value_array_prepend (*ret, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|     g_value_init (g_value_array_get_nth (*ret, 0), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|->   g_value_set_uint (g_value_array_get_nth (*ret, 0), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|     return TRUE;",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'my_object_send_car'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 606,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606 |       || G_VALUE_TYPE (g_value_array_get_nth (invals, 0)) != G_TYPE_STRING",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  604|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|     if (invals->n_values != 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|->       || G_VALUE_TYPE (g_value_array_get_nth (invals, 0)) != G_TYPE_STRING",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|         || G_VALUE_TYPE (g_value_array_get_nth (invals, 1)) != G_TYPE_UINT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|         || G_VALUE_TYPE (g_value_array_get_nth (invals, 2)) != G_TYPE_VALUE)",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 607,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607 |       || G_VALUE_TYPE (g_value_array_get_nth (invals, 1)) != G_TYPE_UINT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  605|     if (invals->n_values != 3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|         || G_VALUE_TYPE (g_value_array_get_nth (invals, 0)) != G_TYPE_STRING",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|->       || G_VALUE_TYPE (g_value_array_get_nth (invals, 1)) != G_TYPE_UINT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|         || G_VALUE_TYPE (g_value_array_get_nth (invals, 2)) != G_TYPE_VALUE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|       {",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 608,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608 |       || G_VALUE_TYPE (g_value_array_get_nth (invals, 2)) != G_TYPE_VALUE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  606|         || G_VALUE_TYPE (g_value_array_get_nth (invals, 0)) != G_TYPE_STRING",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|         || G_VALUE_TYPE (g_value_array_get_nth (invals, 1)) != G_TYPE_UINT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|->       || G_VALUE_TYPE (g_value_array_get_nth (invals, 2)) != G_TYPE_VALUE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|         g_set_error (error,",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 616,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616 |   *outvals = g_value_array_new (2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|         return FALSE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|->   *outvals = g_value_array_new (2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|     g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), G_TYPE_UINT);",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 617,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617 |   g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|     *outvals = g_value_array_new (2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|->   g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|     g_value_set_uint (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 618,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618 |   g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  616|     *outvals = g_value_array_new (2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|     g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|->   g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|     g_value_set_uint (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|   \t\t    g_value_get_uint (g_value_array_get_nth (invals, 1)) + 1);",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 619,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619 |   g_value_set_uint (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  617|     g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  618|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|->   g_value_set_uint (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|   \t\t    g_value_get_uint (g_value_array_get_nth (invals, 1)) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|     g_value_array_append (*outvals, NULL);",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 620,
                    "column": 21,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620 |                     g_value_get_uint (g_value_array_get_nth (invals, 1)) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  618|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|     g_value_set_uint (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|-> \t\t    g_value_get_uint (g_value_array_get_nth (invals, 1)) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|     g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), DBUS_TYPE_G_OBJECT_PATH);",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 621,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621 |   g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  619|     g_value_set_uint (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  620|   \t\t    g_value_get_uint (g_value_array_get_nth (invals, 1)) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|->   g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|     g_value_set_boxed (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 622,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622 |   g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  620|   \t\t    g_value_get_uint (g_value_array_get_nth (invals, 1)) + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  621|     g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|->   g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|     g_value_set_boxed (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|   \t\t     g_strdup (\"/org/freedesktop/DBus/GLib/Tests/MyTestObject2\"));",
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
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 623,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623 |   g_value_set_boxed (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/my-object.c",
                    "line": 8,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": "  621|     g_value_array_append (*outvals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  622|     g_value_init (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1), DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  623|->   g_value_set_boxed (g_value_array_get_nth (*outvals, (*outvals)->n_values - 1),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  624|   \t\t     g_strdup (\"/org/freedesktop/DBus/GLib/Tests/MyTestObject2\"));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  625|     return TRUE;",
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
                    "file_name": "dbus-glib-0.112/test/core/.libs/peer-client",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1600",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/peer-client.c",
                    "line": 86,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "4,270 (120 direct, 4,150 indirect) bytes in 1 blocks are definitely lost in loss record 407 of 408",
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
                    "message": "called from g_io_channel_unix_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/peer-client.c",
                    "line": 86,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     g_type_init ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|->   io = g_io_channel_unix_new (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|     if (!g_io_channel_read_line (io, &addrbuf, NULL, &lineoffset, &error))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|       lose_gerror (\"failed to read address from stdin\", error);",
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
                    "file_name": "dbus-glib-0.112/test/core/.libs/peer-client",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1600",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/peer-client.c",
                    "line": 87,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "70 bytes in 1 blocks are definitely lost in loss record 239 of 408",
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
                    "message": "called from g_memdup2()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_io_channel_read_line()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/peer-client.c",
                    "line": 87,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|     io = g_io_channel_unix_new (0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|->   if (!g_io_channel_read_line (io, &addrbuf, NULL, &lineoffset, &error))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|       lose_gerror (\"failed to read address from stdin\", error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|     /* trim newline */",
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
                    "file_name": "dbus-glib-0.112/test/core/private.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/private.c",
                    "line": 259,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_type_init' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259 |   g_type_init ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gobject.h",
                    "line": 24,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gbinding.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 22,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/private.c",
                    "line": 40,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gtype.h",
                    "line": 710,
                    "column": 23,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  710 | void                  g_type_init                    (void);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|       char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|->   g_type_init ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|     dbus_g_type_specialized_init ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|   ",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1177,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_new' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177 |     vals = g_value_array_new (3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 67,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67 | GValueArray*    g_value_array_new            (guint              n_prealloced);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1175|       GValue *val;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1176|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177|->     vals = g_value_array_new (3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1178|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1179|       g_value_array_append (vals, NULL);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1179,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1179 |     g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1177|       vals = g_value_array_new (3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1178|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1179|->     g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1180|       g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181|       g_value_set_string (g_value_array_get_nth (vals, 0), \"foo\");",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1180,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1180 |     g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1178|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1179|       g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1180|->     g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181|       g_value_set_string (g_value_array_get_nth (vals, 0), \"foo\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1182|   ",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1181,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181 |     g_value_set_string (g_value_array_get_nth (vals, 0), \"foo\");",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1179|       g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1180|       g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_STRING);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181|->     g_value_set_string (g_value_array_get_nth (vals, 0), \"foo\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1182|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183|       g_value_array_append (vals, NULL);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1183,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183 |     g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1181|       g_value_set_string (g_value_array_get_nth (vals, 0), \"foo\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1182|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183|->     g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|       g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|       g_value_set_uint (g_value_array_get_nth (vals, vals->n_values - 1), 42);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1184,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184 |     g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1182|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1183|       g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|->     g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|       g_value_set_uint (g_value_array_get_nth (vals, vals->n_values - 1), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186|   ",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1185,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185 |     g_value_set_uint (g_value_array_get_nth (vals, vals->n_values - 1), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1183|       g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1184|       g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_UINT);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|->     g_value_set_uint (g_value_array_get_nth (vals, vals->n_values - 1), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|       g_value_array_append (vals, NULL);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1187,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_append' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187 |     g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 80,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | GValueArray*    g_value_array_append         (GValueArray       *value_array,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1185|       g_value_set_uint (g_value_array_get_nth (vals, vals->n_values - 1), 42);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|->     g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1188|       g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_VALUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1189|       val = g_new0 (GValue, 1);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1188,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1188 |     g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_VALUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1186|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|       g_value_array_append (vals, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1188|->     g_value_init (g_value_array_get_nth (vals, vals->n_values - 1), G_TYPE_VALUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1189|       val = g_new0 (GValue, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1190|       g_value_init (val, G_TYPE_UCHAR);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1192,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1192 |     g_value_set_boxed (g_value_array_get_nth (vals, vals->n_values - 1), val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1190|       g_value_init (val, G_TYPE_UCHAR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1191|       g_value_set_uchar (val, '!');",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1192|->     g_value_set_boxed (g_value_array_get_nth (vals, vals->n_values - 1), val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1193|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1194|       vals_ret = NULL;",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1197,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197 |                             G_TYPE_VALUE_ARRAY, vals,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1195|       g_print (\"Calling SendCar\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1196|       if (!dbus_g_proxy_call (proxy, \"SendCar\", &error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197|-> \t\t\t    G_TYPE_VALUE_ARRAY, vals,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1198|   \t\t\t    G_TYPE_INVALID,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199|   \t\t\t    G_TYPE_VALUE_ARRAY, &vals_ret,",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1197,
                    "column": 34,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197 |                             G_TYPE_VALUE_ARRAY, vals,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~~~~~~~~~~~~~~                                                     ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1195|       g_print (\"Calling SendCar\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1196|       if (!dbus_g_proxy_call (proxy, \"SendCar\", &error,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197|-> \t\t\t    G_TYPE_VALUE_ARRAY, vals,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1198|   \t\t\t    G_TYPE_INVALID,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199|   \t\t\t    G_TYPE_VALUE_ARRAY, &vals_ret,",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1199,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_type' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199 |                             G_TYPE_VALUE_ARRAY, &vals_ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 60,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60 | GType           g_value_array_get_type       (void) G_GNUC_CONST;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197|   \t\t\t    G_TYPE_VALUE_ARRAY, vals,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1198|   \t\t\t    G_TYPE_INVALID,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199|-> \t\t\t    G_TYPE_VALUE_ARRAY, &vals_ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1200|   \t\t\t    G_TYPE_INVALID))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1201|         lose_gerror (\"Failed to complete SendCar call\", error);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1199,
                    "column": 34,
                    "event": "warning",
                    "message": "Deprecated pre-processor symbol: replace with \"(g_array_get_type ())\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199 |                             G_TYPE_VALUE_ARRAY, &vals_ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~~~~~~~~~~~~~~~~~~~                                                ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197|   \t\t\t    G_TYPE_VALUE_ARRAY, vals,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1198|   \t\t\t    G_TYPE_INVALID,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199|-> \t\t\t    G_TYPE_VALUE_ARRAY, &vals_ret,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1200|   \t\t\t    G_TYPE_INVALID))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1201|         lose_gerror (\"Failed to complete SendCar call\", error);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1206,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1206 |     g_assert_true (G_VALUE_HOLDS_UINT (g_value_array_get_nth (vals_ret, 0)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1204|       g_assert_cmpuint (vals_ret->n_values, ==, 2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1205|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1206|->     g_assert_true (G_VALUE_HOLDS_UINT (g_value_array_get_nth (vals_ret, 0)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1207|       g_assert_cmpuint (g_value_get_uint (g_value_array_get_nth (vals_ret, 0)), ==, 43);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1208|       ",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1207,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1207 |     g_assert_cmpuint (g_value_get_uint (g_value_array_get_nth (vals_ret, 0)), ==, 43);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1205|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1206|       g_assert_true (G_VALUE_HOLDS_UINT (g_value_array_get_nth (vals_ret, 0)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1207|->     g_assert_cmpuint (g_value_get_uint (g_value_array_get_nth (vals_ret, 0)), ==, 43);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1208|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209|       g_assert_true (G_VALUE_TYPE (g_value_array_get_nth (vals_ret, 1)) == DBUS_TYPE_G_OBJECT_PATH);",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1209,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209 |     g_assert_true (G_VALUE_TYPE (g_value_array_get_nth (vals_ret, 1)) == DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1207|       g_assert_cmpuint (g_value_get_uint (g_value_array_get_nth (vals_ret, 0)), ==, 43);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1208|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209|->     g_assert_true (G_VALUE_TYPE (g_value_array_get_nth (vals_ret, 1)) == DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1210|       g_assert_cmpstr (\"/org/freedesktop/DBus/GLib/Tests/MyTestObject2\", ==,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211|                        g_value_get_boxed (g_value_array_get_nth (vals_ret, 1)));",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1210,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_get_nth' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1210 |     g_assert_cmpstr (\"/org/freedesktop/DBus/GLib/Tests/MyTestObject2\", ==,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 63,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | GValue*         g_value_array_get_nth        (GValueArray       *value_array,",
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
                    "message": " 1208|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1209|       g_assert_true (G_VALUE_TYPE (g_value_array_get_nth (vals_ret, 1)) == DBUS_TYPE_G_OBJECT_PATH);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1210|->     g_assert_cmpstr (\"/org/freedesktop/DBus/GLib/Tests/MyTestObject2\", ==,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1211|                        g_value_get_boxed (g_value_array_get_nth (vals_ret, 1)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1212|   ",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1214,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1214 |     g_value_array_free (vals);",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 1212|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1213|       g_free (val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1214|->     g_value_array_free (vals);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1215|       g_value_array_free (vals_ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1216|     }",
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
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 1215,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_value_array_free' is deprecated: Use 'GArray' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1215 |     g_value_array_free (vals_ret);",
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
                    "file_name": "/usr/include/glib-2.0/glib-object.h",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/dbus/dbus-glib.h",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-dbus-glib.c",
                    "line": 33,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gvaluearray.h",
                    "line": 70,
                    "column": 17,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 | void            g_value_array_free           (GValueArray       *value_array);",
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
                    "message": " 1213|       g_free (val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1214|       g_value_array_free (vals);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1215|->     g_value_array_free (vals_ret);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1216|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1217|   ",
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
                    "file_name": "dbus-glib-0.112/test/core/test-profile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_profile_run'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-profile.c",
                    "line": 1057,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_thread_create' is deprecated: Use 'g_thread_new' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1057 |       g_thread_create (vtable->client_thread_func, (void*) vtable, FALSE, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib.h",
                    "line": 112,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-glib-0.112/test/core/test-profile.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/deprecated/gthread.h",
                    "line": 100,
                    "column": 10,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100 | GThread *g_thread_create       (GThreadFunc       func,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1055|     for (i = 0; i < N_CLIENT_THREADS; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1056|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1057|->       g_thread_create (vtable->client_thread_func, (void*) vtable, FALSE, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1058|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1059|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
