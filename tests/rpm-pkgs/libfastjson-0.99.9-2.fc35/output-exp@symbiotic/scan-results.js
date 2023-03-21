{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libfastjson-0.99.9-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libfastjson-0.99.9-2.fc35/symbiotic/output",
        "time-created": "2023-01-29 18:22:19",
        "time-finished": "2023-01-29 18:30:28",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libfastjson-0.99.9-2.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libfastjson-0.99.9-2.fc35/libfastjson-0.99.9-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 34,
                    "column": 26,
                    "event": "warning[-Wsizeof-array-div]",
                    "message": "expression does not compute the number of elements in this array; element type is 'struct (unnamed struct at parse_flags.c:14:8)', not 'struct (unnamed struct at parse_flags.c:14:8) *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                for (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^     ~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 24,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'NELEM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ~  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 17,
                    "column": 3,
                    "event": "note",
                    "message": "array 'format_args' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "} format_args[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 34,
                    "column": 26,
                    "event": "note",
                    "message": "place parentheses around the 'sizeof (&format_args[0])' expression to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                for (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                       ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 24,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'NELEM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   32|   \t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   33|   \t\tint jj;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|-> \t\tfor (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|   \t\t\tif (strcasecmp(argv[arg_idx], format_args[jj].arg) == 0)",
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
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "event": "error",
                    "message": "memory error: out of bound pointer",
                    "verbosity_level": 0
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "call stack: function parse_flags (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/test2.c",
                    "line": 28,
                    "event": "note",
                    "message": "call stack: function main (=2, =0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: address: 37:48",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: pointing to: object at Segment: [37] of size 48",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "event": "note",
                    "message": "Additional Info: MO26[48] allocated at global:format_args",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: strcasecmp: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: strcasecmp: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 36,
                    "column": 8,
                    "event": "note",
                    "message": "Non-deterministic values: strcasecmp: len 4 bytes, [0x1|3 times 0x0] (i32: 1)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   34|   \t\tfor (jj = 0; jj < (int)NELEM(format_args); jj++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   35|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   36|-> \t\t\tif (strcasecmp(argv[arg_idx], format_args[jj].arg) == 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   37|   \t\t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   38|   \t\t\t\tsflags |= format_args[jj].flag;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 682,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 42,
                    "column": 13,
                    "event": "warning[-Wsizeof-array-div]",
                    "message": "expression does not compute the number of elements in this array; element type is 'struct (unnamed struct at parse_flags.c:14:8)', not 'struct (unnamed struct at parse_flags.c:14:8) *'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if (jj == NELEM(format_args))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^     ~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 24,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'NELEM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                         ~  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 17,
                    "column": 3,
                    "event": "note",
                    "message": "array 'format_args' declared here",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "} format_args[] = {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 42,
                    "column": 13,
                    "event": "note",
                    "message": "place parentheses around the 'sizeof (&format_args[0])' expression to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                if (jj == NELEM(format_args))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                          ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libfastjson-0.99.9/tests/parse_flags.c",
                    "line": 24,
                    "column": 29,
                    "event": "note",
                    "message": "expanded from macro 'NELEM'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "#define NELEM(x) (sizeof(x) / sizeof(&x[0]))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                            ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   40|   \t\t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   41|   \t\t}",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   42|-> \t\tif (jj == NELEM(format_args))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   43|   \t\t{",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   44|   \t\t\tprintf(\"Unknown arg: %s\\n\", argv[arg_idx]);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
