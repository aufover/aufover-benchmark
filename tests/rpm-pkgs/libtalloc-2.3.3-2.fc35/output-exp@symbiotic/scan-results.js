{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libtalloc-2.3.3-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtalloc-2.3.3-2.fc35/symbiotic/output",
        "time-created": "2023-01-30 07:31:44",
        "time-finished": "2023-01-30 07:39:25",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtalloc-2.3.3-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libtalloc-2.3.3-2.fc35/libtalloc-2.3.3-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1282,
                    "column": 6,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_autofree_context' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        p = talloc_autofree_context();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1071,
                    "column": 46,
                    "event": "note",
                    "message": "'talloc_autofree_context' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ void *talloc_autofree_context(void) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1280|   \tprintf(\"test: autofree\\n# TALLOC AUTOFREE CONTEXT\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1281|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1282|-> \tp = talloc_autofree_context();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1283|   \ttalloc_free(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1284|   ",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1285,
                    "column": 6,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_autofree_context' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        p = talloc_autofree_context();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1071,
                    "column": 46,
                    "event": "note",
                    "message": "'talloc_autofree_context' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ void *talloc_autofree_context(void) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1283|   \ttalloc_free(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1284|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1285|-> \tp = talloc_autofree_context();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1286|   \ttalloc_free(p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1287|   ",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1628,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        torture_assert(\"memlimit\", talloc_set_memlimit(l1, 2048) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1626|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1627|   \tprintf(\"==== talloc_set_memlimit(l1, 2048)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1628|-> \ttorture_assert(\"memlimit\", talloc_set_memlimit(l1, 2048) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1629|   \t\t\"failed: setting memlimit should never fail\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1630|   ",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1688,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        torture_assert(\"memlimit\", talloc_set_memlimit(l3, 1024) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1686|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1687|   \tprintf(\"==== talloc_set_memlimit(l3, 1024)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1688|-> \ttorture_assert(\"memlimit\", talloc_set_memlimit(l3, 1024) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1689|   \t\t\"failed: setting memlimit should never fail\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1690|   ",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1701,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        torture_assert(\"memlimit\", talloc_set_memlimit(l4, 512) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1699|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1700|   \tprintf(\"==== talloc_set_memlimit(l4, 512)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1701|-> \ttorture_assert(\"memlimit\", talloc_set_memlimit(l4, 512) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1702|   \t\t\"failed: setting memlimit should never fail\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1703|   ",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1735,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        torture_assert(\"memlimit\", talloc_set_memlimit(l4, 512) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1733|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1734|   \tprintf(\"==== talloc_set_memlimit(l4, 512)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1735|-> \ttorture_assert(\"memlimit\", talloc_set_memlimit(l4, 512) == 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1736|   \t\t\"failed: setting memlimit should never fail\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1737|   ",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1768,
                    "column": 2,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        talloc_set_memlimit(pool, 10*1024);",
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
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1766|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1767|   \tprintf(\"==== talloc_set_memlimit(pool, 10*1024)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1768|-> \ttalloc_set_memlimit(pool, 10*1024);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1769|   \tfor (i = 0; i < 9; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1770|   \t\tprintf(\"==== talloc_size(pool, 1024) %i/10\\n\", i + 1);",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1821,
                    "column": 2,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        talloc_set_memlimit(pool, 11*1024);",
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
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1819|   \t/* Increase the memlimit */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1820|   \tprintf(\"==== talloc_set_memlimit(pool, 11*1024)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1821|-> \ttalloc_set_memlimit(pool, 11*1024);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1822|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1823|   \t/* The final realloc should still fail",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1833,
                    "column": 2,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        talloc_set_memlimit(pool, 21*1024);",
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
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1831|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1832|   \tprintf(\"==== talloc_set_memlimit(pool, 21*1024)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1833|-> \ttalloc_set_memlimit(pool, 21*1024);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1834|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1835|   \t/* There's now sufficient space to move the chunk out of the pool */",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1871,
                    "column": 2,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        talloc_set_memlimit(pool, 1024);",
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
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1869|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1870|   \tprintf(\"==== talloc_set_memlimit(pool, 1024)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1871|-> \ttalloc_set_memlimit(pool, 1024);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1872|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1873|   \t/* We should still be able to allocate up to the pool limit",
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
                    "file_name": "talloc-2.3.3/testsuite.c",
                    "line": 1892,
                    "column": 2,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'talloc_set_memlimit' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        talloc_set_memlimit(pool, 10*1024);",
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
                    "file_name": "talloc-2.3.3/talloc.h",
                    "line": 1937,
                    "column": 68,
                    "event": "note",
                    "message": "'talloc_set_memlimit' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "_PUBLIC_ int talloc_set_memlimit(const void *ctx, size_t max_size) _DEPRECATED_;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                   ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "talloc-2.3.3/lib/replace/replace.h",
                    "line": 469,
                    "column": 38,
                    "event": "note",
                    "message": "expanded from macro '_DEPRECATED_'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define _DEPRECATED_ __attribute__ ((deprecated))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1890|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1891|   \tprintf(\"==== talloc_set_memlimit(pool, 10*1024)\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1892|-> \ttalloc_set_memlimit(pool, 10*1024);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1893|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1894|   \tprintf(\"==== talloc_size(pool, 1024)\\n\");",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
