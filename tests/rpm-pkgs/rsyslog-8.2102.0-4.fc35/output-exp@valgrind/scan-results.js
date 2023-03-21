{
    "scan": {
        "analyzer-version-gcc": "11.3.1",
        "analyzer-version-valgrind": "3.19.0",
        "enabled-plugins": "valgrind, gcc",
        "exit-code": 0,
        "host": "dell-pe-fm120-1b.dell2.lab.eng.bos.redhat.com",
        "mock-config": "fedora-35-x86_64",
        "project-name": "rsyslog-8.2102.0-4.fc35",
        "store-results-to": "/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsyslog-8.2102.0-4.fc35/valgrind/output",
        "time-created": "2022-11-24 00:53:35",
        "time-finished": "2022-11-24 01:04:07",
        "tool": "csmock",
        "tool-args": "'/usr/bin/csmock' '-o' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsyslog-8.2102.0-4.fc35/valgrind/output' '-f' '/root/aufover-benchmark/workdir-for-sync/rpm-pkgs/rsyslog-8.2102.0-4.fc35/rsyslog-8.2102.0-4.fc35.src.rpm' '-r' 'fedora-35-x86_64' '-t' 'valgrind' '--valgrind-timeout=8' '--keep-going'",
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
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 0,
                    "event": "scope_hint",
                    "message": "In function 'SetTlsVerifyDepth'",
                    "verbosity_level": 1
                },
                {
                    "file_name": "rsyslog-8.2102.0/runtime/nsd_ptcp.c",
                    "line": 191,
                    "column": 21,
                    "event": "warning[-Wunused-variable]",
                    "message": "unused variable 'pThis'",
                    "verbosity_level": 0
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191 |         nsd_ptcp_t *pThis = (nsd_ptcp_t*) pNsd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "      |                     ^~~~~",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  189|   SetTlsVerifyDepth(nsd_t __attribute__((unused)) *pNsd, int verifyDepth)",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  190|   {",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  191|-> \tnsd_ptcp_t *pThis = (nsd_ptcp_t*) pNsd;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  192|   \tDEFiRet;",
                    "verbosity_level": 1
                },
                {
                    "file_name": "",
                    "line": 0,
                    "event": "#",
                    "message": "  193|   \tISOBJ_TYPE_assert((pThis), nsd_ptcp);",
                    "verbosity_level": 1
                }
            ]
        }
    ]
}
