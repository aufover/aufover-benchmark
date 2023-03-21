{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "libksba-1.6.0-2.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libksba-1.6.0-2.fc35/cbmc/output",
        "time-created": "2023-01-26 07:55:32",
        "time-finished": "2023-01-26 08:01:00",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libksba-1.6.0-2.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/libksba-1.6.0-2.fc35/libksba-1.6.0-2.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "libksba-1.6.0/tests/cert-basic.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'list_extensions'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "libksba-1.6.0/tests/cert-basic.c",
                    "line": 347,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'unsigned int *' to 'ksba_crl_reason_t *': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  345|     for (idx=0; !(err=ksba_cert_get_crl_dist_point (cert, idx,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  346|                                                     &name1, &name2,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  347|->                                                   &reason));idx++)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  348|       {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  349|         if (!quiet)",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
