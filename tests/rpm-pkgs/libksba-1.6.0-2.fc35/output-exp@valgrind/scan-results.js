{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libksba-1.6.0-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libksba-1.6.0-2.fc35/valgrind/output",
        "time-created": "2022-11-23 11:32:53",
        "time-finished": "2022-11-23 11:37:39",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libksba-1.6.0-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libksba-1.6.0-2.fc35/libksba-1.6.0-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "libksba-1.6.0/src/time.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_ksba_current_time'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libksba-1.6.0/src/time.c",
                    "line": 163,
                    "column": 52,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%02d' directive output may be truncated writing between 2 and 11 bytes into a region of size between 5 and 12",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163 |   snprintf (timebuf, sizeof (ksba_isotime_t), \"%04d%02d%02dT%02d%02d%02d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                    ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libksba-1.6.0/src/time.c",
                    "line": 163,
                    "column": 47,
                    "event": "note",
                    "message": "directive argument in the range [-2147483647, 2147483647]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163 |   snprintf (timebuf, sizeof (ksba_isotime_t), \"%04d%02d%02dT%02d%02d%02d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "file_name": "libksba-1.6.0/src/time.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/bits/stdio2.h",
                    "line": 71,
                    "column": 10,
                    "event": "note",
                    "message": "'__snprintf_chk' output between 16 and 68 bytes into a destination of size 16",
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
                    "message": "  161|     tp = gmtime ( &epoch );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|->   snprintf (timebuf, sizeof (ksba_isotime_t), \"%04d%02d%02dT%02d%02d%02d\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|               1900 + tp->tm_year, tp->tm_mon+1, tp->tm_mday,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|               tp->tm_hour, tp->tm_min, tp->tm_sec);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
