{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libyaml-0.2.5-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libyaml-0.2.5-6.fc35/cbmc/output",
        "time-created": "2023-01-26 08:49:08",
        "time-finished": "2023-01-26 08:55:11",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libyaml-0.2.5-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libyaml-0.2.5-6.fc35/libyaml-0.2.5-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 563,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'yaml_emitter_write_plain_scalar'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 28,
                    "column": 6,
                    "event": "warning[-Wunused-value]",
                    "message": "value computed is not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28 |      && ((emitter->line_break == YAML_CR_BREAK ?                                \\",
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
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 56,
                    "column": 11,
                    "event": "note",
                    "message": "in expansion of macro 'PUT_BREAK'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   56 |          (PUT_BREAK(emitter),                                                   \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |           ^~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "yaml-0.2.5/src/emitter.c",
                    "line": 1962,
                    "column": 18,
                    "event": "note",
                    "message": "in expansion of macro 'WRITE_BREAK'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1962 |             if (!WRITE_BREAK(emitter, string)) return 0;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                  ^~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   26|   #define PUT_BREAK(emitter)                                                      \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   27|       (FLUSH(emitter)                                                             \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   28|->      && ((emitter->line_break == YAML_CR_BREAK ?                                \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   29|                (*(emitter->buffer.pointer++) = (yaml_char_t) '\\r') :              \\",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   30|             emitter->line_break == YAML_LN_BREAK ?                                \\",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
