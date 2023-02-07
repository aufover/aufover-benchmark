{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libseccomp-2.5.0-5.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libseccomp-2.5.0-5.fc35/valgrind/output",
        "time-created": "2022-11-24 08:37:15",
        "time-finished": "2022-11-24 22:38:53",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libseccomp-2.5.0-5.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libseccomp-2.5.0-5.fc35/libseccomp-2.5.0-5.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./56-basic-iterate_syscalls",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1003945",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/../src/api.c",
                    "line": 466,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "58,216 bytes in 5,881 blocks are definitely lost in loss record 1 of 1",
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
                    "message": "called from strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/../src/api.c",
                    "line": 466,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/56-basic-iterate_syscalls.c",
                    "line": 60,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/56-basic-iterate_syscalls.c",
                    "line": 85,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  464|   \t\treturn NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|-> \treturn strdup(name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|   ",
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
                    "file_name": "./11-basic-basic_errors",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 343784",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/../src/db.c",
                    "line": 1116,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "120 (80 direct, 40 indirect) bytes in 1 blocks are definitely lost in loss record 3 of 3",
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
                    "file_name": "libseccomp-2.5.0/tests/../src/db.c",
                    "line": 1116,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/../src/api.c",
                    "line": 296,
                    "event": "note",
                    "message": "called from seccomp_init()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libseccomp-2.5.0/tests/11-basic-basic_errors.c",
                    "line": 174,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1114|   \tstruct db_filter_col *col;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1115|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1116|-> \tcol = zmalloc(sizeof(*col));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1117|   \tif (col == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1118|   \t\treturn NULL;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
