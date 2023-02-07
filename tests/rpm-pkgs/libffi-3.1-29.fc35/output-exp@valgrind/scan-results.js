{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libffi-3.1-29.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libffi-3.1-29.fc35/valgrind/output",
        "time-created": "2022-11-23 22:04:30",
        "time-finished": "2022-11-23 22:25:01",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libffi-3.1-29.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libffi-3.1-29.fc35/libffi-3.1-29.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libffi-3.1/src/closures.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'dlmmap_locked'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/src/closures.c",
                    "line": 461,
                    "column": 7,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'ftruncate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461 |       ftruncate (execfd, offset);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  459|   \t  goto retry_open;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  460|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  461|->       ftruncate (execfd, offset);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  462|         return MFAIL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  463|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 252,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libffi-3.1/src/closures.c",
                    "line": 473,
                    "column": 7,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'ftruncate' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473 |       ftruncate (execfd, offset);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  471|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472|         munmap (ptr, length);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|->       ftruncate (execfd, offset);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474|         return start;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|       }",
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
                    "file_name": "./unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20855",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/ffi64.c",
                    "line": 670,
                    "event": "warning[Leak_PossiblyLost]",
                    "message": "132 bytes in 1 blocks are possibly lost in loss record 1 of 3",
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
                    "file_name": "/usr/lib64/libstdc++.so.6.0.29",
                    "line": 0,
                    "event": "note",
                    "message": "called from __cxa_allocate_exception()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from closure_test_fn1(ffi_cif*, void*, void**, void*)()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/ffi64.c",
                    "line": 670,
                    "event": "note",
                    "message": "called from ffi_closure_unix64_inner()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/unix64.S",
                    "line": 229,
                    "event": "note",
                    "message": "called from ffi_closure_unix64()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|     /* Invoke the closure.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|->   closure->fun (cif, rvalue, avalue, closure->user_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|     /* Tell assembly how to perform return type promotions.  */",
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
                    "file_name": "./unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20855",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/ffi64.c",
                    "line": 670,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from __vfprintf_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from printf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from closure_test_fn1(ffi_cif*, void*, void**, void*)()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/ffi64.c",
                    "line": 670,
                    "event": "note",
                    "message": "called from ffi_closure_unix64_inner()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/unix64.S",
                    "line": 229,
                    "event": "note",
                    "message": "called from ffi_closure_unix64()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|     /* Invoke the closure.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|->   closure->fun (cif, rvalue, avalue, closure->user_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|     /* Tell assembly how to perform return type promotions.  */",
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
                    "file_name": "./unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20855",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/ffi64.c",
                    "line": 670,
                    "event": "warning[UninitValue]",
                    "message": "Use of uninitialised value of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from _itoa_word()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from __vfprintf_internal()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from printf()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from closure_test_fn1(ffi_cif*, void*, void**, void*)()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/ffi64.c",
                    "line": 670,
                    "event": "note",
                    "message": "called from ffi_closure_unix64_inner()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/../src/x86/unix64.S",
                    "line": 229,
                    "event": "note",
                    "message": "called from ffi_closure_unix64()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|     /* Invoke the closure.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|->   closure->fun (cif, rvalue, avalue, closure->user_data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|     /* Tell assembly how to perform return type promotions.  */",
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
                    "file_name": "./unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 20855",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libffi-3.1/x86_64-redhat-linux-gnu/testsuite/unwindtest.exe",
                    "line": 0,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
