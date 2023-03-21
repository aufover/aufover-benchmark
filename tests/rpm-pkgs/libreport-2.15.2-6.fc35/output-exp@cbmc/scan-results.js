{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libreport-2.15.2-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libreport-2.15.2-6.fc35/cbmc/output",
        "time-created": "2023-01-28 01:05:12",
        "time-finished": "2023-01-28 01:43:48",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libreport-2.15.2-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libreport-2.15.2-6.fc35/libreport-2.15.2-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/067/create_dump_dir.c",
                    "line": 48,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'create_dump_dir_ext' in module 'create_dump_dir' is shadowed by a definition in module 'create_dump_dir'",
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
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/067/create_dump_dir.c",
                    "line": 150,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'create_dump_dir' in module 'create_dump_dir' is shadowed by a definition in module 'create_dump_dir'",
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
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/067/create_dump_dir.c",
                    "line": 155,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'save_problem_data_in_dump_dir' in module 'create_dump_dir' is shadowed by a definition in module 'create_dump_dir'",
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
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/067/create_dump_dir.c",
                    "line": 183,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'create_dump_dir_from_problem_data_ext' in module 'create_dump_dir' is shadowed by a definition in module 'create_dump_dir'",
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
                    "file_name": "libreport-2.15.2/tests/testsuite.dir/067/create_dump_dir.c",
                    "line": 198,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'create_dump_dir_from_problem_data' in module 'run_event' is shadowed by a definition in module 'run_event'",
                    "verbosity_level": 0
                }
            ]
        }
    ]
}
