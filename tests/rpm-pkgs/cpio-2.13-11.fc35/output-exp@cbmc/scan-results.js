{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "cpio-2.13-11.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/cpio-2.13-11.fc35/cbmc/output",
        "time-created": "2023-01-27 01:22:06",
        "time-finished": "2023-01-27 01:34:38",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/cpio-2.13-11.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/cpio-2.13-11.fc35/cpio-2.13-11.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "cpio-2.13/gnu/argp-pin.c",
                    "line": 27,
                    "event": "warning[-Wpedantic]",
                    "message": "ISO C forbids an empty translation unit",
                    "verbosity_level": 0
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   25|   char *program_invocation_name = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   #endif",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fdutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 296,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296 |       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 296,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec **'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 131,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  294|             && (fd < 0 ? stat (file, &st) : fstat (fd, &st)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  295|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  296|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lutimens'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 507,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'update_timespec' accessing 16 bytes in a region of size 8",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507 |       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 507,
                    "column": 17,
                    "event": "note",
                    "message": "referencing argument 2 of type 'struct timespec **'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 131,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function 'update_timespec'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131 | update_timespec (struct stat const *statbuf, struct timespec *ts[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/gnu/utimens.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|         if (adjustment_needed != 3 && lstat (file, &st))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|           return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|->       if (ts && update_timespec (&st, &ts))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|           return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 681,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cpio-2.13/lib/rtapelib.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'rmt_ioctl__'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/lib/rtapelib.c",
                    "line": 703,
                    "column": 5,
                    "event": "warning[-Woverflow]",
                    "message": "overflow in conversion from 'long unsigned int' to 'int' changes value from '2150657282' to '-2144310014'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  703 |     case MTIOCGET:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/lib/rtapelib.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  701|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  702|   #ifdef MTIOCGET",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  703|->     case MTIOCGET:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  704|         {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  705|   \tssize_t status;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "cpio-2.13/src/tar.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'write_out_tar_header'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/src/tar.c",
                    "line": 215,
                    "column": 7,
                    "event": "warning[-Wstringop-truncation]",
                    "message": "'strncpy' output truncated before terminating nul copying 2 bytes from a string of the same length",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215 |       strncpy (tar_hdr->version, TVERSION, TVERSLEN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/src/tar.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  214|         strncpy (tar_hdr->magic, TMAGIC, TMAGLEN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  215|->       strncpy (tar_hdr->version, TVERSION, TVERSLEN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  216|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|         name = getuser (file_hdr->c_uid);",
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
                    "file_name": "cpio-2.13/tests/genfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'generate_sparse_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/tests/genfile.c",
                    "line": 560,
                    "column": 7,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'i'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560 |   int i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cpio-2.13/tests/genfile.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "At top level",
                    "verbosity_level": 1
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|   generate_sparse_file (int argc, char **argv)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|->   int i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  561|     int fd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  562|     int flags = O_CREAT | O_RDWR | O_BINARY;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
