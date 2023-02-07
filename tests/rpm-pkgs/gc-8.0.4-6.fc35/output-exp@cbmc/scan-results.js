{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 1,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "gc-8.0.4-6.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gc-8.0.4-6.fc35/cbmc/output",
        "time-created": "2023-01-26 17:33:07",
        "time-finished": "2023-01-26 17:37:56",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gc-8.0.4-6.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/gc-8.0.4-6.fc35/gc-8.0.4-6.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "gc-8.0.4/os_dep.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'GC_find_limit_with_bound'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "gc-8.0.4/os_dep.c",
                    "line": 982,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'sigjmp_buf' to 'struct __cancel_jmp_buf_tag *': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  980|           GC_ASSERT(I_HOLD_LOCK());",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  981|           GC_setup_temporary_fault_handler();",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  982|->         if (SETJMP(GC_jmp_buf) == 0) {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  983|               result = (ptr_t)(((word)(p))",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  984|                                 & ~(MIN_PAGE_SIZE-1));",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
