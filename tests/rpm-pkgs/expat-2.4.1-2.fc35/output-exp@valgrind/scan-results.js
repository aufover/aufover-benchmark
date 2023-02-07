{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "expat-2.4.1-2.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/expat-2.4.1-2.fc35/valgrind/output",
        "time-created": "2022-11-23 16:20:02",
        "time-finished": "2022-11-23 16:25:35",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/expat-2.4.1-2.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/expat-2.4.1-2.fc35/expat-2.4.1-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok.c",
                    "line": 57,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok_ns.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'findEncodingNS'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok.h",
                    "line": 276,
                    "column": 10,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'buf' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276 |   (((enc)->utf8Convert)(enc, fromP, fromLim, toP, toLim))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok.h",
                    "line": 276,
                    "column": 10,
                    "event": "note",
                    "message": "by argument 5 of type 'const char *' to 'XML_Convert_Result <T6d5> (const struct ENCODING *, const char * *, const char *, char * *, const char *)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok.c",
                    "line": 1665,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok_ns.c",
                    "line": 96,
                    "column": 8,
                    "event": "note",
                    "message": "'buf' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |   char buf[ENCODING_MAX];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|   #define XmlUtf8Convert(enc, fromP, fromLim, toP, toLim)                        \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|->   (((enc)->utf8Convert)(enc, fromP, fromLim, toP, toLim))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|   #define XmlUtf16Convert(enc, fromP, fromLim, toP, toLim)                       \\",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok_ns.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'findEncoding'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok_ns.c",
                    "line": 99,
                    "column": 3,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'buf' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99 |   XmlUtf8Convert(enc, &ptr, end, &p, p + ENCODING_MAX - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok_ns.c",
                    "line": 99,
                    "column": 3,
                    "event": "note",
                    "message": "by argument 5 of type 'const char *' to 'XML_Convert_Result <T662> (const struct ENCODING *, const char * *, const char *, char * *, const char *)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/lib/xmltok_ns.c",
                    "line": 96,
                    "column": 8,
                    "event": "note",
                    "message": "'buf' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96 |   char buf[ENCODING_MAX];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|     char *p = buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   98|     int i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|->   XmlUtf8Convert(enc, &ptr, end, &p, p + ENCODING_MAX - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|     if (ptr != end)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|       return 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libexpat-R_2_4_1/expat/tests/runtests.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_reset_in_entity'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/tests/runtests.c",
                    "line": 2940,
                    "column": 6,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'MEM <unsigned int> [(struct  *)&status]' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2940 |   if (status.parsing != XML_SUSPENDED)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/tests/runtests.c",
                    "line": 2932,
                    "column": 21,
                    "event": "note",
                    "message": "'MEM <unsigned int> [(struct  *)&status]' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2932 |   XML_ParsingStatus status;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2938|       xml_failure(g_parser);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2939|     XML_GetParsingStatus(g_parser, &status);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2940|->   if (status.parsing != XML_SUSPENDED)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2941|       fail(\"Parsing status not SUSPENDED\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2942|     XML_ParserReset(g_parser, NULL);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libexpat-R_2_4_1/expat/tests/runtests.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_ns_parser_reset'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/tests/runtests.c",
                    "line": 6852,
                    "column": 6,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'MEM <unsigned int> [(struct  *)&status]' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6852 |   if (status.parsing != XML_INITIALIZED)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libexpat-R_2_4_1/expat/tests/runtests.c",
                    "line": 6849,
                    "column": 21,
                    "event": "note",
                    "message": "'MEM <unsigned int> [(struct  *)&status]' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6849 |   XML_ParsingStatus status;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6850|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6851|     XML_GetParsingStatus(g_parser, &status);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6852|->   if (status.parsing != XML_INITIALIZED)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6853|       fail(\"parsing status doesn't start INITIALIZED\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6854|     test_return_ns_triplet();",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
