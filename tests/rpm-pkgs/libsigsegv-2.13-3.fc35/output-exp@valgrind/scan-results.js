{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libsigsegv-2.13-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsigsegv-2.13-3.fc35/valgrind/output",
        "time-created": "2022-11-23 13:28:17",
        "time-finished": "2022-11-23 13:32:56",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsigsegv-2.13-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsigsegv-2.13-3.fc35/libsigsegv-2.13-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libsigsegv-2.13/tests/.libs/sigsegv1",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 336",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsigsegv-2.13/tests/sigsegv1.c",
                    "line": 59,
                    "event": "warning[InvalidWrite]",
                    "message": "Invalid write of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libsigsegv-2.13/tests/sigsegv1.c",
                    "line": 59,
                    "event": "note",
                    "message": "Address 0x678 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsigsegv-2.13/tests/sigsegv1.c",
                    "line": 59,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsigsegv-2.13/tests/sigsegv1.c",
                    "line": 109,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   57|   crasher (uintptr_t p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   58|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   59|->   *(volatile int *) (p + 0x678) = 42;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
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
                    "file_name": "libsigsegv-2.13/tests/.libs/stackoverflow2",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 460",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsigsegv-2.13/tests/stackoverflow2.c",
                    "line": 187,
                    "event": "warning[InvalidWrite]",
                    "message": "Invalid write of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libsigsegv-2.13/tests/stackoverflow2.c",
                    "line": 187,
                    "event": "note",
                    "message": "Address 0x0 is not stack'd, malloc'd or (recently) free'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsigsegv-2.13/tests/stackoverflow2.c",
                    "line": 187,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|       case 3:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|->       *(volatile int *) 0 = 42;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|         break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|       case 4:",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
