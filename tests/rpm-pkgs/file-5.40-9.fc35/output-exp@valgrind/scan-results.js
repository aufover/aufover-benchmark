{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "file-5.40-9.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/file-5.40-9.fc35/valgrind/output",
        "time-created": "2022-11-23 14:05:34",
        "time-finished": "2022-11-23 14:11:39",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/file-5.40-9.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/file-5.40-9.fc35/file-5.40-9.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1000 with arguments: ../tests/json2.testfile ../tests/json2.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "10 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1186 with arguments: ../tests/pgp-binary-key-v4-ecc-secret-key.testfile ../tests/pgp-binary-key-v4-ecc-secret-key.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "111 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1155 with arguments: ../tests/pgp-binary-key-v4-ecc-no-userid-secret.testfile ../tests/pgp-binary-key-v4-ecc-no-userid-secret.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "117 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1124 with arguments: ../tests/pgp-binary-key-v4-dsa.testfile ../tests/pgp-binary-key-v4-dsa.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "121 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 814 with arguments: ../tests/fit-map-data.testfile ../tests/fit-map-data.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "131 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1062 with arguments: ../tests/pgp-binary-key-v2-phil.testfile ../tests/pgp-binary-key-v2-phil.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "138 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1248 with arguments: ../tests/pgp-binary-key-v4-rsa-no-userid-secret.testfile ../tests/pgp-binary-key-v4-rsa-no-userid-secret.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "144 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 907 with arguments: ../tests/issue311docx.testfile ../tests/issue311docx.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "21 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 938 with arguments: ../tests/issue359xlsx.testfile ../tests/issue359xlsx.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "22 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 721 with arguments: ../tests/CVE-2014-1943.testfile ../tests/CVE-2014-1943.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "30 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1341 with arguments: ../tests/zstd-v0.2-FF.testfile ../tests/zstd-v0.2-FF.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "33 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 845 with arguments: ../tests/gedcom.testfile ../tests/gedcom.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "46 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1496 with arguments: ../tests/zstd-v0.7-21.testfile ../tests/zstd-v0.7-21.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "51 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1558 with arguments: ../tests/zstd-v0.8-01.testfile ../tests/zstd-v0.8-01.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "52 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1527 with arguments: ../tests/zstd-v0.7-22.testfile ../tests/zstd-v0.7-22.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "53 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1589 with arguments: ../tests/zstd-v0.8-02.testfile ../tests/zstd-v0.8-02.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "54 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1682 with arguments: ../tests/zstd-v0.8-20.testfile ../tests/zstd-v0.8-20.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "55 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1310 with arguments: ../tests/regex-eol.testfile ../tests/regex-eol.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "57 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1620 with arguments: ../tests/zstd-v0.8-03.testfile ../tests/zstd-v0.8-03.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "59 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 783 with arguments: ../tests/escapevel.testfile ../tests/escapevel.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "65 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 876 with arguments: ../tests/hddrawcopytool.testfile ../tests/hddrawcopytool.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "75 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
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
                    "file_name": "file-5.40/tests/.libs/test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 752 with arguments: ../tests/JW07022A.mp3.testfile ../tests/JW07022A.mp3.result",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "98 bytes in 1 blocks are definitely lost in loss record 1 of 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 40,
                    "event": "note",
                    "message": "called from xrealloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 68,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 122,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   xrealloc(void *p, size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|-> \tp = realloc(p, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \tif (p == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t(void)fprintf(stderr, \"%s ERROR slurping file: %s\\n\",",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "file-5.40/tests/test.c",
                    "line": 79,
                    "column": 13,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'i'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79 |         int i, e = EXIT_FAILURE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   \tsize_t result_len, desired_len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   \tchar *desired;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|-> \tint i, e = EXIT_FAILURE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   \tFILE *fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
