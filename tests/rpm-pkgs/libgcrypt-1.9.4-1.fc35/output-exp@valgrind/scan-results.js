{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libgcrypt-1.9.4-1.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/valgrind/output",
        "time-created": "2022-11-23 23:25:00",
        "time-finished": "2022-11-23 23:33:57",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/libgcrypt-1.9.4-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
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
                    "message": "referencing argument 2 of type 'u32 *'",
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
                    "message": "referencing argument 2 of type 'u32 *'",
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
                    "message": "referencing argument 2 of type 'u32 *'",
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
                    "message": "referencing argument 1 of type 'u32 *'",
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
            "checker": "VALGRIND_WARNING",
            "tool": "valgrind",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "./mpitests",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 1259",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/src/global.c",
                    "line": 1027,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "32 (24 direct, 8 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 4",
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
                    "file_name": "libgcrypt-1.9.4/src/global.c",
                    "line": 1027,
                    "event": "note",
                    "message": "called from do_malloc.constprop.0.isra.0()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/src/global.c",
                    "line": 1049,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/src/global.c",
                    "line": 1223,
                    "event": "note",
                    "message": "called from _gcry_xmalloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/src/../mpi/mpiutil.c",
                    "line": 104,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/src/../mpi/mpiutil.c",
                    "line": 554,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/src/visibility.c",
                    "line": 308,
                    "event": "note",
                    "message": "called from gcry_mpi_set_ui()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/tests/mpitests.c",
                    "line": 82,
                    "event": "note",
                    "message": "called from UnknownInlinedFun()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/tests/mpitests.c",
                    "line": 600,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1025|   \tm = (*alloc_func) (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1026|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1027|-> \tm = _gcry_private_malloc (n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1028|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1029|   ",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
