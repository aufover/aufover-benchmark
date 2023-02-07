{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gnutls-3.7.2-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/symbiotic/output",
        "time-created": "2023-02-07 04:22:31",
        "time-finished": "2023-02-07 04:31:31",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gnutls-3.7.2-2.fc35/gnutls-3.7.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "gnutls-3.7.2/doc/examples/tlsproxy/crypto-gnutls.c",
                    "line": 79,
                    "column": 33,
                    "event": "warning[-Wunknown-warning-option]",
                    "message": "unknown warning group '-Wsuggest-attribute=format', ignored",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "# pragma GCC diagnostic ignored \"-Wsuggest-attribute=format\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   77|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   78|   #if defined __clang__ || __GNUC__ > 4 || (__GNUC__ == 4 && __GNUC_MINOR__ >= 5)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   79|-> # pragma GCC diagnostic ignored \"-Wsuggest-attribute=format\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   80|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   81|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 134,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/doc/examples/tlsproxy/crypto-gnutls.c",
                    "line": 84,
                    "column": 28,
                    "event": "warning[-Wformat-nonliteral]",
                    "message": "format string is not a string literal",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  return vfprintf (stderr, format, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   82|   static int stderrout (void *opaque, const char *format, va_list ap)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   83|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->   return vfprintf (stderr, format, ap);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 3,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/lib/x509/key_decode.c",
                    "line": 24,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/lib/gnutls_int.h",
                    "line": 299,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/lib/str.h",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/gl/gettext.h",
                    "line": 149,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'pgettext_aux'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "pgettext_aux (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|-> pgettext_aux (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|                 const char *msg_ctxt_id, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                 int category)",
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
                    "file_name": "gnutls-3.7.2/gl/gettext.h",
                    "line": 168,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "dcpgettext_expr (const char *domain,unused function 'npgettext_aux'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|-> npgettext_aux (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|                  const char *msg_ctxt_id, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|                  const char *msgid_plural, unsigned long int n,",
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
                    "file_name": "gnutls-3.7.2/gl/gettext.h",
                    "line": 168,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'npgettext_aux'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|-> npgettext_aux (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|                  const char *msg_ctxt_id, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|                  const char *msgid_plural, unsigned long int n,",
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
                    "file_name": "gnutls-3.7.2/gl/gettext.h",
                    "line": 219,
                    "column": 1,
                    "event": "warning",
                    "message": "unused function 'dcpgettext_expr' [-Wunused-function]dcnpgettext_expr (const char *domain,",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "dcpgettext_expr (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|-> dcpgettext_expr (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|                    const char *msgctxt, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                    int category)",
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
                    "file_name": "gnutls-3.7.2/gl/gettext.h",
                    "line": 219,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'dcpgettext_expr'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "dcpgettext_expr (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|-> dcpgettext_expr (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|                    const char *msgctxt, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                    int category)",
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
                    "file_name": "gnutls-3.7.2/gl/gettext.h",
                    "line": 266,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'dcnpgettext_expr'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|-> dcnpgettext_expr (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|                     const char *msgctxt, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|                     const char *msgid_plural, unsigned long int n,",
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
                    "file_name": "gnutls-3.7.2/lib/auth/cert.c",
                    "line": 380,
                    "column": 35,
                    "event": "warning[-Wunused-but-set-parameter]",
                    "message": "parameter 'data_size' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            const uint8_t * data, size_t data_size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  378|   get_issuers(gnutls_session_t session,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  379|   \t    gnutls_datum_t * issuers_dn, int issuers_len,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  380|-> \t    const uint8_t * data, size_t data_size)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  381|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  382|   \tint i;",
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
                    "file_name": "gnutls-3.7.2/lib/buffers.c",
                    "line": 781,
                    "column": 10,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'total' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        ssize_t total = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  779|   \tint ret;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  780|   \tuint16_t epoch;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  781|-> \tssize_t total = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  782|   \tmbuffer_st *cur;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  783|   ",
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
                    "file_name": "gnutls-3.7.2/lib/kx.c",
                    "line": 137,
                    "column": 32,
                    "event": "warning[-Wunknown-warning-option]",
                    "message": "unknown warning group '-Wanalyzer-file-leak', ignored",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#pragma GCC diagnostic ignored \"-Wanalyzer-file-leak\"",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   /* GCC analyzer doesn't like static FILE pointer */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|   #pragma GCC diagnostic push",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|-> #pragma GCC diagnostic ignored \"-Wanalyzer-file-leak\"",
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
                    "message": "  139|   void _gnutls_nss_keylog_write(gnutls_session_t session,",
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
                    "file_name": "gnutls-3.7.2/lib/mpi.c",
                    "line": 417,
                    "column": 11,
                    "event": "warning[-Wtautological-constant-compare]",
                    "message": "converting the result of '<<' to a boolean always evaluates to true",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        else if (GNUTLS_X509_INT_LE)",
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
                    "file_name": "gnutls-3.7.2/lib/mpi.c",
                    "line": 325,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GNUTLS_X509_INT_LE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GNUTLS_X509_INT_LE              (1 << 1)",
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
                    "message": "  415|   \tif (flags & GNUTLS_X509_INT_LZ)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|   \t\tresult = _gnutls_mpi_print_lz(mpi, NULL, &s_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|-> \telse if (GNUTLS_X509_INT_LE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|   \t\tresult = _gnutls_mpi_print_le(mpi, NULL, &s_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|   \telse",
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
                    "file_name": "gnutls-3.7.2/lib/mpi.c",
                    "line": 435,
                    "column": 11,
                    "event": "warning[-Wtautological-constant-compare]",
                    "message": "converting the result of '<<' to a boolean always evaluates to true",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        else if (GNUTLS_X509_INT_LE)",
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
                    "file_name": "gnutls-3.7.2/lib/mpi.c",
                    "line": 325,
                    "column": 32,
                    "event": "note",
                    "message": "expanded from macro 'GNUTLS_X509_INT_LE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define GNUTLS_X509_INT_LE              (1 << 1)",
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
                    "message": "  433|   \tif (flags & GNUTLS_X509_INT_LZ)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|   \t\tresult = _gnutls_mpi_print_lz(mpi, tmpstr, &s_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|-> \telse if (GNUTLS_X509_INT_LE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|   \t\tresult = _gnutls_mpi_print_le(mpi, tmpstr, &s_len);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|   \telse",
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
                    "file_name": "gnutls-3.7.2/lib/state.c",
                    "line": 1390,
                    "column": 9,
                    "event": "warning[-Wself-assign]",
                    "message": "explicitly assigning value of variable of type 'gnutls_digest_algorithm_t' to itself",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        algo = algo;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ~~~~ ^ ~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1388|   \t\tdefault:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1389|   \t\t\t/* no-op */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1390|-> \t\t\talgo = algo;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1391|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1392|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/psk.c",
                    "line": 42,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/psktool-args.h",
                    "line": 174,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/gl/gettext.h",
                    "line": 149,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'pgettext_aux'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "pgettext_aux (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|-> pgettext_aux (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|                 const char *msg_ctxt_id, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|                 int category)",
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
                    "file_name": "gnutls-3.7.2/src/gl/gettext.h",
                    "line": 168,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'npgettext_aux'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "npgettext_aux (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|-> npgettext_aux (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  169|                  const char *msg_ctxt_id, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  170|                  const char *msgid_plural, unsigned long int n,",
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
                    "file_name": "gnutls-3.7.2/src/gl/gettext.h",
                    "line": 219,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'dcpgettext_expr'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "dcpgettext_expr (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  217|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|-> dcpgettext_expr (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|                    const char *msgctxt, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|                    int category)",
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
                    "file_name": "gnutls-3.7.2/src/gl/gettext.h",
                    "line": 266,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "unused function 'dcnpgettext_expr'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "dcnpgettext_expr (const char *domain,",
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
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  264|   #endif",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|   static const char *",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|-> dcnpgettext_expr (const char *domain,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|                     const char *msgctxt, const char *msgid,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|                     const char *msgid_plural, unsigned long int n,",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 87,
                    "column": 38,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(option_usage_fp, ENUM_ERR_LINE, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 70,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ENUM_ERR_LINE'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ENUM_ERR_LINE         (ao_strs_strtable+323)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 91,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   323 */ \"  %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|       if (max_len > 35) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|           do  {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|->             fprintf(option_usage_fp, ENUM_ERR_LINE, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|           } while (--ct_down > 0);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 110,
                    "column": 31,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        if (snprintf(fmt, 16, ENUM_ERR_WIDTH, (int)max_len) >= 16)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 72,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ENUM_ERR_WIDTH'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ENUM_ERR_WIDTH        (ao_strs_strtable+329)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 92,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   329 */ \"%%-%ds\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  108|           char fmt[16];  /* format for all-but-last entries on a line */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  109|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  110|->         if (snprintf(fmt, 16, ENUM_ERR_WIDTH, (int)max_len) >= 16)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  111|               option_exits(EXIT_FAILURE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|           max_len = 78 / max_len; /* max_len is now max entries on a line */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 124,
                    "column": 42,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fprintf(option_usage_fp, NLSTR_SPACE_FMT, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 118,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NLSTR_SPACE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NLSTR_SPACE_FMT       (ao_strs_strtable+474)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 110,
                    "column": 16,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"  \\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|                    *  Last entry on a line.  Start next line, too.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|                    */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->                 fprintf(option_usage_fp, NLSTR_SPACE_FMT, *(paz_names++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|                   ent_no = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|               }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 131,
                    "column": 34,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(option_usage_fp, NLSTR_FMT, *paz_names);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                 ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  129|                   fprintf(option_usage_fp, fmt, *(paz_names++) );",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  130|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|->         fprintf(option_usage_fp, NLSTR_FMT, *paz_names);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 28,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/enum.c",
                    "line": 283,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(INVALID_FMT, ix);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 88,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'INVALID_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define INVALID_FMT           (ao_strs_strtable+375)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 98,
                    "column": 24,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   375 */ \"INVALID-%d\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|           if (ix >= name_ct)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|->             printf(INVALID_FMT, ix);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  284|           else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  285|               fputs(paz_names[ ix ], stdout);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 84,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(stderr, zambig_file, hyph, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 334,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zambig_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zambig_file           (ao_strs_strtable+4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 43,
                    "column": 22,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*     4 */ \"  %s%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~^~~",
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
                    "message": "   83|           if (strneqvcmp(name, pOD->pz_Name, nm_len) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   84|->             fprintf(stderr, zambig_file, hyph, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   85|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   86|           else if (  (pOD->pz_DisableName != NULL)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 89,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(stderr, zambig_file, hyph, pOD->pz_DisableName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 334,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zambig_file'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zambig_file           (ao_strs_strtable+4)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 43,
                    "column": 22,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*     4 */ \"  %s%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   87|                   && (strneqvcmp(name, pOD->pz_DisableName, nm_len) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|                   )",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|->             fprintf(stderr, zambig_file, hyph, pOD->pz_DisableName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|       } while (pOD++, (++idx < opts->optCt));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 189,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(stderr, SET_OFF_FMT, pOD->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 180,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_OFF_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_OFF_FMT           (ao_strs_strtable+620)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 127,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   620 */ \" -- %s\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  187|           fprintf(stderr, zDisabledErr, opts->pzProgName, pOD->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  188|           if (pOD->pzText != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|->             fprintf(stderr, SET_OFF_FMT, pOD->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|           fputc(NL, stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|           (*opts->pUsageProc)(opts, EXIT_FAILURE);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 31,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/find.c",
                    "line": 402,
                    "column": 37,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    fprintf(stderr, SET_OFF_FMT, pRes->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 180,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_OFF_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_OFF_FMT           (ao_strs_strtable+620)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 127,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   620 */ \" -- %s\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  400|                   fprintf(stderr, zDisabledErr, pOpts->pzProgPath, pRes->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|                   if (pRes->pzText != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|->                     fprintf(stderr, SET_OFF_FMT, pRes->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|                   fputc(NL, stderr);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|                   (*pOpts->pUsageProc)(pOpts, EXIT_FAILURE);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 114,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 102,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 261,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  112|           fputs(INIT_LOPT_STR,    stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  113|           emit_long(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  114|->         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 124,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 102,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 261,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  122|           fputs(INIT_LOPT_STR,    stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  123|           emit_long(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  124|->         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  125|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  126|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 133,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 152,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_ARG_FMT           (ao_strs_strtable+4672)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 345,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  131|           fputs(INIT_OPT_STR,     stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  132|           emit_flag(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  133|->         printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  134|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  135|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 145,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 102,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LOPT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LOPT_ARG_FMT          (ao_strs_strtable+2993)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 261,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  143|           fputs(INIT_LOPT_STR,    stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  144|           emit_long(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  145|->         printf(LOPT_ARG_FMT,    opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  146|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 151,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 345,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|           fputs(INIT_OPT_STR,     stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|           emit_flag(opts);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|->         printf(OPT_ARG_FMT,     opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  152|           fputs(END_OPT_SEL_STR,  stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  153|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 162,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(SHOW_PROG_ENV, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 192,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SHOW_PROG_ENV'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SHOW_PROG_ENV         (ao_strs_strtable+647)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 131,
                    "column": 33,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"env | grep '^%s_'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": 28,
                    "line": 0,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"        esac\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  160|           fputs(script_trailer, stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  161|       else if (ENABLED_GENSHELL_OPT(SHELL))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  162|->         printf(SHOW_PROG_ENV, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  163|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|   #ifdef HAVE_FCHMOD",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 197,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(SET_TEXT_FMT, prog, var);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 182,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_TEXT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_TEXT_FMT          (ao_strs_strtable+627)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 128,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   627 */ \"%s_%s_TEXT='\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  195|       int    nlct = 0; /* defer newlines and skip trailing ones */",
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
                    "message": "  197|->     printf(SET_TEXT_FMT, prog, var);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  198|       if (fp == NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  199|           goto skip_text;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 348,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 190,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SHELL_MAGIC'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|           if ((script_leader == NULL) && (shell_prog != NULL))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|->             printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|           printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 350,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 168,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PREAMBLE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PREAMBLE_FMT          (ao_strs_strtable+5900)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 351,
                    "column": 49,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"#  the text has been generated %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|               printf(SHELL_MAGIC, shell_prog);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  350|->         printf(PREAMBLE_FMT, START_MARK, out_nm, tm_nm_buf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 353,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(END_PRE_FMT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 64,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'END_PRE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_PRE_FMT           (ao_strs_strtable+989)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 158,
                    "column": 17,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"#\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  351|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  352|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  353|->     printf(END_PRE_FMT, opts->pzPROGNAME);",
                    "verbosity_level": 1
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
                    "message": "  355|       /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 403,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(END_PRE_FMT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 64,
                    "column": 31,
                    "event": "note",
                    "message": "    printf(FINISH_LOOP, opts->pzPROGNAME);expanded from macro 'END_PRE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 78,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'FINISH_LOOP'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_PRE_FMT           (ao_strs_strtable+989)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"unset OPT_ARG_VAL || :\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  401|       char const * fmt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  402|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  403|->     printf(FINISH_LOOP, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  404|       for (;opt_ct > 0; od++, --opt_ct) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  405|           /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 499,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(ECHO_N_EXIT, opts->pzPROGNAME, VER_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 56,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ECHO_N_EXIT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ECHO_N_EXIT           (ao_strs_strtable+1872)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 191,
                    "column": 34,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            exit 0\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 78,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'FINISH_LOOP'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define FINISH_LOOP           (ao_strs_strtable+2039)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  497|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  498|       if (od->pOptProc == optionPrintVersion)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  499|->         printf(ECHO_N_EXIT, opts->pzPROGNAME, VER_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       else if (od->pOptProc == optionPagedUsage)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 502,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(PAGE_USAGE_TEXT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 164,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PAGE_USAGE_TEXT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PAGE_USAGE_TEXT       (ao_strs_strtable+5826)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 347,
                    "column": 34,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            exit 0\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": 212,
                    "line": 38,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  500|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  501|       else if (od->pOptProc == optionPagedUsage)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  502|->         printf(PAGE_USAGE_TEXT, opts->pzPROGNAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 505,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  503|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|->         printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|           printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 506,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  504|       else if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  505|           printf(LVL3_CMD, NO_LOAD_WARN);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  506|->         printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  507|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  508|       } else if (od->pz_NAME == NULL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 511,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, NO_SAVE_OPTS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
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
                    "message": "  510|           if (od->pOptProc == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|->             printf(LVL3_CMD, NO_SAVE_OPTS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|               printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|           } else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 512,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  510|           if (od->pOptProc == NULL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  511|               printf(LVL3_CMD, NO_SAVE_OPTS);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|->             printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|           } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|               printf(ECHO_N_EXIT, opts->pzPROGNAME, LONG_USE_STR);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 514,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  512|               printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  513|           } else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  514|->             printf(ECHO_N_EXIT, opts->pzPROGNAME, LONG_USE_STR);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  515|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|       } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 518,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SGL_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 184,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SGL_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SGL_ARG_FMT           (ao_strs_strtable+6096)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 360,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  516|       } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  517|           if (od->optMaxCt == 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  518|->             printf(SGL_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|           else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|               if ((unsigned)od->optMaxCt < NOLIMIT)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 521,
                    "column": 24,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                printf(CHK_MAX_COUNT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                       ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 50,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'CHK_MAX_COUNT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define CHK_MAX_COUNT         (ao_strs_strtable+1508)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 181,
                    "column": 34,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            fi >&2\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  519|           else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  520|               if ((unsigned)od->optMaxCt < NOLIMIT)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  521|->                 printf(CHK_MAX_COUNT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|                          od->pz_NAME, od->optMaxCt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  523|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 524,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(MULTI_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 110,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define MULTI_ARG_FMT         (ao_strs_strtable+3772)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 264,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  522|                          od->pz_NAME, od->optMaxCt);",
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
                    "message": "  524|->             printf(MULTI_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  525|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  526|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 531,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 176,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_MULTI_ARG'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 353,
                    "column": 58,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            export %1$s_%2$s${OPT_ELEMENT}\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  529|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|           if (OPTST_GET_ARGTYPE(od->fOptState) == OPARG_TYPE_NONE) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|->             printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|               printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 532,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  530|           if (OPTST_GET_ARGTYPE(od->fOptState) == OPARG_TYPE_NONE) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  531|               printf(SET_MULTI_ARG, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  532|->             printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|           } else if (od->fOptState & OPTST_ARG_OPTIONAL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 535,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(SET_MULTI_ARG,  opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 176,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_MULTI_ARG'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 353,
                    "column": 58,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            export %1$s_%2$s${OPT_ELEMENT}\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  533|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|           } else if (od->fOptState & OPTST_ARG_OPTIONAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|->             printf(SET_MULTI_ARG,  opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|               printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 536,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  534|           } else if (od->fOptState & OPTST_ARG_OPTIONAL) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  535|               printf(SET_MULTI_ARG,  opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  536|->             printf(LVL3_CMD, OK_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|           } else {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 539,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~            printf(MULTI_ARG_FMT, opts->pzPROGNAME, od->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 110,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define MULTI_ARG_FMT         (ao_strs_strtable+3772)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 264,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  537|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  538|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  539|->             printf(LVL3_CMD, YES_NEED_OPT_ARG);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  540|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  541|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 549,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(LVL3_CMD, NO_SUPPRESS_LOAD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  547|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  548|       if (od->pOptProc == optionLoadOpt) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  549|->         printf(LVL3_CMD, NO_SUPPRESS_LOAD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  551|       } else if (od->optMaxCt == 1)",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 552,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(NO_SGL_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 132,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NO_SGL_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NO_SGL_ARG_FMT        (ao_strs_strtable+4252)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 292,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": 176,
                    "line": 31,
                    "event": "note",
                    "message": "expanded from macro 'SET_MULTI_ARG'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SET_MULTI_ARG         (ao_strs_strtable+6006)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 353,
                    "column": 58,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            export %1$s_%2$s${OPT_ELEMENT}\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  550|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  551|       } else if (od->optMaxCt == 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  552|->         printf(NO_SGL_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  553|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554|       else",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 555,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(NO_MULTI_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 128,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NO_MULTI_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NO_MULTI_ARG_FMT      (ao_strs_strtable+4111)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 283,
                    "column": 43,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"            OPT_NAME='%2$s'\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  553|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  554|       else",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  555|->         printf(NO_MULTI_ARG_FMT, opts->pzPROGNAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 558,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 104,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'LVL3_CMD'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define LVL3_CMD              (ao_strs_strtable+425)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 104,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   425 */ \"            %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  556|                  od->pz_NAME, od->pz_DisablePfx);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  557|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  558|->     printf(LVL3_CMD, NO_ARG_NEEDED);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  559|       fputs(zOptionEndSelect, stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  560|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 581,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(zOptionFlag, od->optValue);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 282,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptionFlag'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptionFlag           (ao_strs_strtable+907)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 153,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   907 */ \"        '%c' )\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  579|               continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  580|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  581|->         printf(zOptionFlag, od->optValue);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  582|           emit_action(opts, od);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 656,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptionPartName, name_bf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 286,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptionPartName'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptionPartName       (ao_strs_strtable+939)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 155,
                    "column": 33,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   939 */ \"        '%s' | \\\\\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  654|           for (;;) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  655|               *pz = NUL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  656|->             printf(zOptionPartName, name_bf);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  657|               *pz++ = name[nm_ix++];",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  658|               if (name[nm_ix] == NUL) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 34,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/makeshell.c",
                    "line": 666,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptionFullName, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 284,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptionFullName'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptionFullName       (ao_strs_strtable+923)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 154,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   923 */ \"        '%s' )\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  664|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  665|   leave:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  666|->     printf(zOptionFullName, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  667|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  668|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 35,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/nested.c",
                    "line": 895,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, XML_HEX_BYTE_FMT, (ch & 0xFF));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 218,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'XML_HEX_BYTE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define XML_HEX_BYTE_FMT      (ao_strs_strtable+764)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 140,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   764 */ \"#x%02X;\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  893|           xlatp++;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  894|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  895|->     fprintf(fp, XML_HEX_BYTE_FMT, (ch & 0xFF));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  896|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  897|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/pgusage.c",
                    "line": 49,
                    "column": 28,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        snprintf(bf, bfsz, TMP_FILE_FMT, tmpdir, my_pid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 204,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'TMP_FILE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define TMP_FILE_FMT          (ao_strs_strtable+721)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 136,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   721 */ \"%s/use-%u.XXXXXX\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|           bfsz = TMP_FILE_FMT_LEN + strlen(tmpdir) + 10;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|           bf   = AGALOC(bfsz, \"tmp fil\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|->         snprintf(bf, bfsz, TMP_FILE_FMT, tmpdir, my_pid);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/pgusage.c",
                    "line": 90,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        snprintf(res, bfsz, PAGE_USAGE_FMT, pager, fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 162,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PAGE_USAGE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PAGE_USAGE_FMT        (ao_strs_strtable+569)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 122,
                    "column": 36,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   569 */ \"%1$s %2$s ; rm -f %2$s\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   88|           bfsz = 2 * strlen(fname) + strlen(pager) + PAGE_USAGE_FMT_LEN;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   89|           res  = AGALOC(bfsz, \"more cmd\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   90|->         snprintf(res, bfsz, PAGE_USAGE_FMT, pager, fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   91|           AGFREE(fname);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   92|           return res;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 175,
                    "column": 33,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            out += sprintf(out, MK_STR_OCT_FMT, ch);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 106,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'MK_STR_OCT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define MK_STR_OCT_FMT        (ao_strs_strtable+441)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 105,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   441 */ \"\\\\%03o\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  173|                *  the amount of space we will be using.  Assertion is above.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  174|                */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  175|->             out += sprintf(out, MK_STR_OCT_FMT, ch);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  176|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  177|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 261,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 156,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_VAL_FMT           (ao_strs_strtable+552)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 119,
                    "column": 20,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   552 */ \"%s_%s=\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  259|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  260|       uintptr_t e_val = pOD->optArg.argEnum;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  261|->     printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  262|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  263|       /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 267,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 174,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'QUOT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define QUOT_ARG_FMT          (ao_strs_strtable+615)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 126,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   615 */ \"'%s'\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  265|        */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  266|       (*(pOD->pOptProc))(OPTPROC_RETURN_VALNAME, pOD);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  267|->     printf(QUOT_ARG_FMT, pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  268|       if (pOD->fOptState & OPTST_ALLOC_ARG)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  269|           AGFREE(pOD->optArg.argString);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 272,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 154,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_END_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 118,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  270|       pOD->optArg.argEnum = e_val;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  271|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|->     printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 281,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  279|       char const * pz;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  280|       uintptr_t val = 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  281|->     printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  282|              (int)(uintptr_t)(pOD->optCookie));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  283|       pOD->optCookie = VOIDP(~0UL);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 299,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(SHOW_VAL_FMT, (unsigned long)val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 194,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'SHOW_VAL_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define SHOW_VAL_FMT          (ao_strs_strtable+667)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 132,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   667 */ \"=%1$lu # 0x%1$lX\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  297|               else fputc('_', stdout);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  298|           } name_done:;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|->         printf(SHOW_VAL_FMT, (unsigned long)val);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|           val <<= 1;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 314,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptCookieCt, pOpts->pzPROGNAME, pOD->pz_NAME, ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 270,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptCookieCt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptCookieCt          (ao_strs_strtable+1332)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 169,
                    "column": 35,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s_CT\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  312|       int             ct  = pAL->useCt;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  313|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  314|->     printf(zOptCookieCt, pOpts->pzPROGNAME, pOD->pz_NAME, ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       while (--ct >= 0) {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 317,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(ARG_BY_NUM_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 46,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ARG_BY_NUM_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ARG_BY_NUM_FMT        (ao_strs_strtable+286)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 86,
                    "column": 23,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   286 */ \"%s_%s_%d=\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|       while (--ct >= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|->         printf(ARG_BY_NUM_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|                  pAL->useCt - ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|           print_quot_str(*(ppz++));",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 37,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 320,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(EXPORT_ARG_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 74,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'EXPORT_ARG_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define EXPORT_ARG_FMT        (ao_strs_strtable+336)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 94,
                    "column": 31,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s_%d\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|                  pAL->useCt - ct);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|           print_quot_str(*(ppz++));",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  320|->         printf(EXPORT_ARG_FMT, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  321|                  pAL->useCt - ct);",
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
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 136,
                    "column": 30,
                    "event": "scope_hint",
                    "message": "In file included from libopts.c:38",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 359,
                    "column": 12,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    printf(zOptCtFmt, pOpts->curOptIdx-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "           ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 272,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptCtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptCtFmt             (ao_strs_strtable+1371)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 171,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export OPTION_CT\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  357|       int  optIx = 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  358|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  359|->     printf(zOptCtFmt, pOpts->curOptIdx-1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  360|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  361|       do  {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 387,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zEquivMode, pOpts->pzPROGNAME, pOD->pz_NAME, p->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 165,
                    "column": 37,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s_MODE\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|               p->fOptState &= OPTST_PERSISTENT_MASK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|               p->fOptState |= pOD->fOptState & ~OPTST_PERSISTENT_MASK;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|->             printf(zEquivMode, pOpts->pzPROGNAME, pOD->pz_NAME, p->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|               pOD = p;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  389|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 424,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptDisabl, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 274,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptDisabl'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptDisabl            (ao_strs_strtable+1402)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 173,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  423|           if ((pOD->fOptState & OPTST_DISABLED) != 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  424|->             printf(zOptDisabl, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  425|                      (pOD->pz_DisablePfx != NULL)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  426|                      ? pOD->pz_DisablePfx : \"false\");",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 435,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  433|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  434|           if (OPTST_GET_ARGTYPE(pOD->fOptState) == OPARG_TYPE_NUMERIC) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  435|->             printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  436|                      (int)pOD->optArg.argInt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  437|               continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 455,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  453|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  454|           if (OPTST_GET_ARGTYPE(pOD->fOptState) == OPARG_TYPE_BOOLEAN) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  455|->             printf(zFullOptFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  456|                      (pOD->optArg.argBool == 0) ? \"false\" : \"true\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  457|               continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 467,
                    "column": 20,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                   ^~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 276,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zOptNumFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zOptNumFmt            (ao_strs_strtable+1435)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 175,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %1$s_%2$s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  465|              || (pOD->optArg.argString[0] == NUL) ) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  466|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  467|->             printf(zOptNumFmt, pOpts->pzPROGNAME, pOD->pz_NAME,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  468|                      pOD->optOccCt);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|               continue;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 475,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|            *  This option has a text value",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  474|            */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|->         printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|           print_quot_str(pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  477|           printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 38,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/putshell.c",
                    "line": 477,
                    "column": 16,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "               ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 154,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPT_END_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPT_END_FMT           (ao_strs_strtable+537)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 118,
                    "column": 28,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"export %s_%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  475|           printf(OPT_VAL_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  476|           print_quot_str(pOD->optArg.argString);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  477|->         printf(OPT_END_FMT, pOpts->pzPROGNAME, pOD->pz_NAME);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  478|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  479|       } while (++optIx < pOpts->presetOptCt );",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 220,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  218|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  219|       if (save_fl & SVFL_USAGE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  220|->         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  221|       if (UNUSED_OPT(od) && (save_fl & SVFL_DEFAULT))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  222|           fputs(ao_default_use, fp);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 302,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, NULL_ATR_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 136,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NULL_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NULL_ATR_FMT          (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 112,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   498 */ \"<%s/>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|       default:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|       case OPARG_TYPE_NONE:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|->         fprintf(fp, NULL_ATR_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 317,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(fp, TYPE_ATR_FMT, ovp->pzName, typ);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 212,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'TYPE_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define TYPE_ATR_FMT          (ao_strs_strtable+743)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 138,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   743 */ \"<%s type=%s>\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  315|                   ? \"keyword\" : \"set-membership\";",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  316|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  317|->             fprintf(fp, TYPE_ATR_FMT, ovp->pzName, typ);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  318|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  319|               /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 337,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(fp, END_XML_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 68,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'END_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 90,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   316 */ \"</%s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  335|               od->optArg.argEnum = val;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  336|               od->fOptState = opt_state;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  337|->             fprintf(fp, END_XML_FMT, ovp->pzName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  338|               break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  339|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 343,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, NUMB_ATR_FMT, ovp->pzName, ovp->v.longVal);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 138,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NUMB_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NUMB_ATR_FMT          (ao_strs_strtable+1186)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 162,
                    "column": 49,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*  1186 */ \"<%1$s type=integer>0x%2$lX</%1$s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  341|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  342|       case OPARG_TYPE_NUMERIC:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  343|->         fprintf(fp, NUMB_ATR_FMT, ovp->pzName, ovp->v.longVal);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  344|           break;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 347,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, BOOL_ATR_FMT, ovp->pzName,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 48,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'BOOL_ATR_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define BOOL_ATR_FMT          (ao_strs_strtable+957)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 156,
                    "column": 46,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   957 */ \"<%1$s type=boolean>%2$s</%1$s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|       case OPARG_TYPE_BOOLEAN:",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|->         fprintf(fp, BOOL_ATR_FMT, ovp->pzName,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|                   ovp->v.boolVal ? \"true\" : \"false\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|           break;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 365,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, OPEN_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 148,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPEN_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPEN_XML_FMT          (ao_strs_strtable+525)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 115,
                    "column": 18,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   525 */ \"<%s>\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  363|   prt_string(FILE * fp, char const * name, char const * pz)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  364|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  365|->     fprintf(fp, OPEN_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  366|       for (;;) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  367|           int ch = ((int)*(pz++)) & 0xFF;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 393,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, END_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 68,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'END_XML_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define END_XML_FMT           (ao_strs_strtable+316)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 90,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   316 */ \"</%s>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  391|           }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  392|       } string_done:;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|->     fprintf(fp, END_XML_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 416,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, OPEN_CLOSE_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 146,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'OPEN_CLOSE_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define OPEN_CLOSE_FMT        (ao_strs_strtable+498)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 112,
                    "column": 21,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   498 */ \"<%s/>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~^~~",
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
                    "message": "  415|       if (opt_ct <= 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  416|->         fprintf(fp, OPEN_CLOSE_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  417|           return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|       }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 420,
                    "column": 17,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "    fprintf(fp, NESTED_OPT_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 114,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NESTED_OPT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 107,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   452 */ \"<%s type=nested>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  418|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  419|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  420|->     fprintf(fp, NESTED_OPT_FMT, name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  421|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  422|       depth++;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 450,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  448|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  449|       if (save_fl & SVFL_USAGE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  450|->         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  451|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  452|       /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 471,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, NESTED_OPT_FMT, od->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 114,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'NESTED_OPT_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NESTED_OPT_FMT        (ao_strs_strtable+452)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 107,
                    "column": 32,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   452 */ \"<%s type=nested>\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  469|               continue;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  470|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  471|->         fprintf(fp, NESTED_OPT_FMT, od->pz_Name);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  472|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  473|           do  {",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 585,
                    "column": 25,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 250,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtProg'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtProg              (ao_strs_strtable+49)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  583|           if (sbuf.st_size > zPresetFile_LEN) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  584|               /* non-zero size implies save_fl is non-zero */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  585|->             fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  586|               return fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  587|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 604,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, zPresetFile, time_str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 288,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zPresetFile'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zPresetFile           (ao_strs_strtable+115)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 58,
                    "column": 22,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"#  %s#\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  602|           char *  time_str = ctime(&cur_time);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  603|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  604|->         fprintf(fp, zPresetFile, time_str);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  605|   #ifdef HAVE_ALLOCATED_CTIME",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  606|           /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 615,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  613|       }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  614|       if (save_fl != 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  615|->         fprintf(fp, zFmtProg, opts->pzProgName);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  616|       return fp;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  617|   }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 646,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, pod->pz_Name, pod->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  644|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  645|       if (save_fl & SVFL_USAGE)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  646|->         fprintf(fp, ao_name_use_fmt, pod->pz_Name, pod->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  647|       if (UNUSED_OPT(pod) && (save_fl & SVFL_DEFAULT))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  648|           fputs(ao_default_use, fp);",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 758,
                    "column": 29,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  756|           if (od->optArg.argString == orig) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  757|               if (save_fl)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  758|->                 fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  759|               return;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  760|           }",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 41,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/save.c",
                    "line": 765,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 224,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'ao_name_use_fmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define ao_name_use_fmt       (ao_strs_strtable+791)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 143,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            \"# %s -- %s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            ~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  763|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  764|       } else if (save_fl)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  765|->         fprintf(fp, ao_name_use_fmt, od->pz_Name, od->pzText);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  766|   }",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  767|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 301,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 248,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 46,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    37 */ \"%%-%ds %%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  299|           if (do_gnu_usage(opts)) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  300|               flen = setGnuOptFmts(opts, &pOptTitle);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  301|->             sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  302|               fputc(NL, option_usage_fp);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  303|   ",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 306,
                    "column": 35,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "            sprintf(line_fmt_buf, zFmtFmt, flen);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                  ^~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 248,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'zFmtFmt'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define zFmtFmt               (ao_strs_strtable+37)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 46,
                    "column": 26,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*    37 */ \"%%-%ds %%s\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  304|           } else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  305|               flen = setStdOptFmts(opts, &pOptTitle);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  306|->             sprintf(line_fmt_buf, zFmtFmt, flen);",
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
                    "message": "  308|               /*",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 686,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "gnutls-3.7.2/src/libopts/libopts.c",
                    "line": 48,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/usage.c",
                    "line": 386,
                    "column": 21,
                    "event": "warning[-Wformat]",
                    "message": "format string contains '\\0' within the string body",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "        fprintf(fp, PUTS_FMT, t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                    ^~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.h",
                    "line": 170,
                    "column": 31,
                    "event": "note",
                    "message": "expanded from macro 'PUTS_FMT'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define PUTS_FMT              (ao_strs_strtable+596)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                              ^~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gnutls-3.7.2/src/libopts/ao-strs.c",
                    "line": 124,
                    "column": 30,
                    "event": "note",
                    "message": "format string is defined here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "/*   596 */ \"  puts(_(%s));\\n\\0\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  384|       else {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  385|           char const * t = optionQuoteString(text, LINE_SPLICE);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  386|->         fprintf(fp, PUTS_FMT, t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  387|           AGFREE(t);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  388|       }",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
