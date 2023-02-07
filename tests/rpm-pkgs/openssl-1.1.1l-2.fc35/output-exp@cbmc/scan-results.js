{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "openssl-1.1.1l-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-1.1.1l-2.fc35/cbmc/output",
        "time-created": "2023-01-30 03:09:47",
        "time-finished": "2023-01-30 03:53:59",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-1.1.1l-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/openssl-1.1.1l-2.fc35/openssl-1.1.1l-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/curve448/f_generic.c",
                    "line": 21,
                    "column": 27,
                    "event": "warning[-Warray-parameter=]",
                    "message": "argument 1 of type 'uint8_t[56]' {aka 'unsigned char[56]'} with mismatched bound",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21 | void gf_serialize(uint8_t serial[SER_BYTES], const gf x, int with_hibit)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~~~~^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/ec/curve448/f_generic.c",
                    "line": 12,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/ec/curve448/field.h",
                    "line": 65,
                    "column": 28,
                    "event": "note",
                    "message": "previously declared as 'uint8_t *' {aka 'unsigned char *'}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65 | void gf_serialize(uint8_t *serial, const gf x, int with_highbit);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ~~~~~~~~~^~~~~~",
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
                    "message": "   19|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   20|   /* Serialize to wire format. */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   21|-> void gf_serialize(uint8_t serial[SER_BYTES], const gf x, int with_hibit)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   22|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   23|       unsigned int j = 0, fill = 0;",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 338,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_pre_comp_free\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|   EC_PRE_COMP *EC_ec_pre_comp_dup(EC_PRE_COMP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|-> void EC_pre_comp_free(EC_GROUP *group);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   void EC_nistp224_pre_comp_free(NISTP224_PRE_COMP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|   void EC_nistp256_pre_comp_free(NISTP256_PRE_COMP *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 356,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_init\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  354|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|   /* method functions in ecp_smpl.c */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|-> int ec_GFp_simple_group_init(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|   void ec_GFp_simple_group_finish(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   void ec_GFp_simple_group_clear_finish(EC_GROUP *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 357,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_finish\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  355|   /* method functions in ecp_smpl.c */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|   int ec_GFp_simple_group_init(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|-> void ec_GFp_simple_group_finish(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   void ec_GFp_simple_group_clear_finish(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|   int ec_GFp_simple_group_copy(EC_GROUP *, const EC_GROUP *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 358,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_clear_finish\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  356|   int ec_GFp_simple_group_init(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|   void ec_GFp_simple_group_finish(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|-> void ec_GFp_simple_group_clear_finish(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|   int ec_GFp_simple_group_copy(EC_GROUP *, const EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   int ec_GFp_simple_group_set_curve(EC_GROUP *, const BIGNUM *p,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 360,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_set_curve\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   void ec_GFp_simple_group_clear_finish(EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|   int ec_GFp_simple_group_copy(EC_GROUP *, const EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|-> int ec_GFp_simple_group_set_curve(EC_GROUP *, const BIGNUM *p,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|                                     const BIGNUM *a, const BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|   int ec_GFp_simple_group_get_curve(const EC_GROUP *, BIGNUM *p, BIGNUM *a,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 362,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_get_curve\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   int ec_GFp_simple_group_set_curve(EC_GROUP *, const BIGNUM *p,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|                                     const BIGNUM *a, const BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|-> int ec_GFp_simple_group_get_curve(const EC_GROUP *, BIGNUM *p, BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|                                     BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|   int ec_GFp_simple_group_get_degree(const EC_GROUP *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 364,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_get_degree\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  362|   int ec_GFp_simple_group_get_curve(const EC_GROUP *, BIGNUM *p, BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|                                     BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|-> int ec_GFp_simple_group_get_degree(const EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|   int ec_GFp_simple_group_check_discriminant(const EC_GROUP *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|   int ec_GFp_simple_point_init(EC_POINT *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 365,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_group_check_discriminant\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|                                     BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|   int ec_GFp_simple_group_get_degree(const EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|-> int ec_GFp_simple_group_check_discriminant(const EC_GROUP *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|   int ec_GFp_simple_point_init(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   void ec_GFp_simple_point_finish(EC_POINT *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 366,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_point_init\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|   int ec_GFp_simple_group_get_degree(const EC_GROUP *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|   int ec_GFp_simple_group_check_discriminant(const EC_GROUP *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|-> int ec_GFp_simple_point_init(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   void ec_GFp_simple_point_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|   void ec_GFp_simple_point_clear_finish(EC_POINT *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 367,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_point_finish\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|   int ec_GFp_simple_group_check_discriminant(const EC_GROUP *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|   int ec_GFp_simple_point_init(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|-> void ec_GFp_simple_point_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|   void ec_GFp_simple_point_clear_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|   int ec_GFp_simple_point_copy(EC_POINT *, const EC_POINT *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 368,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_point_clear_finish\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|   int ec_GFp_simple_point_init(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   void ec_GFp_simple_point_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|-> void ec_GFp_simple_point_clear_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|   int ec_GFp_simple_point_copy(EC_POINT *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|   int ec_GFp_simple_point_set_to_infinity(const EC_GROUP *, EC_POINT *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 369,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_point_copy\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|   void ec_GFp_simple_point_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|   void ec_GFp_simple_point_clear_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|-> int ec_GFp_simple_point_copy(EC_POINT *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|   int ec_GFp_simple_point_set_to_infinity(const EC_GROUP *, EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|   int ec_GFp_simple_set_Jprojective_coordinates_GFp(const EC_GROUP *,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 370,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_point_set_to_infinity\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  368|   void ec_GFp_simple_point_clear_finish(EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|   int ec_GFp_simple_point_copy(EC_POINT *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|-> int ec_GFp_simple_point_set_to_infinity(const EC_GROUP *, EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|   int ec_GFp_simple_set_Jprojective_coordinates_GFp(const EC_GROUP *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|                                                     EC_POINT *, const BIGNUM *x,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 371,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_set_Jprojective_coordinates_GFp\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  369|   int ec_GFp_simple_point_copy(EC_POINT *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  370|   int ec_GFp_simple_point_set_to_infinity(const EC_GROUP *, EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  371|-> int ec_GFp_simple_set_Jprojective_coordinates_GFp(const EC_GROUP *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  372|                                                     EC_POINT *, const BIGNUM *x,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|                                                     const BIGNUM *y,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 375,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_get_Jprojective_coordinates_GFp\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|                                                     const BIGNUM *y,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|                                                     const BIGNUM *z, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|-> int ec_GFp_simple_get_Jprojective_coordinates_GFp(const EC_GROUP *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|                                                     const EC_POINT *, BIGNUM *x,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|                                                     BIGNUM *y, BIGNUM *z,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 379,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_point_set_affine_coordinates\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|                                                     BIGNUM *y, BIGNUM *z,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|                                                     BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|-> int ec_GFp_simple_point_set_affine_coordinates(const EC_GROUP *, EC_POINT *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|                                                  const BIGNUM *x,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|                                                  const BIGNUM *y, BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 393,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_add\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|   int ec_GFp_simple_oct2point(const EC_GROUP *, EC_POINT *,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|                               const unsigned char *buf, size_t len, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|-> int ec_GFp_simple_add(const EC_GROUP *, EC_POINT *r, const EC_POINT *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|                         const EC_POINT *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   int ec_GFp_simple_dbl(const EC_GROUP *, EC_POINT *r, const EC_POINT *a,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 395,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_dbl\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|   int ec_GFp_simple_add(const EC_GROUP *, EC_POINT *r, const EC_POINT *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|                         const EC_POINT *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|-> int ec_GFp_simple_dbl(const EC_GROUP *, EC_POINT *r, const EC_POINT *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|                         BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|   int ec_GFp_simple_invert(const EC_GROUP *, EC_POINT *, BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 397,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_invert\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   int ec_GFp_simple_dbl(const EC_GROUP *, EC_POINT *r, const EC_POINT *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|                         BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|-> int ec_GFp_simple_invert(const EC_GROUP *, EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|   int ec_GFp_simple_is_at_infinity(const EC_GROUP *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|   int ec_GFp_simple_is_on_curve(const EC_GROUP *, const EC_POINT *, BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 398,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_is_at_infinity\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|                         BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|   int ec_GFp_simple_invert(const EC_GROUP *, EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|-> int ec_GFp_simple_is_at_infinity(const EC_GROUP *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|   int ec_GFp_simple_is_on_curve(const EC_GROUP *, const EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|   int ec_GFp_simple_cmp(const EC_GROUP *, const EC_POINT *a, const EC_POINT *b,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 399,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_is_on_curve\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|   int ec_GFp_simple_invert(const EC_GROUP *, EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|   int ec_GFp_simple_is_at_infinity(const EC_GROUP *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|-> int ec_GFp_simple_is_on_curve(const EC_GROUP *, const EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|   int ec_GFp_simple_cmp(const EC_GROUP *, const EC_POINT *a, const EC_POINT *b,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|                         BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 400,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_cmp\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  398|   int ec_GFp_simple_is_at_infinity(const EC_GROUP *, const EC_POINT *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  399|   int ec_GFp_simple_is_on_curve(const EC_GROUP *, const EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|-> int ec_GFp_simple_cmp(const EC_GROUP *, const EC_POINT *a, const EC_POINT *b,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|                         BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   int ec_GFp_simple_make_affine(const EC_GROUP *, EC_POINT *, BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 402,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_make_affine\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|   int ec_GFp_simple_cmp(const EC_GROUP *, const EC_POINT *a, const EC_POINT *b,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|                         BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|-> int ec_GFp_simple_make_affine(const EC_GROUP *, EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|   int ec_GFp_simple_points_make_affine(const EC_GROUP *, size_t num,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|                                        EC_POINT *[], BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 403,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_points_make_affine\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|                         BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   int ec_GFp_simple_make_affine(const EC_GROUP *, EC_POINT *, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|-> int ec_GFp_simple_points_make_affine(const EC_GROUP *, size_t num,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|                                        EC_POINT *[], BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|   int ec_GFp_simple_field_mul(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 409,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: ignoring conflicting function declarations \"ec_GFp_simple_field_inv\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  407|   int ec_GFp_simple_field_sqr(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  408|                               BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  409|-> int ec_GFp_simple_field_inv(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  410|                               BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|   int ec_GFp_simple_blind_coordinates(const EC_GROUP *group, EC_POINT *p,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 443,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_GFp_nist_group_copy\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  441|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  442|   /* method functions in ecp_nist.c */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  443|-> int ec_GFp_nist_group_copy(EC_GROUP *dest, const EC_GROUP *src);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|   int ec_GFp_nist_group_set_curve(EC_GROUP *, const BIGNUM *p, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|                                   const BIGNUM *b, BN_CTX *);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 446,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_GFp_nist_field_mul\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  444|   int ec_GFp_nist_group_set_curve(EC_GROUP *, const BIGNUM *p, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  445|                                   const BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|-> int ec_GFp_nist_field_mul(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|                             const BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|   int ec_GFp_nist_field_sqr(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 448,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_GFp_nist_field_sqr\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  446|   int ec_GFp_nist_field_mul(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  447|                             const BIGNUM *b, BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|-> int ec_GFp_nist_field_sqr(const EC_GROUP *, BIGNUM *r, const BIGNUM *a,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|                             BN_CTX *);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|   ",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 591,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_group_simple_order_bits\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  589|                                        unsigned char *digit, unsigned char in);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  590|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  591|-> int ec_group_simple_order_bits(const EC_GROUP *group);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  592|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  593|   #ifdef ECP_NISTZ256_ASM",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 606,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_key_simple_priv2oct\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|-> size_t ec_key_simple_priv2oct(const EC_KEY *eckey,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|                                 unsigned char *buf, size_t len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   int ec_key_simple_oct2priv(EC_KEY *eckey, const unsigned char *buf, size_t len);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 608,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_key_simple_oct2priv\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   size_t ec_key_simple_priv2oct(const EC_KEY *eckey,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|                                 unsigned char *buf, size_t len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|-> int ec_key_simple_oct2priv(EC_KEY *eckey, const unsigned char *buf, size_t len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   int ec_key_simple_generate_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   int ec_key_simple_generate_public_key(EC_KEY *eckey);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 609,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_key_simple_generate_key\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  607|                                 unsigned char *buf, size_t len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   int ec_key_simple_oct2priv(EC_KEY *eckey, const unsigned char *buf, size_t len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|-> int ec_key_simple_generate_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   int ec_key_simple_generate_public_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|   int ec_key_simple_check_key(const EC_KEY *eckey);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 610,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_key_simple_generate_public_key\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  608|   int ec_key_simple_oct2priv(EC_KEY *eckey, const unsigned char *buf, size_t len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   int ec_key_simple_generate_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|-> int ec_key_simple_generate_public_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|   int ec_key_simple_check_key(const EC_KEY *eckey);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 611,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ec_key_simple_check_key\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  609|   int ec_key_simple_generate_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  610|   int ec_key_simple_generate_public_key(EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  611|-> int ec_key_simple_check_key(const EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  612|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|   int ec_curve_nid_from_params(const EC_GROUP *group, BN_CTX *ctx);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 649,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ecdh_simple_compute_key\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|   int ossl_ecdh_compute_key(unsigned char **pout, size_t *poutlen,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|                             const EC_POINT *pub_key, const EC_KEY *ecdh);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  649|-> int ecdh_simple_compute_key(unsigned char **pout, size_t *poutlen,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  650|                               const EC_POINT *pub_key, const EC_KEY *ecdh);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  651|   ",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 669,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ecdsa_simple_sign_setup\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|   int ossl_ecdsa_verify_sig(const unsigned char *dgst, int dgst_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|                             const ECDSA_SIG *sig, EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|-> int ecdsa_simple_sign_setup(EC_KEY *eckey, BN_CTX *ctx_in, BIGNUM **kinvp,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|                               BIGNUM **rp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|   ECDSA_SIG *ecdsa_simple_sign_sig(const unsigned char *dgst, int dgst_len,",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 671,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ecdsa_simple_sign_sig\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  669|   int ecdsa_simple_sign_setup(EC_KEY *eckey, BN_CTX *ctx_in, BIGNUM **kinvp,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  670|                               BIGNUM **rp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  671|-> ECDSA_SIG *ecdsa_simple_sign_sig(const unsigned char *dgst, int dgst_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|                                    const BIGNUM *in_kinv, const BIGNUM *in_r,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|                                    EC_KEY *eckey);",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ec_local.h",
                    "line": 674,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"ecdsa_simple_verify_sig\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  672|                                    const BIGNUM *in_kinv, const BIGNUM *in_r,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  673|                                    EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  674|-> int ecdsa_simple_verify_sig(const unsigned char *dgst, int dgst_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  675|                               const ECDSA_SIG *sig, EC_KEY *eckey);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  676|   ",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ecp_nistp521.c",
                    "line": 1620,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_GFp_nistp521_method\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1618|   };",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1619|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1620|-> const EC_METHOD *EC_GFp_nistp521_method(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1621|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1622|       static const EC_METHOD ret = {",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ecp_nistp521.c",
                    "line": 1711,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_nistp521_pre_comp_dup\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1709|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1710|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1711|-> NISTP521_PRE_COMP *EC_nistp521_pre_comp_dup(NISTP521_PRE_COMP *p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1712|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1713|       int i;",
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
                    "file_name": "openssl-1.1.1l/crypto/ec/ecp_nistp521.c",
                    "line": 1719,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_nistp521_pre_comp_free\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1717|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1718|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1719|-> void EC_nistp521_pre_comp_free(NISTP521_PRE_COMP *p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1720|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1721|       int i;",
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
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 62,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'FIPS_drbg_health_check'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_locl.h",
                    "line": 62,
                    "column": 43,
                    "event": "warning[-Wunused-value]",
                    "message": "statement with no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62 | # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 762,
                    "column": 5,
                    "event": "note",
                    "message": "in expansion of macro 'fips_post_started'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762 |     fips_post_started(FIPS_TEST_DRBG, dctx->type, &dctx->xflags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |     ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   60|                   goto err",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|-> # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   # define fips_post_failed(id, subid, ex) 1",
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
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_locl.h",
                    "line": 63,
                    "column": 43,
                    "event": "warning[-Wunused-value]",
                    "message": "statement with no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63 | # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                           ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 769,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'fips_post_success'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769 |         fips_post_success(FIPS_TEST_DRBG, dctx->type, &dctx->xflags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   # define fips_post_corrupt(id, subid, ex) 1",
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
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_locl.h",
                    "line": 64,
                    "column": 42,
                    "event": "warning[-Wunused-value]",
                    "message": "statement with no effect",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64 | # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/crypto/fips/fips_drbg_selftest.c",
                    "line": 771,
                    "column": 9,
                    "event": "note",
                    "message": "in expansion of macro 'fips_post_failed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  771 |         fips_post_failed(FIPS_TEST_DRBG, dctx->type, &dctx->xflags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   # define fips_post_started(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|   # define fips_post_success(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|-> # define fips_post_failed(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   # define fips_post_corrupt(id, subid, ex) 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   66|   # define fips_post_status() 1",
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
                    "file_name": "openssl-1.1.1l/include/internal/refcount.h",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'CRYPTO_UP_REF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/include/internal/refcount.h",
                    "line": 34,
                    "column": 1,
                    "event": "warning",
                    "message": "function '__atomic_fetch_add_S32' in module '' is shadowed by a definition in module ''",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   static inline int CRYPTO_UP_REF(_Atomic int *val, int *ret, void *lock)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|->     *ret = atomic_fetch_add_explicit(val, 1, memory_order_relaxed) + 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|       return 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   }",
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
                    "file_name": "openssl-1.1.1l/include/internal/refcount.h",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'CRYPTO_DOWN_REF'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/include/internal/refcount.h",
                    "line": 50,
                    "column": 1,
                    "event": "warning",
                    "message": "function '__atomic_fetch_sub_S32' in module '' is shadowed by a definition in module ''",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   static inline int CRYPTO_DOWN_REF(_Atomic int *val, int *ret, void *lock)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|->     *ret = atomic_fetch_sub_explicit(val, 1, memory_order_relaxed) - 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|       if (*ret == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|           atomic_thread_fence(memory_order_acquire);",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 160,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_GROUP_get0_generator\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|    *  \\return the currently used generator (possibly NULL).",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|-> const EC_POINT *EC_GROUP_get0_generator(const EC_GROUP *group);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|   /** Returns the montgomery data for order(Generator)",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 428,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_POINT_new\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|    *  \\return newly created EC_POINT object or NULL if an error occurred",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  427|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  428|-> EC_POINT *EC_POINT_new(const EC_GROUP *group);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  429|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  430|   /** Frees a EC_POINT object",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 433,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_POINT_free\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|    *  \\param  point  EC_POINT object to be freed",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|-> void EC_POINT_free(EC_POINT *point);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   /** Clears and frees a EC_POINT object",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 477,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_POINT_set_Jprojective_coordinates_GFp\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|    *  \\return 1 on success and 0 if an error occurred",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  477|-> int EC_POINT_set_Jprojective_coordinates_GFp(const EC_GROUP *group,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  478|                                                EC_POINT *p, const BIGNUM *x,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  479|                                                const BIGNUM *y, const BIGNUM *z,",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 504,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_POINT_set_affine_coordinates\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|    *  \\return 1 on success and 0 if an error occurred",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|-> int EC_POINT_set_affine_coordinates(const EC_GROUP *group, EC_POINT *p,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|                                       const BIGNUM *x, const BIGNUM *y,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|                                       BN_CTX *ctx);",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 706,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_POINT_is_at_infinity\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  704|    *  \\return 1 if the point is the neutral element and 0 otherwise",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  705|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  706|-> int EC_POINT_is_at_infinity(const EC_GROUP *group, const EC_POINT *p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  707|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  708|   /** Checks whether the point is on the curve",
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
                    "file_name": "openssl-1.1.1l/include/openssl/ec.h",
                    "line": 724,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: pointer parameter types differ between declaration and definition \"EC_POINT_cmp\"",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  722|    *  \\return 1 if the points are not equal, 0 if they are, or -1 on error",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  723|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  724|-> int EC_POINT_cmp(const EC_GROUP *group, const EC_POINT *a, const EC_POINT *b,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  725|                    BN_CTX *ctx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  726|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/ssl/ssl_ciph.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'ssl_create_cipher_list'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/ssl/ssl_ciph.c",
                    "line": 1474,
                    "column": 19,
                    "event": "warning[-Wdiscarded-qualifiers]",
                    "message": "initialization discards 'const' qualifier from pointer target type",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474 |         char *p = rule_str + 14;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/ssl/ssl_ciph.c",
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
                    "message": " 1472|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1473|       if (rule_str != NULL && strncmp(rule_str, \"PROFILE=SYSTEM\", 14) == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1474|->         char *p = rule_str + 14;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1475|       ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1476|           new_rules = load_system_str(p);",
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
                    "file_name": "openssl-1.1.1l/test/cipherlist_test.c",
                    "line": 197,
                    "column": 12,
                    "event": "warning[-Wunused-function]",
                    "message": "'test_default_cipherlist_implicit' defined but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197 | static int test_default_cipherlist_implicit(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
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
                    "message": "  195|       EXECUTE_TEST(execute_test, tear_down)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  196|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  197|-> static int test_default_cipherlist_implicit(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|       SETUP_CIPHERLIST_TEST_FIXTURE();",
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
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 150,
                    "column": 15,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'P_160'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |               ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
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
                    "message": "  148|       BIGNUM *p = NULL, *a = NULL, *b = NULL, *scalar3 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|       EC_GROUP *group = NULL, *tmp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|->     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                *P_256 = NULL, *P_384 = NULL, *P_521 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|       EC_POINT *P = NULL, *Q = NULL, *R = NULL;",
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
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 150,
                    "column": 30,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'P_192'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150 |     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                              ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|       BIGNUM *p = NULL, *a = NULL, *b = NULL, *scalar3 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|       EC_GROUP *group = NULL, *tmp = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|->     EC_GROUP *P_160 = NULL, *P_192 = NULL, *P_224 = NULL,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                *P_256 = NULL, *P_384 = NULL, *P_521 = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|       EC_POINT *P = NULL, *Q = NULL, *R = NULL;",
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
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 156,
                    "column": 19,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'buf' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156 |     unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|       const EC_POINT *points[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|       const BIGNUM *scalars[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|->     unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|       size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|       int k;",
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
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 157,
                    "column": 12,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'len'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157 |     size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |            ^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|       const BIGNUM *scalars[4];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|       unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|->     size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|       int k;",
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
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'prime_field_tests'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/ectest.c",
                    "line": 158,
                    "column": 9,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'k'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158 |     int k;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  156|       unsigned char buf[100];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  157|       size_t len, r = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  158|->     int k;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  159|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|       if (!TEST_ptr(ctx = BN_CTX_new())",
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
                    "file_name": "openssl-1.1.1l/test/packettest.c",
                    "line": 11,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/packettest.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'test_PACKET_buf_init'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/packettest.c",
                    "line": 309,
                    "column": 20,
                    "event": "warning[-Wmaybe-uninitialized]",
                    "message": "'buf1' may be used uninitialized",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309 |     if (!TEST_true(PACKET_buf_init(&pkt, buf1, 4))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/testutil.h",
                    "line": 360,
                    "column": 66,
                    "event": "note",
                    "message": "in definition of macro 'TEST_true'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360 | # define TEST_true(a)         test_true(__FILE__, __LINE__, #a, (a) != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                                                  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/packettest.c",
                    "line": 10,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/ssl/packet_local.h",
                    "line": 68,
                    "column": 31,
                    "event": "note",
                    "message": "by argument 2 of type 'const unsigned char *' to 'PACKET_buf_init' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   68 | __owur static ossl_inline int PACKET_buf_init(PACKET *pkt,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                               ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/packettest.c",
                    "line": 305,
                    "column": 19,
                    "event": "note",
                    "message": "'buf1' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305 |     unsigned char buf1[BUF_LEN];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                   ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "openssl-1.1.1l/test/packettest.c",
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
                    "message": "  307|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  308|       /* Also tests PACKET_remaining() */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  309|->     if (!TEST_true(PACKET_buf_init(&pkt, buf1, 4))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  310|               || !TEST_size_t_eq(PACKET_remaining(&pkt), 4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  311|               || !TEST_true(PACKET_buf_init(&pkt, buf1, BUF_LEN))",
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
                    "file_name": "openssl-1.1.1l/test/testutil/test_cleanup.c",
                    "line": 12,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'cleanup_tests' in module 'test_cleanup' is shadowed by a definition in module 'ec_internal_test'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   10|   #include \"../testutil.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   11|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   12|-> void cleanup_tests(void)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   13|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   14|   }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
