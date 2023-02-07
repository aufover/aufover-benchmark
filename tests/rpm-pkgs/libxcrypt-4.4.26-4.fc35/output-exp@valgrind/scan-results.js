{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libxcrypt-4.4.26-4.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxcrypt-4.4.26-4.fc35/valgrind/output",
        "time-created": "2022-11-23 20:22:12",
        "time-finished": "2022-11-23 20:30:05",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxcrypt-4.4.26-4.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libxcrypt-4.4.26-4.fc35/libxcrypt-4.4.26-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 1",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "note",
                    "message": "Address 0x4a3bd2b is 15,659 bytes inside a block of size 16,384 alloc'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from memmem()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from check_test_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|     VALGRIND_MAKE_MEM_DEFINED (buf, bufsiz);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|->   unsigned char *first = memmem (buf, bufsiz, test_pattern, PATTERN_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|     if (!first)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       return 0;",
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
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "note",
                    "message": "Address 0x4a3bdb0 is 15,792 bytes inside a block of size 16,384 alloc'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from memmem()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from check_test_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|     VALGRIND_MAKE_MEM_DEFINED (buf, bufsiz);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|->   unsigned char *first = memmem (buf, bufsiz, test_pattern, PATTERN_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|     if (!first)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       return 0;",
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
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "warning[UninitValue]",
                    "message": "Use of uninitialised value of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libc.so.6",
                    "line": 0,
                    "event": "note",
                    "message": "called from memmem()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 211,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from check_test_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 285,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|     VALGRIND_MAKE_MEM_DEFINED (buf, bufsiz);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|->   unsigned char *first = memmem (buf, bufsiz, test_pattern, PATTERN_SIZE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|     if (!first)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|       return 0;",
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
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 220,
                    "event": "warning[InvalidRead]",
                    "message": "Invalid read of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 220,
                    "event": "note",
                    "message": "Address 0x4a3bdb8 is 15,800 bytes inside a block of size 16,384 alloc'd",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 220,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 230,
                    "event": "note",
                    "message": "called from check_test_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|         if (p + PATTERN_SIZE - buf > (ptrdiff_t)bufsiz)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->       if (memcmp (p, test_pattern, PATTERN_SIZE) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|           cnt++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|       }",
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
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 244,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 244,
                    "event": "note",
                    "message": "called from check_test_buffer()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|       case EXPECT_SOME:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|->       if (cnt > 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|           printf (\"PASS: %s/%s: expected some got %u\\n\", label, stage, cnt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|         else",
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
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "warning[UninitCondition]",
                    "message": "Conditional jump or move depends on uninitialised value(s)",
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
                    "message": "called from __printf_chk()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|         if (swapcontext (&uc_main, &uc_co))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|           abort ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|->       check_test_buffer (cur_subtest->expected, cur_subtest->label, \"test\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|         cur_subtest++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|       }",
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
                    "file_name": "./test/explicit-bzero",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1826",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
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
                    "message": "called from __printf_chk()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 288,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libxcrypt-4.4.26/test/explicit-bzero.c",
                    "line": 329,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  286|         if (swapcontext (&uc_main, &uc_co))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  287|           abort ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  288|->       check_test_buffer (cur_subtest->expected, cur_subtest->label, \"test\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|         cur_subtest++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|       }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
