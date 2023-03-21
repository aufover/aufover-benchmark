{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libftdi-1.5-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libftdi-1.5-2.fc35/valgrind/output",
        "time-created": "2022-11-23 12:19:18",
        "time-finished": "2022-11-23 12:26:00",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libftdi-1.5-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libftdi-1.5-2.fc35/libftdi-1.5-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "libftdi1-1.5/examples/bitbang_cbus.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'main'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/bitbang_cbus.c",
                    "line": 63,
                    "column": 9,
                    "event": "warning[-Wunused-result]",
                    "message": "ignoring return value of 'fgets' declared with attribute 'warn_unused_result'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 |         fgets(input, sizeof(input) - 1, stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|           // Set bitmask from input",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|->         fgets(input, sizeof(input) - 1, stdin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|           if (input[0] == '\\n') break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|           bitmask = strtol(input, NULL, 0);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_wrap_usb_purge_rx_buffer'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 6905,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'ftdi_usb_purge_rx_buffer' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6905 |   result = (int)ftdi_usb_purge_rx_buffer(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 3192,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 564,
                    "column": 20,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564 |     int DEPRECATED(ftdi_usb_purge_rx_buffer(struct ftdi_context *ftdi));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 247,
                    "column": 55,
                    "event": "note",
                    "message": "in definition of macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 | #define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6903|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6904|     arg1 = (struct ftdi_context *)(argp1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6905|->   result = (int)ftdi_usb_purge_rx_buffer(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6906|     resultobj = SWIG_From_int((int)(result));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6907|     return resultobj;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_wrap_usb_purge_tx_buffer'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 6928,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'ftdi_usb_purge_tx_buffer' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6928 |   result = (int)ftdi_usb_purge_tx_buffer(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 3192,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 565,
                    "column": 20,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565 |     int DEPRECATED(ftdi_usb_purge_tx_buffer(struct ftdi_context *ftdi));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 247,
                    "column": 55,
                    "event": "note",
                    "message": "in definition of macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 | #define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6926|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6927|     arg1 = (struct ftdi_context *)(argp1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6928|->   result = (int)ftdi_usb_purge_tx_buffer(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6929|     resultobj = SWIG_From_int((int)(result));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6930|     return resultobj;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_wrap_usb_purge_buffers'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 6951,
                    "column": 3,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'ftdi_usb_purge_buffers' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6951 |   result = (int)ftdi_usb_purge_buffers(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 3192,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 566,
                    "column": 20,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566 |     int DEPRECATED(ftdi_usb_purge_buffers(struct ftdi_context *ftdi));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                    ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 247,
                    "column": 55,
                    "event": "note",
                    "message": "in definition of macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247 | #define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                       ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6949|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6950|     arg1 = (struct ftdi_context *)(argp1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6951|->   result = (int)ftdi_usb_purge_buffers(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6952|     resultobj = SWIG_From_int((int)(result));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6953|     return resultobj;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
