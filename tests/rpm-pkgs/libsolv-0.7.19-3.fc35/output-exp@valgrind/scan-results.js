{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libsolv-0.7.19-3.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsolv-0.7.19-3.fc35/valgrind/output",
        "time-created": "2022-11-23 15:36:22",
        "time-finished": "2022-11-23 15:44:31",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsolv-0.7.19-3.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/libsolv-0.7.19-3.fc35/libsolv-0.7.19-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_wrap_XSolvable_lookup_location'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 6236,
                    "column": 7,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'if' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6236 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_From_unsigned_SS_int  SWIG_PERL_CALL_ARGS_1((*arg2)); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/perl.h",
                    "line": 5713,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 740,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/embedvar.h",
                    "line": 303,
                    "column": 33,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | #define PL_stack_base           (vTHX->Istack_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/XSUB.h",
                    "line": 117,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'PL_stack_base'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | #define ST(off) PL_stack_base[ax + (off)]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 6236,
                    "column": 49,
                    "event": "note",
                    "message": "in expansion of macro 'ST'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6236 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_From_unsigned_SS_int  SWIG_PERL_CALL_ARGS_1((*arg2)); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6234|       ST(argvi) = SWIG_FromCharPtr((const char *)result); argvi++ ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6235|       if (SWIG_IsTmpObj(res2)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6236|->       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_From_unsigned_SS_int  SWIG_PERL_CALL_ARGS_1((*arg2)); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6237|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6238|         int new_flags = SWIG_IsNewObj(res2) ? (SWIG_POINTER_OWN | 0) : 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 6239,
                    "column": 7,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'if' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6239 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(arg2), SWIGTYPE_p_unsigned_int, new_flags); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/perl.h",
                    "line": 5713,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 740,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/embedvar.h",
                    "line": 303,
                    "column": 33,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | #define PL_stack_base           (vTHX->Istack_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/XSUB.h",
                    "line": 117,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'PL_stack_base'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | #define ST(off) PL_stack_base[ax + (off)]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 6239,
                    "column": 49,
                    "event": "note",
                    "message": "in expansion of macro 'ST'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6239 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(arg2), SWIGTYPE_p_unsigned_int, new_flags); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6237|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6238|         int new_flags = SWIG_IsNewObj(res2) ? (SWIG_POINTER_OWN | 0) : 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6239|->       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(arg2), SWIGTYPE_p_unsigned_int, new_flags); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6240|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 6241|       ",
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
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_wrap_Datapos_lookup_deltalocation'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 11040,
                    "column": 7,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'if' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11040 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_From_unsigned_SS_int  SWIG_PERL_CALL_ARGS_1((*arg2)); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/perl.h",
                    "line": 5713,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 740,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/embedvar.h",
                    "line": 303,
                    "column": 33,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | #define PL_stack_base           (vTHX->Istack_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/XSUB.h",
                    "line": 117,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'PL_stack_base'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | #define ST(off) PL_stack_base[ax + (off)]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 11040,
                    "column": 49,
                    "event": "note",
                    "message": "in expansion of macro 'ST'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11040 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_From_unsigned_SS_int  SWIG_PERL_CALL_ARGS_1((*arg2)); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11038|       ST(argvi) = SWIG_FromCharPtr((const char *)result); argvi++ ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11039|       if (SWIG_IsTmpObj(res2)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11040|->       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_From_unsigned_SS_int  SWIG_PERL_CALL_ARGS_1((*arg2)); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11041|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11042|         int new_flags = SWIG_IsNewObj(res2) ? (SWIG_POINTER_OWN | 0) : 0;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 483,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 11043,
                    "column": 7,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'if' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11043 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(arg2), SWIGTYPE_p_unsigned_int, new_flags); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/perl.h",
                    "line": 5713,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 740,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/embedvar.h",
                    "line": 303,
                    "column": 33,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | #define PL_stack_base           (vTHX->Istack_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/XSUB.h",
                    "line": 117,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'PL_stack_base'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | #define ST(off) PL_stack_base[ax + (off)]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 11043,
                    "column": 49,
                    "event": "note",
                    "message": "in expansion of macro 'ST'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11043 |       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(arg2), SWIGTYPE_p_unsigned_int, new_flags); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11041|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11042|         int new_flags = SWIG_IsNewObj(res2) ? (SWIG_POINTER_OWN | 0) : 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11043|->       if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(arg2), SWIGTYPE_p_unsigned_int, new_flags); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11044|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "11045|       ",
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
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '_wrap_Solver_describe_decision'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 17163,
                    "column": 5,
                    "event": "warning[-Wmisleading-indentation]",
                    "message": "this 'if' clause does not guard...",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17163 |     if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(*arg3), SWIGTYPE_p_XRule, SWIG_POINTER_OWN | 0); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/perl.h",
                    "line": 5713,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 740,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/embedvar.h",
                    "line": 303,
                    "column": 33,
                    "event": "note",
                    "message": "...this statement, but the latter is misleadingly indented as if it were guarded by the 'if'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303 | #define PL_stack_base           (vTHX->Istack_base)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/lib64/perl5/CORE/XSUB.h",
                    "line": 117,
                    "column": 17,
                    "event": "note",
                    "message": "in expansion of macro 'PL_stack_base'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117 | #define ST(off) PL_stack_base[ax + (off)]",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/perl/solv_perl.c",
                    "line": 17163,
                    "column": 47,
                    "event": "note",
                    "message": "in expansion of macro 'ST'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17163 |     if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(*arg3), SWIGTYPE_p_XRule, SWIG_POINTER_OWN | 0); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17161|       result = (int)Solver_describe_decision(arg1,arg2,arg3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17162|       ST(argvi) = SWIG_From_int  SWIG_PERL_CALL_ARGS_1((int)(result)); argvi++ ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17163|->     if (argvi >= items) EXTEND(sp, argvi+1);  ST(argvi) = SWIG_NewPointerObj((void*)(*arg3), SWIGTYPE_p_XRule, SWIG_POINTER_OWN | 0); argvi++  ;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17164|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "17165|       ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/python/solv_python.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'loadcallback'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/python/solv_python.c",
                    "line": 4353,
                    "column": 5,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'PyEval_CallObjectWithKeywords' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4353 |     PyObject *result = PyEval_CallObject((PyObject *)d, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/Python.h",
                    "line": 130,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/redhat-linux-build/bindings/python/solv_python.c",
                    "line": 157,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "/usr/include/python3.10/ceval.h",
                    "line": 17,
                    "column": 43,
                    "event": "note",
                    "message": "declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17 | Py_DEPRECATED(3.9) PyAPI_FUNC(PyObject *) PyEval_CallObjectWithKeywords(",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4351|       XRepodata *xd = new_XRepodata(data->repo, data->repodataid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4352|       PyObject *args = Py_BuildValue(\"(O)\", SWIG_NewPointerObj(SWIG_as_voidptr(xd), SWIGTYPE_p_XRepodata, SWIG_POINTER_OWN | 0));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4353|->     PyObject *result = PyEval_CallObject((PyObject *)d, args);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4354|       int ecode = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 4355|       int vresult = 0;",
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
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 610,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610 | void solv_SHA256_Final(sha2_byte digest[], SHA256_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 76,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[32]' {aka 'unsigned char[32]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   76 | void solv_SHA256_Final(uint8_t[SHA256_DIGEST_LENGTH], SHA256_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|-> void solv_SHA256_Final(sha2_byte digest[], SHA256_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|   \tsha2_word32\t*d = (sha2_word32*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|   ",
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
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 907,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907 | void solv_SHA512_Final(sha2_byte digest[], SHA512_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 84,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[64]' {aka 'unsigned char[64]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84 | void solv_SHA512_Final(uint8_t[SHA512_DIGEST_LENGTH], SHA512_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  905|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  906|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  907|-> void solv_SHA512_Final(sha2_byte digest[], SHA512_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  908|   \tsha2_word64\t*d = (sha2_word64*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  909|   ",
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
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 951,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  951 | void solv_SHA384_Final(sha2_byte digest[], SHA384_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 80,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[48]' {aka 'unsigned char[48]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80 | void solv_SHA384_Final(uint8_t[SHA384_DIGEST_LENGTH], SHA384_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  949|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  950|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  951|-> void solv_SHA384_Final(sha2_byte digest[], SHA384_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  952|   \tsha2_word64\t*d = (sha2_word64*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  953|   ",
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
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 996,
                    "column": 34,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'sha2_byte[]' {aka 'unsigned char[]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996 | void solv_SHA224_Final(sha2_byte digest[], SHA224_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ~~~~~~~~~~^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/sha2.h",
                    "line": 72,
                    "column": 24,
                    "event": "note",
                    "message": "previously declared as 'uint8_t[28]' {aka 'unsigned char[28]'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   72 | void solv_SHA224_Final(uint8_t[SHA224_DIGEST_LENGTH], SHA224_CTX*);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                        ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  994|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  995|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  996|-> void solv_SHA224_Final(sha2_byte digest[], SHA224_CTX* context) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  997|   \tsha2_word32\t*d = (sha2_word32*)digest;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  998|   ",
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
                    "file_name": "libsolv-0.7.19/redhat-linux-build/tools/testsolv",
                    "line": 0,
                    "event": "note",
                    "message": "while executing process 2236 with arguments: /builddir/build/BUILD/libsolv-0.7.19/test/testcases/choicerules/choice2.t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/src/util.c",
                    "line": 38,
                    "event": "warning[Leak_DefinitelyLost]",
                    "message": "1,024 bytes in 1 blocks are definitely lost in loss record 1 of 1",
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
                    "file_name": "libsolv-0.7.19/src/util.c",
                    "line": 38,
                    "event": "note",
                    "message": "called from solv_malloc()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/ext/testcase.c",
                    "line": 1876,
                    "event": "note",
                    "message": "called from read_inline_file()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/ext/testcase.c",
                    "line": 2305,
                    "event": "note",
                    "message": "called from testcase_read()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libsolv-0.7.19/tools/testsolv.c",
                    "line": 159,
                    "event": "note",
                    "message": "called from main()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   solv_malloc(size_t len)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|->   void *r = malloc(len ? len : 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|     if (!r)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|       solv_oom(0, len);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
