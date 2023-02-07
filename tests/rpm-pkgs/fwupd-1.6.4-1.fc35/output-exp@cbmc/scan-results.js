{
    "scan": {
        "analyzer-version-cbmc": "5.50.0",
        "analyzer-version-gcc": "11.3.1",
        "enabled-plugins": "cbmc, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1c.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "fwupd-1.6.4-1.fc35",
        "store-results-to": "/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/fwupd-1.6.4-1.fc35/cbmc/output",
        "time-created": "2023-01-27 06:30:05",
        "time-finished": "2023-01-27 07:20:26",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/fwupd-1.6.4-1.fc35/cbmc/output' '-f' '/home/mockbuilder/aufover-benchmark/workdir-for-sync/rpm-pkgs/fwupd-1.6.4-1.fc35/fwupd-1.6.4-1.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'cbmc' '--cbmc-timeout=8' '--keep-going'",
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
                    "file_name": "fwupd-1.6.4/plugins/ccgx/fu-ccgx-hpi-device.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'fu_ccgx_hpi_device_setup'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "fwupd-1.6.4/plugins/ccgx/fu-ccgx-hpi-device.c",
                    "line": 1453,
                    "column": 1,
                    "event": "warning",
                    "message": "warning: conversion from 'guint32 *' to 'CyPDResp *': incompatible pointer types",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1451|   \tif (!fu_ccgx_hpi_device_get_event (self,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1452|   \t\t\t\t\t   HPI_REG_SECTION_DEV,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1453|-> \t\t\t\t\t   &hpi_event,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1454|   \t\t\t\t\t   HPI_CMD_SETUP_EVENT_WAIT_TIME_MS,",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": " 1455|   \t\t\t\t\t   &error_local)) {",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
