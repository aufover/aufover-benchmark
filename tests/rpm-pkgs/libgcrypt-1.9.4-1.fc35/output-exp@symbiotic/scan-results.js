{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-symbiotic": "8.0.0.20220822.193644",
        "enabled-plugins": "symbiotic, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-2a.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libgcrypt-1.9.4-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/symbiotic/output",
        "time-created": "2023-01-30 20:40:57",
        "time-finished": "2023-01-30 20:47:15",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/symbiotic/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libgcrypt-1.9.4-1.fc35/libgcrypt-1.9.4-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'symbiotic' '--symbiotic-timeout=8' '--keep-going'",
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
                    "file_name": "libgcrypt-1.9.4/tests/fipsdrv.c",
                    "line": 860,
                    "column": 8,
                    "event": "warning[-Wunsequenced]",
                    "message": "unsequenced modification and access to 'p'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "     *p++ = tolower(*p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "       ^             ~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  858|     p = buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  859|     while (*p)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  860|->      *p++ = tolower(*p);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  861|     p = buf;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  862|     if (no_lz && p[0] == '0' && p[1] == '0' && p[2])",
                    "verbosity_level": 1
                }
            ]
        },
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 0,
            "events": [
                {
                    "file_name": "libgcrypt-1.9.4/tests/fipsdrv.c",
                    "line": 2004,
                    "column": 42,
                    "event": "warning[-Wstring-plus-int]",
                    "message": "adding 'int' to a string does not append to the string",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      l2 = gcry_sexp_find_token (l1, \"xy\"+idx, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                     ~~~~^~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libgcrypt-1.9.4/tests/fipsdrv.c",
                    "line": 2004,
                    "column": 42,
                    "event": "note",
                    "message": "use array indexing to silence this warning",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      l2 = gcry_sexp_find_token (l1, \"xy\"+idx, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "                                         ^",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2002|     for (idx=0; \"xy\"[idx]; idx++) ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2003|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2004|->       l2 = gcry_sexp_find_token (l1, \"xy\"+idx, 1);",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2005|         if (!l2)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 2006|           die (\"no %c parameter in returned public key\\n\", \"xy\"[idx]);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
