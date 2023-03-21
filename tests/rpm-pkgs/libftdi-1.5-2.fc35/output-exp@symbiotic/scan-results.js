{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libftdi-1.5-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libftdi-1.5-2.fc35/symbiotic/output",
        "time-created": "2023-01-29 18:43:42",
        "time-finished": "2023-01-29 18:50:40",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libftdi-1.5-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libftdi-1.5-2.fc35/libftdi-1.5-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 149,
                    "column": 9,
                    "event": "warning[-Wsometimes-uninitialized]",
                    "message": "variable 'retval' is used uninitialized whenever 'if' condition is true",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (do_read) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 178,
                    "column": 12,
                    "event": "note",
                    "message": "uninitialized use occurs here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 149,
                    "column": 5,
                    "event": "note",
                    "message": "remove the 'if' if its condition is always false",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    if (do_read) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 33,
                    "column": 21,
                    "event": "note",
                    "message": "initialize the variable 'retval' to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    int i, f, retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|->     if (do_read) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|           int transfer = ftdi_transfer_data_done(tc_read);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|           if (transfer != DATA_TO_READ) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 158,
                    "column": 16,
                    "event": "warning[-Wsometimes-uninitialized]",
                    "message": "variable 'retval' is used uninitialized whenever 'while' loop exits because its condition is false",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        while (i--) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 178,
                    "column": 12,
                    "event": "note",
                    "message": "uninitialized use occurs here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 158,
                    "column": 16,
                    "event": "note",
                    "message": "remove the condition if it is always true",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        while (i--) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|           ftdi->usb_read_timeout = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|           int i = 1000; /* Fail if read did not succeed in 1 second.*/",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|->         while (i--) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|               int res = ftdi_read_data(ftdi, data + index, 3 - index);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|               if (res < 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 165,
                    "column": 17,
                    "event": "warning[-Wsometimes-uninitialized]",
                    "message": "variable 'retval' is used uninitialized whenever 'if' condition is true",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (res == 3) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 178,
                    "column": 12,
                    "event": "note",
                    "message": "uninitialized use occurs here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    return retval;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/examples/async.c",
                    "line": 165,
                    "column": 13,
                    "event": "note",
                    "message": "remove the 'if' if its condition is always false",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            if (res == 3) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|                   index += res;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|               }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|->             if (res == 3) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|                   break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 6905,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'ftdi_usb_purge_rx_buffer' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  result = (int)ftdi_usb_purge_rx_buffer(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 564,
                    "column": 9,
                    "event": "note",
                    "message": "'ftdi_usb_purge_rx_buffer' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    int DEPRECATED(ftdi_usb_purge_rx_buffer(struct ftdi_context *ftdi));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 247,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
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
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 6928,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'ftdi_usb_purge_tx_buffer' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  result = (int)ftdi_usb_purge_rx_buffer(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 565,
                    "column": 9,
                    "event": "note",
                    "message": "'ftdi_usb_purge_tx_buffer' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    int DEPRECATED(ftdi_usb_purge_rx_buffer(struct ftdi_context *ftdi));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": 42,
                    "line": 0,
                    "event": "note",
                    "message": "expanded from macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 247,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
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
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libftdi1-1.5/redhat-linux-build/python/CMakeFiles/_ftdi1.dir/ftdi1PYTHON_wrap.c",
                    "line": 6951,
                    "column": 17,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'ftdi_usb_purge_buffers' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  result = (int)ftdi_usb_purge_buffers(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 566,
                    "column": 9,
                    "event": "note",
                    "message": "'ftdi_usb_purge_buffers' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    int DEPRECATED(ftdi_usb_purge_buffers(struct ftdi_context *ftdi));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libftdi1-1.5/src/ftdi.h",
                    "line": 247,
                    "column": 42,
                    "event": "note",
                    "message": "expanded from macro 'DEPRECATED'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define DEPRECATED(func) __attribute__ ((deprecated)) func",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
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
