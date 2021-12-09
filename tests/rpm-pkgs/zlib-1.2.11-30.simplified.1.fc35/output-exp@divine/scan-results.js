{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 0,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "zlib-1.2.11-30.simplified.1.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/divine/output",
        "time-created": "2021-12-09 10:36:08",
        "time-finished": "2021-12-09 10:50:09",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/divine/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/zlib-1.2.11-30.simplified.1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211208.181529.g0081900.divine-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 127,
                    "column": 14,
                    "event": "warning",
                    "message": "incompatible integer to pointer conversion assigning to 'FILE *' (aka 'struct _PDCLIB_file *') from 'int'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        file = FOPEN_FUNC((const char*)filename, mode_fopen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "             ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|       if ((filename!=NULL) && (mode_fopen != NULL))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->         file = FOPEN_FUNC((const char*)filename, mode_fopen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       return file;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   }",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 127,
                    "column": 16,
                    "event": "warning",
                    "message": "implicit declaration of function 'fopen64' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        file = FOPEN_FUNC((const char*)filename, mode_fopen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 23,
                    "column": 36,
                    "event": "note",
                    "message": "expanded from macro 'FOPEN_FUNC'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FOPEN_FUNC(filename, mode) fopen64(filename, mode)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|       if ((filename!=NULL) && (mode_fopen != NULL))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|->         file = FOPEN_FUNC((const char*)filename, mode_fopen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|       return file;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|   }",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 157,
                    "column": 11,
                    "event": "warning",
                    "message": "implicit declaration of function 'ftello64' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ret = FTELLO_FUNC((FILE *)stream);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 24,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'FTELLO_FUNC'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FTELLO_FUNC(stream) ftello64(stream)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|       ZPOS64_T ret;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|->     ret = FTELLO_FUNC((FILE *)stream);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|       return ret;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   }",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 203,
                    "column": 8,
                    "event": "warning",
                    "message": "implicit declaration of function 'fseeko64' is invalid in C99",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if(FSEEKO_FUNC((FILE *)stream, offset, fseek_origin) != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/ioapi.c",
                    "line": 25,
                    "column": 45,
                    "event": "note",
                    "message": "expanded from macro 'FSEEKO_FUNC'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FSEEKO_FUNC(stream, offset, origin) fseeko64(stream, offset, origin)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                            ^",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|       ret = 0;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|->     if(FSEEKO_FUNC((FILE *)stream, offset, fseek_origin) != 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|                           ret = -1;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|   ",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "DIVINE_WARNING",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'slide_hash':",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 219,
                    "event": "error",
                    "message": "conditional jump depends on an undefined value",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 219,
                    "event": "note",
                    "message": "control error in userspace",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/fault.hpp",
                    "line": 119,
                    "event": "note",
                    "message": "void __dios::FaultBase::handler<__dios::Context>(_VM_Fault, _VM_Frame*, void (*)())",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 219,
                    "event": "note",
                    "message": "slide_hash",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 1516,
                    "event": "note",
                    "message": "fill_window",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 1941,
                    "event": "note",
                    "message": "deflate_slow",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/deflate.c",
                    "line": 1003,
                    "event": "note",
                    "message": "deflate",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 319,
                    "event": "note",
                    "message": "test_large_deflate",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 588,
                    "event": "note",
                    "message": "main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/sys/start.cpp",
                    "line": 94,
                    "event": "note",
                    "message": "__dios_start",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|       do {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|           m = *--p;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|->         *p = (Pos)(m >= wsize ? m - wsize : NIL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|           /* If n is not on any hash chain, prev[n] is garbage but",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|            * its value will never be used.",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
