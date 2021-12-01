{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-symbiotic": "8.0.0.20211119.190944",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libassuan-2.5.5-3.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libassuan-2.5.5-3.fc35/symbiotic/output",
        "time-created": "2021-12-01 11:36:49",
        "time-finished": "2021-12-01 11:38:35",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libassuan-2.5.5-3.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libassuan-2.5.5-3.fc35/libassuan-2.5.5-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "SYMBIOTIC_WARNING",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libassuan-2.5.5/tests/fdpassing.c",
                    "line": 304,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libassuan-2.5.5/tests/fdpassing.c",
                    "line": 304,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libassuan-2.5.5/tests/fdpassing.c",
                    "line": 304,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libassuan-2.5.5/tests/fdpassing.c",
                    "line": 304,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/symbiotic/lib/libc/klee/getenv.c",
                    "line": 14,
                    "column": 6,
                    "event": "note",
                    "message": "Non-deterministic values: __VERIFIER_nondet__Bool: len 1 bytes, [0x1] (i8: 1)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libassuan-2.5.5/tests/fdpassing.c",
                    "line": 291,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: assuan_new: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libassuan-2.5.5/tests/fdpassing.c",
                    "line": 295,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: assuan_pipe_connect: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|             errorcount++;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|           }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|->       else if (!with_exec && loc[0] == 's')",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|           {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|             server ();",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
