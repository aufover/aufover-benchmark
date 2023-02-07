{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "irqbalance-1.7.0-8.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/irqbalance-1.7.0-8.fc35/symbiotic/output",
        "time-created": "2023-01-29 20:02:40",
        "time-finished": "2023-01-29 20:08:14",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/irqbalance-1.7.0-8.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/irqbalance-1.7.0-8.fc35/irqbalance-1.7.0-8.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "irqbalance-1.7.0/ui/ui.c",
                    "line": 17,
                    "column": 4,
                    "event": "warning[-Wstring-concatenation]",
                    "message": "suspicious concatenation of string literals in an array initialization; did you mean to separate the elements with a comma?",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        \"Virt Event\"};",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "irqbalance-1.7.0/ui/ui.c",
                    "line": 16,
                    "column": 4,
                    "event": "note",
                    "message": "place parentheses around the string literal to silence warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        \"10-Gigabit Ethernet,\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                        ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   15|   \t\t\t\"Gigabit Ethernet\",",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   16|   \t\t\t\"10-Gigabit Ethernet,\"",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   17|-> \t\t\t\"Virt Event\"};",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   18|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "   19|   void show_frame()",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
