{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "polkit-pkla-compat-0.1-20.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/polkit-pkla-compat-0.1-20.fc35/symbiotic/output",
        "time-created": "2023-01-29 15:52:41",
        "time-finished": "2023-01-29 15:59:55",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/polkit-pkla-compat-0.1-20.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/polkit-pkla-compat-0.1-20.fc35/polkit-pkla-compat-0.1-20.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "polkit-pkla-compat-0.1/src/pkla-admin-identities.c",
                    "line": 117,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/src/pkla-admin-identities.c",
                    "line": 117,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/src/pkla-admin-identities.c",
                    "line": 117,
                    "event": "note",
                    "message": "Additional Info: address: 0:8",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/src/pkla-admin-identities.c",
                    "line": 117,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/src/pkla-admin-identities.c",
                    "line": 107,
                    "column": 17,
                    "event": "note",
                    "message": "Non-deterministic values: g_option_context_new: len 8 bytes, [8 times 0x0] (i64: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "polkit-pkla-compat-0.1/src/pkla-admin-identities.c",
                    "line": 113,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: g_option_context_parse: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  115|         fprintf (stderr, _(\"%s: %s\\n\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  116|   \t\t\t \"Run `%s --help' for more information.\\n\"),",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  117|-> \t       g_get_prgname (), error->message, g_get_prgname ());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  118|         g_error_free (error);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  119|         g_option_context_free (opt_context);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
