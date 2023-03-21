{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "volume_key-0.3.12-14.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/volume_key-0.3.12-14.fc35/symbiotic/output",
        "time-created": "2023-01-29 21:23:06",
        "time-finished": "2023-01-29 21:28:31",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/volume_key-0.3.12-14.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/volume_key-0.3.12-14.fc35/volume_key-0.3.12-14.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 192,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  res = g_memdup (dest_item.data, dest_item.len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|     *res_size = dest_item.len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|->   res = g_memdup (dest_item.data, dest_item.len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|     PORT_FreeArena (res_arena, PR_FALSE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  194|     NSS_CMSMessage_Destroy (cmsg);",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 237,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  res = g_memdup (dest->data, dest->len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|         goto err_cmsg;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  236|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  237|->   res = g_memdup (dest->data, dest->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  238|     *res_size = dest->len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  239|   ",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 343,
                    "column": 21,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *wrapped_secret = g_memdup (wrapped_secret_item.data,",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|     PK11_FreeSymKey (secret_key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|->   *wrapped_secret = g_memdup (wrapped_secret_item.data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   \t\t\t      wrapped_secret_item.len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|     *wrapped_secret_size = wrapped_secret_item.len;",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 347,
                    "column": 13,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *issuer = g_memdup (isn->derIssuer.data, isn->derIssuer.len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|     *wrapped_secret_size = wrapped_secret_item.len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|     SECITEM_FreeItem (&wrapped_secret_item, PR_FALSE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|->   *issuer = g_memdup (isn->derIssuer.data, isn->derIssuer.len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|     *issuer_size = isn->derIssuer.len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|     *sn = g_memdup (isn->serialNumber.data, isn->serialNumber.len);",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 349,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *sn = g_memdup (isn->serialNumber.data, isn->serialNumber.len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|     *issuer = g_memdup (isn->derIssuer.data, isn->derIssuer.len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|     *issuer_size = isn->derIssuer.len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|->   *sn = g_memdup (isn->serialNumber.data, isn->serialNumber.len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|     *sn_size = isn->serialNumber.len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|     PORT_FreeArena (isn_arena, PR_FALSE);",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 432,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ret = g_memdup (clear_secret_item->data, clear_secret_item->len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|     clear_secret_item = PK11_GetKeyData (secret_key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|->   ret = g_memdup (clear_secret_item->data, clear_secret_item->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|     *clear_secret_size = clear_secret_item->len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|     PK11_FreeSymKey (secret_key);",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 506,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *iv = g_memdup (iv_data, iv_data_size);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|     iv_data = PK11_IVFromParam (mechanism, wrapping_param, &iv_data_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|->   *iv = g_memdup (iv_data, iv_data_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|     *iv_size = iv_data_size;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|     SECITEM_FreeItem (wrapping_param, PR_TRUE);",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 510,
                    "column": 21,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *wrapped_secret = g_memdup (wrapped_secret_item.data,",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|     SECITEM_FreeItem (wrapping_param, PR_TRUE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  509|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|->   *wrapped_secret = g_memdup (wrapped_secret_item.data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|   \t\t\t      wrapped_secret_item.len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|     *wrapped_secret_size = wrapped_secret_item.len;",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 565,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ret = g_memdup (clear_secret_item->data, clear_secret_item->len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  563|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  564|     clear_secret_item = PK11_GetKeyData (secret_key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  565|->   ret = g_memdup (clear_secret_item->data, clear_secret_item->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  566|     *clear_secret_size = clear_secret_item->len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|     PK11_FreeSymKey (secret_key);",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 721,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  res = g_memdup (gpgme_res, *res_size);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  719|         goto err_ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  720|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  721|->   res = g_memdup (gpgme_res, *res_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|     gpgme_free (gpgme_res);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|   ",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 777,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  res = g_memdup (gpgme_res, *res_size);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  775|         goto err_ctx;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  776|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  777|->   res = g_memdup (gpgme_res, *res_size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  778|     gpgme_free (gpgme_res);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779|   ",
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
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 101,
                    "column": 25,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  value->v.bytes.data = g_memdup (bytes, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   99|     kmip_key_value_free_v (value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  100|     value->type = KMIP_KEY_VALUE_BYTES;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  101|->   value->v.bytes.data = g_memdup (bytes, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102|     value->v.bytes.len = len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  103|   }",
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
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 113,
                    "column": 24,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  value->v.key->data = g_memdup (key, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|     value->type = KMIP_KEY_VALUE_SYMMETRIC_KEY;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|     value->v.key = g_new (struct kmip_symmetric_key, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|->   value->v.key->data = g_memdup (key, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|     value->v.key->len = len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|   }",
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
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 923,
                    "column": 12,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *bytes = g_memdup (kmip->data, s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  921|         return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  922|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  923|->   *bytes = g_memdup (kmip->data, s);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  924|     *size = s;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  925|     kmip->data += s;",
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
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 1887,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  key_block->wrapping->iv = g_memdup (iv, iv_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1885|     key_block->wrapping->method = KMIP_WRAPPING_LIBVK_ENCRYPT_KEY_ONLY;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1886|     key_block->wrapping->encryption_key = encryption_key;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1887|->   key_block->wrapping->iv = g_memdup (iv, iv_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1888|     key_block->wrapping->iv_len = iv_len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1889|   ",
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
                    "file_name": "volume_key-0.3.12/lib/volume.c",
                    "line": 86,
                    "column": 28,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  key_value->v.key->data = g_memdup (key, key_bytes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     key_value->type = KMIP_KEY_VALUE_SYMMETRIC_KEY;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|     key_value->v.key = g_new (struct kmip_symmetric_key, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|->   key_value->v.key->data = g_memdup (key, key_bytes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|     key_value->v.key->len = key_bytes;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|     key_value->attributes = g_ptr_array_new ();",
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
                    "file_name": "volume_key-0.3.12/lib/volume.c",
                    "line": 132,
                    "column": 29,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  key_value->v.bytes.data = g_memdup (passphrase, size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|     key_value = g_new (struct kmip_key_value, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|     key_value->type = KMIP_KEY_VALUE_BYTES;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|->   key_value->v.bytes.data = g_memdup (passphrase, size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|     key_value->v.bytes.len = size;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|     key_value->attributes = g_ptr_array_new ();",
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
                    "file_name": "volume_key-0.3.12/lib/volume_luks.c",
                    "line": 157,
                    "column": 15,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  luks->key = g_memdup (key, luks->key_bytes);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "              ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|         g_free (luks->key);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|->   luks->key = g_memdup (key, luks->key_bytes);",
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
                    "message": "  159|   ",
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
                    "file_name": "volume_key-0.3.12/lib/volume_luks.c",
                    "line": 794,
                    "column": 23,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          vol->v.luks->key = g_memdup (key_value->v.key->data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  792|   \t      goto err;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  793|   \t    }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  794|-> \t  vol->v.luks->key = g_memdup (key_value->v.key->data,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  795|   \t\t\t\t       key_value->v.key->len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  796|   \t}",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 909,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 1982,
                    "column": 5,
                    "event": "warning[-Wmissing-field-initializers]",
                    "message": "missing field 'tp_vectorcall' initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1980|         0                                     /* tp_next */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1981|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1982|->     };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1983|       swigpyobject_type = tmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1984|       type_init = 1;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 909,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 2169,
                    "column": 5,
                    "event": "warning[-Wmissing-field-initializers]",
                    "message": "missing field 'tp_vectorcall' initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2167|         0                                     /* tp_next */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2168|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2169|->     };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2170|       swigpypacked_type = tmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2171|       type_init = 1;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 694,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 2483,
                    "column": 65,
                    "event": "warning[-Wshadow]",
                    "message": "declaration shadows a variable in the global scope",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "SWIG_Python_NewShadowInstance(SwigPyClientData *data, PyObject *swig_this)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 2224,
                    "column": 18,
                    "event": "note",
                    "message": "previous declaration is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static PyObject *swig_this = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2481|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2482|   SWIGRUNTIME PyObject* ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2483|-> SWIG_Python_NewShadowInstance(SwigPyClientData *data, PyObject *swig_this)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2484|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2485|   #if (PY_VERSION_HEX >= 0x02020000)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 694,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 2558,
                    "column": 51,
                    "event": "warning[-Wshadow]",
                    "message": "declaration shadows a variable in the global scope",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "SWIG_Python_SetSwigThis(PyObject *inst, PyObject *swig_this)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 2224,
                    "column": 18,
                    "event": "note",
                    "message": "previous declaration is here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "static PyObject *swig_this = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2556|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2557|   SWIGRUNTIME void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2558|-> SWIG_Python_SetSwigThis(PyObject *inst, PyObject *swig_this)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2559|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2560|    PyObject *dict;",
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
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 2998,
                    "column": 11,
                    "event": "warning[-Wincompatible-pointer-types-discards-qualifiers]",
                    "message": "assigning to 'char *' from 'const char *' discards qualifiers",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  *buffer = b;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "          ^ ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2996|     if (b == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2997|       return -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2998|->   *buffer = b;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2999|     return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3000|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 909,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/python/python3/volume_key_wrap.c",
                    "line": 5893,
                    "column": 7,
                    "event": "warning[-Wmissing-field-initializers]",
                    "message": "missing field 'tp_vectorcall' initializer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5891|           0                                   /* tp_next */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5892|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5893|->       };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5894|         varlink_type = tmp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 5895|         type_init = 1;",
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
                    "file_name": "volume_key-0.3.12/src/volume_key.c",
                    "line": 390,
                    "column": 9,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  res = g_memdup (buf, len);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|         return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  390|->   res = g_memdup (buf, len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|     free (buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|     return res;",
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
                    "file_name": "volume_key-0.3.12/src/volume_key.c",
                    "line": 529,
                    "column": 13,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'g_memdup' is deprecated: Use 'g_memdup2' instead",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      res = g_memdup (buf, len + 1);",
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
                    "file_name": "/usr/include/glib-2.0/glib/gstrfuncs.h",
                    "line": 256,
                    "column": 1,
                    "event": "note",
                    "message": "'g_memdup' has been explicitly marked deprecated here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "GLIB_DEPRECATED_IN_2_68_FOR (g_memdup2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gversionmacros.h",
                    "line": 1057,
                    "column": 49,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_IN_2_68_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# define GLIB_DEPRECATED_IN_2_68_FOR(f)         GLIB_DEPRECATED_FOR(f)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1144,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GLIB_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GLIB_DEPRECATED_FOR(f) G_DEPRECATED_FOR(f) _GLIB_EXTERN",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                               ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/glib-2.0/glib/gmacros.h",
                    "line": 1112,
                    "column": 44,
                    "event": "note",
                    "message": "expanded from macro 'G_DEPRECATED_FOR'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define G_DEPRECATED_FOR(f) __attribute__((__deprecated__(\"Use '\" #f \"' instead\")))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  527|   \t  return NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  528|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|->       res = g_memdup (buf, len + 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|         free (buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|         return res;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
