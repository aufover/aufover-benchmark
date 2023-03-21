{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libxmlb-0.3.2-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxmlb-0.3.2-2.fc35/valgrind/output",
        "time-created": "2022-11-23 12:07:13",
        "time-finished": "2022-11-23 12:12:55",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxmlb-0.3.2-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxmlb-0.3.2-2.fc35/libxmlb-0.3.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "libxmlb-0.3.2/redhat-linux-build/tmp-introspect8_wgbfsy/Xmlb-2.0.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dump_object_type’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxmlb-0.3.2/redhat-linux-build/tmp-introspect8_wgbfsy/Xmlb-2.0.c",
                    "line": 251,
                    "column": 13,
                    "event": "warning",
                    "message": "Not available before 2.70",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251 |   if (G_TYPE_IS_FINAL (type))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~          ",
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
                    "file_name": "libxmlb-0.3.2/redhat-linux-build/tmp-introspect8_wgbfsy/Xmlb-2.0.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘dump_fundamental_type’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxmlb-0.3.2/redhat-linux-build/tmp-introspect8_wgbfsy/Xmlb-2.0.c",
                    "line": 369,
                    "column": 13,
                    "event": "warning",
                    "message": "Not available before 2.70",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369 |   if (G_TYPE_IS_FINAL (type))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~          ",
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
                    "file_name": "libxmlb-0.3.2/src/xb-query-context.c",
                    "line": 37,
                    "column": 13,
                    "event": "warning",
                    "message": "Not available before 2.60",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37 | G_STATIC_ASSERT (G_ALIGNOF (XbQueryContext) == G_ALIGNOF (RealQueryContext));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   G_STATIC_ASSERT (sizeof (XbQueryContext) == sizeof (RealQueryContext));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   #if GLIB_CHECK_VERSION(2, 60, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|-> G_STATIC_ASSERT (G_ALIGNOF (XbQueryContext) == G_ALIGNOF (RealQueryContext));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
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
                    "file_name": "libxmlb-0.3.2/src/xb-value-bindings.c",
                    "line": 42,
                    "column": 13,
                    "event": "warning",
                    "message": "Not available before 2.60",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | G_STATIC_ASSERT (G_ALIGNOF (XbValueBindings) == G_ALIGNOF (RealValueBindings));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   G_STATIC_ASSERT (sizeof (XbValueBindings) == sizeof (RealValueBindings));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #if GLIB_CHECK_VERSION(2, 60, 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> G_STATIC_ASSERT (G_ALIGNOF (XbValueBindings) == G_ALIGNOF (RealValueBindings));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
