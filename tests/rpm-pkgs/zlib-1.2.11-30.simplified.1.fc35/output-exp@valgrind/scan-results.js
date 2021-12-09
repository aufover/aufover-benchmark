{
    "scan": {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "zlib-1.2.11-30.simplified.1.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/valgrind/output",
        "time-created": "2021-12-09 10:56:35",
        "time-finished": "2021-12-09 10:59:20",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/valgrind/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/zlib-1.2.11-30.simplified.1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211208.181529.g0081900.divine-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 483,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/zip.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'zip64local_SearchCentralDir'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/zip.c",
                    "line": 521,
                    "column": 5,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'for' clause does not guard...",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521 |     for (i=(int)uReadSize-3; (i--)>0;)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/contrib/minizip/zip.c",
                    "line": 529,
                    "column": 7,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'for'",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529 |       if (uPosFound!=0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|         break;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521|->     for (i=(int)uReadSize-3; (i--)>0;)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|         if (((*(buf+i))==0x50) && ((*(buf+i+1))==0x4b) &&",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|           ((*(buf+i+2))==0x05) && ((*(buf+i+3))==0x06))",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
