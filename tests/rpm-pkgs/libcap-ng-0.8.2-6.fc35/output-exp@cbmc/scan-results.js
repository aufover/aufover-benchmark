{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libcap-ng-0.8.2-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcap-ng-0.8.2-6.fc35/cbmc/output",
        "time-created": "2023-01-26 06:55:48",
        "time-finished": "2023-01-26 07:00:19",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcap-ng-0.8.2-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libcap-ng-0.8.2-6.fc35/libcap-ng-0.8.2-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libcap-ng-0.8.2/utils/netcap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'collect_process_info'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcap-ng-0.8.2/utils/netcap.c",
                    "line": 191,
                    "column": 47,
                    "event": "warning[-Wformat-truncation=]",
                    "message": "'%s' directive output may be truncated writing up to 255 bytes into a region of size between 156 and 255",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |                         snprintf(ln, 256, \"%s/%s\", buf, ent->d_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcap-ng-0.8.2/utils/netcap.c",
                    "line": 191,
                    "column": 25,
                    "event": "note",
                    "message": "'snprintf' output between 2 and 356 bytes into a destination of size 256",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |                         snprintf(ln, 256, \"%s/%s\", buf, ent->d_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libcap-ng-0.8.2/utils/netcap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   \t\t\tif (ent->d_name[0] == '.')",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   \t\t\t\tcontinue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|-> \t\t\tsnprintf(ln, 256, \"%s/%s\", buf, ent->d_name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   \t\t\tif ((llen = readlink(ln, line, sizeof(line)-1)) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   \t\t\t\tcontinue;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
