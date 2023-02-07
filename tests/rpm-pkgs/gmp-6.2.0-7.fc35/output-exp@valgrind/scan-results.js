{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gmp-6.2.0-7.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gmp-6.2.0-7.fc35/valgrind/output",
        "time-created": "2022-11-24 01:32:25",
        "time-finished": "2022-11-24 01:40:14",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gmp-6.2.0-7.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/gmp-6.2.0-7.fc35/gmp-6.2.0-7.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/cxx/ismpf.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'std::istream& operator>>(std::istream&, mpf_ptr)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/cxx/ismpf.cc",
                    "line": 139,
                    "column": 5,
                    "event": "warning[-Wunused-label]",
                    "message": "label 'fail' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139 |     fail:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|     else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|->     fail:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|         i.setstate(ios::failbit); // read failed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/cxx/osdoprnti.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'std::ostream& __gmp_doprnt_integer_ostream(std::ostream&, doprnt_params_t*, char*)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/cxx/osdoprnti.cc",
                    "line": 54,
                    "column": 9,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 |   int   ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|     struct gmp_asprintf_t   d;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|     char  *result;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|->   int   ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|     /* don't show leading zeros the way printf does */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/cxx/osmpf.cc",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'std::ostream& operator<<(std::ostream&, mpf_srcptr)'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/cxx/osmpf.cc",
                    "line": 51,
                    "column": 9,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'ret' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51 |   int   ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|     struct gmp_asprintf_t   d;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|     char  *result;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|->   int   ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|     __gmp_doprnt_params_from_ios (&param, o);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/extract-dbl.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmp_extract_double'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/extract-dbl.c",
                    "line": 53,
                    "column": 21,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'manh'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53 |   unsigned long int manh, manl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   #define BITS_PER_PART GMP_LIMB_BITS",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|->   unsigned long int manh, manl;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_5pts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_5pts.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_toom_interpolate_5pts'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 1662,
                    "column": 6,
                    "event": "warning[-Wunused-value]",
                    "message": "value computed is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1662 |   (3 & mpn_bdiv_dbm1 (dst, src, size, __GMP_CAST (mp_limb_t, GMP_NUMB_MASK / 3)))",
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
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 2459,
                    "column": 33,
                    "event": "note",
                    "message": "in definition of macro 'ASSERT_NOCARRY'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2459 | #define ASSERT_NOCARRY(expr)   (expr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_5pts.c",
                    "line": 70,
                    "column": 19,
                    "event": "note",
                    "message": "in expansion of macro 'mpn_divexact_by3'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   70 |   ASSERT_NOCARRY (mpn_divexact_by3 (v2, v2, kk1));    /* v2 <- v2 / 3 */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1660|   #undef mpn_divexact_by3",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1661|   #define mpn_divexact_by3(dst,src,size) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1662|->   (3 & mpn_bdiv_dbm1 (dst, src, size, __GMP_CAST (mp_limb_t, GMP_NUMB_MASK / 3)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1663|   /* override mpn_divexact_by3c defined in gmp.h */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1664|   /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 1698,
                    "column": 7,
                    "event": "warning[-Wunused-value]",
                    "message": "value computed is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1698 |   (15 & 1 * mpn_bdiv_dbm1 (dst, src, size, __GMP_CAST (mp_limb_t, GMP_NUMB_MASK / 15)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_7pts.c",
                    "line": 212,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'mpn_divexact_by15'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212 |   mpn_divexact_by15 (w1, w1, m);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1696|   #if GMP_NUMB_BITS % 4 == 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1697|   #define mpn_divexact_by15(dst,src,size) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1698|->   (15 & 1 * mpn_bdiv_dbm1 (dst, src, size, __GMP_CAST (mp_limb_t, GMP_NUMB_MASK / 15)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1699|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1700|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/mod_1_3.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/mod_1_3.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_mod_1s_3p'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/longlong.h",
                    "line": 1046,
                    "column": 3,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'rl' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1046 |   __asm__ (\"addq %5,%q1\\n\\tadcq %3,%q0\"                                 \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/mod_1_3.c",
                    "line": 89,
                    "column": 17,
                    "event": "note",
                    "message": "'rl' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |   mp_limb_t rh, rl, bi, ph, pl, ch, cl, r;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1044|   #if defined (__amd64__) && W_TYPE_SIZE == 64",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1045|   #define add_ssaaaa(sh, sl, ah, al, bh, bl) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1046|->   __asm__ (\"addq %5,%q1\\n\\tadcq %3,%q0\"\t\t\t\t\t\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1047|   \t   : \"=r\" (sh), \"=&r\" (sl)\t\t\t\t\t\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1048|   \t   : \"0\"  ((UDItype)(ah)), \"rme\" ((UDItype)(bh)),\t\t\\",
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
                    "file_name": "gmp-6.2.0/mpn/generic/mod_1_3.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/longlong.h",
                    "line": 1064,
                    "column": 3,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'rh' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1064 |   __asm__ (\"mulq\\t%3\"                                                   \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/mod_1_3.c",
                    "line": 89,
                    "column": 13,
                    "event": "note",
                    "message": "'rh' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89 |   mp_limb_t rh, rl, bi, ph, pl, ch, cl, r;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1062|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1063|   #define umul_ppmm(w1, w0, u, v) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1064|->   __asm__ (\"mulq\\t%3\"\t\t\t\t\t\t\t\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1065|   \t   : \"=a\" (w0), \"=d\" (w1)\t\t\t\t\t\\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1066|   \t   : \"%0\" ((UDItype)(u)), \"rm\" ((UDItype)(v)))",
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
                    "file_name": "gmp-6.2.0/mpf/reldiff.c",
                    "line": 39,
                    "column": 20,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpf_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39 | mpf_reldiff (mpf_t rdiff, mpf_srcptr x, mpf_srcptr y)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ~~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpf/reldiff.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1396,
                    "column": 34,
                    "event": "note",
                    "message": "previously declared as 'mpf_ptr' {aka '__mpf_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1396 | __GMP_DECLSPEC void mpf_reldiff (mpf_ptr, mpf_srcptr, mpf_srcptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                  ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|-> mpf_reldiff (mpf_t rdiff, mpf_srcptr x, mpf_srcptr y)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|     if (UNLIKELY (SIZ(x) == 0))",
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
                    "file_name": "gmp-6.2.0/mpf/set_q.c",
                    "line": 54,
                    "column": 18,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpf_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54 | mpf_set_q (mpf_t r, mpq_srcptr q)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ~~~~~~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpf/set_q.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1414,
                    "column": 32,
                    "event": "note",
                    "message": "previously declared as 'mpf_ptr' {aka '__mpf_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1414 | __GMP_DECLSPEC void mpf_set_q (mpf_ptr, mpq_srcptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   53|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   54|-> mpf_set_q (mpf_t r, mpq_srcptr q)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   55|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56|     mp_srcptr np, dp;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/dcpi1_bdiv_q.c",
                    "line": 42,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'mpn_dcpi1_bdiv_q_n_itch' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | mpn_dcpi1_bdiv_q_n_itch (mp_size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   static mp_size_t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> mpn_dcpi1_bdiv_q_n_itch (mp_size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|     /* NOTE: Depends on mullo_n and mpn_dcpi1_bdiv_qr_n interface */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/invertappr.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_ni_invertappr'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/invertappr.c",
                    "line": 230,
                    "column": 21,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'chk' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230 |           mp_limb_t chk;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  228|         if (cy++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  229|   \tif (mpn_cmp (xp, dp - n, n) > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  230|-> \t  mp_limb_t chk;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|   \t  chk = mpn_sublsh1_n (xp, xp, dp - n, n);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|   \t  ASSERT (chk == xp[n]);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/matrix22_mul1_inverse_vector.c",
                    "line": 44,
                    "column": 13,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'h0' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44 |   mp_limb_t h0, h1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t\t\t  mp_ptr rp, mp_srcptr ap, mp_ptr bp, mp_size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   mp_limb_t h0, h1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|     /* Compute (r;b) <-- (u11 a - u01 b; -u10 a + u00 b) as",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/matrix22_mul1_inverse_vector.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_matrix22_mul1_inverse_vector'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/matrix22_mul1_inverse_vector.c",
                    "line": 44,
                    "column": 17,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'h1' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44 |   mp_limb_t h0, h1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   \t\t\t\t  mp_ptr rp, mp_srcptr ap, mp_ptr bp, mp_size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|->   mp_limb_t h0, h1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|     /* Compute (r;b) <-- (u11 a - u01 b; -u10 a + u00 b) as",
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
                    "file_name": "gmp-6.2.0/mpn/generic/mu_divappr_q.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_mu_divappr_q'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/mu_divappr_q.c",
                    "line": 291,
                    "column": 6,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'cy' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291 |   cy += mpn_add_1 (qp, qp, qn, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |      ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/mu_divappr_q.c",
                    "line": 172,
                    "column": 13,
                    "event": "note",
                    "message": "'cy' was declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  172 |   mp_limb_t cy, cx, qh;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  289|        quotient; add 3 with saturating arithmetic.  */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  290|     qn = nn - dn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  291|->   cy += mpn_add_1 (qp, qp, qn, 3);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  292|     if (cy != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  293|       {",
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
                    "file_name": "gmp-6.2.0/mpn/generic/remove.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_remove'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/remove.c",
                    "line": 141,
                    "column": 12,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'np' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141 |         np += pn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   \tnp = TMP_ALLOC_LIMBS (qn + LOG);\t/* powers of V */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|         else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  141|-> \tnp += pn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  142|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|         mpn_sqr (np, pp, pn);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 457,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/rootrem.c",
                    "line": 410,
                    "column": 20,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'save2' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410 |         rp[bn + 1] = save2; /* the low b bits go in rp[0..bn] only, since",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ~~~~~~~~~~~^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|         rp[bn] |= save;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|         if (nl - 1 > bn)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|-> \trp[bn + 1] = save2; /* the low b bits go in rp[0..bn] only, since",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|   \t\t\t       they start by bit 0 in rp[0], so they use",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|   \t\t\t       at most ceil(b/GMP_NUMB_BITS) limbs */",
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
                    "file_name": "gmp-6.2.0/mpn/generic/rootrem.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'mpn_rootrem_internal'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/rootrem.c",
                    "line": 514,
                    "column": 10,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'rn' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514 |   return rn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |          ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|     TMP_FREE;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|->   return rn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/sec_div.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_sec_div_r'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/sec_div.c",
                    "line": 86,
                    "column": 17,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'qh'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86 |       mp_limb_t qh, cy;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                 ^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|     if (cnt != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|->       mp_limb_t qh, cy;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|         mp_ptr np2, dp2;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|         dp2 = tp;\t\t\t\t\t/* dn limbs */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/strongfibo.c",
                    "line": 43,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'abs_sub_n' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43 | abs_sub_n (mp_ptr rp, mp_srcptr ap, mp_srcptr bp, mp_size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|      returns the sign of {ap,n}-{bp,n}. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|   static int",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|-> abs_sub_n (mp_ptr rp, mp_srcptr ap, mp_srcptr bp, mp_size_t n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|     mp_limb_t  x, y;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_12pts.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpn_toom_interpolate_12pts'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_12pts.c",
                    "line": 133,
                    "column": 8,
                    "event": "warning[-Wunused-value]",
                    "message": "value computed is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133 |   (255 & 1 * mpn_bdiv_dbm1 (dst, src, size, __GMP_CAST (mp_limb_t, GMP_NUMB_MASK / 255)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ~~~~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/generic/toom_interpolate_12pts.c",
                    "line": 264,
                    "column": 3,
                    "event": "note",
                    "message": "in expansion of macro 'mpn_divexact_by255'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264 |   mpn_divexact_by255(r5, r5, n3p1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |   ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   #if GMP_NUMB_BITS % 8 == 0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|   #define mpn_divexact_by255(dst,src,size) \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|->   (255 & 1 * mpn_bdiv_dbm1 (dst, src, size, __GMP_CAST (mp_limb_t, GMP_NUMB_MASK / 255)))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   #else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   #if HAVE_NATIVE_mpn_pi1_bdiv_q_1",
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
                    "file_name": "gmp-6.2.0/mpn/fat_addmul_2.c",
                    "line": 10,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/x86_64/fat/addmul_2.c",
                    "line": 34,
                    "column": 69,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 4 of type 'const mp_limb_t[2]' {aka 'const long unsigned int[2]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34 | mpn_addmul_2 (mp_ptr rp, mp_srcptr up, mp_size_t n, const mp_limb_t vp[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                     ~~~~~~~~~~~~~~~~^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/x86_64/fat/addmul_2.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpn/fat_addmul_2.c",
                    "line": 10,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 75,
                    "column": 64,
                    "event": "note",
                    "message": "previously declared as 'mp_srcptr' {aka 'const long unsigned int *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   75 |   __GMP_DECLSPEC mp_limb_t name (mp_ptr, mp_srcptr, mp_size_t, mp_srcptr)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/fat.h",
                    "line": 420,
                    "column": 1,
                    "event": "note",
                    "message": "in expansion of macro 'DECL_addmul_2'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420 | DECL_addmul_2 (__gmpn_addmul_2_fat);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   mp_limb_t",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|-> mpn_addmul_2 (mp_ptr rp, mp_srcptr up, mp_size_t n, const mp_limb_t vp[2])",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|     rp[n] = mpn_addmul_1 (rp,     up, n, vp[0]);",
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
                    "file_name": "gmp-6.2.0/mpq/canonicalize.c",
                    "line": 35,
                    "column": 25,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpq_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 | mpq_canonicalize (mpq_t op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~~^~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpq/canonicalize.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1144,
                    "column": 39,
                    "event": "note",
                    "message": "previously declared as 'mpq_ptr' {aka '__mpq_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1144 | __GMP_DECLSPEC void mpq_canonicalize (mpq_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> mpq_canonicalize (mpq_t op)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     mpz_t gcd;",
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
                    "file_name": "gmp-6.2.0/mpq/clear.c",
                    "line": 35,
                    "column": 18,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpq_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 | mpq_clear (mpq_t x)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ~~~~~~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpq/clear.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1147,
                    "column": 32,
                    "event": "note",
                    "message": "previously declared as 'mpq_ptr' {aka '__mpq_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1147 | __GMP_DECLSPEC void mpq_clear (mpq_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> mpq_clear (mpq_t x)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     if (ALLOC (NUM(x)))",
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
                    "file_name": "gmp-6.2.0/mpq/init.c",
                    "line": 35,
                    "column": 17,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpq_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 | mpq_init (mpq_t x)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ~~~~~~^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpq/init.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1186,
                    "column": 31,
                    "event": "note",
                    "message": "previously declared as 'mpq_ptr' {aka '__mpq_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1186 | __GMP_DECLSPEC void mpq_init (mpq_ptr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> mpq_init (mpq_t x)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     static const mp_limb_t dummy_limb=0xc1a0;",
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
                    "file_name": "gmp-6.2.0/mpq/set_si.c",
                    "line": 35,
                    "column": 19,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpq_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 | mpq_set_si (mpq_t dest, signed long int num, unsigned long int den)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpq/set_si.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1231,
                    "column": 33,
                    "event": "note",
                    "message": "previously declared as 'mpq_ptr' {aka '__mpq_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231 | __GMP_DECLSPEC void mpq_set_si (mpq_ptr, signed long int, unsigned long int);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> mpq_set_si (mpq_t dest, signed long int num, unsigned long int den)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     if (GMP_NUMB_BITS < BITS_PER_ULONG)",
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
                    "file_name": "gmp-6.2.0/mpq/set_ui.c",
                    "line": 35,
                    "column": 19,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type '__mpq_struct[1]' with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 | mpq_set_ui (mpq_t dest, unsigned long int num, unsigned long int den)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ~~~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpq/set_ui.c",
                    "line": 32,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 1237,
                    "column": 33,
                    "event": "note",
                    "message": "previously declared as 'mpq_ptr' {aka '__mpq_struct *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1237 | __GMP_DECLSPEC void mpq_set_ui (mpq_ptr, unsigned long int, unsigned long int);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> mpq_set_ui (mpq_t dest, unsigned long int num, unsigned long int den)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     if (GMP_NUMB_BITS < BITS_PER_ULONG)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 691,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/mpz/mul.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmpz_mul'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/mpz/mul.c",
                    "line": 106,
                    "column": 10,
                    "event": "warning[-Wdangling-else]",
                    "message": "suggest explicit braces to avoid ambiguous 'else'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106 |       if (ALLOC (w) != 0)",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  104|     if (ALLOC (w) < wsize)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  105|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  106|->       if (ALLOC (w) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  107|   \tif (wp == up || wp == vp)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|   \t  {",
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
                    "file_name": "gmp-6.2.0/primesieve.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'first_block_primesieve'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/primesieve.c",
                    "line": 248,
                    "column": 13,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'i' may be used uninitialized in this function",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248 |   mp_limb_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|     mp_size_t bits, limbs;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|->   mp_limb_t i;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|     ASSERT (n > 4);",
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
                    "file_name": "gmp-6.2.0/rand/randbui.c",
                    "line": 38,
                    "column": 36,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'gmp_randstate_ptr' {aka '__gmp_randstate_struct *'} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38 | gmp_urandomb_ui (gmp_randstate_ptr rstate, unsigned long bits)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ~~~~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/rand/randbui.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 527,
                    "column": 47,
                    "event": "note",
                    "message": "previously declared as an array '__gmp_randstate_struct[1]'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  527 | __GMP_DECLSPEC unsigned long gmp_urandomb_ui (gmp_randstate_t, unsigned long);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   unsigned long",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|-> gmp_urandomb_ui (gmp_randstate_ptr rstate, unsigned long bits)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   39|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|     mp_limb_t  a[LIMBS_PER_ULONG];",
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
                    "file_name": "gmp-6.2.0/rand/randiset.c",
                    "line": 35,
                    "column": 37,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'gmp_randstate_ptr' {aka '__gmp_randstate_struct *'} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35 | gmp_randinit_set (gmp_randstate_ptr dst, gmp_randstate_srcptr src)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/rand/randiset.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 515,
                    "column": 39,
                    "event": "note",
                    "message": "previously declared as an array '__gmp_randstate_struct[1]'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515 | __GMP_DECLSPEC void gmp_randinit_set (gmp_randstate_t, const __gmp_randstate_struct *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                       ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> gmp_randinit_set (gmp_randstate_ptr dst, gmp_randstate_srcptr src)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|     (*((gmp_randfnptr_t *) RNG_FNPTR (src))->randiset_fn) (dst, src);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/rand/randlc2x.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'lc'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/rand/randlc2x.c",
                    "line": 79,
                    "column": 7,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'cy' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79 |   int cy;",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|     unsigned long int m2exp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|     unsigned long int bits;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|->   int cy;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|     mp_size_t xn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|     gmp_rand_lc_struct *p;",
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
                    "file_name": "gmp-6.2.0/rand/randmt.c",
                    "line": 396,
                    "column": 45,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'gmp_randstate_ptr' {aka '__gmp_randstate_struct *'} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396 | __gmp_randinit_mt_noseed (gmp_randstate_ptr dst)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/rand/randmt.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 1316,
                    "column": 47,
                    "event": "note",
                    "message": "previously declared as an array '__gmp_randstate_struct[1]'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1316 | __GMP_DECLSPEC void __gmp_randinit_mt_noseed (gmp_randstate_t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|-> __gmp_randinit_mt_noseed (gmp_randstate_ptr dst)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|     const mp_size_t sz = ((sizeof (gmp_rand_mt_struct) - 1) / GMP_LIMB_BYTES) + 1;",
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
                    "file_name": "gmp-6.2.0/rand/randmui.c",
                    "line": 46,
                    "column": 36,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'gmp_randstate_ptr' {aka '__gmp_randstate_struct *'} declared as a pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | gmp_urandomm_ui (gmp_randstate_ptr rstate, unsigned long n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ~~~~~~~~~~~~~~~~~~^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp-impl.h",
                    "line": 145,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/rand/randmui.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/gmp.h",
                    "line": 530,
                    "column": 47,
                    "event": "note",
                    "message": "previously declared as an array '__gmp_randstate_struct[1]'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530 | __GMP_DECLSPEC unsigned long gmp_urandomm_ui (gmp_randstate_t, unsigned long);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                               ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   unsigned long",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|-> gmp_urandomm_ui (gmp_randstate_ptr rstate, unsigned long n)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|     mp_limb_t      a[LIMBS_PER_ULONG];",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gmp-6.2.0/scanf/doscan.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function '__gmp_doscan'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gmp-6.2.0/scanf/doscan.c",
                    "line": 474,
                    "column": 33,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'end_fmt' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474 |   const char  *fmt, *this_fmt, *end_fmt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                 ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472|     va_list     ap;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|     char\t      *alloc_fmt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474|->   const char  *fmt, *this_fmt, *end_fmt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|     size_t      orig_fmt_len, alloc_fmt_size, len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|     int\t      new_fields, new_chars;",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
