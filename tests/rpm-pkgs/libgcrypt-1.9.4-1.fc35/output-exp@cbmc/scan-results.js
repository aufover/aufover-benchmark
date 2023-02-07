{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libgcrypt-1.9.4-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/cbmc/output",
        "time-created": "2023-01-27 06:08:08",
        "time-finished": "2023-01-27 06:29:46",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/libgcrypt-1.9.4-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_sha256_transform_amd64_ssse3'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 157,
                    "column": 10,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'_gcry_sha256_transform_amd64_ssse3' accessing 32 bytes in a region of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157 |          + ASM_EXTRA_STACK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 157,
                    "column": 10,
                    "event": "note",
                    "message": "referencing argument 2 of type 'u32 *' {aka 'unsigned int *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 147,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to function '_gcry_sha256_transform_amd64_ssse3'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147 | unsigned int _gcry_sha256_transform_amd64_ssse3(const void *input_data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|     SHA256_CONTEXT *hd = ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|     return _gcry_sha256_transform_amd64_ssse3 (data, &hd->h0, nblks)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|->          + ASM_EXTRA_STACK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   #endif",
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
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_sha256_transform_amd64_avx'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 172,
                    "column": 10,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'_gcry_sha256_transform_amd64_avx' accessing 32 bytes in a region of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172 |          + ASM_EXTRA_STACK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 172,
                    "column": 10,
                    "event": "note",
                    "message": "referencing argument 2 of type 'u32 *' {aka 'unsigned int *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 162,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to function '_gcry_sha256_transform_amd64_avx'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162 | unsigned int _gcry_sha256_transform_amd64_avx(const void *input_data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|     SHA256_CONTEXT *hd = ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  171|     return _gcry_sha256_transform_amd64_avx (data, &hd->h0, nblks)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172|->          + ASM_EXTRA_STACK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|   #endif",
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
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_sha256_transform_amd64_avx2'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 187,
                    "column": 10,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'_gcry_sha256_transform_amd64_avx2' accessing 32 bytes in a region of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187 |          + ASM_EXTRA_STACK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 187,
                    "column": 10,
                    "event": "note",
                    "message": "referencing argument 2 of type 'u32 *' {aka 'unsigned int *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 177,
                    "column": 14,
                    "event": "note",
                    "message": "in a call to function '_gcry_sha256_transform_amd64_avx2'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177 | unsigned int _gcry_sha256_transform_amd64_avx2(const void *input_data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  185|     SHA256_CONTEXT *hd = ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  186|     return _gcry_sha256_transform_amd64_avx2 (data, &hd->h0, nblks)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|->          + ASM_EXTRA_STACK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   #endif",
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
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'do_sha256_transform_intel_shaext'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 203,
                    "column": 10,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "'_gcry_sha256_transform_intel_shaext' accessing 32 bytes in a region of size 4",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203 |   return _gcry_sha256_transform_intel_shaext (&hd->h0, data, nblks);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 203,
                    "column": 10,
                    "event": "note",
                    "message": "referencing argument 1 of type 'u32 *' {aka 'unsigned int *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
                    "line": 194,
                    "column": 1,
                    "event": "note",
                    "message": "in a call to function '_gcry_sha256_transform_intel_shaext'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194 | _gcry_sha256_transform_intel_shaext(u32 state[8],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/cipher/sha256.c",
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
                    "message": "  201|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|     SHA256_CONTEXT *hd = ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|->   return _gcry_sha256_transform_intel_shaext (&hd->h0, data, nblks);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|   #endif",
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
                    "file_name": "libgcrypt-1.9.4/tests/fipsdrv.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'print_mpi_line'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/tests/fipsdrv.c",
                    "line": 860,
                    "column": 8,
                    "event": "warning[-Wsequence-point]",
                    "message": "operation on 'p' may be undefined",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860 |      *p++ = tolower(*p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ~^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/tests/fipsdrv.c",
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
                    "message": "  858|     p = buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|     while (*p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860|->      *p++ = tolower(*p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|     p = buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  862|     if (no_lz && p[0] == '0' && p[1] == '0' && p[2])",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
