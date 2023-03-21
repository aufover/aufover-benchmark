{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libxslt-1.1.34-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxslt-1.1.34-6.fc35/symbiotic/output",
        "time-created": "2023-01-30 04:26:47",
        "time-finished": "2023-01-30 06:13:08",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxslt-1.1.34-6.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxslt-1.1.34-6.fc35/libxslt-1.1.34-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "libxslt-1.1.34/libexslt/date.c",
                    "line": 3117,
                    "column": 40,
                    "event": "warning[-Wimplicit-const-int-float-conversion]",
                    "message": "implicit conversion from 'long' to 'double' changes value from 9223372036854775807 to 9223372036854775808",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if ((days <= LONG_MIN) || (days >= LONG_MAX))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                    ~~ ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/clang/13.0.1/include/limits.h",
                    "line": 47,
                    "column": 19,
                    "event": "note",
                    "message": "expanded from macro 'LONG_MAX'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LONG_MAX  __LONG_MAX__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                  ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "<built-in>",
                    "line": 39,
                    "column": 22,
                    "event": "note",
                    "message": "expanded from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define __LONG_MAX__ 9223372036854775807L",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                     ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3115|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3116|       days = floor(secs / SECS_PER_DAY);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3117|->     if ((days <= LONG_MIN) || (days >= LONG_MAX))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3118|           return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3119|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
