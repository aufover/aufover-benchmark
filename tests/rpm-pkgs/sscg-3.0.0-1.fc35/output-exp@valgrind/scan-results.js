{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "cov04.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sscg-3.0.0-1.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/valgrind/output",
        "time-created": "2021-12-01 14:58:12",
        "time-finished": "2021-12-01 14:59:36",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/valgrind/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/sscg-3.0.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "VALGRIND_WARNING",
            "key_event_idx": 1,
            "events":
            [
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/dhparams_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 447 with arguments: 512 2",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../test/dhparams_test.c",
                    "line": 72,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "640 (80 direct, 560 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "valgrind-3.18.1/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 381,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": "2"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1l",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../test/dhparams_test.c",
                    "line": 72,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|->   pctx = EVP_PKEY_CTX_new (params, NULL);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     if (!EVP_PKEY_param_check(pctx))",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       {",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
