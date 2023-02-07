{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "xz-5.2.5-7.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/xz-5.2.5-7.fc35/valgrind/output",
        "time-created": "2022-11-23 15:21:50",
        "time-finished": "2022-11-23 15:36:04",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/xz-5.2.5-7.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/xz-5.2.5-7.fc35/xz-5.2.5-7.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "xz-5.2.5/src/xz/message.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'progress_speed.part.0'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "xz-5.2.5/src/xz/message.c",
                    "line": 384,
                    "column": 42,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 23 bytes into a region of size between 0 and 14",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384 |         snprintf(buf, sizeof(buf), \"%.*f %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/stdio.h",
                    "line": 888,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "xz-5.2.5/src/xz/private.h",
                    "line": 23,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "xz-5.2.5/src/xz/message.c",
                    "line": 13,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 3 and 337 bytes into a destination of size 16",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71 |   return __builtin___snprintf_chk (__s, __n, __USE_FORTIFY_LEVEL - 1,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 |                                    __glibc_objsize (__s), __fmt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73 |                                    __va_arg_pack ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                    ~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   \t// Use big enough buffer to hold e.g. a multibyte decimal point.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  383|   \tstatic char buf[16];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|-> \tsnprintf(buf, sizeof(buf), \"%.*f %s\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|   \t\t\tspeed > 9.9 ? 0 : 1, speed, unit[unit_index]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|   \treturn buf;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
