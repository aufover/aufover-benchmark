{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libgpg-error-1.42-3.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgpg-error-1.42-3.fc35/divine/output",
        "time-created": "2023-01-26 08:55:48",
        "time-finished": "2023-01-26 09:02:16",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgpg-error-1.42-3.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgpg-error-1.42-3.fc35/libgpg-error-1.42-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "DIVINE_WARNING",
            "tool": "divine",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libgpg-error-1.42/src/gen-posix-lock-obj.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main':",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gen-posix-lock-obj.c",
                    "line": 141,
                    "event": "error",
                    "message": "conditional jump depends on an undefined value",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libgpg-error-1.42/src/gen-posix-lock-obj.c",
                    "line": 141,
                    "event": "note",
                    "message": "control error in userspace",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/fault.hpp",
                    "line": 119,
                    "event": "note",
                    "message": "void __dios::FaultBase::handler<__dios::Context>(_VM_Fault, _VM_Frame*, void (*)())",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gen-posix-lock-obj.c",
                    "line": 141,
                    "event": "note",
                    "message": "main",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/sys/start.cpp",
                    "line": 91,
                    "event": "note",
                    "message": "__dios_start",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|     for (i=0; i < sizeof mtx; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|->       if (p[i] != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|           initidx = i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|       }",
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
                    "file_name": "libgpg-error-1.42/tests/t-argparse.c",
                    "line": 104,
                    "column": 53,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    char *p = gpgrt_fnameconcat (srcdir, \"etc\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|     gpgrt_set_confdir (GPGRT_CONFDIR_USER, srcdir);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|->     char *p = gpgrt_fnameconcat (srcdir, \"etc\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       gpgrt_set_confdir (GPGRT_CONFDIR_SYS, p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|       xfree (p);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 190,
                    "column": 47,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           \"1\", \"2\", \"3\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|                              \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|                              \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|->                            \"1\", \"2\", \"3\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     if (out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|       fail (\"fnameconcat succeeded but should not at line %d\\n\", __LINE__);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 200,
                    "column": 52,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           \"1\", \"2\", \"3\", \"4\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|                              \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|                              \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  200|->                            \"1\", \"2\", \"3\", \"4\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|     if (out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|       fail (\"fnameconcat succeeded but should not at line %d\\n\", __LINE__);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 210,
                    "column": 42,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           \"1\", \"2\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  208|                              \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|                              \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|->                            \"1\", \"2\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|     if (!out || strcmp (out,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|                         \"1/2/3/4/5/6/7/8/9/10/\"",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 219,
                    "column": 59,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"foo\", \"~/bar\", \"baz/cde\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|->   out = gpgrt_fnameconcat (\"foo\", \"~/bar\", \"baz/cde\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|     if (!out || strcmp (out, \"foo/~/bar/baz/cde\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|       fail (\"fnameconcat failed at line %d (out=%s)\\n\", __LINE__, out);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 224,
                    "column": 60,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"foo\", \"~/bar\", \"baz/cde/\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  223|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  224|->   out = gpgrt_fnameconcat (\"foo\", \"~/bar\", \"baz/cde/\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  225|     if (!out || strcmp (out, \"foo/~/bar/baz/cde/\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  226|       fail (\"fnameconcat failed at line %d (out=%s)\\n\", __LINE__, out);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 229,
                    "column": 61,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"/foo\", \"~/bar\", \"baz/cde/\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  227|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|->   out = gpgrt_fnameconcat (\"/foo\", \"~/bar\", \"baz/cde/\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|     if (!out || strcmp (out, \"/foo/~/bar/baz/cde/\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|       fail (\"fnameconcat failed at line %d (out=%s)\\n\", __LINE__, out);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 234,
                    "column": 62,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"//foo\", \"~/bar\", \"baz/cde/\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|->   out = gpgrt_fnameconcat (\"//foo\", \"~/bar\", \"baz/cde/\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|     if (!out || strcmp (out, \"//foo/~/bar/baz/cde/\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|       fail (\"fnameconcat failed at line %d (out=%s)\\n\", __LINE__, out);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 239,
                    "column": 56,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"\", \"~/bar\", \"baz/cde\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|->   out = gpgrt_fnameconcat (\"\", \"~/bar\", \"baz/cde\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|     if (!out || strcmp (out, \"/~/bar/baz/cde\"))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|       fail (\"fnameconcat failed at line %d (out=%s)\\n\", __LINE__, out);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 244,
                    "column": 48,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"~/foo\", \"bar\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|->   out = gpgrt_fnameconcat (\"~/foo\", \"bar\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|     if (!out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|       fail (\"fnameconcat failed at line %d\\n\", __LINE__);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 263,
                    "column": 44,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_fnameconcat (\"~\", \"bar\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1991,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_fnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|->   out = gpgrt_fnameconcat (\"~\", \"bar\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|     if (!out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|       fail (\"fnameconcat failed at line %d\\n\", __LINE__);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 291,
                    "column": 49,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_absfnameconcat (\"foo\", \"bar\", NULL);",
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
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1992,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_absfnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|     size_t cwdlen = strlen (cwd);",
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
                    "message": "  291|->   out = gpgrt_absfnameconcat (\"foo\", \"bar\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|     if (!out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|       fail (\"fnameconcat failed at line %d\\n\", __LINE__);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 302,
                    "column": 44,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_absfnameconcat (\"./foo\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1992,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_absfnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|->   out = gpgrt_absfnameconcat (\"./foo\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|     if (!out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|       fail (\"fnameconcat failed at line %d (out=%s)\\n\", __LINE__, out);",
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
                    "file_name": "libgpg-error-1.42/tests/t-stringutils.c",
                    "line": 313,
                    "column": 40,
                    "event": "warning",
                    "message": "missing sentinel in function call",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  out = gpgrt_absfnameconcat (\".\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/gpgrt.h",
                    "line": 1992,
                    "column": 7,
                    "event": "note",
                    "message": "function has been explicitly marked sentinel here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "char *gpgrt_absfnameconcat (const char *first, ...) GPGRT_ATTR_SENTINEL(0);",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|     xfree (out);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|->   out = gpgrt_absfnameconcat (\".\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|     if (!out)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|       fail (\"fnameconcat failed at line %d\\n\", __LINE__);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
