{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libreport-2.15.2-6.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libreport-2.15.2-6.fc35/valgrind/output",
        "time-created": "2022-11-24 05:00:57",
        "time-finished": "2022-11-24 05:19:54",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libreport-2.15.2-6.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libreport-2.15.2-6.fc35/libreport-2.15.2-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/016/configuration_files.at",
                    "line": 447,
                    "event": "warning",
                    "message": "the use of `tmpnam' is dangerous, better use `mkstemp'",
                    "verbosity_level": 0
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
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/065/dump_dir.at",
                    "line": 590,
                    "event": "warning",
                    "message": "the use of `tmpnam' is dangerous, better use `mkstemp'",
                    "verbosity_level": 0
                }
            ]
        },
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/074/.libs/dd_create_archive",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 28604",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/074/dump_dir.at",
                    "line": 1330,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "3,440 (2,536 direct, 904 indirect) bytes in 1 blocks are definitely lost in loss record 246 of 249",
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
                    "file_name": "/usr/lib64/libarchive.so.13.5.3",
                    "line": 0,
                    "event": "note",
                    "message": "called from archive_read_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/074/dump_dir.at",
                    "line": 1330,
                    "event": "note",
                    "message": "called from verify_archive()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/074/dump_dir.at",
                    "line": 1535,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
