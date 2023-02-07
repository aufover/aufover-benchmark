{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libmetalink-0.1.3-15.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmetalink-0.1.3-15.fc35/symbiotic/output",
        "time-created": "2023-01-29 19:07:30",
        "time-finished": "2023-01-29 19:12:10",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmetalink-0.1.3-15.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmetalink-0.1.3-15.fc35/libmetalink-0.1.3-15.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1071,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 233,
                    "column": 72,
                    "event": "warning[-Wempty-body]",
                    "message": "while loop has empty body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 233,
                    "column": 72,
                    "event": "note",
                    "message": "put the semicolon on a separate line to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|       char buf[4096];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|       ssize_t nread;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|->     while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|       CU_ASSERT_FATAL(nread != -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|       if(nread == 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1071,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 259,
                    "column": 72,
                    "event": "warning[-Wempty-body]",
                    "message": "while loop has empty body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 259,
                    "column": 72,
                    "event": "note",
                    "message": "put the semicolon on a separate line to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  257|       char buf[4096];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  258|       ssize_t nread;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|->     while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|       CU_ASSERT_FATAL(nread != -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|       if(nread == 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1071,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 300,
                    "column": 72,
                    "event": "warning[-Wempty-body]",
                    "message": "while loop has empty body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 300,
                    "column": 72,
                    "event": "note",
                    "message": "put the semicolon on a separate line to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|       char buf[128];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|       ssize_t nread;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|->     while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       CU_ASSERT_FATAL(nread != -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|       /* See when prematured XML data is supplied */",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
