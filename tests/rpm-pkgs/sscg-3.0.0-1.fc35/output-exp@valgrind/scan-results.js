{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "sscg-3.0.0-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/valgrind/output",
        "time-created": "2022-11-23 15:06:05",
        "time-finished": "2022-11-23 15:10:40",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/sscg-3.0.0-1.fc35/sscg-3.0.0-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/dhparams_test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 401 with arguments: 512 5",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../test/dhparams_test.c",
                    "line": 72,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "640 (80 direct, 560 indirect) bytes in 1 blocks are definitely lost in loss record 10 of 10",
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
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1q",
                    "line": 0,
                    "event": "note",
                    "message": "called from CRYPTO_zalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libcrypto.so.1.1.1q",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "sscg-3.0.0/redhat-linux-build/../test/dhparams_test.c",
                    "line": 72,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   71|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72|->   pctx = EVP_PKEY_CTX_new (params, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   73|     if (!EVP_PKEY_param_check(pctx))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   74|       {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
