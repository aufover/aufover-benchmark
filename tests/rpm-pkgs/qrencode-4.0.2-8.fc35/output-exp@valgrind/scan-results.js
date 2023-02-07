{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "qrencode-4.0.2-8.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/qrencode-4.0.2-8.fc35/valgrind/output",
        "time-created": "2022-11-23 16:14:15",
        "time-finished": "2022-11-23 16:19:43",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/qrencode-4.0.2-8.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/qrencode-4.0.2-8.fc35/qrencode-4.0.2-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "qrencode-4.0.2/tests/.libs/test_bitstream",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 430",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/bitstream.c",
                    "line": 37,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "152 (24 direct, 128 indirect) bytes in 1 blocks are definitely lost in loss record 4 of 4",
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
                    "file_name": "qrencode-4.0.2/bitstream.c",
                    "line": 37,
                    "event": "note",
                    "message": "called from BitStream_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_bitstream.c",
                    "line": 227,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_bitstream.c",
                    "line": 247,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \tBitStream *bstream;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|-> \tbstream = (BitStream *)malloc(sizeof(BitStream));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   \tif(bstream == NULL) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   ",
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
                    "file_name": "qrencode-4.0.2/tests/.libs/test_bitstream",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 430",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/bitstream.c",
                    "line": 58,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "28 (24 direct, 4 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 4",
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
                    "file_name": "qrencode-4.0.2/bitstream.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/bitstream.c",
                    "line": 52,
                    "event": "note",
                    "message": "called from BitStream_newWithBits()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_bitstream.c",
                    "line": 213,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "qrencode-4.0.2/tests/test_bitstream.c",
                    "line": 246,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|   \tif(size == 0) return BitStream_new();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|-> \tbstream = (BitStream *)malloc(sizeof(BitStream));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|   \tif(bstream == NULL) return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
