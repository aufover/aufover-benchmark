{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "autogen-5.18.16-9.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/autogen-5.18.16-9.fc35/valgrind/output",
        "time-created": "2022-11-24 08:29:59",
        "time-finished": "2022-11-24 08:36:57",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/autogen-5.18.16-9.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/autogen-5.18.16-9.fc35/autogen-5.18.16-9.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 2,
            "events": [
                {
                    "file_name": "autogen-5.18.16/agen5/ag.c",
                    "line": 27,
                    "event": "included_from",
                    "message": "Included from here.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/agen5/expState.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'find_entry_value'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/agen5/expState.c",
                    "line": 166,
                    "column": 17,
                    "event": "warning[-Wstringop-overflow=]",
                    "message": "writing 1 byte into a region of size 0",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166 |     pzField[-1] = name_sep_ch;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "autogen-5.18.16/agen5/expState.c",
                    "line": 102,
                    "column": 23,
                    "event": "note",
                    "message": "destination object of size [0, 9223372036854775807] allocated by 'ag_scm2zchars'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  102 |         char * name = ag_scm2zchars(obj, \"find name\");",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                       ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  164|        *  Search the members for what we want.",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  165|        */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  166|->     pzField[-1] = name_sep_ch;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  167|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  168|           SCM field   = scm_from_latin1_string(pzField);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
