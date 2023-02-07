{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "fwupd-1.6.4-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/fwupd-1.6.4-1.fc35/valgrind/output",
        "time-created": "2022-11-23 23:34:16",
        "time-finished": "2022-11-23 23:48:17",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/fwupd-1.6.4-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/fwupd-1.6.4-1.fc35/fwupd-1.6.4-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "fwupd-1.6.4/redhat-linux-build/plugins/dfu/fu-dfu-self-test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 10335",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/dfu/fu-dfu-device.c",
                    "line": 531,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "2,483 (32 direct, 2,451 indirect) bytes in 1 blocks are definitely lost in loss record 452 of 456",
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
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/dfu/fu-dfu-device.c",
                    "line": 531,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/dfu/fu-dfu-self-test.c",
                    "line": 67,
                    "event": "note",
                    "message": "called from fu_dfu_target_dfuse_func()",
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
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/dfu/fu-dfu-self-test.c",
                    "line": 162,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|   \tFuDfuDevice *self;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|-> \tself = g_object_new (FU_TYPE_DFU_DEVICE,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|   \t\t\t     \"usb-device\", usb_device,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   \t\t\t     NULL);",
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
                    "file_name": "fwupd-1.6.4/redhat-linux-build/plugins/linux-swap/linux-swap-self-test",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 11629",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/linux-swap/fu-linux-swap.c",
                    "line": 96,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 bytes in 1 blocks are definitely lost in loss record 402 of 774",
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
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/libglib-2.0.so.0.7000.5",
                    "line": 0,
                    "event": "note",
                    "message": "called from g_slice_alloc0()",
                    "verbosity_level": 1
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
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/linux-swap/fu-linux-swap.c",
                    "line": 96,
                    "event": "note",
                    "message": "called from fu_linux_swap_new()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fwupd-1.6.4/redhat-linux-build/../plugins/linux-swap/fu-self-test.c",
                    "line": 32,
                    "event": "note",
                    "message": "called from fu_linux_swap_plain_func()",
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
                    "message": "   94|   fu_linux_swap_new (const gchar *buf, gsize bufsz, GError **error)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|-> \tFuLinuxSwap *self = g_object_new (FU_TYPE_LINUX_SWAP, NULL);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   \tg_auto(GStrv) lines = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
