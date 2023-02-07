{
    "scan": {
        "analyzer-version-divine": "4.4.2_4_gd47985e0b",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "divine, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "volume_key-0.3.12-14.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/volume_key-0.3.12-14.fc35/divine/output",
        "time-created": "2023-01-26 11:08:49",
        "time-finished": "2023-01-26 11:14:20",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/volume_key-0.3.12-14.fc35/divine/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/volume_key-0.3.12-14.fc35/volume_key-0.3.12-14.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'divine' '--divine-timeout=8' '--keep-going'",
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
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 192,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 237,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 343,
                    "column": 21,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 347,
                    "column": 13,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 349,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 432,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 506,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 510,
                    "column": 21,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 565,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 721,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/crypto.c",
                    "line": 777,
                    "column": 9,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 101,
                    "column": 25,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 113,
                    "column": 24,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 923,
                    "column": 12,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 1887,
                    "column": 29,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/kmip.c",
                    "line": 2150,
                    "column": 6,
                    "event": "warning",
                    "message": "implicit declaration of function 'ctime_r' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (ctime_r (&t, buf) == NULL)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2148|   \t    return consumed;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2149|   \t  }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2150|-> \tif (ctime_r (&t, buf) == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2151|   \t  {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2152|   \t    fprintf (file, \"ERROR: ctime_r failed\\n\");",
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
                    "file_name": "volume_key-0.3.12/lib/libvolume_key.c",
                    "line": 32,
                    "column": 3,
                    "event": "warning",
                    "message": "implicit declaration of function 'bindtextdomain' is invalid in C99",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  bindtextdomain (PACKAGE_NAME, LOCALEDIR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|   libvk_init (void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   31|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|->   bindtextdomain (PACKAGE_NAME, LOCALEDIR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
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
                    "file_name": "volume_key-0.3.12/lib/volume.c",
                    "line": 86,
                    "column": 28,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/volume.c",
                    "line": 132,
                    "column": 29,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/volume_luks.c",
                    "line": 157,
                    "column": 15,
                    "event": "warning",
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
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "volume_key-0.3.12/lib/volume_luks.c",
                    "line": 794,
                    "column": 23,
                    "event": "warning",
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
        }
    ]
}
