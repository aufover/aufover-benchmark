{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libmetalink-0.1.3-15.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmetalink-0.1.3-15.fc35/valgrind/output",
        "time-created": "2022-11-23 12:38:49",
        "time-finished": "2022-11-23 12:43:03",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmetalink-0.1.3-15.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmetalink-0.1.3-15.fc35/libmetalink-0.1.3-15.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_helper_test.c",
                    "line": 80,
                    "column": 13,
                    "event": "warning[-Wunused-function]",
                    "message": "'format_version' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | static void format_version(char* buf, size_t len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|-> static void format_version(char* buf, size_t len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|                              int major, int minor, int patch)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_metalink_parse_memory'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 233,
                    "column": 5,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'while' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233 |     while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 234,
                    "column": 5,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'while'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234 |     CU_ASSERT_FATAL(nread != -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~",
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
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_metalink_parse_update'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 259,
                    "column": 5,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'while' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259 |     while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 260,
                    "column": 5,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'while'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260 |     CU_ASSERT_FATAL(nread != -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~",
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
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_metalink_parse_update_fail'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 300,
                    "column": 5,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'while' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300 |     while((nread = read(fd, buf, sizeof(buf))) == -1 && errno == EINTR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 29,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libmetalink-0.1.3/test/metalink_parser_test.c",
                    "line": 301,
                    "column": 5,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'while'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301 |     CU_ASSERT_FATAL(nread != -1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~",
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
