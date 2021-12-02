{
    "scan": {
        "analyzer-version-cbmc": "5.38.0",
        "analyzer-version-gcc": "11.2.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "f34",
        "known-false-positives": "/usr/share/csmock/known-false-positives.js",
        "mock-config": "fedora-35-x86_64",
        "project-name": "diffutils-3.8-1.fc35",
        "store-results-to": "/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/diffutils-3.8-1.fc35/cbmc/output",
        "time-created": "2021-12-01 16:17:04",
        "time-finished": "2021-12-01 16:22:26",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/diffutils-3.8-1.fc35/cbmc/output' '-f' '/home/kdudka/git/aufover-benchmark/workdir-for-sync/rpm-pkgs/diffutils-3.8-1.fc35/diffutils-3.8-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.2.0.20211130.141423.g64dd084.divine-1.fc34"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 758,
            "language": "c/c++",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "diffutils-3.8/src/analyze.c",
                    "line": 21,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "diffutils-3.8/src/diff.h",
                    "line": 395,
                    "column": 1,
                    "event": "warning[-Wattributes]",
                    "message": "'pure' attribute ignored",
                    "verbosity_level": "0"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395 | extern bool (*lines_differ) (char const *, size_t, char const *, size_t) _GL_ATTRIBUTE_PURE;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      | ^~~~~~",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "cc1",
                    "line": 0,
                    "event": "note",
                    "message": "unrecognized command-line option '-Wno-unknown-warning-option' may have been intended to silence earlier diagnostics",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  393|   extern char const pr_program[];",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  394|   extern char *concat (char const *, char const *, char const *);",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  395|-> extern bool (*lines_differ) (char const *, size_t, char const *, size_t) _GL_ATTRIBUTE_PURE;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  396|   extern bool lines_differ_singlebyte (char const *, size_t, char const *, size_t) _GL_ATTRIBUTE_PURE;",
                    "verbosity_level": "1"
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  397|   #ifdef HANDLE_MULTIBYTE",
                    "verbosity_level": "1"
                }
            ]
        }
    ]
}
