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
        "project-name": "libmaxminddb-1.5.2-2.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/symbiotic/output",
        "time-created": "2021-12-01 14:55:21",
        "time-finished": "2021-12-01 14:59:31",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/symbiotic/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/libmaxminddb-1.5.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 66,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 66,
                    "event": "note",
                    "message": "call stack: function vok_at_loc (=0, =0, =1, =0, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 93,
                    "event": "note",
                    "message": "call stack: function ok_at_loc (=0, =159, =1, =0)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/src/data-pool.c",
                    "line": 159,
                    "event": "note",
                    "message": "call stack: function test_can_multiply ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/src/data-pool.c",
                    "line": 154,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 66,
                    "event": "note",
                    "message": "Additional Info: address: 72:0",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 66,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [72] of size symbolic",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 66,
                    "event": "note",
                    "message": "Additional Info: MO61[symbolic] allocated at vstrdupf():  %23 = call noalias align 16 i8* @malloc(i64 %22) #8, !dbg !74",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/libtap/tap.c",
                    "line": 28,
                    "column": 12,
                    "event": "note",
                    "message": "Non-deterministic values: vsnprintf: len 4 bytes, [0xfe|3 times 0xff] (i32: -2)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|       printf(\"ok %d\", ++current_test);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|->     if (*name)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   67|           printf(\" - %s\", name);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68|       if (todo_mesg) {",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
