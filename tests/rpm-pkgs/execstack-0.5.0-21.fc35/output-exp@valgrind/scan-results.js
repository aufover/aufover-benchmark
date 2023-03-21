{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "execstack-0.5.0-21.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/execstack-0.5.0-21.fc35/valgrind/output",
        "time-created": "2022-11-23 11:07:17",
        "time-finished": "2022-11-23 11:11:54",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/execstack-0.5.0-21.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/execstack-0.5.0-21.fc35/execstack-0.5.0-21.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.4-1.fc36"
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
                    "file_name": "prelink-4c79120bcdbde0616f592458ccde7035e92ca3d8/src/dso.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fdopen_dso'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "prelink-4c79120bcdbde0616f592458ccde7035e92ca3d8/src/dso.c",
                    "line": 274,
                    "column": 16,
                    "event": "warning[-Wunused-but-set-variable]",
                    "message": "variable 'last' set but not used",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274 |   int i, j, k, last, *sections, *invsections;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                ^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  272|     GElf_Ehdr ehdr;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  273|     GElf_Addr last_off;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  274|->   int i, j, k, last, *sections, *invsections;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  275|     DSO *dso = NULL;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  276|     struct PLArch *plarch;",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "cwe": 477,
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "prelink-4c79120bcdbde0616f592458ccde7035e92ca3d8/src/dso.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'set_security_context'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "prelink-4c79120bcdbde0616f592458ccde7035e92ca3d8/src/dso.c",
                    "line": 1792,
                    "column": 7,
                    "event": "warning[-Wdeprecated-declarations]",
                    "message": "'security_context_t' is deprecated",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1792 |       security_context_t scontext;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |       ^~~~~~~~~~~~~~~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1790|     if (selinux_enabled > 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1791|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1792|->       security_context_t scontext;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1793|         if (getfilecon (name, &scontext) < 0)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1794|   \t{",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
