{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gzip-1.10-5.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir/rpm-pkgs/gzip-1.10-5.fc35/divine/output",
        "time-created": "2021-11-27 12:04:14",
        "time-finished": "2021-11-27 12:36:03",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir/rpm-pkgs/gzip-1.10-5.fc35/divine/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir/rpm-pkgs/gzip-1.10-5.fc35/gzip-1.10-5.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211126.090206.ga7412e7-1.fc34"
    },
    "defects": [
        {
            "checker": "DIVINE_WARNING",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'remove_output_file':",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 2120,
                    "event": "note",
                    "message": "",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 2120,
                    "event": "note",
                    "message": "gzip: stdin: unexpected end of file",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 2120,
                    "event": "error",
                    "message": "libc stubs",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 2120,
                    "event": "note",
                    "message": "not implemented in userspace",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/divine/include/dios/sys/fault.hpp",
                    "line": 119,
                    "event": "note",
                    "message": "void __dios::FaultBase::handler<__dios::Context>(_VM_Fault, _VM_Frame*, void (*)())",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/divine/include/dios/arch/divm/fault.c",
                    "line": 12,
                    "event": "note",
                    "message": "__dios_fault",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "/opt/divine/include/dios/libc/_PDCLIB/stubs.cpp",
                    "line": 90,
                    "event": "note",
                    "message": "sigprocmask",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 2120,
                    "event": "note",
                    "message": "remove_output_file",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 2140,
                    "event": "note",
                    "message": "abort_gzip",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/util.c",
                    "line": 444,
                    "event": "note",
                    "message": "read_error",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/util.c",
                    "line": 182,
                    "event": "note",
                    "message": "fill_inbuf",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 1507,
                    "event": "note",
                    "message": "get_method",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 779,
                    "event": "note",
                    "message": "treat_stdin",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "gzip-1.10/gzip.c",
                    "line": 660,
                    "event": "note",
                    "message": "main",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2118|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2119|     if (!signals_already_blocked)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2120|->     sigprocmask (SIG_BLOCK, &caught_signals, &oldset);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2121|     fd = remove_ofname_fd;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2122|     if (0 <= fd)",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gzip-1.10/lib/strerror_r.c",
                    "line": 204,
                    "column": 9,
                    "event": "warning",
                    "message": "incompatible pointer to integer conversion assigning to 'int' from 'char *'",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ret = strerror_r (errnum, buf, buflen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ^ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|       }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|   # else",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|->     ret = strerror_r (errnum, buf, buflen);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  206|       /* Some old implementations may return (-1, EINVAL) instead of EINVAL.",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gzip-1.10/lib/strerror_r.c",
                    "line": 241,
                    "column": 60,
                    "event": "warning",
                    "message": "comparison between pointer and integer ('char *' and 'int')",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (strerror_r (errnum, stackbuf, sizeof stackbuf) == ERANGE)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ^  ~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  240|           /* STACKBUF_LEN should have been large enough.  */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|->         if (strerror_r (errnum, stackbuf, sizeof stackbuf) == ERANGE)",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|             abort ();",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|           safe_copy (buf, buflen, stackbuf);",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
