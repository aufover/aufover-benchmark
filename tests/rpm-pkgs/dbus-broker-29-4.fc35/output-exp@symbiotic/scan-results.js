{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "dbus-broker-29-4.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/dbus-broker-29-4.fc35/symbiotic/output",
        "time-created": "2023-01-29 21:28:51",
        "time-finished": "2023-01-29 21:35:37",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/dbus-broker-29-4.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/dbus-broker-29-4.fc35/dbus-broker-29-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/c-dvar.h",
                    "line": 247,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/c-dvar.h",
                    "line": 247,
                    "event": "note",
                    "message": "call stack: function c_dvar_type_new_from_string (=0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/test-api.c",
                    "line": 59,
                    "event": "note",
                    "message": "call stack: function test_api ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/test-api.c",
                    "line": 200,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/c-dvar.h",
                    "line": 247,
                    "event": "note",
                    "message": "Additional Info: address: 0:0",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/c-dvar.h",
                    "line": 247,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/test-api.c",
                    "line": 56,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: c_dvar_type_new_from_signature: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "dbus-broker-29/subprojects/c-dvar/src/c-dvar.h",
                    "line": 243,
                    "column": 13,
                    "event": "note",
                    "message": "Non-deterministic values: c_dvar_type_new_from_signature: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  245|                   return r;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  246|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  247|->         if (n != type->length) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  248|                   if (!*typep)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  249|                           c_dvar_type_free(type);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
