{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libeconf-0.4.0-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libeconf-0.4.0-2.fc35/symbiotic/output",
        "time-created": "2023-01-29 15:19:47",
        "time-finished": "2023-01-29 15:29:14",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libeconf-0.4.0-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libeconf-0.4.0-2.fc35/libeconf-0.4.0-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libeconf-0.4.0/tests/tst-groups3.c",
                    "line": 50,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-groups3.c",
                    "line": 50,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-groups3.c",
                    "line": 50,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-groups3.c",
                    "line": 50,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-groups3.c",
                    "line": 24,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: econf_readFile: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-groups3.c",
                    "line": 30,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: econf_getGroups: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   48|     printf (\"Found the following groups:\\n\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   49|     for (size_t i = 0; i < group_number; i++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   50|->     printf (\"%zu: %s\\n\", i, groups[i]);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   51|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   52|     /* Try to get the key for each group and check, it is the correct one */",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "SYMBIOTIC_WARNING",
            "tool": "symbiotic",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libeconf-0.4.0/tests/tst-logindefs2.c",
                    "line": 45,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-logindefs2.c",
                    "line": 45,
                    "event": "note",
                    "message": "call stack: function main ()",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-logindefs2.c",
                    "line": 45,
                    "event": "note",
                    "message": "Additional Info: address: 0:12370169555311111083",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-logindefs2.c",
                    "line": 45,
                    "event": "note",
                    "message": "Additional Info: pointing to: none",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-logindefs2.c",
                    "line": 24,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: econf_readFile: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libeconf-0.4.0/tests/tst-logindefs2.c",
                    "line": 30,
                    "column": 16,
                    "event": "note",
                    "message": "Non-deterministic values: econf_getKeys: len 4 bytes, [4 times 0x0] (i32: 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|         char *value = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   45|->       econf_getStringValue(key_file, NULL, keys[i], &value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   46|         printf (\"%zu: %s: '%s'\\n\", i, keys[i], value);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   47|         if (value != NULL)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
