{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libgudev-237-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgudev-237-1.fc35/valgrind/output",
        "time-created": "2022-11-23 11:27:19",
        "time-finished": "2022-11-23 11:32:31",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgudev-237-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgudev-237-1.fc35/libgudev-237-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-enumerator-filter",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 362",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../gudev/gudevenumerator.c",
                    "line": 170,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,072 (40 direct, 1,032 indirect) bytes in 1 blocks are definitely lost in loss record 785 of 795",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_valist()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../gudev/gudevenumerator.c",
                    "line": 170,
                    "event": "note",
                    "message": "called from g_udev_enumerator_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 58,
                    "event": "note",
                    "message": "called from test_enumerator_filter()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run_suite()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 71,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|     g_return_val_if_fail (G_UDEV_IS_CLIENT (client), NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|->   return G_UDEV_ENUMERATOR (g_object_new (G_UDEV_TYPE_ENUMERATOR, \"client\", client, NULL));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|   ",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-double",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 368",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-double.c",
                    "line": 23,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5,026 (40 direct, 4,986 indirect) bytes in 1 blocks are definitely lost in loss record 762 of 763",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_with_properties()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_construct()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-double.c",
                    "line": 23,
                    "event": "note",
                    "message": "called from test_double()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run_suite()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-double.c",
                    "line": 62,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|   \t/* create test bed */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|-> \tUMockdevTestbed *testbed = umockdev_testbed_new ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|   \t/* Relies on a test bed having been set up */",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-double",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 368",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-double.c",
                    "line": 30,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 715 of 763",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_sized_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_build_filename()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_devicev()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_device()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-double.c",
                    "line": 30,
                    "event": "note",
                    "message": "called from test_double()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   \tg_assert_cmpstr (nl_langinfo(RADIXCHAR), ==, \",\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|-> \tumockdev_testbed_add_device (testbed, \"platform\", \"dev1\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   \t\t\t\t     \"in_accel_scale\", \"0.0000098\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \t\t\t\t     \"ID_MODEL\", \"KoolGadget\", \"SCALE\", \"0.0000098\", NULL);",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-enumerator-filter",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 362",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 27,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5,026 (40 direct, 4,986 indirect) bytes in 1 blocks are definitely lost in loss record 794 of 795",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_with_properties()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_construct()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 27,
                    "event": "note",
                    "message": "called from test_enumerator_filter()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run_suite()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 71,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   \t/* create test bed */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|-> \tUMockdevTestbed *testbed = umockdev_testbed_new ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   \t/* Relies on a test bed having been set up */",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-enumerator-filter",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 362",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 33,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 742 of 795",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_sized_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_build_filename()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_devicev()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_device()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 33,
                    "event": "note",
                    "message": "called from test_enumerator_filter()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \t/* Add 2 devices in the USB subsystem, and one in the DRM subsystem */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|-> \tumockdev_testbed_add_device (testbed, \"usb\", \"dev1\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   \t\t\t\t     \"idVendor\", \"0815\", \"idProduct\", \"AFFE\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \t\t\t\t     \"ID_MODEL\", \"KoolGadget\", NULL);",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-enumerator-filter",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 362",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 37,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 743 of 795",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_sized_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_build_filename()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_devicev()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_device()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 37,
                    "event": "note",
                    "message": "called from test_enumerator_filter()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \t\t\t\t     \"ID_MODEL\", \"KoolGadget\", NULL);",
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
                    "message": "   37|-> \tumockdev_testbed_add_device (testbed, \"usb\", \"dev2\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   \t\t\t\t     \"idVendor\", \"0815\", \"idProduct\", \"AFFF\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   \t\t\t\t     \"ID_MODEL\", \"KoolGadget 2\", NULL);",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-enumerator-filter",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 362",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 41,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 744 of 795",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_sized_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_build_filename()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_devicev()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_device()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-enumerator-filter.c",
                    "line": 41,
                    "event": "note",
                    "message": "called from test_enumerator_filter()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   \t\t\t\t     \"ID_MODEL\", \"KoolGadget 2\", NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|-> \tumockdev_testbed_add_device (testbed, \"drm\", \"dev3\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t\t\t     \"ID_FOR_SEAT\", \"drm-pci-0000_00_02_0\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   \t\t\t\t     NULL);",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-sysfsattr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 365",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-sysfsattr.c",
                    "line": 22,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "5,026 (40 direct, 4,986 indirect) bytes in 1 blocks are definitely lost in loss record 762 of 763",
                    "verbosity_level": 0
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_type_create_instance()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new_with_properties()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libgobject-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_object_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_construct()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-sysfsattr.c",
                    "line": 22,
                    "event": "note",
                    "message": "called from test_uncached_sysfs_attr()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run_suite()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_test_run()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-sysfsattr.c",
                    "line": 76,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|   \t/* create test bed */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|-> \tUMockdevTestbed *testbed = umockdev_testbed_new ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   24|   \t/* Relies on a test bed having been set up */",
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
                    "file_name": "libgudev-237/redhat-linux-build/tests/test-sysfsattr",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 365",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-sysfsattr.c",
                    "line": 27,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "128 bytes in 1 blocks are definitely lost in loss record 715 of 763",
                    "verbosity_level": 0
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 380,
                    "event": "note",
                    "message": "called from malloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "valgrind-3.19.0/coregrind/m_replacemalloc/vg_replace_malloc.c",
                    "line": 1437,
                    "event": "note",
                    "message": "called from realloc()",
                    "verbosity_level": 2
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_realloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_string_sized_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_build_filename()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_devicev()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libumockdev.so.0.3.0",
                    "line": 0,
                    "event": "note",
                    "message": "called from umockdev_testbed_add_device()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgudev-237/redhat-linux-build/../tests/test-sysfsattr.c",
                    "line": 27,
                    "event": "note",
                    "message": "called from test_uncached_sysfs_attr()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|   \tg_assert (umockdev_in_mock_environment ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|-> \tumockdev_testbed_add_device (testbed, \"platform\", \"dev1\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|   \t\t\t\t     \"dytc_lapmode\", \"1\", \"console\", \"Y\\n\", NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|   \t\t\t\t     \"ID_MODEL\", \"KoolGadget\", NULL);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
