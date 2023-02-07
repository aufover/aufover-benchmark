{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libgpg-error-1.42-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgpg-error-1.42-3.fc35/valgrind/output",
        "time-created": "2022-11-23 12:26:30",
        "time-finished": "2022-11-23 12:31:44",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgpg-error-1.42-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgpg-error-1.42-3.fc35/libgpg-error-1.42-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./t-argparse",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 3074",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/init.c",
                    "line": 256,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "40 bytes in 2 blocks are definitely lost in loss record 8 of 14",
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
                    "file_name": "libgpg-error-1.42/src/init.c",
                    "line": 256,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/init.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/init.c",
                    "line": 348,
                    "event": "note",
                    "message": "called from _gpgrt_strdup()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/argparse.c",
                    "line": 1708,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/argparse.c",
                    "line": 1578,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/src/visibility.c",
                    "line": 1163,
                    "event": "note",
                    "message": "called from gpgrt_argparser()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgpg-error-1.42/tests/t-argparse.c",
                    "line": 109,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  255|     if (!a)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  256|->     return malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|     return realloc (a, n);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
