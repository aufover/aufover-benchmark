{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gnutls-3.7.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/cbmc/output",
        "time-created": "2023-01-30 06:55:29",
        "time-finished": "2023-01-30 07:16:42",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/gnutls-3.7.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-cert-select'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-cert-select-pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-client-anon'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-client-dtls'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-client-psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-client-resume'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-client-srp'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-client-x509'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-serv-anon'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-serv-dtls'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-serv-psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-serv-srp'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/doc/examples/ex-client-x509-3.1.c",
                    "line": 35,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'main' in module 'ex-client-x509-3.1' is shadowed by a definition in module 'ex-serv-x509'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   static int _verify_certificate_callback(gnutls_session_t session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|-> int main(void)",
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
                    "message": "   37|           int ret, sd, ii;",
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
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"certtool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 2751,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2751 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/certtool-args.c",
                    "line": 2930,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2930 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2749|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2750|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2751|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2752|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2753|   #else",
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
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"cli-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 2073,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2073 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/cli-args.c",
                    "line": 2314,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2314 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2071|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2072|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2073|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2074|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2075|   #else",
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
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"cli-debug-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 345,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/cli-debug-args.c",
                    "line": 503,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|   #else",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 137,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_oid_get_entry' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|   \tfor (j = 0; j < cert_list_size; j++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|-> \t\tgnutls_datum_t cinfo;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|   \t\tret = gnutls_x509_crt_init(&crt);",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 153,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_ldap_string_to_oid' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|   \t\t\treturn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  154|   \t\tlog_msg(out, \"- Certificate[%d] info:\\n - \", j);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  155|   \t\tif (flag == GNUTLS_CRT_PRINT_COMPACT && j > 0)",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 233,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_x509_dn_oid_known' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  231|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  232|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  233|-> }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  234|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  235|   /* returns false (0) if not verified, or true (1) otherwise ",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 252,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_x509_dn_oid_name' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  250|   \t\tdata[elements].data = (void*)hostname;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  251|   \t\telements++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  252|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  253|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  254|   \tif (purpose) {",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 413,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_dn_to_string' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  411|   \tdesc = gnutls_session_get_desc(session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  412|   \tlog_msg(stdout, \"- Description: %s\\n\", desc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  413|-> \tgnutls_free(desc);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  414|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  415|   \t/* print session ID */",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 500,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_san_find_type' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|   \t\t    SU(gnutls_protocol_get_name(version));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|   \t\tlog_msg(stdout, \"- Version: %s\\n\", tmp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|   \t\tif (version < GNUTLS_TLS1_3) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|   \t\t\ttmp = SU(gnutls_kx_get_name(kx));",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 524,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_export_int_named' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|   \t\tlog_msg(stdout, \"- Cipher: %s\\n\", tmp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  524|-> \t\ttmp = SU(gnutls_mac_get_name(gnutls_mac_get(session)));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|   \t\tlog_msg(stdout, \"- MAC: %s\\n\", tmp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|   \t}",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 569,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_export_int_named2' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  567|   \t\t\tlog_msg(stdout, \"- Channel binding 'tls-unique': \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  568|   \t\t\tfor (i = 0; i < cb.size; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  569|-> \t\t\t\tlog_msg(stdout, \"%02x\", cb.data[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  570|   \t\t\tlog_msg(stdout, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  571|   \t\t\tgnutls_free(cb.data);",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 604,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_decode_string' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|   \t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   \tcase GNUTLS_CRT_RAWPK:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|-> \t\tprint_rawpk_info(session, out, flag, print_cert, print_crt_status);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   \t\tbreak;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|   \tdefault:",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 744,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_read_value' in module 'pk' is shadowed by a definition in module 'pk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  742|   \t\t\t\t\tlog_msg(stdout, \"\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  743|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  744|-> \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  745|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  746|   \t\t{",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 751,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_read_null_value' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  749|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  750|   \t\t\tlog_msg(stdout, \"Groups: \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  751|-> \t\t\tif (ret == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  752|   \t\t\t\tlog_msg(stdout, \"none\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  753|   \t\t\tfor (i = 0; i < (unsigned) ret; i++) {",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 764,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_read_string' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  762|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  763|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|-> \t\t\tret = gnutls_priority_sign_list(pcache, &list);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|   \t\t\tlog_msg(stdout, \"PK-signatures: \");",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 819,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_encode_string' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  817|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  818|   \t\tlog_msg(stdout, \"Protocols: \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  819|-> \t\tfor (; *p; p++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  820|   \t\t\tlog_msg(stdout, \"VERS-%s\", gnutls_protocol_get_name(*p));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  821|   \t\t\tif (*(p + 1))",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 854,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_der_encode' in module 'dh' is shadowed by a definition in module 'dh'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  852|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  853|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  854|-> \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  855|   \t\tconst gnutls_digest_algorithm_t *p = gnutls_digest_list();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  856|   ",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 935,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_der_encode_and_copy' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  933|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  934|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  935|-> void",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  936|   print_key_material(gnutls_session_t session, const char *label, size_t size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  937|   {",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 968,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_write_value' in module 'vko' is shadowed by a definition in module 'vko'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  966|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  967|    out:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  968|-> \tgnutls_free(bin.data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  969|   \tgnutls_free(hex.data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  970|   }",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 987,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_write_string' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|   \t\t\tgnutls_rehandshake(session);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   \t\t\treturn 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|-> \t\t} else if (strncmp",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  988|   \t\t    (str, \"**REAUTH**\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  989|   \t\t     sizeof(\"**REAUTH**\") - 1) == 0) {",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1016,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_asnstr_append_name' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1014|   \t\t\t\t\tfprintf(stderr,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1015|   \t\t\t\t\t\t\"No heartbeat in this session\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1016|-> \t\t\t\t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1017|   \t\t\t\t\tfprintf(stderr, \"ping: %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1018|   \t\t\t\t\t\tgnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1034,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_encode_and_copy_PKI_params' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1032|   \tsize_t len;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1033|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1034|-> \ttmp = getpass(prompt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1035|   \tif (tmp == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1036|   \t\tpass[0] = 0;",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1103,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_encode_PKI_params' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1101|   \t\tif (info && info->pin)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1102|   \t\t\tsnprintf(password, sizeof(password), \"%s\", info->pin);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1103|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1104|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1105|   \tif (flags & GNUTLS_PIN_FINAL_TRY) {",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1140,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_get_pk_algorithm' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1138|   \tif (password[0] == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1139|   \t\tgetenv_copy(password, sizeof(password), env);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1140|-> \t\tif (password[0] == 0) /* compatibility */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1141|   \t\t\tgetenv_copy(password, sizeof(password), \"GNUTLS_PIN\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1142|   \t}",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1198,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_get_signed_data' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1196|   \t\tcached_url = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1197|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1198|-> \treturn 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1199|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1200|   ",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1246,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_get_signature_algorithm' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1244|   \tsignal(SIGPIPE, SIG_IGN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1245|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1246|-> }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1247|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1248|   ",
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1305,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_get_signature' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1444,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_encode_and_write_attribute' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1526,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_strdatum_to_buf' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1550,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_get_raw_field2' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1575,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_copy_string' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1598,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_copy_data' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1615,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'x509_crt_to_raw_pubkey' in module 'pkcs11_write' is shadowed by a definition in module 'pkcs11_write'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1646,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_raw_crt_to_raw_pubkey' in module 'verify-tofu' is shadowed by a definition in module 'verify-tofu'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1670,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_check_valid_key_id' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1740,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_sort_clist' in module 'pcert' is shadowed by a definition in module 'pcert'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1810,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_check_if_sorted' in module 'pcert' is shadowed by a definition in module 'pcert'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1845,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_gost_paramset_get_name' in module 'common' is shadowed by a definition in module 'certtool-common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1845,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_gost_paramset_get_name' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1875,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_gost_paramset_get_oid' in module 'vko' is shadowed by a definition in module 'vko'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1905,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_oid_to_gost_paramset' in module 'vko' is shadowed by a definition in module 'vko'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/common.c",
                    "line": 1921,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_get_version' in module 'common' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"danetool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 962,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/danetool-args.c",
                    "line": 1141,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1141 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  960|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  961|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  962|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  963|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  964|   #else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 704,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.h",
                    "line": 49,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 43,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'AO_gettext'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/autoopts/options.h",
                    "line": 91,
                    "column": 29,
                    "event": "warning[-Wbad-function-cast]",
                    "message": "cast from function call of type 'char *' to non-matching type 'long unsigned int'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91 | #define VOIDP(_a)  ((void *)(uintptr_t)(_a))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                             ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 573,
                    "column": 27,
                    "event": "note",
                    "message": "in expansion of macro 'VOIDP'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  573 |             res = (char *)VOIDP(_(pz));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                           ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|    * the \"uintptr_t\" type.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|-> #define VOIDP(_a)  ((void *)(uintptr_t)(_a))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   /**",
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
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"ocsptool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 831,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/ocsptool-args.c",
                    "line": 1132,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  829|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  830|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  831|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  832|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  833|   #else",
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
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"p11tool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 2213,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2213 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/p11tool-args.c",
                    "line": 2560,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2560 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2211|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2212|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2213|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2214|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2215|   #else",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 132,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_rv_to_err' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|   \t\t\tret = gnutls_x509_crt_init(&crt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|   \t\t\tif (ret < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|-> \t\t\t\tgoto fail;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|   \t\t\tret = gnutls_x509_crt_import_url(crt, objurl, flags);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 278,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_pkcs11_check_init' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|   \t\tapp_exit(2);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  277|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  278|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|   \tfor (i = 0; i < crt_list_size; i++) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|   \t\tchar buf[256];",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 379,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_add_provider' in module 'pkcs11' is shadowed by a definition in module 'certtool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   \t\t\tfprintf(outfile, \"\\tID: %s\\n\", buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   \t\tif (otype == GNUTLS_PKCS11_OBJ_X509_CRT && print_exts > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t\t\tret = gnutls_pkcs11_obj_get_exts(crt_list[i], &exts, &exts_size, 0);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 379,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_add_provider' in module 'pkcs11' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   \t\t\tfprintf(outfile, \"\\tID: %s\\n\", buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   \t\tif (otype == GNUTLS_PKCS11_OBJ_X509_CRT && print_exts > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t\t\tret = gnutls_pkcs11_obj_get_exts(crt_list[i], &exts, &exts_size, 0);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 379,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_add_provider' in module 'pkcs11' is shadowed by a definition in module 'p11tool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   \t\t\tfprintf(outfile, \"\\tID: %s\\n\", buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   \t\tif (otype == GNUTLS_PKCS11_OBJ_X509_CRT && print_exts > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t\t\tret = gnutls_pkcs11_obj_get_exts(crt_list[i], &exts, &exts_size, 0);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 379,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_add_provider' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   \t\t\tfprintf(outfile, \"\\tID: %s\\n\", buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|   \t\tif (otype == GNUTLS_PKCS11_OBJ_X509_CRT && print_exts > 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   \t\t\tret = gnutls_pkcs11_obj_get_exts(crt_list[i], &exts, &exts_size, 0);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 500,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_set_info' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|   \tret = gnutls_pubkey_verify_data2(pubkey, sig_algo,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|   \t\t\t\t\t 0, &data, &sig);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|-> \tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|   \t\tfprintf(stderr, \"Cannot verify signed data: %s\\n\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|   \t\t\tgnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 637,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_get_info' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  635|   \t\t\t\t__LINE__, gnutls_strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  636|   \t\tapp_exit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  637|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  638|   \tfwrite(t.data, 1, t.size, outfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  639|   \tfputs(\"\\n\\n\", outfile);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 732,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_get_ptr' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  730|   \t\tfputs(\"Generic token\", outfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  731|   \tfputc('\\n', outfile);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  732|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  733|   \tprint = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  734|   \tfputs(\"\\tFlags: \", outfile);",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 767,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_get_info' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|   \t\tprint++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  768|   \tif (flags & GNUTLS_PKCS11_TOKEN_USER_PIN_FINAL_TRY) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  769|   \t\tif (print != 0)",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 985,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_init' in module 'pkcs11' is shadowed by a definition in module 'certtool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|   \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|-> \t\tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   \t\t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|   \t\t\t\t__LINE__, gnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 985,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_init' in module 'pkcs11' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|   \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|-> \t\tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   \t\t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|   \t\t\t\t__LINE__, gnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 985,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_init' in module 'pkcs11' is shadowed by a definition in module 'p11tool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|   \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|-> \t\tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   \t\t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|   \t\t\t\t__LINE__, gnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 985,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_init' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|   \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  985|-> \t\tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  986|   \t\t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  987|   \t\t\t\t__LINE__, gnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1065,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_reinit' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1063|   \t\tfprintf(stderr, \"error: cannot export public key\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1064|   \t\treturn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1065|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1066|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1067|   \tret =",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1089,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_deinit' in module 'global' is shadowed by a definition in module 'certtool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|   \t\tret =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|-> \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|   \t\tif (ret < 0) {",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1089,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_deinit' in module 'global' is shadowed by a definition in module 'danetool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|   \t\tret =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|-> \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|   \t\tif (ret < 0) {",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1089,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_deinit' in module 'global' is shadowed by a definition in module 'global'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|   \t\tret =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|-> \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|   \t\tif (ret < 0) {",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1089,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_deinit' in module 'global' is shadowed by a definition in module 'p11tool'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1087|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1088|   \t\tret =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1089|-> \t\t    gnutls_pkcs11_obj_export_url(obj_list[i], 0,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1090|   \t\t\t\t\t\t &purl);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1091|   \t\tif (ret < 0) {",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1130,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_set_token_function' in module 'pkcs11' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1128|   \t\t\tfprintf(stderr, \"error: cannot export pubkey '%s': %s\\n\", purl, gnutls_strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1129|   \t\t\tgoto cont;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1130|-> \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1131|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1132|   ",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1137,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_url_to_info' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1135|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1136|   \t\t\tsize = sizeof(buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1137|-> \t\t\tret =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1138|   \t\t\t    gnutls_pkcs11_obj_get_info(obj_list[i],",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1139|   \t\t\t\t\t       GNUTLS_PKCS11_OBJ_ID,",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1189,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_info_to_url' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1187|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1188|   \tFIX(url, outfile, 0, info);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1189|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1190|   \tCHECK_LOGIN_FLAG(url, flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1191|   \tif (label == NULL && info->batch == 0) {",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1230,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_init' in module 'pubkey' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1228|   \t\t\t/* try without login */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1229|   \t\t\tfind_same_pubkey_with_id(url, xcrt, &cid, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231|   \t\t\tif (cid.data == NULL && KEEP_LOGIN_FLAGS(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232|   \t\t\t\tfind_same_pubkey_with_id(url, xcrt, &cid, KEEP_LOGIN_FLAGS(flags));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1230,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_init' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1228|   \t\t\t/* try without login */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1229|   \t\t\tfind_same_pubkey_with_id(url, xcrt, &cid, 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1230|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1231|   \t\t\tif (cid.data == NULL && KEEP_LOGIN_FLAGS(flags))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1232|   \t\t\t\tfind_same_pubkey_with_id(url, xcrt, &cid, KEEP_LOGIN_FLAGS(flags));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1261,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_set_pin_function' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1259|   \t\t\tfprintf(stderr, \"Error writing certificate: %s\\n\", gnutls_strerror(ret));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1260|   \t\t\tif (((flags & GNUTLS_PKCS11_OBJ_FLAG_MARK_CA) ||",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1261|-> \t\t\t     (flags & GNUTLS_PKCS11_OBJ_FLAG_MARK_TRUSTED)) &&",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1262|   \t\t\t    (flags & GNUTLS_PKCS11_OBJ_FLAG_LOGIN_SO) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1263|   \t\t\t\tfprintf(stderr, \"note: some tokens may require security officer login for this operation\\n\");",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1277,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_deinit' in module 'pubkey' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1275|   \t\t\t\t\t\t     &cid, key_usage|info->key_usage,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1276|   \t\t\t\t\t\t     flags |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1277|-> \t\t\t\t\t\t     GNUTLS_PKCS11_OBJ_FLAG_MARK_SENSITIVE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1278|   \t\tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1279|   \t\t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__,",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1277,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_deinit' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1275|   \t\t\t\t\t\t     &cid, key_usage|info->key_usage,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1276|   \t\t\t\t\t\t     flags |",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1277|-> \t\t\t\t\t\t     GNUTLS_PKCS11_OBJ_FLAG_MARK_SENSITIVE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1278|   \t\tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1279|   \t\t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__,",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1308,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_export' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1306|   \tUNFIX;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1307|   \treturn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1308|-> }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1309|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1310|   void",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1344,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_export2' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1342|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1343|   \tif (label == NULL && info->batch == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1344|-> \t\tlabel = read_str(\"warning: Label was not specified.\\nLabel: \");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1345|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1346|   ",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1367,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_export3' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1365|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1366|   \tUNFIX;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1367|-> \treturn;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1368|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1369|   ",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1432,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_find_slot' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1430|   \t\tfprintf(stderr, \"error: no token URL given to initialize!\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1431|   \t\tapp_exit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1432|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1433|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1434|   \tif (label == NULL) {",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1500,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_open_session' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1498|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1499|   \tif (newpin[0] == 0 || newpin[0] == '\\n') {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1500|-> \t\tfprintf(stderr, \"No PIN was given to change\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1501|   \t\tapp_exit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1502|   \t}",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1550,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_pkcs11_traverse_tokens' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1548|   \t\t\t\tif (minfo.flags & CKF_HW)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1549|   \t\t\t\t\tprintf(\" hw\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1550|-> \t\t\t\tif (minfo.flags & CKF_ENCRYPT)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1551|   \t\t\t\t\tprintf(\" encrypt\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1552|   \t\t\t\tif (minfo.flags & CKF_DECRYPT)",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1668,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_type_to_class' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1666|   \tret =",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1667|   \t    gnutls_pkcs11_obj_set_info(obj, val_type, val, strlen(val), flags);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1668|-> \tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1669|   \t\tfprintf(stderr, \"Error in %s:%d: %s\\n\", __func__, __LINE__,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1670|   \t\t\tgnutls_strerror(ret));",
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 1771,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_read_pubkey' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2286,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_obj_flags_to_int' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2323,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_import_url' in module 'pubkey' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2323,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_import_url' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2431,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_pkcs11_token_get_url' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2480,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_token_get_url' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2508,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_token_get_info' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2605,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_token_get_ptr' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2656,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_export_url' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2682,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_get_type' in module 'pubkey' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2682,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_get_type' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2834,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_retrieve_pin' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 2890,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_login' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3008,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'pkcs11_call_token_func' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3448,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_list_import_url3' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3508,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_list_import_url4' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3572,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_x509_crt_import_pkcs11' in module 'pubkey' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3572,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_x509_crt_import_pkcs11' in module 'pubkey' is shadowed by a definition in module 'pubkey'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3595,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_x509_crt_import_pkcs11_url' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3647,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_x509_crt_list_import_pkcs11' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3722,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_token_get_flags' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3814,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_token_get_mechanism' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3876,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_token_check_mechanism' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 3934,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_type_get_name' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4299,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_get_raw_issuer' in module 'urls' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4299,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_get_raw_issuer' in module 'urls' is shadowed by a definition in module 'urls'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4405,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_get_raw_issuer_by_dn' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4490,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_get_raw_issuer_by_subject_key_id' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4561,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_pkcs11_crt_is_known' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4709,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_crt_is_known' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4730,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_get_flags' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/pkcs11.c",
                    "line": 4749,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_pkcs11_obj_flags_get_str' in module 'pkcs11' is shadowed by a definition in module 'pkcs11'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 46,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_free_client_credentials' in module 'psk' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <gnutls/crypto.h>\t/* for random */",
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
                    "message": "   46|-> #include <stdbool.h>",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   #include <sys/types.h>",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   #include <sys/stat.h>",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 46,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_free_client_credentials' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <gnutls/crypto.h>\t/* for random */",
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
                    "message": "   46|-> #include <stdbool.h>",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|   #include <sys/types.h>",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|   #include <sys/stat.h>",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 63,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_set_psk_session_key' in module 'dh_common' is shadowed by a definition in module 'dh_common'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   #include \"xsize.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> static int write_key(const char *username,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   \t\t     const unsigned char *key, size_t key_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   \t\t     const char *passwd_file);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 63,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_allocate_client_credentials' in module 'psk' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   #include \"xsize.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> static int write_key(const char *username,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   \t\t     const unsigned char *key, size_t key_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   \t\t     const char *passwd_file);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 63,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_allocate_client_credentials' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   61|   #include \"xsize.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   62|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   63|-> static int write_key(const char *username,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   64|   \t\t     const unsigned char *key, size_t key_size,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   65|   \t\t     const char *passwd_file);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 95,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_client_credentials' in module 'psk' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   \tif (!HAVE_OPT(USERNAME)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   #ifndef _WIN32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|-> \t\tpwd = getpwuid(getuid());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   \t\tif (pwd == NULL) {",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 95,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_client_credentials' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   93|   \tif (!HAVE_OPT(USERNAME)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   94|   #ifndef _WIN32",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   95|-> \t\tpwd = getpwuid(getuid());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   96|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   97|   \t\tif (pwd == NULL) {",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 125,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_gen_psk_client_kx' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|   \tif (ret < 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|   \t\tfprintf(stderr, \"Not enough randomness\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|-> \t\texit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   ",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 126,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_client_credentials2' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|   \t\tfprintf(stderr, \"Not enough randomness\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|   \t\texit(1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  127|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  128|   \tret = write_key(username, key, key_size, passwd);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 190,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_free_server_credentials' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   \tsnprintf(tmpname, sizeof(tmpname), \"%s.tmp\", passwd_file);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|-> ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|   \tif (stat(tmpname, &st) != -1) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   \t\tfprintf(stderr, \"file '%s' is locked\\n\", tmpname);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 211,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_allocate_server_credentials' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  209|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  210|   \tfp2 = fopen(tmpname, \"r\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  211|-> \tif (fp2 == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  212|   \t\tfprintf(stderr, \"Cannot open '%s' for read\\n\", tmpname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  213|   \t\t(void)remove(tmpname);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 243,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_credentials_file' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  241|   \t\t\tret = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  242|   \t\t\tgoto out;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  243|-> \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  244|   \t\tmemmove(new_data + 1, new_data, _username.size);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|   \t\tnew_data[0] = '#';",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 267,
                    "column": 1,
                    "event": "warning",
                    "message": "function '_gnutls_gen_psk_server_kx' in module 'rsa_psk' is shadowed by a definition in module 'rsa_psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|   \t\tret = -1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|   \t\tgoto out;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|-> \t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|   \tput = false;",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 283,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_credentials_hint' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|   \t\t\t\t(unsigned int) (pp - p))) == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|   \t\t\tput = true;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|-> \t\t\tfprintf(fp, \"%s:%s\\n\", _username.data, _key.data);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|   \t\t} else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|   \t\t\tfputs(line, fp);",
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 329,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_credentials_function' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 362,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_credentials_function2' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 416,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_client_credentials_function' in module 'psk' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 416,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_client_credentials_function' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 450,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_client_credentials_function2' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 474,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_server_get_username' in module 'psk' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 506,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_server_get_username2' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 540,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_client_get_hint' in module 'psk' is shadowed by a definition in module 'cli'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 540,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_client_get_hint' in module 'psk' is shadowed by a definition in module 'common'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 571,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_dh_params' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 604,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_known_dh_params' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 627,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_server_params_function' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 648,
                    "column": 1,
                    "event": "warning",
                    "message": "function 'gnutls_psk_set_params_function' in module 'psk' is shadowed by a definition in module 'psk'",
                    "verbosity_level": 0
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
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"psktool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 341,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.c",
                    "line": 499,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  340|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|   #else",
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
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"serv-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 1555,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1555 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/serv-args.c",
                    "line": 2023,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2023 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1553|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1554|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1555|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1556|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1557|   #else",
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
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"srptool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 433,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/srptool-args.c",
                    "line": 540,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  431|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  432|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|   #else",
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
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"systemkey-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 375,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/systemkey-args.c",
                    "line": 506,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  373|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  374|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  375|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  376|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  377|   #else",
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
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 42,
                    "event": "warning[-Wunused-macros]",
                    "message": "macro \"OPTION_CODE_COMPILE\" is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42 | #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ",
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
                    "message": "   40|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   #ifndef __doxygen__",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> #define OPTION_CODE_COMPILE 1",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   #include \"tpmtool-args.h\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   #include <sys/types.h>",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 569,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 738,
                    "column": 41,
                    "event": "warning[-Wparentheses]",
                    "message": "suggest parentheses around arithmetic in operand of '|'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738 | # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/tpmtool-args.c",
                    "line": 869,
                    "column": 7,
                    "event": "note",
                    "message": "in expansion of macro 'OPTPROC_BASE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  869 |     ( OPTPROC_BASE",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  736|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  737|   #if defined(ENABLE_NLS)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  738|-> # define OPTPROC_BASE OPTPROC_TRANSLATE | OPTPROC_NXLAT_OPT",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  739|     static tOptionXlateProc translate_option_strings;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  740|   #else",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
