{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gpgme-1.15.1-4.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gpgme-1.15.1-4.fc35/valgrind/output",
        "time-created": "2022-11-23 23:48:45",
        "time-finished": "2022-11-23 23:59:48",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gpgme-1.15.1-4.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gpgme-1.15.1-4.fc35/gpgme-1.15.1-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3361,
                    "column": 23,
                    "event": "warning[-Wstrict-prototypes]",
                    "message": "function declaration isn’t a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3361 |   static gpgme_ctx_t *new_gpgme_ctx_t_p() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3359|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3360|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3361|->   static gpgme_ctx_t *new_gpgme_ctx_t_p() { ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3362|       return (gpgme_ctx_t *)calloc(1,sizeof(gpgme_ctx_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3363|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3382,
                    "column": 24,
                    "event": "warning[-Wstrict-prototypes]",
                    "message": "function declaration isn’t a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3382 |   static gpgme_data_t *new_gpgme_data_t_p() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3380|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3381|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3382|->   static gpgme_data_t *new_gpgme_data_t_p() { ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3383|       return (gpgme_data_t *)calloc(1,sizeof(gpgme_data_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3384|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3403,
                    "column": 23,
                    "event": "warning[-Wstrict-prototypes]",
                    "message": "function declaration isn’t a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3403 |   static gpgme_key_t *new_gpgme_key_t_p() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3401|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3402|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3403|->   static gpgme_key_t *new_gpgme_key_t_p() { ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3404|       return (gpgme_key_t *)calloc(1,sizeof(gpgme_key_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3405|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3424,
                    "column": 25,
                    "event": "warning[-Wstrict-prototypes]",
                    "message": "function declaration isn’t a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3424 |   static gpgme_error_t *new_gpgme_error_t_p() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3422|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3423|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3424|->   static gpgme_error_t *new_gpgme_error_t_p() { ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3425|       return (gpgme_error_t *)calloc(1,sizeof(gpgme_error_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3426|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_error_t_p_assign’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3437,
                    "column": 10,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3437 |     *obj = value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ~~~~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 44688,
                    "column": 17,
                    "event": "note",
                    "message": "‘arg2’ was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44688 |   gpgme_error_t arg2 ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3435|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3436|     static void gpgme_error_t_p_assign(gpgme_error_t *obj, gpgme_error_t value) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3437|->     *obj = value;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3438|     }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3439|   ",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3445,
                    "column": 30,
                    "event": "warning[-Wstrict-prototypes]",
                    "message": "function declaration isn’t a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3445 |   static gpgme_trust_item_t *new_gpgme_trust_item_t_p() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3443|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3444|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3445|->   static gpgme_trust_item_t *new_gpgme_trust_item_t_p() { ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3446|       return (gpgme_trust_item_t *)calloc(1,sizeof(gpgme_trust_item_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3447|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3466,
                    "column": 31,
                    "event": "warning[-Wstrict-prototypes]",
                    "message": "function declaration isn’t a prototype",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3466 |   static gpgme_engine_info_t *new_gpgme_engine_info_t_p() {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3464|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3465|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3466|->   static gpgme_engine_info_t *new_gpgme_engine_info_t_p() { ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3467|       return (gpgme_engine_info_t *)calloc(1,sizeof(gpgme_engine_info_t));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3468|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_data_seek’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 3633,
                    "column": 14,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3633 |     result = gpgme_data_seek(arg1,arg2,arg3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3631|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3632|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3633|->     result = gpgme_data_seek(arg1,arg2,arg3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3634|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 3635|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_strerror’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 4176,
                    "column": 22,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg1’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4176 |     result = (char *)gpgme_strerror(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4174|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4175|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4176|->     result = (char *)gpgme_strerror(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4177|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4178|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_strerror_r’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 4230,
                    "column": 14,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg1’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4230 |     result = (int)gpgme_strerror_r(arg1,arg2,arg3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4228|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4229|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4230|->     result = (int)gpgme_strerror_r(arg1,arg2,arg3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4231|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4232|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_strsource’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 4270,
                    "column": 22,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg1’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4270 |     result = (char *)gpgme_strsource(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                      ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4268|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4269|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4270|->     result = (char *)gpgme_strsource(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4271|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4272|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_err_code_to_errno’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 4329,
                    "column": 14,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg1’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4329 |     result = (int)gpgme_err_code_to_errno(arg1);",
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
                    "message": " 4327|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4328|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4329|->     result = (int)gpgme_err_code_to_errno(arg1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4330|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4331|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_err_make_from_errno’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 4411,
                    "column": 14,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg1’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4411 |     result = gpgme_err_make_from_errno(arg1,arg2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4409|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4410|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4411|->     result = gpgme_err_make_from_errno(arg1,arg2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4412|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4413|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_key_sig_status_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 7667,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7667 |     if (arg1) (arg1)->status = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7665|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7666|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7667|->     if (arg1) (arg1)->status = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7668|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 7669|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_invalid_key_reason_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 11077,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11077 |     if (arg1) (arg1)->reason = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11075|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11076|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11077|->     if (arg1) (arg1)->reason = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11078|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11079|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_io_event_done_data_err_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 12710,
                    "column": 27,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12710 |     if (arg1) (arg1)->err = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12708|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12709|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12710|->     if (arg1) (arg1)->err = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12711|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12712|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_io_event_done_data_op_err_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 12775,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12775 |     if (arg1) (arg1)->op_err = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12773|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12774|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12775|->     if (arg1) (arg1)->op_err = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12776|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "12777|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_data_new_from_filepart’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 14711,
                    "column": 14,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg4’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14711 |     result = gpgme_data_new_from_filepart(arg1,(char const *)arg2,arg3,arg4,arg5);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14709|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14710|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14711|->     result = gpgme_data_new_from_filepart(arg1,(char const *)arg2,arg3,arg4,arg5);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14712|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "14713|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_recipient_status_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 19611,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "19611 |     if (arg1) (arg1)->status = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "19609|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "19610|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "19611|->     if (arg1) (arg1)->status = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "19612|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "19613|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_signature_status_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 25176,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25176 |     if (arg1) (arg1)->status = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25174|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25175|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25176|->     if (arg1) (arg1)->status = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25177|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25178|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_signature_validity_reason_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 25793,
                    "column": 39,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25793 |     if (arg1) (arg1)->validity_reason = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25791|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25792|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25793|->     if (arg1) (arg1)->validity_reason = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25794|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "25795|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_import_status_result_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 27966,
                    "column": 30,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "27966 |     if (arg1) (arg1)->result = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "27964|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "27965|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "27966|->     if (arg1) (arg1)->result = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "27967|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "27968|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_op_export_ext_start’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 30597,
                    "column": 19,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘size2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30597 |     for (i = 0; i < size2; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30595|       size_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30596|       free(vector2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30597|->     for (i = 0; i < size2; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30598|       Py_XDECREF(pyVector2[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30599|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_op_export_ext’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 30912,
                    "column": 19,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘size2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30912 |     for (i = 0; i < size2; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30910|       size_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30911|       free(vector2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30912|->     for (i = 0; i < size2; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30913|       Py_XDECREF(pyVector2[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "30914|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_op_keylist_ext_start’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 36067,
                    "column": 19,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘size2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "36067 |     for (i = 0; i < size2; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "36065|       size_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "36066|       free(vector2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "36067|->     for (i = 0; i < size2; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "36068|       Py_XDECREF(pyVector2[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "36069|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_op_spawn_start’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 37601,
                    "column": 19,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘size3’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37601 |     for (i = 0; i < size3; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37599|       size_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37600|       free(vector3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37601|->     for (i = 0; i < size3; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37602|       Py_XDECREF(pyVector3[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37603|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_gpgme_op_spawn’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 37745,
                    "column": 19,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘size3’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37745 |     for (i = 0; i < size3; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37743|       size_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37744|       free(vector3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37745|->     for (i = 0; i < size3; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37746|       Py_XDECREF(pyVector3[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "37747|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap__gpgme_op_assuan_result_err_set’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 43998,
                    "column": 27,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg2’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "43998 |     if (arg1) (arg1)->err = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "43996|     {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "43997|       SWIG_PYTHON_THREAD_BEGIN_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "43998|->     if (arg1) (arg1)->err = arg2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "43999|       SWIG_PYTHON_THREAD_END_ALLOW;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44000|     }",
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
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function ‘_wrap_copy_gpgme_error_t_p’",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/python/python3.10-gpg/gpgme_wrap.c",
                    "line": 44631,
                    "column": 17,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "‘arg1’ may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44631 |   gpgme_error_t arg1 ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44629|   SWIGINTERN PyObject *_wrap_copy_gpgme_error_t_p(PyObject *SWIGUNUSEDPARM(self), PyObject *args) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44630|     PyObject *resultobj = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44631|->   gpgme_error_t arg1 ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44632|     PyObject *swig_obj[1] ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "44633|     gpgme_error_t *result = 0 ;",
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
                    "file_name": "gpgme-1.15.1/lang/qt/tests/t-verify.cpp",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In member function 'void VerifyTest::testSignatureKey()'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/qt/tests/t-verify.cpp",
                    "line": 84,
                    "column": 25,
                    "event": "warning[-Wrange-loop-construct]",
                    "message": "loop variable 'subkey' creates a copy from type 'const GpgME::Subkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 |         for (const auto subkey: key.subkeys()) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/lang/qt/tests/t-verify.cpp",
                    "line": 84,
                    "column": 25,
                    "event": "note",
                    "message": "use reference type to prevent copying",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 |         for (const auto subkey: key.subkeys()) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                         &",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|           bool found = false;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->         for (const auto subkey: key.subkeys()) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|               if (!strcmp (subkey.fingerprint(), sig.fingerprint())) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|                   found = true;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'add_data'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 313,
                    "column": 4,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313 |   a->next = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |    ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|     if (!a)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|       return gpg_error_from_syserror ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|->   a->next = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|     a->data = data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|     a->inbound = inbound;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 314,
                    "column": 4,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314 |   a->data = data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |    ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|       return gpg_error_from_syserror ();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|     a->next = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|->   a->data = data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|     a->inbound = inbound;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|     a->arg_locp = NULL;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 315,
                    "column": 4,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315 |   a->inbound = inbound;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |    ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|     a->next = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|     a->data = data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|->   a->inbound = inbound;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|     a->arg_locp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 316,
                    "column": 4,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316 |   a->arg_locp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |    ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|     a->data = data;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|     a->inbound = inbound;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|->   a->arg_locp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|     if (dup_to == -2)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 320,
                    "column": 8,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320 |       a->print_fd = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|     if (dup_to == -2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|->       a->print_fd = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|         a->dup_to = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 321,
                    "column": 8,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321 |       a->dup_to = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|         a->print_fd = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|->       a->dup_to = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  322|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|     else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 325,
                    "column": 8,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325 |       a->print_fd = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  323|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|->       a->print_fd = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|         a->dup_to = dup_to;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 788,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 326,
                    "column": 8,
                    "event": "warning[-Warray-bounds]",
                    "message": "array subscript 'struct arg_and_data_s[0]' is partly outside array bounds of 'unsigned char[47]'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326 |       a->dup_to = dup_to;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |        ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gpgme-1.15.1/src/engine-gpg.c",
                    "line": 310,
                    "column": 7,
                    "event": "note",
                    "message": "referencing an object of size 47 allocated by 'malloc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310 |   a = malloc (sizeof *a - 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  324|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  325|         a->print_fd = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  326|->       a->dup_to = dup_to;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  327|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  328|     *gpg->argtail = a;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
