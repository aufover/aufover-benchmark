{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libxmlb-0.3.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxmlb-0.3.2-2.fc35/symbiotic/output",
        "time-created": "2023-01-29 18:30:47",
        "time-finished": "2023-01-29 18:37:04",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxmlb-0.3.2-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxmlb-0.3.2-2.fc35/libxmlb-0.3.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libxmlb-0.3.2/redhat-linux-build/tmp-introspect0t4yqrrr/Xmlb-2.0.c",
                    "line": 251,
                    "column": 7,
                    "event": "warning[-W#pragma-messages]",
                    "message": "Not available before 2.70",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (G_TYPE_IS_FINAL (type))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gtype.h",
                    "line": 388,
                    "column": 97,
                    "event": "note",
                    "message": "expanded from macro 'G_TYPE_IS_FINAL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_TYPE_IS_FINAL(type)                   (g_type_test_flags ((type), G_TYPE_FLAG_FINAL)) GLIB_AVAILABLE_MACRO_IN_2_70",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1112,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_AVAILABLE_MACRO_IN_2_70'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_AVAILABLE_MACRO_IN_2_70           GLIB_UNAVAILABLE_MACRO(2, 70)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1157,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_UNAVAILABLE_MACRO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  _GLIB_GNUC_DO_PRAGMA(GCC warning G_STRINGIFY (Not available before maj.min))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1152,
                    "column": 33,
                    "event": "note",
                    "message": "expanded from macro '_GLIB_GNUC_DO_PRAGMA'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _GLIB_GNUC_DO_PRAGMA(x) _Pragma(G_STRINGIFY (x))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<scratch space>",
                    "line": 9,
                    "column": 6,
                    "event": "note",
                    "message": "expanded from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " GCC warning \"Not available before 2.70\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     ^",
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
                    "file_name": "libxmlb-0.3.2/redhat-linux-build/tmp-introspect0t4yqrrr/Xmlb-2.0.c",
                    "line": 369,
                    "column": 7,
                    "event": "warning[-W#pragma-messages]",
                    "message": "Not available before 2.70",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  if (G_TYPE_IS_FINAL (type))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/gobject/gtype.h",
                    "line": 388,
                    "column": 97,
                    "event": "note",
                    "message": "expanded from macro 'G_TYPE_IS_FINAL'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_TYPE_IS_FINAL(type)                   (g_type_test_flags ((type), G_TYPE_FLAG_FINAL)) GLIB_AVAILABLE_MACRO_IN_2_70",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1112,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_AVAILABLE_MACRO_IN_2_70'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_AVAILABLE_MACRO_IN_2_70           GLIB_UNAVAILABLE_MACRO(2, 70)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1157,
                    "column": 3,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_UNAVAILABLE_MACRO'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  _GLIB_GNUC_DO_PRAGMA(GCC warning G_STRINGIFY (Not available before maj.min))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1152,
                    "column": 33,
                    "event": "note",
                    "message": "expanded from macro '_GLIB_GNUC_DO_PRAGMA'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _GLIB_GNUC_DO_PRAGMA(x) _Pragma(G_STRINGIFY (x))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<scratch space>",
                    "line": 13,
                    "column": 6,
                    "event": "note",
                    "message": "expanded from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " GCC warning \"Not available before 2.70\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     ^",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
