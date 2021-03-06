{
    "scan":
    {
        "analyzer-version-gcc": "11.2.1",
        "analyzer-version-valgrind": "3.18.1",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "cov03.lab.eng.brq.redhat.com",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libmaxminddb-1.5.2-2.fc35",
        "store-results-to": "/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/valgrind/output",
        "time-created": "2021-12-01 14:59:36",
        "time-finished": "2021-12-01 15:01:23",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/valgrind/output' '-f' '/home/kdudka/aufover-benchmark/workdir-for-sync/rpm-pkgs/libmaxminddb-1.5.2-2.fc35/libmaxminddb-1.5.2-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.1.0.20211130.175245.g27e99a8.internal-1.el7"
    },
    "defects":
    [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "key_event_idx": 0,
            "events":
            [
                {
                    "file_name": "libmaxminddb-1.5.2/src/maxminddb-compat-util.h",
                    "line": 46,
                    "column": 1,
                    "event": "warning[-Wunused-function]",
                    "message": "'mmdb_memmem' defined but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46 | mmdb_memmem(const void *l, size_t l_len, const void *s, size_t s_len) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|    */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|   static void *",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|-> mmdb_memmem(const void *l, size_t l_len, const void *s, size_t s_len) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|       register char *cur, *last;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|       const char *cl = (const char *)l;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "libmaxminddb-1.5.2/t/maxminddb_test_helper.h",
                    "line": 10,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/t/maxminddb_test_helper.c",
                    "line": 11,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/src/maxminddb-compat-util.h",
                    "line": 138,
                    "column": 14,
                    "event": "warning[-Wunused-function]",
                    "message": "'mmdb_strdup' defined but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138 | static char *mmdb_strdup(const char *str) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  136|    * SUCH DAMAGE.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  137|    */",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  138|-> static char *mmdb_strdup(const char *str) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  139|       size_t len;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  140|       char *copy;",
                    "verbosity_level": "1"
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 1164,
            "language": "c/c++",
            "key_event_idx": 2,
            "events":
            [
                {
                    "file_name": "libmaxminddb-1.5.2/t/maxminddb_test_helper.h",
                    "line": 10,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/src/data-pool.c",
                    "line": 148,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "libmaxminddb-1.5.2/src/maxminddb-compat-util.h",
                    "line": 149,
                    "column": 14,
                    "event": "warning[-Wunused-function]",
                    "message": "'mmdb_strndup' defined but not used",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149 | static char *mmdb_strndup(const char *str, size_t n) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |              ^~~~~~~~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  147|   }",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  148|   ",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  149|-> static char *mmdb_strndup(const char *str, size_t n) {",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  150|       size_t len;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  151|       char *copy;",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
