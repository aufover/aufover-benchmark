{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "jansson-2.13.1-3.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/jansson-2.13.1-3.fc35/cbmc/output",
        "time-created": "2023-01-26 09:42:56",
        "time-finished": "2023-01-26 09:54:23",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/jansson-2.13.1-3.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/jansson-2.13.1-3.fc35/jansson-2.13.1-3.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
        "tool-version": "csmock-3.3.5-1.fc36"
    },
    "defects": [
        {
            "checker": "COMPILER_WARNING",
            "language": "c/c++",
            "tool": "gcc",
            "key_event_idx": 1,
            "events": [
                {
                    "file_name": "jansson-2.13.1/src/hashtable_seed.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'json_object_seed'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "jansson-2.13.1/src/hashtable_seed.c",
                    "line": 203,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'volatile char *' to 'void *': disregarding volatile",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  201|   ",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  202|       if (hashtable_seed == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  203|->         if (__atomic_test_and_set(&seed_initialized, __ATOMIC_RELAXED) == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  204|               /* Do the seeding ourselves */",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  205|               if (new_seed == 0)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
