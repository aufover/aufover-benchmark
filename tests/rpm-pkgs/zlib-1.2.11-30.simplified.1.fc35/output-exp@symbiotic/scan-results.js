{
    "scan": {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211203.134551",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "zlib-1.2.11-30.simplified.1.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/symbiotic/output",
        "time-created": "2021-12-09 10:50:24",
        "time-finished": "2021-12-09 10:56:28",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/symbiotic/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/zlib-1.2.11-30.simplified.1.fc35/zlib-1.2.11-30.simplified.1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211208.181529.g0081900.divine-1.fc34"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "note",
                    "message": "Additional Info: address: (ReadLSB w64 0 zlibVersion):(ReadLSB w64 0 zlibVersion_off)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "note",
                    "message": "Additional Info: example: 0:0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "note",
                    "message": "Additional Info: segment range: [0, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "note",
                    "message": "Additional Info: offset range: [0, 18446744073709551615]",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "zlib-1.2.11/test/example.c",
                    "line": 554,
                    "column": 9,
                    "event": "note",
                    "message": "Non-deterministic values: zlibVersion: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  552|       static const char* myVersion = ZLIB_VERSION;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  553|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554|->     if (zlibVersion()[0] != myVersion[0]) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|           fprintf(stderr, \"incompatible zlib version\\n\");",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|           exit(1);",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
